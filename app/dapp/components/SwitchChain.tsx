"use client";

import { useSwitchChain, useDisconnect } from "wagmi";

export default function SwitchChain() {
  const { chains, switchChain } = useSwitchChain();
  const { disconnect } = useDisconnect();
  return (
    <>
      <br />
      <br />
      $ Switch chain
      <br />
      <br />
      <button
        type="button"
        className="text-left"
        onClick={() => switchChain({ chainId: chains.at(0)!.id })}
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
