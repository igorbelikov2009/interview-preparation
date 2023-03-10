import { motion, AnimatePresence } from "framer-motion"; // анимация
import React, { useState } from "react";
import ExpandingHeading from "../general/expanding/ExpandingPanel/ExpandingHeading";
import "../../styles/dist/expanding.css";
import LinkInfo from "../general/LinkInfo/LinkInfo";

const Slice = () => {
  const [isVisible, setVisible] = useState(false);

  const [title] = useState("slice() - возвращает новый массив, предназначен для копирования участка массива.");
  const descriptions: string[] = [
    "Метод slice() возвращает новый массив. Предназначен для копирования участка массива. При этом он не изменяет исходный массив, а возвращает в качестве результата новый массив, состоящий из выбранных элементов.",
    "Метод slice имеет 2 параметра:",
  ];
  const descriptionsBefore: string[] = [
    "1 параметр (обязательный) - предназначен для указания индекса элемента, с которого необходимо начать копировать элементы;",
    "2 параметр (необязательный) - предназначен для указания индекса элемента, до которого необходимо копировать (при этом он не включается в новый массив). Если его не указать, то будут скопированы элементы до конца указанного массива. ",
  ];

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
                <LinkInfo
                  title="Array.prototype.slice()"
                  href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/slice"
                />
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
                  <p className="expanding__paragraph-code">
                    const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
                  </p>
                  <p className="expanding__paragraph-code">
                    console.log(animals.slice(2)) // ["camel", "duck", "elephant"]{" "}
                  </p>
                  <p className="expanding__paragraph-code">console.log(animals.slice(2, 4)) // ["camel", "duck"] </p>
                  <p className="expanding__paragraph-code">
                    console.log(animals.slice(1, 5)) // ["bison", "camel", "duck", "elephant"]
                  </p>
                  <p className="expanding__paragraph-code">console.log(animals.slice(-2)) // ["duck", "elephant"] </p>
                  <p className="expanding__paragraph-code">console.log(animals.slice(2, -1)) // ["camel", "duck"] </p>
                  <p className="expanding__paragraph-code">
                    console.log(animals.slice()) // ["ant", "bison", "camel", "duck", "elephant"]{" "}
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

export default Slice;
