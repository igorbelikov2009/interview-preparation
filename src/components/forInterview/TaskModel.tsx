/* eslint-disable react/jsx-no-comment-textnodes */
import { motion, AnimatePresence } from "framer-motion"; // анимация
import React, { useState } from "react";
import ExpandingHeading from "../general/expanding/ExpandingPanel/ExpandingHeading";
import LinkInfo from "../general/LinkInfo/LinkInfo";
import "./taskModel.scss";

const TaskModel = () => {
  const [isVisible, setVisible] = useState(false);

  const [title] = useState("Method");
  const descriptions: string[] = ["Method", "x "];
  const descriptionsBefore: string[] = ["Method", "x "];

  const expanderHandler = () => {
    setVisible((prev) => !prev);
  };

  return (
    <div className="expanding">
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
              <div className="expanding__content">
                <LinkInfo title="title" href="" />

                {descriptions &&
                  descriptions.map((item, index) => (
                    <p key={index} className="expanding__paragraph">
                      {item}
                    </p>
                  ))}

                {descriptionsBefore &&
                  descriptionsBefore.map((item, index) => (
                    <p key={index} className="expanding__paragraph-before">
                      {item}
                    </p>
                  ))}
              </div>

              <div className="expanding__content">
                <div className="expanding__pre">
                  <h2 className="expanding__heading">x</h2>
                  <p className="expanding__paragraph-code">x</p>
                  <p className="expanding__paragraph-code">x</p>
                  <p className="expanding__paragraph-code">-</p>
                  <p className="expanding__paragraph-code">x</p>
                  <p className="expanding__paragraph-code">x</p>
                </div>
              </div>
            </div>

            <div>
              // Определяем contextType, чтобы получить значение контекста. // React найдёт (выше по дереву) ближайший
              Provider-компонент, // предоставляющий этот контекст, и использует его значение. // В этом примере
              значение UI-темы будет "dark".
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TaskModel;
