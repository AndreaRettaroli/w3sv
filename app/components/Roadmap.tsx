// • June 2024: dapp and metamask snap available in beta version on TACo testnet with the seed storage feature. The snap will be available for Flask.

// • July 2024: dapp mainnet release with the subscription mechanism active.

// • Aug 2024: metamask snap mainnet release.

// • Sep 2024: dapp new feature investigation and use cases exploration.

export default function Roadmap() {
  return (
    <section id="roadmap" className="p-8 md:p-16">
      <code className="text-lg sm:text-2xl text-green-500 font-mono">
        {"Roadmap/"}
        <br />
        {"│"}
        <br />
        {"├── Q2-2024/"}
        <br />
        <p>
          {"│"}
          <span className="ml-8 sm:ml-20">{"├── Initial-Launch"}</span>
        </p>
        <p>
          {"│"}
          <span className="ml-8 sm:ml-20">{"├── dApp-beta testnet"}</span>
        </p>
        <p>
          {"│"}
          <span className="ml-8 sm:ml-20">{"└── snap-beta testnet"}</span>
        </p>
        {"├── Q3-2024/"}
        <br />
        <p>
          {"│"}
          <span className="ml-4 sm:ml-20">{"├── Community-Building"}</span>
        </p>
        <p>
          {"│"}
          <span className="ml-4 sm:ml-20">{"├── Founding"}</span>
        </p>
        <p>
          {"│"}
          <span className="ml-4 sm:ml-20">{"└── dApp mainnet release"}</span>
        </p>
        {"├── Q4-2024/"}
        <br />
        <p>
          {"│"}
          <span className="ml-4 sm:ml-20">{"├── Activate payment plans"}</span>
        </p>
        <p>
          {"│"}
          <span className="ml-4 sm:ml-20">{"└── Snap mainnet release"}</span>
        </p>
        {"└── Q1-2025/"}
        <br />
        <p>
          <span className="ml-8 sm:ml-24">
            {"├── new feature investigation"}
          </span>
        </p>
        <p>
          <span className="ml-8 sm:ml-24">
            {"└── new use cases exploration"}
          </span>
        </p>
        <br />
      </code>
    </section>
  );
}
