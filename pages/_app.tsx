import type { AppProps } from "next/app";
import {
  ThirdwebProvider,
  paperWallet,
  smartWallet,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
} from "@thirdweb-dev/react";
import "../styles/globals.css";
import Navbar from "../components/navbar";
import Header from "../components/header";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "mumbai";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
      activeChain={activeChain}
      supportedWallets={[
        smartWallet({
          factoryAddress: "0x9527cB0Dd344692454F546F14c3A9bA5CB4b185f",
          gasless: true,
          personalWallets: [
            paperWallet({
              paperClientId: process.env.NEXT_PUBLIC_PAPER_CLIENT_ID || "", // Get your paper client id from https://withpaper.com/sign-in
            }),
            metamaskWallet(),
            coinbaseWallet(),
            walletConnect(),
          ],
        }),
      ]}
    >
      <Header />
      <Component {...pageProps} />
      <Navbar />
    </ThirdwebProvider>
  );
}

export default MyApp;
