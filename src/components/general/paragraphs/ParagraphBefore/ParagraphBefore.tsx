import React, { FC } from "react";
import { IParagraphBefore } from "../../../../models/types";
import styles from "./ParagraphBefore.module.scss";

const ParagraphBefore: FC<IParagraphBefore> = ({ paragraphs }) => {
  return (
    <>
      {paragraphs.map((paragraph, index) => (
        <p key={index} className={styles["paragraph-before"]}>
          {paragraph}
        </p>
      ))}
    </>
  );
};

export default ParagraphBefore;
