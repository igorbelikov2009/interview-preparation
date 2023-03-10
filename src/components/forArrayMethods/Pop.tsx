/* eslint-disable react/jsx-no-comment-textnodes */
import { motion, AnimatePresence } from "framer-motion"; // анимация
import React, { useState } from "react";
import ExpandingHeading from "../general/expanding/ExpandingPanel/ExpandingHeading";
import "../../styles/dist/expanding.css";

const Pop = () => {
  const [isVisible, setVisible] = useState(false);
  const [title] = useState("array.pop() - удаляет элемент в конце массива и возвращает его.");
  const descriptions: string[] = ["pop() – удаляет последний элемент массива и возвращает его."];

  const planets: string[] = ["Венера ", "Меркурий ", "Земля", "Марс"];
  const lastElem = planets.pop();

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
                  <p className="expanding__paragraph-code">const planets = ["Венера ", "Меркурий ", "Земля", "Марс"]</p>
                  <p className="expanding__paragraph-code">
                    const lastElem = planets.pop(); // удаляем последний элемент
                  </p>

                  <p className="expanding__paragraph-code"> console.log(lastElem); // {lastElem} </p>
                  <p className="expanding__paragraph-code">
                    console.log(planets); // [ "Венера ", "Меркурий ", "Земля" ]
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
export default Pop;
