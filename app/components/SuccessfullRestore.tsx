import { Dispatch, SetStateAction, useEffect } from "react";
import { Steps } from "./ActionSelect";
import toast, { Toaster } from "react-hot-toast";

interface SuccessfullRestoreProps {
  setStep: Dispatch<SetStateAction<Steps>>;
  decryptedMessage: string;
}

export default function SuccessfullRestore({
  setStep,
  decryptedMessage,
}: SuccessfullRestoreProps) {
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

  console.log("🚀 ~ decryptedMessage:", decryptedMessage);
  const copyToClipboard = () => {
    navigator.clipboard.writeText(decryptedMessage);
    toast.success("Copied!");
  };

  return (
    <>
      <Toaster />
      <br />
      <br />
      $ The restored secret is:
      <br />
      <br />
      <textarea
        rows={4}
        className="w-full bg-black border-none appearance-none border-transparent focus:border-transparent focus:ring-0 focus:outline-none"
        onFocus={copyToClipboard}
      >
        {decryptedMessage}
      </textarea>
      <br />
      <br />
      <button type="button" onClick={() => setStep(Steps.INTRO)}>
        $ Click here or Press Enter to continue
      </button>
    </>
  );
}
