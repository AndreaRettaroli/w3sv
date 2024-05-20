export default function ServiceDescription() {
  return (
    <section
      id="services"
      className="p-8 md:p-24 bg-black text-green-500 font-mono"
    >
      <h2 className="text-3xl md:text-5xl mb-8">Service Description</h2>
      <p className="text-lg md:text-2xl">
        Our Web3 Seed Vault provides a secure and private way to manage your
        wallets seed. Utilizing decentralized technology, we ensure that your
        data is safe from centralized points of failure.
      </p>
      <br />
      <br />
      <p className="text-lg md:text-2xl">
        Our Web3 Seed Vault allows you to designate a successor by specifying a
        unique address authorized to unlock your encrypted content. Share the
        ciphertext and the key, which can only be decrypted by the authorized
        address, with anyone. Save it in the cloud or share it via chat without
        worrying about the security of the channel.
      </p>
    </section>
  );
}
