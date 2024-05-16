import { ethers } from "ethers";
import { hexlify } from "ethers/lib/utils";
import { Dispatch, SetStateAction, useEffect } from "react";
import { Steps } from "./ActionSelect";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const window: any;

interface ConnectProps {
  setProvider: Dispatch<
    SetStateAction<ethers.providers.Web3Provider | undefined>
  >;
  setStep: Dispatch<SetStateAction<Steps>>;
}

export default function Connect({ setProvider, setStep }: ConnectProps) {
  const loadWeb3Provider = async () => {
    if (!window.ethereum) {
      console.error("You need to connect to your wallet first");
    }
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    const { chainId } = await provider.getNetwork();
    const amoyChainId = 80002;
    if (chainId !== amoyChainId) {
      const newChainId = hexlify(amoyChainId).replace("\n", "");
      console.log("🚀 ~ loadWeb3Provider ~ newChainId:", newChainId);
      // Switch to Polygon Amoy testnet
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: hexlify(amoyChainId) }],
      });
    }
    await provider.send("eth_requestAccounts", []);
    setProvider(provider);
    if (provider) setStep(Steps.INTRO);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        loadWeb3Provider();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <br />
      <br />
      $ Connect your wallet
      <br />
      <br />
      <button type="button" onClick={loadWeb3Provider}>
        $ Click here or Press Enter to continue
      </button>
    </>
  );
}
