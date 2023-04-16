import { motion, AnimatePresence } from "framer-motion"; // анимация
import React, { FC, useState } from "react";
import { IObjectTasks } from "../../../../models/types";
import LinkInfo from "../../LinkInfo/LinkInfo";
import ParagraphTask from "../../paragraphs/ParagraphTask/ParagraphTask";
import ExpandingHeading from "../ExpandingPanel/ExpandingHeading";
import styles from "./ExpandingForTask.module.scss";

const ExpandingForTask: FC<IObjectTasks> = ({ heading, href, taskCode }) => {
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
            <div className={styles["expanding__content"]}>
              <LinkInfo href={href} title={heading} />

              <div className={styles["expanding__content-code-pre"]}>
                <ParagraphTask paragraphsTask={taskCode} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExpandingForTask;
