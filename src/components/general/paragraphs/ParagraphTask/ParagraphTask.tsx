import React, { FC } from "react";
import { IParagraphTask } from "../../../../models/types";
import styles from "./ParagraphTask.module.scss";

const ParagraphTask: FC<IParagraphTask> = ({ paragraphsTask }) => {
  return (
    <>
      {paragraphsTask &&
        paragraphsTask.map((paragraph, index) => (
          <p key={index} className={styles["paragraph-task"]}>
            {paragraph}
          </p>
        ))}
    </>
  );
};

export default ParagraphTask;
