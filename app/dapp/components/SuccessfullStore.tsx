import { Dispatch, SetStateAction, useEffect } from "react";
import { Steps } from "./ActionSelect";
import toast, { Toaster } from "react-hot-toast";

interface SuccessfullStoreProps {
  setStep: Dispatch<SetStateAction<Steps>>;
  encryptedText: string;
}

export default function SuccessfullStore({
  setStep,
  encryptedText,
}: SuccessfullStoreProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        setStep(Steps.INTRO);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
      <button
        className="text-left"
        type="button"
        onClick={() => setStep(Steps.INTRO)}
      >
        $ Click here or Press Enter to continue
      </button>
    </>
  );
}
