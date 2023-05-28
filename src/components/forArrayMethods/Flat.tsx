import { motion, AnimatePresence } from "framer-motion"; // анимация
import React, { useState } from "react";
import ExpandingHeading from "../general/expanding/ExpandingPanel/ExpandingHeading";
import "../../styles/dist/expanding.css";
import LinkInfo from "../general/LinkInfo/LinkInfo";

const Flat = () => {
  const [isVisible, setVisible] = useState(false);

  const [title] = useState(
    "Метод flat() создает новый массив со всеми элементами подмассива, объединенными в него рекурсивно до указанной глубины."
  );
  const descriptions: string[] = [
    "Метод flat()создает новый массив со всеми элементами подмассива, объединенными в него рекурсивно до указанной глубины. ",
    "Синтаксис: ",
    "      flat()",
    "      flat(depth)",
    "depth - Уровень глубины, указывающий, насколько глубоко должна быть сведена структура вложенного массива. По умолчанию 1. ",
    "Если уровень вложенности не известен, то для depth можно указать Infinity: array.flat(Infinity) ",
    "Если уровень вложенности не известен, то для depth можно указать Infinity: array.flat(Infinity) !!! ",
    "Если уровень вложенности не известен, то для depth можно указать Infinity: array.flat(Infinity) !!! ",
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
                  title="Array.prototype.flat()"
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat"
                />
                {descriptions &&
                  descriptions.map((item, index) => (
                    <p key={index} className="expanding__paragraph">
                      {item}
                    </p>
                  ))}
              </div>
              <div className="expanding__content">
                <div className="expanding__pre">
                  <p className="expanding__paragraph-code">const arr1 = [ 0, 1, 2, [ 3, 4 ]]; </p>
                  <p className="expanding__paragraph-code"> console.log( arr1.flat() ); // [ 0, 1, 2, 3, 4 ] </p>
                </div>
              </div>

              <div className="expanding__content">
                <div className="expanding__pre">
                  <p className="expanding__paragraph-code">const arr2 = [ 0, 1, 2, [[[ 3, 4 ]]]];</p>
                  <p className="expanding__paragraph-code">
                    console.log( arr2.flat( 2 )); // [ 0, 1, 2, Array(2) [ 3, 4 ]]
                  </p>
                  <p className="expanding__paragraph-code"> console.log( arr2.flat( 3 )); // [ 0, 1, 2, 3, 4 ]</p>
                </div>
              </div>

              <div className="expanding__content">
                <div className="expanding__pre">
                  <h2 className="expanding__heading">Используем бесконечный уровень вложенности - Infinity: </h2>
                  <p className="expanding__paragraph-code">
                    const arrArr = [ [3, 2, 1 ], [[[ 10, 11 ]]], [[[[[[[[[ 12 ]]]]]]]]]];{" "}
                  </p>
                  <p className="expanding__paragraph-code">
                    {" "}
                    console.log(arrArr.flat(Infinity)); //  [ 3, 2, 1, 10, 11, 12 ]
                  </p>
                  <p className="expanding__paragraph-code"> </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Flat;
