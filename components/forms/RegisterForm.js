import React, { useState } from "react";
import InputGroup from "../InputGroup";
import PrimaryButton from "../PrimaryButton";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../redux/currentUserSlice";

function RegisterForm() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [emailErrorText, setEmailErrorText] = useState("Email Inválido");
  const [password, setPassword] = useState("");
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [passwordErrorText, setPasswordErrorText] = useState("Senha Inválido");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isConfirmPasswordError, setIsConfirmPasswordError] = useState(false);
  const [confirmPasswordErrorText, setConfirmPasswordErrorText] = useState(
    "Confirmar Senha Inválido"
  );
  const dispatch = useDispatch();
  const refreshForm = () => {
    setEmailError(false);
    setIsPasswordError(false);
    setIsConfirmPasswordError(false);
    setEmailErrorText("Email Inválido");
    setPasswordErrorText("Senha Inválido");
    setConfirmPasswordErrorText("Confirmar Senha Inválido");
  };

  const onRegister = () => {
    refreshForm();
    if (password === "") {
      setIsPasswordError(true);
      setPasswordErrorText("Senha Inválido");
      return;
    }
    if (confirmPassword === "") {
      setIsConfirmPasswordError(true);
      setConfirmPasswordErrorText("Senha Inválido");

      return;
    }
    if (confirmPassword.length < 6) {
      setIsPasswordError(true);
      setPasswordErrorText("Passwords must have 6 characters or more.");
    }
    if (confirmPassword !== password) {
      setIsConfirmPasswordError(true);
      setConfirmPasswordErrorText("Passwords does not match");
      return;
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(setCurrentUser({ uid: user.uid, email: user.email }));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        if (errorCode === "auth/email-already-in-use") {
          setEmailError(true);
          setEmailErrorText("Email Already Exist");
        }
        console.log(errorMessage);
        dispatch(setCurrentUser(null));
      });
  };
  return (
    <div>
      <InputGroup
        label={"Email"}
        placeholder="usuario@"
        value={email}
        onChange={(val) => setEmail(val)}
        type="email"
        isError={emailError}
        errorText={emailErrorText}
      />
      <InputGroup
        label={"Senha"}
        placeholder="Senha"
        value={password}
        onChange={(val) => setPassword(val)}
        type="password"
        isError={isPasswordError}
        errorText={passwordErrorText}
      />
      <InputGroup
        label={"Confirmar Senha"}
        placeholder="Confirmar Senha"
        value={confirmPassword}
        onChange={(val) => setConfirmPassword(val)}
        type="password"
        isError={isConfirmPasswordError}
        errorText={confirmPasswordErrorText}
      />
      <PrimaryButton text={"Registrar"} onClick={onRegister} />
    </div>
  );
}

export default RegisterForm;
