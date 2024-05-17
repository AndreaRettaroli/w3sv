"use client";
import { useState } from "react";
import Store from "./Store";
import Restore from "./Restore";
import { ethers } from "ethers";
import Connect from "./Connect";
import Intro from "./Intro";
import SuccessfullStore from "./SuccessfullStore";
import { domain, ritualId } from "../constants/constants";
import useTaco from "../hooks/useTaco";
import useEncryptMessage from "../hooks/useEncryptMessage";
import useDecryptMessage from "../hooks/useDecryptMessage";
import SuccessfullRestore from "./SuccessfullRestore";

export enum Actions {
  ENCRYPT,
  DECRYPT,
}

export enum Steps {
  CONNECT,
  INTRO,
  STORE,
  RESTORE,
  SUCCESSFULLY_STORED,
  SUCCESSFULLY_RESTORED,
}
export default function ActionSelect() {
  const [action, setAction] = useState<Actions>(Actions.ENCRYPT);
  const [step, setStep] = useState<Steps>(Steps.CONNECT);
  const [provider, setProvider] = useState<
    ethers.providers.Web3Provider | undefined
  >();

  const { isInit, encryptDataToBytes, decryptDataFromBytes } = useTaco({
    domain,
    provider,
    ritualId,
  });

  const { encrypting, encryptedText, encryptMessage } = useEncryptMessage({
    provider,
    encryptDataToBytes,
  });

  const { decrypting, decryptedMessage, decryptMessage } = useDecryptMessage({
    provider,
    decryptDataFromBytes,
  });

  return !isInit ? (
    <p>Loading...</p>
  ) : (
    <>
      {step === Steps.CONNECT && (
        <Connect setProvider={setProvider} setStep={setStep} />
      )}
      {step === Steps.INTRO && provider && (
        <Intro action={action} setAction={setAction} setStep={setStep} />
      )}
      {step === Steps.STORE && provider && (
        <Store setStep={setStep} encryptMessage={encryptMessage} />
      )}
      {step === Steps.RESTORE && provider && (
        <Restore setStep={setStep} decryptMessage={decryptMessage} />
      )}
      {step === Steps.SUCCESSFULLY_STORED && provider && (
        <SuccessfullStore setStep={setStep} encryptedText={encryptedText} />
      )}
      {step === Steps.SUCCESSFULLY_RESTORED && provider && (
        <SuccessfullRestore
          setStep={setStep}
          decryptedMessage={decryptedMessage}
        />
      )}
    </>
  );
}
