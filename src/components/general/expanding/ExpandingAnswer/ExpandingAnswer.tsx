import { motion, AnimatePresence } from "framer-motion"; // анимация
import React, { FC, useState } from "react";
import { IObjectHeadingAnswers } from "../../../../models/types";
import Paragraph from "../../paragraphs/Paragraph/Paragraph";
import ParagraphBefore from "../../paragraphs/ParagraphBefore/ParagraphBefore";
import ExpandingHeading from "../ExpandingPanel/ExpandingHeading";
import styles from "./ExpandingAnswer.module.scss";

const ExpandingAnswer: FC<IObjectHeadingAnswers> = ({ heading, answer, isParagraph, isParagraphBefore }) => {
  const [isVisible, setVisible] = useState(false);

  const expanderHandler = () => {
    setVisible((prev) => !prev);
  };

  return (
    <div className={styles["expanding"]}>
      <ExpandingHeading isContentVisible={isVisible} panelName={heading} onClickExpanding={expanderHandler} />

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{ overflow: "hidden" }}
          >
            <div className={styles["expanding__container"]}>
              {isParagraph && (
                <div className={styles["expanding__content"]}>
                  <Paragraph paragraphs={answer} />
                </div>
              )}
              {isParagraphBefore && (
                <div className={styles["expanding__content"]}>
                  <ParagraphBefore paragraphs={answer} />
                </div>
              )}

              <div onClick={expanderHandler} className={styles["expanding__button"]}></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExpandingAnswer;
