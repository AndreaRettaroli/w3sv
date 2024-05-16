import { Dispatch, SetStateAction } from "react";
import { Steps } from "./ActionSelect";
import { ethers } from "ethers";

interface RestoreProps {
  setStep: Dispatch<SetStateAction<Steps>>;
  provider: ethers.providers.Web3Provider | undefined;
}

export default function Restore({ setStep, provider }: RestoreProps) {
  return (
    <>
      $ Type in the address to which you wish to bequeath:
      <br />
      {"  "}$ Type the seed or secret you wish to bequeath:
      {"  "}
      <br />
      <br />$ Press Enter to continue
    </>
  );
}
