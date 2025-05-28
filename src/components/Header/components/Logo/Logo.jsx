import React from "react";
import styles from "./styles.module.css";
import logo from "../../../../assets/logo.svg";

export const Logo = () => {
  return (
    <div className={styles.logoWrapper}>
      <img src={logo} className={styles.logo} alt="logo" />
    </div>
  );
};
