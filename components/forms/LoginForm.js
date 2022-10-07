import React, { useState } from "react";
import InputGroup from "../InputGroup";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../redux/currentUserSlice";
import _ from "lodash";
function LoginForm() {
  const [email, setEmail] = useState("");
  const [isEmailError, setIsEmailError] = useState(false);
  const [password, setPassword] = useState("");
  const [isPasswordError, setIsPasswordError] = useState(false);
  const dispatch = useDispatch();
  const auth = getAuth();
  const onSignIn = () => {
    setIsEmailError(false);
    setIsPasswordError(false);
    if (email === "") {
      setIsEmailError(true);
      return;
    }
    if (password === "") {
      setIsPasswordError(true);
      return;
    }
    signInWithEmailAndPassword(auth, _.toLower(email), password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch(setCurrentUser({ uid: user.uid, email: user.email }));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        if (errorCode === "auth/user-not-found") {
          setIsEmailError(true);
          return;
        }
        if (errorCode === "auth/invalid-email") {
          setIsEmailError(true);
          return;
        }
        setIsPasswordError(true);
      });
  };
  return (
    <div>
      <InputGroup
        label={"Login"}
        placeholder="Email"
        value={email}
        onChange={(val) => setEmail(val)}
        type="email"
        isError={isEmailError}
        errorText="Email Inválido"
      />
      <InputGroup
        label={"Senha"}
        placeholder="Senha"
        value={password}
        onChange={(val) => setPassword(val)}
        type="password"
        isError={isPasswordError}
        errorText="Senha Inválido"
      />
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <a onClick={onSignIn}>Esqueci a senha</a>
      </div>
    </div>
  );
}

export default LoginForm;
