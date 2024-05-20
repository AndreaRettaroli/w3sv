"use client";

import { useConnect } from "wagmi";
import { injected } from "wagmi/connectors";

export default function Connect() {
  const { connect } = useConnect();
  return (
    <>
      <br />
      <br />
      $ Connect your wallet
      <br />
      <br />
      <button
        type="button"
        className="text-left"
        onClick={() => connect({ connector: injected() })}
      >
        $ Click here or Press Enter to continue
      </button>
    </>
  );
}
