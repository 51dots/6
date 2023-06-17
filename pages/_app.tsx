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

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      activeChain={activeChain}
      supportedWallets={[metamaskWallet(), coinbaseWallet(), walletConnect()]}
    >
      <Navbar />
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
