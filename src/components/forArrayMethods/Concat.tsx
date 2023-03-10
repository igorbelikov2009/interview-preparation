import { motion, AnimatePresence } from "framer-motion"; // анимация
import React, { useState } from "react";
import ExpandingHeading from "../general/expanding/ExpandingPanel/ExpandingHeading";
import "../../styles/dist/expanding.css";
import LinkInfo from "../general/LinkInfo/LinkInfo";

const Concat = () => {
  const [isVisible, setVisible] = useState(false);

  const [title] = useState("concat() - объединяет два или более массива");
  const descriptions: string[] = [
    "Метод concat() создаёт новый массив, в который копирует данные из других массивов и дополнительные значения.",
    "Этот метод объединяет два или более массива/значения и возвращает новый массив.",
    "Синтаксис: arr.concat(arg1, arg2...)",
  ];
  const descriptionsBefore: string[] = [
    "Он принимает любое количество аргументов, которые могут быть как массивами, так и простыми значениями.",
    "В результате – новый массив, включающий в себя элементы из arr, затем arg1, arg2 и так далее. ",
    "Если аргумент argN – массив, то копируются все его элементы. Иначе копируется сам аргумент. ",
    "Примечание: Соединение массивов и/или значений в новый массив оставит соединяемые массивы/значения неизменными. Кроме того, любая операция над новым массивом (если только элемент не является ссылкой) не будет затрагивать исходные массивы и наоборот. ",
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
                  title="Array.prototype.concat()"
                  href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/concat"
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
                  <h2 className="expanding__heading">Соединение двух массивов</h2>
                  <p className="expanding__paragraph-code">var alpha = ['a', 'b', 'c'];</p>
                  <p className="expanding__paragraph-code">var numeric = [1, 2, 3]; </p>
                  <p className="expanding__paragraph-code">var alphaNumeric = alpha.concat(numeric);</p>
                  <p className="expanding__paragraph-code">
                    console.log(alphaNumeric); // Результат: ['a', 'b', 'c', 1, 2, 3]
                  </p>
                </div>
              </div>

              <div className="expanding__content">
                <div className="expanding__pre">
                  <h2 className="expanding__heading">Соединение трёх массивов</h2>
                  <p className="expanding__paragraph-code">var num1 = [1, 2, 3];</p>
                  <p className="expanding__paragraph-code">var num2 = [4, 5, 6];</p>
                  <p className="expanding__paragraph-code">var num3 = [7, 8, 9];</p>
                  <p className="expanding__paragraph-code">var nums = num1.concat(num2, num3);</p>
                  <p className="expanding__paragraph-code">
                    console.log(nums); // Результат: [1, 2, 3, 4, 5, 6, 7, 8, 9]
                  </p>
                </div>
              </div>

              <div className="expanding__content">
                <div className="expanding__pre">
                  <h2 className="expanding__heading">Соединение значений в массив</h2>
                  <p className="expanding__paragraph-code">var alpha = ['a', 'b', 'c'];</p>
                  <p className="expanding__paragraph-code">var alphaNumeric = alpha.concat(1, [2, 3]);</p>
                  <p className="expanding__paragraph-code">
                    console.log(alphaNumeric); // Результат: ['a', 'b', 'c', 1, 2, 3]
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

export default Concat;
