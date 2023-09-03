import { motion, AnimatePresence } from "framer-motion"; // анимация
import React, { useState } from "react";
import ExpandingHeading from "../general/expanding/ExpandingPanel/ExpandingHeading";
import "../../styles/expanding.scss";

const For = () => {
  const [isVisible, setVisible] = useState(false);

  const [title] = useState("for () - для перебора элементов массива по цифровым индексам.");
  const descriptions: string[] = [
    "Одним из самых старых способов перебора элементов массива является цикл for по цифровым индексам.",
  ];
  const descriptionsBefore: string[] = [];

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

                {descriptionsBefore &&
                  descriptionsBefore.map((item, index) => (
                    <p key={index} className="expanding__paragraph-before">
                      {item}
                    </p>
                  ))}
              </div>

              <div className="expanding__content">
                <div className="expanding__pre">
                  <h2 className="expanding__heading">Пример: </h2>
                  <p className="expanding__paragraph-code">let arr = [ 'Яблоко', 'Апельсин', 'Груша' ];</p>
                  <p className="expanding__paragraph-code">for ( let i = 0; i &lt; arr.length; i++ ) &#123;</p>
                  <p className="expanding__paragraph-code"> alert( arr [ i ] )</p>
                  <p className="expanding__paragraph-code">&#125;</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default For;
