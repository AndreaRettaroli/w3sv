import Link from "next/link";
import Characteristics from "./components/Characteristics";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import SplineRender from "./components/SplineRender";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 md:p-16 mcursor-none">
      <div className="relative w-full h-screen bg-black text-green-500 font-mono flex flex-col justify-end p-4 text-lg md:text-2xl break-normal">
        <code>
          <p className="mt-8 max-sm:w-full md:absolute md:top-1/5 md:left-1/5 md:transform md:-translate-x-1/5 md:-translate-y-1/5 z-10 text-start p-4 text-4xl">
            {" "}
            <span className="inline-block">
              <Image
                width={50}
                height={100}
                src={"/logoverde.png"}
                alt="Logo"
              />
            </span>{" "}
            Welcome Web3 Seed Vault
          </p>
        </code>
        <div className="w-full h-screen animate-fade z-0">
          <SplineRender scene="https://prod.spline.design/fSBGTYyUE31mhh83/scene.splinecode" />
        </div>
        <Link
          href="/dapp"
          className="absolute max-md:bottom-1/3 bottom-1/4 right-0 md:right-1/5 z-10 text-end p-4 text-lg md:text-4xl hover:underline"
        >
          $ Go to dApp -&gt;
        </Link>
      </div>
      <Services />
      <Characteristics />
      <Roadmap />
    </main>
  );
}
