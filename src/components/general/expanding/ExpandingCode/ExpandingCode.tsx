import { motion, AnimatePresence } from "framer-motion"; // анимация
import React, { FC, useState } from "react";
import ExpandingHeading from "../ExpandingPanel/ExpandingHeading";
import styles from "./ExpandingCode.module.scss";

const ExpandingCode: FC = () => {
  const [isVisible, setVisible] = useState(false);

  const [title] = useState("xx");
  const descriptions: string[] = ["x ", "x "];

  const expanderHandler = () => {
    setVisible((prev) => !prev);
  };

  return (
    <div className={styles["expanding"]}>
      <ExpandingHeading isContentVisible={isVisible} panelName={title} onClickExpanding={expanderHandler} />

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{ overflow: "hidden" }}
          >
            <div>
              <div className={styles["expanding__content"]}>
                {descriptions &&
                  descriptions.map((item, index) => (
                    <p key={index} className={styles["expanding__paragraph"]}>
                      {item}
                    </p>
                  ))}
              </div>

              <div className={styles["expanding__content"]}>
                <pre className={styles["expanding__pre"]}>
                  <code className={styles["expanding__code"]}>xxx</code>
                </pre>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExpandingCode;
