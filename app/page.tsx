import Link from "next/link";
import Characteristics from "./components/Characteristics";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import SplineBackground from "./components/SlineBackground";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 md:p-24 mcursor-none">
      <div className="bg-black text-green-500 font-mono flex flex-col justify-end p-4 text-lg md:text-2xl break-normal ">
        <code>
          <p className="text-4xl">
            $ Welcome Web3 Seed Vault
            <br />
          </p>
        </code>
        <SplineBackground />
        <Link
          href={"/dapp"}
          className="text-end relative md:right-32 md:bottom-16 hover:underline"
        >
          # Go to dApp -&gt;
        </Link>
      </div>
      <Services />
      <Characteristics />
      <Roadmap />
    </main>
  );
}
