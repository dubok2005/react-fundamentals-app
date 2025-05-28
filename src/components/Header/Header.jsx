import React from "react";
import styles from "./styles.module.css";
import { Logo } from "./components";
import { Button } from "../../common";

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.leftBlock}>
        <Logo />
      </div>
      <div className={styles.rightBlock}>
        <span className={styles.userName}>Harry Potter</span>
        <Button buttonText="LOGOUT" />
      </div>
    </header>
  );
};
