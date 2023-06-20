import React, { useState } from "react";
import Image from "next/image";
import Squares from "./Squares";
import styles from "./Citizen.module.css";

const Zero: React.FC = () => {
  const [activeTab, setActiveTab] = useState("bonded");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.nameContainer}>
          <h1 className={styles.name}>Alysian Elite #8889</h1>
        </div>
        <div className={styles.imageBox}>
          <Squares src="/citizen/8889.png" />
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.nameContainer}>
          <h1 className={styles.name}>Loadout</h1>
        </div>
        <div className={styles.tabs}>
          {" "}
          <div className={styles.tabButtons}>
            {" "}
            <div
              className={`${styles.tab} ${
                activeTab === "inventory" ? styles.active : ""
              }`}
              onClick={() => handleTabClick("inventory")}
            >
              Inventory
            </div>
            <div
              className={`${styles.tab} ${
                activeTab === "bonded" ? styles.active : ""
              }`}
              onClick={() => handleTabClick("bonded")}
            >
              Bonded
            </div>
            <div
              className={`${styles.tab} ${
                activeTab === "ami" ? styles.active : ""
              }`}
              onClick={() => handleTabClick("ami")}
            >
              Ami
            </div>
            <div
              className={`${styles.tab} ${
                activeTab === "closet" ? styles.active : ""
              }`}
              onClick={() => handleTabClick("closet")}
            >
              Closet
            </div>
          </div>
        </div>{" "}
        <div className={styles.imageBox}>
          <div className={styles.inventoryContainer}>
            <span className={styles.id}>
              0xc6e9bEF4658c6B4318c629B36ac153de3428A3A1
            </span>
            <div className={styles.gridContainer}>
              {/* Render Bonded items */}
              {activeTab === "bonded" && (
                <>
                  {" "}
                  <a href="/citizen/pfp/8889.png">
                    <Image
                      src="/citizen/pfp/8889.png"
                      alt="pfp"
                      width={121}
                      height={121}
                      className={styles.roundedImage}
                    />{" "}
                  </a>
                  <Image
                    src="/collection/area/purplelight.png"
                    alt="purple"
                    width={121}
                    height={121}
                    className={styles.roundedImage}
                  />
                  <Image
                    src="/collection/deed/land0.png"
                    alt="lethe"
                    width={121}
                    height={121}
                    className={styles.roundedImage}
                  />
                  <Image
                    src="/collection/ami/smoot/og.png"
                    alt="smoot"
                    width={121}
                    height={121}
                    className={styles.roundedImage}
                  />
                </>
              )}
              {activeTab === "inventory" && (
                <>
                  <Image
                    src="/main/book.png"
                    alt="book"
                    width={121}
                    height={121}
                  />
                  <Image
                    src="/collection/item/berry.png"
                    alt="clock"
                    width={121}
                    height={121}
                  />
                  <Image
                    src="/collection/item/balletberry.png"
                    alt="clock"
                    width={121}
                    height={121}
                  />
                  <Image
                    src="/main/bottle.png"
                    alt="vixelice"
                    width={121}
                    height={121}
                  />
                  <Image
                    src="/main/charon.png"
                    alt="vixelice"
                    width={121}
                    height={121}
                  />
                  <Image
                    src="/collection/item/lantern.png"
                    alt="clock"
                    width={121}
                    height={121}
                  />
                </>
              )}

              {/* Render Ami items */}
              {activeTab === "ami" && (
                <>
                  {" "}
                  <Image
                    src="/ami/astra.png"
                    alt="artemisf"
                    width={121}
                    height={121}
                  />
                  <Image
                    src="/ami/vixelice.png"
                    alt="vixelice"
                    width={121}
                    height={121}
                  />
                </>
              )}
              {activeTab === "closet" && <>{/* Render closet items */}</>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Zero;
