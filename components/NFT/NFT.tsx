import { ThirdwebNftMedia, MediaRenderer } from "@thirdweb-dev/react";
import { NFT } from "@thirdweb-dev/sdk";
import React from "react";
import styles from "./NFT.module.css";

type Props = {
  nft: NFT;
};

// Each NFT component shows the NFT image, name, and token ID.
export default function NFTComponent({ nft }: Props) {
  return (
    <>
      <MediaRenderer
        src={`https://andromaverse.io/collection/ami/img/${nft.metadata.id}.gif`}
        className={styles.nftImage}
      />
      <p>{nft.metadata.name}</p>
    </>
  );
}
