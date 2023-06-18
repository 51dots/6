import React from "react";
import {
  ThirdwebNftMedia,
  ThirdwebSDKProvider,
  useAddress,
  useBalance,
  useContract,
  Web3Button,
} from "@thirdweb-dev/react";
import { useOwnedNFTs } from "@thirdweb-dev/react";
import { Signer } from "ethers";
import style from "../../styles/Token.module.css";
import { activeChain, berryEdi, drmnToken } from "../../const/constants";
import { toast } from "react-toastify";

const toastStyle = {
  background: "#333",
  color: "#fff",
};

interface ConnectedProps {
  signer: Signer | undefined;
}

const SmartWalletConnected: React.FC<ConnectedProps> = ({ signer }) => {
  return (
    <ThirdwebSDKProvider signer={signer} activeChain={activeChain}>
      <ClaimTokens />
    </ThirdwebSDKProvider>
  );
};

const ClaimTokens = () => {
  const address = useAddress();
  const { data: tokenBalance, isLoading: loadingBalance } =
    useBalance(drmnToken);

  const { contract } = useContract(berryEdi);
  const { data: ownedNFTs, isLoading: ownedNFTsIsLoading } = useOwnedNFTs(
    contract,
    address
  );

  const handleClaimNFT = async (contract: any) => {
    try {
      await contract.erc1155.claim(0, 1);
      toast(`NFT Claimed!`, {
        icon: "✅",
        style: toastStyle,
        position: "bottom-center",
      });
    } catch (e) {
      console.log(e);
      toast(`NFT Claim Failed! Reason: ${(e as any).reason}`, {
        icon: "❌",
        style: toastStyle,
        position: "bottom-center",
      });
    }
  };

  return (
    <div className={style.walletContainer}>
      <h2>For Claim</h2>
      {address && (
        <>
          {loadingBalance ? (
            <h2>Loading Balance...</h2>
          ) : (
            <div className={style.pricingContainer}>
              <Web3Button
                contractAddress={berryEdi}
                action={(contract) => contract.erc1155.claim(0, 1)}
              >
                Accept
              </Web3Button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default SmartWalletConnected;
