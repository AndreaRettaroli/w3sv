import { conditions, toHexString } from "@nucypher/taco";
import { ethers } from "ethers";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useEthersSigner } from "../ethersAdapter";

interface useEncryptMessageProps {
  provider: any;
  setErrorMessage: Dispatch<SetStateAction<string>>;
  encryptDataToBytes: (
    message: string,
    condition: conditions.condition.Condition,
    encryptorSigner: ethers.Signer
  ) => Promise<Uint8Array | undefined>;
}

const useEncryptMessage = ({
  provider,
  setErrorMessage,
  encryptDataToBytes,
}: useEncryptMessageProps) => {
  const signer = useEthersSigner()
  const [encrypting, setEncrypting] = useState(false);
  const [encryptedText, setEncryptedText] = useState<string>("");

  const encryptMessage = async (address: string, secret: string) => {
    if (!provider || !signer) {
      return;
    }
    setEncrypting(true);
    try {
      console.log("generating condition...");
      const hasEqualAddress = new conditions.base.contract.ContractCondition({
        method: "areAddressesEqual",
        parameters: [address, ":userAddress"],
        functionAbi: {
          inputs: [
            {
              internalType: "address",
              name: "address1",
              type: "address",
            },
            {
              internalType: "address",
              name: "address2",
              type: "address",
            },
          ],
          name: "areAddressesEqual",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        contractAddress: "0xa4387d7f664B79A60AE38676E636Ed913593cBdF",
        chain: 80002,
        returnValueTest: {
          comparator: "==",
          value: true,
        },
      });

      console.log("Encrypting message...");
      const encryptedBytes = await encryptDataToBytes(
        secret,
        hasEqualAddress,
        signer
      );

      if (encryptedBytes) {
        const encryptedString = toHexString(encryptedBytes);
        setEncryptedText(encryptedString);
      } else {
        setErrorMessage("Failed to encrypt the message");
        console.error("Encryption failed");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Encryption failed with exception:" + error);
    } finally {
      setEncrypting(false);
    }
  };

  return { encrypting, encryptedText, encryptMessage };
};

export default useEncryptMessage;
