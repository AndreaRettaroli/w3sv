import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { Steps } from "./ActionSelect";
import { useForm } from "react-hook-form";

interface RestoreProps {
  setStep: Dispatch<SetStateAction<Steps>>;
  decryptMessage: (encryptedText: string) => Promise<void>;
}

export default function Restore({ setStep, decryptMessage }: RestoreProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      secretKey: "",
    },
  });

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        formRef.current?.dispatchEvent(new Event("submit"));
      } else if (event.key === "Escape") {
        setStep(Steps.INTRO);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = async (data: { secretKey: string }) => {
    await decryptMessage(data.secretKey);
    setStep(Steps.SUCCESSFULLY_RESTORED);
  };

  return (
    <div>
      <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
        <label>$ Type in the secret key you wish to restore:</label>
        <br />
        <br />
        <textarea
          rows={4}
          autoFocus
          autoComplete="off"
          className="w-full bg-black border-none appearance-none border-transparent focus:border-transparent focus:ring-0 focus:outline-none"
          {...register("secretKey", {
            required: "Secret key is required.",
            minLength: { value: 1, message: "Secret key must not be empty." },
          })}
        />
        <br />
        {errors.secretKey && (
          <p className="text-red-700">{errors.secretKey.message}</p>
        )}
        <br />
        <br />
        <button className="text-left" type="submit">
          $ Click here or Press Enter to continue
        </button>
        <br />
        <button
          className="text-left"
          type="button"
          onClick={() => setStep(Steps.INTRO)}
        >
          $ Click here or Press Esc to go back
        </button>
      </form>
    </div>
  );
}
