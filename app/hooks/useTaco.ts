import {
  conditions,
  decrypt,
  Domain,
  encrypt,
  getPorterUri,
  initialize,
  ThresholdMessageKit,
} from "@nucypher/taco";
import { ethers } from "ethers";
import { useCallback, useEffect, useState } from "react";

export default function useTaco({
  ritualId,
  domain,
  provider,
}: {
  ritualId: number;
  domain: Domain;
  provider: ethers.providers.Provider | undefined;
}) {
  const [isInit, setIsInit] = useState(false);

  useEffect(() => {
    initialize().then(() => setIsInit(true));
  }, []);

  const decryptDataFromBytes = useCallback(
    async (encryptedBytes: Uint8Array, signer?: ethers.Signer) => {
      try {
        if (!isInit || !provider) return;
        const messageKit = ThresholdMessageKit.fromBytes(encryptedBytes);
        return decrypt(
          provider,
          domain,
          messageKit,
          getPorterUri(domain),
          signer
        );
      } catch (error) {
        throw new Error("TACo Failed Decrypt:" + error);
      }
    },
    [isInit, provider, domain]
  );

  const encryptDataToBytes = useCallback(
    async (
      message: string,
      condition: conditions.condition.Condition,
      encryptorSigner: ethers.Signer
    ) => {
      try {
        if (!isInit || !provider) return;
        const messageKit = await encrypt(
          provider,
          domain,
          message,
          condition,
          ritualId,
          encryptorSigner
        );
        return messageKit.toBytes();
      } catch (error) {
        throw new Error("TACo Failed Encrypt:" + error);
      }
    },

    [isInit, provider, domain, ritualId]
  );

  return {
    isInit,
    decryptDataFromBytes,
    encryptDataToBytes,
  };
}
