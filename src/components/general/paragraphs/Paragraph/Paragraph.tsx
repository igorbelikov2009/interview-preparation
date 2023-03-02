import React, { FC } from "react";
import { IParagraph } from "../../../../models/types";
import styles from "./Paragraph.module.scss";

const Paragraph: FC<IParagraph> = ({ paragraphs }) => {
  return (
    <>
      {paragraphs &&
        paragraphs.map((paragraph, index) => (
          <p key={index} className={styles["paragraph"]}>
            {paragraph}
          </p>
        ))}
    </>
  );
};

export default Paragraph;
