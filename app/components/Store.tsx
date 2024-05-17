import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { Steps } from "./ActionSelect";
import { useForm } from "react-hook-form";

interface StoreProps {
  setStep: Dispatch<SetStateAction<Steps>>;
  encryptMessage: (address: string, secret: string) => Promise<void>;
}

export default function Store({
  setStep,

  encryptMessage,
}: StoreProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      address: "",
      secret: "",
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

  const watchAddress = watch("address");

  const onSubmit = async (data: { address: string; secret: string }) => {
    await encryptMessage(data.address, data.secret);
    setStep(Steps.SUCCESSFULLY_STORED);
  };

  return (
    <div>
      <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
        <label>$ Type in the address to which you wish to bequeath:</label>
        <br />
        <br />
        <input
          autoFocus
          type="text"
          autoComplete="off"
          className="w-full bg-black border-none appearance-none border-transparent focus:border-transparent focus:ring-0 focus:outline-none"
          {...register("address", {
            required: "Address is required.",
            minLength: { value: 42, message: "Address must be 42 characters." },
            maxLength: { value: 42, message: "Address must be 42 characters." },
          })}
        />
        <br />
        {errors.address && (
          <p className="text-red-700">{errors.address.message}</p>
        )}

        {watchAddress.length === 42 && (
          <>
            <br />
            <br />
            <label>$ Type the seed or secret you wish to bequeath:</label>
            <br />
            <br />
            <textarea
              className="w-full bg-black border-none appearance-none border-transparent focus:border-transparent focus:ring-0 focus:outline-none"
              {...register("secret", {
                required: "Seed or Secret is required.",
                minLength: { value: 1, message: "Message must not be empty." },
              })}
            />
            {errors.secret && (
              <p className="text-red-700">{errors.secret.message}</p>
            )}
          </>
        )}
        <br />
        <br />
        <button type="submit">$ Click here or Press Enter to continue</button>
        <br />
        <button type="button" onClick={() => setStep(Steps.INTRO)}>
          $ Click here or Press Esc to go back
        </button>
      </form>
    </div>
  );
}
