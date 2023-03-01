import React, { FC } from "react";
import styles from "./PrimaryButton.module.scss";

interface PrimaryButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  handleButton: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const PrimaryButton: FC<PrimaryButtonProps> = ({ children, disabled, handleButton }) => {
  return (
    <button disabled={disabled} onClick={handleButton} className={styles["primary-button"]}>
      {children}
    </button>
  );
};

export default PrimaryButton;
