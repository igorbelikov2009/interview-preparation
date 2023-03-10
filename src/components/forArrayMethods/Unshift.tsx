/* eslint-disable react/jsx-no-comment-textnodes */
import { motion, AnimatePresence } from "framer-motion"; // анимация
import React, { useState } from "react";
import ExpandingHeading from "../general/expanding/ExpandingPanel/ExpandingHeading";
import "../../styles/dist/expanding.css";

const Unshift = () => {
  const [isVisible, setVisible] = useState(false);

  const [title] = useState("array.unshift(...items) - добавляет items в начало массива.");
  const descriptions: string[] = ["unshift() – для добавления одного или нескольких элементов в начало массива"];

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
                {descriptions &&
                  descriptions.map((item, index) => (
                    <p key={index} className="expanding__paragraph">
                      {item}
                    </p>
                  ))}
              </div>

              <div className="expanding__content">
                <div className="expanding__pre">
                  <p className="expanding__paragraph-code">const planets = ["Меркурий", "Земля", "Марс"];</p>
                  <p className="expanding__paragraph-code">// добавим в начало 1 элемент</p>
                  <p className="expanding__paragraph-code">
                    planets.unshift('Венера'); // ["Венера", "Меркурий", "Земля", "Марс"]
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Unshift;
