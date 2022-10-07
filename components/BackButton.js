import React from "react";
import Image from "next/image";
import styles from "../styles/components/BackButton.module.scss";

function BackButton() {
  return (
    <button className={styles.main}>
      <Image src={"/images/line.png"} width="4" height="29" />
      <Image src={"/images/arrow-left.png"} width="22" height="18" />
    </button>
  );
}

export default BackButton;
