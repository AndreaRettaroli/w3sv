import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import { Providers } from "./components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "W3SV | dApp Web3 Seed Vault",
  description:
    "Encrypt your seed or a secret and share it, or decrypt a secret",
  icons: {
    icon: "/logoverde.png", // /public path
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
