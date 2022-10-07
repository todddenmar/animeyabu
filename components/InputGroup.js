import React from "react";
import styles from "../styles/components/InputGroup.module.scss";

function InputGroup({
  value,
  onChange,
  label,
  placeholder,
  type,
  isError,
  errorText,
}) {
  return (
    <div className={styles.container}>
      {label && <label>{label}</label>}
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type={type || "text"}
        placeholder={placeholder || ""}
        className={isError ? styles.error : undefined}
      />

      <div className={styles.errorText}>
        <p>{isError && errorText}</p>
      </div>
    </div>
  );
}

export default InputGroup;
