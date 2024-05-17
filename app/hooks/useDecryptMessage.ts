import { fromBytes } from "@nucypher/taco";
import { fromHexString } from "@nucypher/shared";
import { ethers } from "ethers";
import { useEffect, useState } from "react";

interface useEncryptMessageProps {
  provider: any;
  decryptDataFromBytes: (
    encryptedBytes: Uint8Array,
    signer?: ethers.Signer
  ) => Promise<Uint8Array | undefined>;
}

const useDecryptMessage = ({
  provider,
  decryptDataFromBytes,
}: useEncryptMessageProps) => {
  const [decrypting, setDecrypting] = useState(false);
  const [decryptedMessage, setDecryptedMessage] = useState("");

  const decryptMessage = async (encryptedText: string) => {
    if (!encryptedText || !provider) return;

    setDecrypting(true);
    try {
      const signer = provider.getSigner();
      console.log("Decrypting message...");

      const decryptedMessage = await decryptDataFromBytes(
        fromHexString(encryptedText),
        signer
      );

      if (decryptedMessage) {
        setDecryptedMessage(fromBytes(decryptedMessage));
      }
    } catch (error) {
      console.error(error);
    } finally {
      setDecrypting(false);
    }
  };

  return { decrypting, decryptedMessage, decryptMessage };
};

export default useDecryptMessage;
