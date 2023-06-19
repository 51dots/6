import React, { useState } from "react";
import Image from "next/image";
import Squares from "./Squares";
import styles from "./Citizen.module.css";

const Zero: React.FC = () => {
  const [activeTab, setActiveTab] = useState("inventory");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.nameContainer}>
          <h1 className={styles.name}>Alysian Elite #0</h1>
        </div>
        <div className={styles.imageBox}>
          <Squares src="/citizen/0.gif" />
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.nameContainer}>
          <h1 className={styles.name}>Inventory</h1>
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
                activeTab === "deed" ? styles.active : ""
              }`}
              onClick={() => handleTabClick("deed")}
            >
              Deed
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
              {activeTab === "inventory" && (
                <>
                  <Image
                    src="/main/book.png"
                    alt="book"
                    width={121}
                    height={121}
                  />
                  <Image
                    src="/main/clock.png"
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
                </>
              )}
              {/* Render Deed items */}
              {activeTab === "deed" && (
                <>
                  {" "}
                  <Image
                    src="/islands/basecamp/base.png"
                    alt="vixelice"
                    width={121}
                    height={121}
                  />
                  <Image
                    src="/islands/basecamp/ship.png"
                    alt="vixelice"
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
