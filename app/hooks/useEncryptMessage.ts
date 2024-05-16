import { conditions, toHexString } from "@nucypher/taco";
import { ethers } from "ethers";
import { useEffect, useState } from "react";

interface useEncryptMessageProps {
  provider: any;
  encryptDataToBytes: (
    message: string,
    condition: conditions.condition.Condition,
    encryptorSigner: ethers.Signer
  ) => Promise<Uint8Array | undefined>;
}

const useEncryptMessage = ({
  provider,
  encryptDataToBytes,
}: useEncryptMessageProps) => {
  const [encrypting, setEncrypting] = useState(false);
  const [encryptedText, setEncryptedText] = useState<string>("");

  const encryptMessage = async (address: string, secret: string) => {
    if (!provider) {
      return;
    }
    setEncrypting(true);
    try {
      const signer = provider.getSigner();

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
      console.log("result:", encryptedBytes && toHexString(encryptedBytes));
      if (encryptedBytes) {
        const encryptedString = toHexString(encryptedBytes);
        console.log("🚀 ~ encryptMessage ~ encryptedString:", encryptedString);
        setEncryptedText(encryptedString);
      } else {
        console.error("Encryption failed");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setEncrypting(false);
    }
  };

  useEffect(() => {
    console.log("Encrypted text updated:", encryptedText, encrypting);
  }, [encrypting, encryptedText]);

  return { encrypting, encryptedText, encryptMessage };
};

export default useEncryptMessage;
