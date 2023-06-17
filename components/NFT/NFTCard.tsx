import {
  ThirdwebNftMedia,
  useContract,
  useNFT,
  Web3Button,
} from "@thirdweb-dev/react";
import type { FC } from "react";
import { alysianContract, alysianStaking } from "../constant";
import styles from "./NFT.module.css";

interface NFTCardProps {
  tokenId: number;
}

const NFTCard: FC<NFTCardProps> = ({ tokenId }) => {
  const { contract } = useContract(alysianContract, "nft-drop");
  const { data: nft } = useNFT(contract, tokenId);

  return (
    <>
      {nft && (
        <div className={styles.nftBox}>
          {nft.metadata && (
            <ThirdwebNftMedia
              metadata={nft.metadata}
              className={styles.nftMedia}
            />
          )}
          <h3>{nft.metadata.name}</h3>
          <Web3Button
            action={(contract) =>
              contract?.call("withdraw", [[nft.metadata.id]])
            }
            contractAddress={alysianStaking}
          >
            Withdraw
          </Web3Button>
        </div>
      )}
    </>
  );
};
export default NFTCard;
