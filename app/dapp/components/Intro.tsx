import { Dispatch, SetStateAction, useEffect } from "react";
import { Actions, Steps } from "./ActionSelect";
import { useDisconnect } from 'wagmi';

interface IntroProps {
  action: Actions;
  setAction: Dispatch<SetStateAction<Actions>>;
  setStep: Dispatch<SetStateAction<Steps>>;
}

export default function Intro({ action, setAction, setStep }: IntroProps) {
  const { disconnect } = useDisconnect()
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        setAction((prevAction) =>
          prevAction === Actions.ENCRYPT ? Actions.DECRYPT : Actions.ENCRYPT
        );
      } else if (event.key === "ArrowRight") {
        setAction((prevAction) =>
          prevAction === Actions.DECRYPT ? Actions.ENCRYPT : Actions.DECRYPT
        );
      } else if (event.key === "Enter") {
        setStep(action === Actions.ENCRYPT ? Steps.STORE : Steps.RESTORE);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [action]);

  return (
    <>
      <br />
      <br />
      $ Select one option:
      <br />
      <br />
      <button className="text-left" onClick={() => setAction(Actions.ENCRYPT)}>
        <span className={action === Actions.ENCRYPT ? "underline" : ""}>
          {action === Actions.ENCRYPT && ">"}Store
        </span>
      </button>
      {"  "}
      <button className="text-left" onClick={() => setAction(Actions.DECRYPT)}>
        <span className={action === Actions.DECRYPT ? "underline" : ""}>
          {action === Actions.DECRYPT && ">"}Restore
        </span>
      </button>
      <br />
      <br />
      <button
        className="text-left"
        type="button"
        onClick={() =>
          setStep(action === Actions.ENCRYPT ? Steps.STORE : Steps.RESTORE)
        }
      >
        $ Click here or Press Enter to continue
      </button>
      <br />
      <button
        className="text-left"
        type="button"
        onClick={() => disconnect()}
      >
        $ Click here or Press Esc to go back
      </button>
    </>
  );
}
