import React from "react";
import styles from "../styles/sections/SlidesSection.module.scss";

function SlideButton({ currentIndex, index, onClick }) {
  return (
    <button
      onClick={onClick}
      className={
        currentIndex === index
          ? styles.slideButtonActive
          : styles.slideButtonInactive
      }
    />
  );
}

export default SlideButton;
