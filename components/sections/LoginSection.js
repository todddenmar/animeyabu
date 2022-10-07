import React from "react";
import styles from "../../styles/sections/AuthSection.module.scss";
import Image from "next/image";
import BackButton from "../BackButton";
import RegisterForm from "../forms/RegisterForm";
import LoginForm from "../forms/LoginForm";

function LoginSection({ onShowRegister }) {
  return (
    <div className={styles.loginSection}>
      <div className={styles.container}>
        <BackButton />
        <div className={styles.banner}>
          <Image
            src={"/images/login-image.png"}
            width={306}
            height={153}
            alt="mask-tanjiro"
          />
          <h2 className={styles.japText}>ひさしぶり!</h2>
          <p>Olá, sentimos sua falta!</p>
        </div>
        <div className={styles.form}>
          <LoginForm />
        </div>
        <div className={styles.registerFrom}>
          <div className={styles.leftLine} />
          <span className={styles.registerFromText}>Usar Login Social</span>
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
          Não tem conta?{" "}
          <a onClick={onShowRegister} className={styles.loginLink}>
            {" "}
            Registre-se
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginSection;
