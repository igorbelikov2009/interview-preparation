import { motion, AnimatePresence } from "framer-motion"; // анимация
import React, { useState } from "react";
import ExpandingHeading from "../general/expanding/ExpandingPanel/ExpandingHeading";
import "../../styles/dist/expanding.css";

const ForOf = () => {
  const [isVisible, setVisible] = useState(false);

  const [title] = useState("Цикл for..of не предоставляет доступа к индексу текущего элемента, только к его значению.");
  const descriptions: string[] = [
    "Цикл for..of не предоставляет доступа к индексу текущего элемента, только к его значению, но в большинстве случаев этого достаточно. А также это короче.",
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
                  <p className="expanding__paragraph-code"> let array = [ "Яблоко", "Апельсин", "Груша" ];</p>
                  <p className="expanding__paragraph-code"> for ( let key in array ) &#123;</p>
                  <p className="expanding__paragraph-code">console.log( array[ key ] ); // Яблоко, Апельсин, Груша</p>
                  <p className="expanding__paragraph-code"> &#125; </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ForOf;
