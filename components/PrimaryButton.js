import React from "react";
import styles from "../styles/components/PrimaryButton.module.scss";

function PrimaryButton({ text, onClick }) {
  return (
    <button className={styles.main} onClick={onClick}>
      {text}
    </button>
  );
}

export default PrimaryButton;
