import React from "react";
import styles from "./styles.module.css";

export const Input = ({
  placeholderText,
  labelText,
  onChange,
  "data-testid": dataTestId,
  id,
}) => (
  <label className={styles.label}>
    {labelText}
    <input
      id={id}
      onChange={onChange}
      data-testid={dataTestId}
      placeholder={placeholderText}
      className={styles.input}
    />
  </label>
);
