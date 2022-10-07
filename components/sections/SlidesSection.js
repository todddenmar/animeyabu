import Image from "next/image";
import React, { useState } from "react";
import styles from "../../styles/sections/SlidesSection.module.scss";
import SlideButton from "../SlideButton";

function SlidesSection() {
  const [slideIndex, setSlideIndex] = useState(0);
  return (
    <div className={styles.slidesSection}>
      <div className={styles.imageContainer}>
        <div className={styles.imageCircle} />
        <div className={styles.firstImage}>
          <Image src="/images/tanjiro.png" width={622} height={625} />
        </div>
      </div>
      <div>
        <div className={styles.headerSection}>
          <h1 className={styles.title}>
            anime<span className={styles.highlight}>yabu.</span>
          </h1>
          <p className={styles.description}>
            Assista animes online em HD, legendado ou dublado, no seu celular ou
            computador.
          </p>
          <p className={styles.bold}>
            Animeyabu, o seu portal de animes online!
          </p>
        </div>
        <ul className={styles.slideButtons}>
          <li>
            <SlideButton
              currentIndex={slideIndex}
              index={0}
              onClick={() => setSlideIndex(0)}
            />
          </li>
          <li>
            <SlideButton
              currentIndex={slideIndex}
              index={1}
              onClick={() => setSlideIndex(1)}
            />
          </li>
          <li>
            <SlideButton
              currentIndex={slideIndex}
              index={2}
              onClick={() => setSlideIndex(2)}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SlidesSection;
