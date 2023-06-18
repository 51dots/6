import type { NextPage } from "next";
import styles from "../components/Index.module.css";
import NFTGrid from "../components/NFT/NFTGrid";
import {
  ConnectWallet,
  Web3Button,
  useAddress,
  useContract,
  useOwnedNFTs,
} from "@thirdweb-dev/react";
import { kaiDrop } from "../const/constants";
import Container from "../components/Container/Container";

/**
 * The home page of the application.
 */
const Home: NextPage = () => {
  const address = useAddress();
  const { contract: nftDropContract } = useContract(kaiDrop, "nft-drop");
  const { data: nfts, isLoading } = useOwnedNFTs(nftDropContract, address);

  return (
    <Container maxWidth="xl">
      {address ? (
        <div className={styles.container}>
          <h1>Ready Player</h1>
          <p>Alysian Elite Citizen Upgrade</p>
          <NFTGrid
            nfts={nfts}
            isLoading={isLoading}
            emptyText={
              "Looks like you don't own any NFTs. Did you import your contract on the thirdweb dashboard? https://thirdweb.com/dashboard"
            }
          />
          <div className={styles.btnContainer}>
            <Web3Button
              contractAddress={kaiDrop}
              action={async (contract) => await contract?.erc721.claim(1)}
            >
              Buy Elite Citizen Pack
            </Web3Button>
          </div>
        </div>
      ) : (
        <div className={styles.container}>
          <h2>Connect a personal wallet to view your owned NFTs</h2>
          <ConnectWallet />
        </div>
      )}
    </Container>
  );
};

export default Home;
