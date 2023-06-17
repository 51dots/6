import React from "react";
import {
  NATIVE_TOKENS,
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
import {
  activeChain,
  berryEdi,
  kaiDrop,
  drmnToken,
} from "../../const/constants";

interface ConnectedProps {
  signer: Signer | undefined;
}

// ThirdwebSDKProvider is a wrapper component that provides the smart wallet signer and active chain to the Thirdweb SDK.
const SmartWalletConnected: React.FC<ConnectedProps> = ({ signer }) => {
  return (
    <ThirdwebSDKProvider signer={signer} activeChain={activeChain}>
      <ClaimTokens />
    </ThirdwebSDKProvider>
  );
};

// This is the main component that shows the user's token bound smart wallet.
const ClaimTokens = () => {
  const address = useAddress();
  const { data: tokenBalance, isLoading: loadingBalance } = useBalance(kaiDrop);

  const { contract } = useContract(kaiDrop);
  const { data: ownedNFTs, isLoading: ownedNFTsIsLoading } = useOwnedNFTs(
    contract,
    address
  );

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
                Claim a Berry
              </Web3Button>
              {ownedNFTsIsLoading ? (
                <h2>Loading NFTs...</h2>
              ) : (
                <div>
                  {ownedNFTs && ownedNFTs.length > 0 ? (
                    ownedNFTs.map((nft) => (
                      <div key={nft.metadata.id}>
                        <ThirdwebNftMedia metadata={nft.metadata} />
                        <p>QTY: {nft.quantityOwned}</p>
                      </div>
                    ))
                  ) : (
                    <p>Maybe Later</p>
                  )}
                </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default SmartWalletConnected;
