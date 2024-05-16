import ActionSelect from "./components/ActionSelect";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-black text-green-500 font-mono flex flex-col justify-end p-4">
        <code className="animate-typing overflow-hidden whitespace-nowrap">
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
