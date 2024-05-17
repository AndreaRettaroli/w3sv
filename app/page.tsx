"use client";
import { useEffect } from "react";
import ActionSelect from "./components/ActionSelect";
import { CursorEffectResult, trailingCursor } from "cursor-effects";

export default function Home() {
  useEffect(() => {
    const effect: CursorEffectResult = trailingCursor();
    return () => {
      effect.destroy();
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 md:p-24 mcursor-none">
      <div className="bg-black text-green-500 font-mono flex flex-col justify-end p-4 text-lg md:text-2xl break-normal ">
        <code>
          <p>
            $ Welcome Web3 Seed Vault
            <br />
          </p>
          <ActionSelect />
        </code>
      </div>
    </main>
  );
}
