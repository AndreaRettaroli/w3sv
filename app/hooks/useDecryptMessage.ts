import { fromBytes } from "@nucypher/taco";
import { fromHexString } from "@nucypher/shared";
import { ethers } from "ethers";
import { Dispatch, SetStateAction, useState } from "react";
import { useEthersSigner } from "../ethersAdapter";

interface useEncryptMessageProps {
  provider: any;
  setErrorMessage: Dispatch<SetStateAction<string>>;
  decryptDataFromBytes: (
    encryptedBytes: Uint8Array,
    signer?: ethers.Signer
  ) => Promise<Uint8Array | undefined>;
}

const useDecryptMessage = ({
  provider,
  setErrorMessage,
  decryptDataFromBytes,
}: useEncryptMessageProps) => {
  const signer = useEthersSigner()
  const [decrypting, setDecrypting] = useState(false);
  const [decryptedMessage, setDecryptedMessage] = useState("");
  const decryptMessage = async (encryptedText: string) => {
    if (!encryptedText || !provider) return;

    setDecrypting(true);
    try {
      if(!signer) {
        return;
      }
      console.log("Decrypting message...");

      const decryptedMessage = await decryptDataFromBytes(
        fromHexString(encryptedText),
        signer
      );

      if (decryptedMessage) {
        setDecryptedMessage(fromBytes(decryptedMessage));
      } else {
        setErrorMessage("Failed to decrypt the message");
        console.error("Decryption failed");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Decryption failed with exception:" + error);
    } finally {
      setDecrypting(false);
    }
  };

  return { decrypting, decryptedMessage, decryptMessage };
};

export default useDecryptMessage;
