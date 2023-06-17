import { MediaRenderer, useAddress, useWallet } from "@thirdweb-dev/react";
import React, { useEffect, useState } from "react";
import Container from "../../../components/Container/Container";
import { GetStaticProps, GetStaticPaths } from "next";
import { NFT, ThirdwebSDK } from "@thirdweb-dev/sdk";
import { activeChain, kaiDrop } from "../../../const/constants";
import styles from "../../../styles/Token.module.css";
import { Signer } from "ethers";
import newSmartWallet from "../../../components/SmartWallet/SmartWallet";
import SmartWalletConnected from "../../../components/SmartWallet/smartConnected";

type Props = {
  nft: NFT;
  contractMetadata: any;
};

export default function TokenPage({ nft, contractMetadata }: Props) {
  const [smartWalletAddress, setSmartWalletAddress] = useState<string | null>(
    null
  );
  const [signer, setSigner] = useState<Signer>();

  // get the currently connected wallet
  const address = useAddress();
  const wallet = useWallet();

  // create a smart wallet for the NFT
  useEffect(() => {
    const createSmartWallet = async (nft: NFT) => {
      if (nft && smartWalletAddress == null && address && wallet) {
        const smartWallet = newSmartWallet(nft);
        console.log("personal wallet", address);
        await smartWallet.connect({
          personalWallet: wallet,
        });
        setSigner(await smartWallet.getSigner());
        console.log("signer", signer);
        setSmartWalletAddress(await smartWallet.getAddress());
        console.log("smart wallet address", await smartWallet.getAddress());
        return smartWallet;
      } else {
        console.log("smart wallet not created");
      }
    };
    createSmartWallet(nft);
  }, [nft, smartWalletAddress, address, wallet]);

  return (
    <>
      <Container maxWidth="lg">
        <div className={styles.container}>
          <div className={styles.metadataContainer}>
            <MediaRenderer
              src={`https://andromaverse.io/collection/ami/img/${nft.metadata.id}.gif`}
              className={styles.image}
            />
          </div>

          <div className={styles.listingContainer}>
            {contractMetadata && (
              <div className={styles.contractMetadataContainer}>
                <div></div>
              </div>
            )}
            <h1>Player Profile</h1>
            <p className={styles.contractAddress}>{smartWalletAddress}</p>

            {smartWalletAddress ? (
              <SmartWalletConnected signer={signer} />
            ) : (
              <div className={styles.btnContainer}>
                <p>Coming Soon...</p>
              </div>
            )}
          </div>
        </div>
      </Container>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const tokenId = context.params?.tokenId as string;

  const sdk = new ThirdwebSDK(activeChain);

  const contract = await sdk.getContract(kaiDrop);

  const nft = await contract.erc721.get(tokenId);

  let contractMetadata;

  try {
    contractMetadata = await contract.metadata.get();
  } catch (e) {}

  return {
    props: {
      nft,
      contractMetadata: contractMetadata || null,
    },
    revalidate: 1, // https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const sdk = new ThirdwebSDK(activeChain);

  const contract = await sdk.getContract(kaiDrop);

  const nfts = await contract.erc721.getAll();

  const paths = nfts.map((nft) => {
    return {
      params: {
        contractAddress: kaiDrop,
        tokenId: nft.metadata.id,
      },
    };
  });

  return {
    paths,
    fallback: "blocking", // can also be true or 'blocking'
  };
};
