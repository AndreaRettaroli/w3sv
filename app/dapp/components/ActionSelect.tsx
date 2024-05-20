"use client";
import { useEthersProvider } from "@/app/ethersAdapter";
import { useEffect, useState } from "react";
import { domain, ritualId } from "../../constants/constants";
import useDecryptMessage from "../../hooks/useDecryptMessage";
import useEncryptMessage from "../../hooks/useEncryptMessage";
import useTaco from "../../hooks/useTaco";
import ErrorMessage from "./ErrorMessage";
import Intro from "./Intro";
import Restore from "./Restore";
import Store from "./Store";
import SuccessfullRestore from "./SuccessfullRestore";
import SuccessfullStore from "./SuccessfullStore";
import { useAccount, useChains } from "wagmi";
import Connect from "./Connect";
import SwitchChain from "./SwitchChain";

export enum Actions {
  ENCRYPT,
  DECRYPT,
}

export enum Steps {
  INTRO,
  STORE,
  RESTORE,
  SUCCESSFULLY_STORED,
  SUCCESSFULLY_RESTORED,
  ERROR,
}
export default function ActionSelect() {
  const [action, setAction] = useState<Actions>(Actions.ENCRYPT);
  const [step, setStep] = useState<Steps>(Steps.INTRO);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const provider = useEthersProvider();
  const account = useAccount();
  const chains = useChains();

  useEffect(() => {
    if (errorMessage !== "") {
      setStep(Steps.ERROR);
    }
  }, [errorMessage, step]);

  const { isInit, encryptDataToBytes, decryptDataFromBytes } = useTaco({
    domain,
    provider,
    ritualId,
  });

  const { encrypting, encryptedText, encryptMessage } = useEncryptMessage({
    provider,
    setErrorMessage,
    encryptDataToBytes,
  });

  const { decrypting, decryptedMessage, decryptMessage } = useDecryptMessage({
    provider,
    setErrorMessage,
    decryptDataFromBytes,
  });

  return !isInit || decrypting || encrypting ? (
    <p>Loading...</p>
  ) : (
    <>
      {!account.isConnected ? (
        <Connect />
      ) : (
        <>
          <p>$ {account.address?.slice(0, 4)}...{account.address?.slice(-4)}</p>
          {account.chainId !== chains.at(0)?.id ? (
            <SwitchChain />
          ) : (
            <>
              {step === Steps.INTRO && provider && (
                <Intro
                  action={action}
                  setAction={setAction}
                  setStep={setStep}
                />
              )}
              {step === Steps.STORE && provider && (
                <Store setStep={setStep} encryptMessage={encryptMessage} />
              )}
              {step === Steps.RESTORE && provider && (
                <Restore setStep={setStep} decryptMessage={decryptMessage} />
              )}
              {step === Steps.SUCCESSFULLY_STORED && provider && (
                <SuccessfullStore
                  setStep={setStep}
                  encryptedText={encryptedText}
                />
              )}
              {step === Steps.SUCCESSFULLY_RESTORED && provider && (
                <SuccessfullRestore
                  setStep={setStep}
                  decryptedMessage={decryptedMessage}
                />
              )}
              {step === Steps.ERROR && errorMessage && (
                <ErrorMessage
                  setStep={setStep}
                  errorMessage={errorMessage}
                  setErrorMessage={setErrorMessage}
                />
              )}
            </>
          )}
        </>
      )}
    </>
  );
}
