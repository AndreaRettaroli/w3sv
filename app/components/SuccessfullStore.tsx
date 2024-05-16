import { Dispatch, SetStateAction } from "react";
import { Steps } from "./ActionSelect";
import { ethers } from "ethers";
import useTaco from "../hooks/useTaco";
import { domain, ritualId } from "../constants";
import useEncryptMessage from "../hooks/useEncryptMessage";
import toast, { Toaster } from "react-hot-toast";

interface SuccessfullStoreProps {
  setStep: Dispatch<SetStateAction<Steps>>;
  provider: ethers.providers.Web3Provider | undefined;
  encryptedText: string;
}

export default function SuccessfullStore({
  setStep,
  provider,
  encryptedText,
}: SuccessfullStoreProps) {
  console.log("🚀 ~ encryptedText:", encryptedText);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(encryptedText);
    toast.success("Copied!");
  };

  return (
    <>
      <Toaster />
      <br />
      <br />
      $ Your secret key is:
      <br />
      <br />
      <textarea
        rows={4}
        className="w-full bg-black border-none appearance-none border-transparent focus:border-transparent focus:ring-0 focus:outline-none"
        onFocus={copyToClipboard}
      >
        {encryptedText}
      </textarea>
      <br />
      <br />
      <button type="button" onClick={() => setStep(Steps.INTRO)}>
        $ Click here or Press Enter to continue
      </button>
    </>
  );
}
