/* eslint-disable react/jsx-no-comment-textnodes */
import { motion, AnimatePresence } from "framer-motion"; // анимация
import React, { useState } from "react";
import ExpandingHeading from "../general/expanding/ExpandingPanel/ExpandingHeading";
import "../../styles/expanding.scss";

const Shift = () => {
  const [isVisible, setVisible] = useState(false);
  const [title] = useState("array.shift() - удаляет элемент в начале массива и возвращает его");
  const descriptions: string[] = ["shift() – удаляет первый элемент массива и возвращает его."];

  const planets: string[] = ["Венера ", "Меркурий ", "Земля"];
  const firstElem = planets.shift();

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
                  <p className="expanding__paragraph-code">const planets = ["Венера ", "Меркурий ", "Земля"]</p>
                  <p className="expanding__paragraph-code">
                    const firstElem = planets.shift(); // удаляем первый элемент
                  </p>

                  <p className="expanding__paragraph-code"> console.log(firstElem); // {firstElem} </p>
                  <p className="expanding__paragraph-code"> console.log(planets); // ["Меркурий ", "Земля"] </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default Shift;
