import { useEffect, useState } from "react";
import Header from "../components/Header";
import RegisterSection from "../components/sections/RegisterSection";
import LoginSection from "../components/sections/LoginSection";
import SlidesSection from "../components/sections/SlidesSection";
import styles from "../styles/LoginPage.module.scss";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../redux/currentUserSlice";
import PrimaryButton from "../components/PrimaryButton";
import { useRouter } from "next/router";
export default function LoginPage() {
  const auth = getAuth();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser.value);
  const router = useRouter();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        dispatch(setCurrentUser({ uid: uid, email: user.email }));
        console.log("logged in");
        // ...
      } else {
        // User is signed out
        dispatch(setCurrentUser(null));
        console.log("logged out");
        // ...
      }
    });
  }, []);

  useEffect(() => {
    if (currentUser) {
      router.push("/profile");
    }
  }, [currentUser]);

  const [isRegistering, setIsRegistering] = useState(false);
  return (
    <div className={styles.container}>
      <Header
        title={"animeyabu"}
        desc="Assista animes online em HD, legendado ou dublado,
 no seu celular ou computador. 
Animeyabu, o seu portal de animes online!"
      />

      <main className={styles.main}>
        {isRegistering ? (
          <RegisterSection onShowLogin={() => setIsRegistering(false)} />
        ) : (
          <LoginSection onShowRegister={() => setIsRegistering(true)} />
        )}

        <SlidesSection />
      </main>
    </div>
  );
}
