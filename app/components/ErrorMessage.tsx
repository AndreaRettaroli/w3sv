import { Dispatch, SetStateAction, useEffect } from "react";
import { Steps } from "./ActionSelect";

interface ErrorMessageProps {
  setStep: Dispatch<SetStateAction<Steps>>;
  errorMessage: string;
  setErrorMessage: Dispatch<SetStateAction<string>>;
}

export default function ErrorMessage({
  setStep,
  errorMessage,
  setErrorMessage,
}: ErrorMessageProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        setStep(Steps.INTRO);
        setErrorMessage("");
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <br />
      <br />
      $ Oops, something went wrong:
      <br />
      <br />
      <textarea
        rows={4}
        className="text-red-700 w-full bg-black border-none appearance-none border-transparent focus:border-transparent focus:ring-0 focus:outline-none"
      >
        {errorMessage}
      </textarea>
      <br />
      <br />
      <button
        type="button"
        onClick={() => {
          setStep(Steps.INTRO), setErrorMessage("");
        }}
      >
        $ Click here or Press Enter to retry
      </button>
    </>
  );
}
