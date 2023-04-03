/* eslint-disable @typescript-eslint/no-unused-vars */
import { motion, AnimatePresence } from "framer-motion"; // анимация
import React, { useState } from "react";
import ExpandingHeading from "../general/expanding/ExpandingPanel/ExpandingHeading";
import LinkInfo from "../general/LinkInfo/LinkInfo";
import "./taskModel.scss";

const EvenOrOdd = () => {
  const [isVisible, setVisible] = useState(false);

  const expanderHandler = () => {
    setVisible((prev) => !prev);
  };

  // задача
  const [title] = useState("Чётное или нечётное?");

  const number = 1263;
  const number2 = 1264;

  function even_or_odd(number: number) {
    return number % 2 === 0 ? "чётное" : "нечётное";
  }

  // console.log(even_or_odd(number));
  // console.log(even_or_odd(number2));
  // задача

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
                <LinkInfo title={title} href="" />
              </div>

              <div className="expanding__content">
                <div className="expanding__pre">
                  <h2 className="expanding__heading">{title} </h2>
                  <p className="expanding__paragraph-code">const number = 1263;</p>
                  <p className="expanding__paragraph-code">const number2 = 1264;</p>
                  <p className="expanding__paragraph-code">-</p>
                  <p className="expanding__paragraph-code">function even_or_odd(number: number) &#123;</p>
                  <p className="expanding__paragraph-code">return number % 2 === 0 ? "чётное" : "нечётное";</p>
                  <p className="expanding__paragraph-code">&#125;</p>
                  <p className="expanding__paragraph-code">-</p>
                  <p className="expanding__paragraph-code">console.log(even_or_odd(number)); // нечётное</p>
                  <p className="expanding__paragraph-code">console.log(even_or_odd(number2)); // чётное</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EvenOrOdd;
