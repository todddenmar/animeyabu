import React from "react";
import styles from "../../styles/sections/AuthSection.module.scss";
import Image from "next/image";
import BackButton from "../BackButton";
import RegisterForm from "../forms/RegisterForm";

function RegisterSection({ onShowLogin }) {
  return (
    <div className={styles.registerSection}>
      <div className={styles.logo}>
        <Image
          src={"/images/icon.png"}
          width={46}
          height={46}
          alt="anbu-mask"
        />
        <p>
          anime<span className={styles.highlight}>yabu.</span>
        </p>
      </div>
      <div className={styles.container}>
        <BackButton />
        <div className={styles.banner}>
          <Image
            src={"/images/registration-image.png"}
            width={93}
            height={123}
          />
          <h2 className={styles.japText}>ようこそ!</h2>
          <p>Bem-vindo(a)!</p>
        </div>
        <div className={styles.form}>
          <RegisterForm />
        </div>
        <div className={styles.registerFrom}>
          <div className={styles.leftLine} />
          <span className={styles.registerFromText}>Ou se registre com</span>
          <div className={styles.rightLine} />
        </div>
        <ul className={styles.socials}>
          <li>
            <i className={`fa-brands fa-instagram ${styles.socialIcon}`}></i>
          </li>
          <li>
            <i className={`fa-brands fa-twitter ${styles.socialIcon}`}></i>
          </li>
          <li>
            <i className={`fa-brands fa-facebook-f ${styles.socialIcon}`}></i>
          </li>
        </ul>
        <p>
          Já é membro?{" "}
          <a onClick={onShowLogin} className={styles.loginLink}>
            {" "}
            Faça Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default RegisterSection;
