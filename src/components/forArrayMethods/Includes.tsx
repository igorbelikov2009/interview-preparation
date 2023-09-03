import { motion, AnimatePresence } from "framer-motion"; // анимация
import React, { useState } from "react";
import ExpandingHeading from "../general/expanding/ExpandingPanel/ExpandingHeading";
import "../../styles/expanding.scss";
import LinkInfo from "../general/LinkInfo/LinkInfo";

const Includes = () => {
  const [isVisible, setVisible] = useState(false);

  const [title] = useState(
    "Array.includes(item, from) - метод ищет item начиная с индекса from и возвращает true, если поиск успешен. Или false, если item не найден"
  );
  const descriptions: string[] = [
    "includes() - метод определяет, содержит ли массив определённый элемент, возвращая в зависимости от этого true или false",
    "Если мы хотим проверить наличие элемента в массиве и нет необходимости знать его индекс, предпочтительно использовать arr.includes.",
    "Синтаксис: ",
    "includes(searchElement)",
    "includes(searchElement, fromIndex)",
    "Параметры",
  ];
  const descriptionsBefore: string[] = [
    "searchElement - искомый элемент.",
    "fromIndex - (необязательный) индекс с отсчетом от нуля, с которого следует начать поиск, преобразованный в целое число . ",
    "Отрицательный индекс отсчитывается от конца массива — если используется , fromIndex < 0. fromIndex + array.length. Однако в этом случае массив по-прежнему просматривается спереди назад. ",
    "Если fromIndex < -array.length или fromIndex опущено, 0 используется, что приводит к поиску всего массива. ",
    "Если fromIndex >= array.length массив не ищется и false возвращается. ",
    "Возвращаемое значение - логическое значение, которое равно true, если значение searchElement найдено в массиве (или в части массива, обозначенной индексом fromIndex, если он указан). ",
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
                  title="Array.prototype.includes()"
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes"
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
                  <h2 className="expanding__heading">Использование метода includes()</h2>
                  <p className="expanding__paragraph-code">[1, 2, 3].includes(2); // true</p>
                  <p className="expanding__paragraph-code">[1, 2, 3].includes(4); // false</p>
                  <p className="expanding__paragraph-code">[1, 2, 3].includes(3, 3); // false</p>
                  <p className="expanding__paragraph-code">[1, 2, 3].includes(3, -1); // true</p>
                  <p className="expanding__paragraph-code">[1, 2, NaN].includes(NaN); // true</p>
                  <p className="expanding__paragraph-code">["1", "2", "3"].includes(3); // false</p>
                </div>
              </div>

              <div className="expanding__content">
                <div className="expanding__pre">
                  <h2 className="expanding__heading">fromIndex больше или равен длине массива</h2>
                  <h2 className="expanding__subheading">
                    Если fromIndex больше или равен длине массива, возвращается false, поиск остановится.
                  </h2>
                  <p className="expanding__paragraph-code">const arr = ["a", "b", "c"];</p>
                  <p className="expanding__paragraph-code">arr.includes("c", 3); // false</p>
                  <p className="expanding__paragraph-code">arr.includes("c", 100); // false</p>
                </div>
              </div>

              <div className="expanding__content">
                <div className="expanding__pre">
                  <h2 className="expanding__heading">Метод includes() правильно обрабатывает NaN</h2>
                  <h2 className="expanding__subheading">
                    Незначительная, но заслуживающая внимания особенность includes() – он правильно обрабатывает NaN, в
                    отличие от indexOf():
                  </h2>
                  <p className="expanding__paragraph-code">const arr = [NaN];</p>
                  <p className="expanding__paragraph-code">alert( arr.indexOf(NaN) ); // -1 (неверно, должен быть 0)</p>
                  <p className="expanding__paragraph-code">alert( arr.includes(NaN) );// true (верно)</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Includes;
