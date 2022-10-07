import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import PrimaryButton from "../../components/PrimaryButton";
import styles from "../../styles/ProfilePage.module.scss";
import { getAuth, signOut } from "firebase/auth";

export default function ProfilePage() {
  const currentUser = useSelector((state) => state.currentUser.value);
  const router = useRouter();
  useEffect(() => {
    if (currentUser === null) {
      router.push("/");
    }
  }, [currentUser]);

  const onLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log("logged Out");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1>{currentUser?.email}</h1>
        <PrimaryButton text={"Logout"} onClick={onLogout} />
      </div>
    </main>
  );
}
