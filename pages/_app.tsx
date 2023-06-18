import type { AppProps } from "next/app";
import {
  ThirdwebProvider,
  coinbaseWallet,
  metamaskWallet,
  walletConnect,
} from "@thirdweb-dev/react";
import "../styles/globals.css";
import { activeChain } from "../const/constants";
import { Navbar } from "../components/Navbar/Navbar";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      activeChain={activeChain}
      supportedWallets={[metamaskWallet(), coinbaseWallet(), walletConnect()]}
    >
      <Head>
        <title>Andromaverse</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Travel through the alternate universe Andromaverse. A cosmic adventure of mythology, magic, and mystery."
        />
      </Head>

      <Navbar />
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
