import { motion, AnimatePresence } from "framer-motion"; // анимация
import React, { useState } from "react";
import ExpandingHeading from "../general/expanding/ExpandingPanel/ExpandingHeading";
import "../../styles/dist/expanding.css";
import LinkInfo from "../general/LinkInfo/LinkInfo";

const LastIndexOf = () => {
  const [isVisible, setVisible] = useState(false);

  const [title] = useState(
    "Array.lastIndexOf() - метод возвращает последний индекс, по которому данный элемент может быть найден в массиве, или -1, если он отсутствует."
  );
  const descriptions: string[] = [
    "Метод lastIndexOf() выполняет то же самое что indexOf(), только осуществляет это с конца.",
    "Метод lastIndexOf() возвращает последний индекс, по которому данный элемент может быть найден в массиве, или -1, если он отсутствует. Массив просматривается в обратном направлении, начиная с fromIndex.",
    "Синтаксис: ",
    "lastIndexOf(searchElement)",
    "lastIndexOf(searchElement, fromIndex)",
    "Параметры: ",
  ];
  const descriptionsBefore: string[] = [
    "searchElement - элемент, который нужно найти в массиве. ",
    "fromIndex - (необязательный) индекс с отсчетом от нуля, с которого начинается поиск в обратном направлении, преобразованный в целое число . ",
    "Отрицательный индекс отсчитывается от конца массива — если используется , fromIndex < 0.fromIndex + array.length",
    "Если fromIndex < -array.lengthмассив не ищется и -1возвращается. Концептуально вы можете думать об этом как о начале с несуществующей позиции перед началом массива и движении назад оттуда. На пути нет элементов массива, поэтому searchElementон никогда не будет найден. ",
    "Если fromIndex >= array.lengthили fromIndexопущено, array.length - 1используется, что приводит к поиску всего массива. Концептуально вы можете думать об этом как о начале с несуществующей позиции за концом массива и движении назад оттуда. В конечном итоге он достигает реальной конечной позиции массива, после чего начинает поиск в обратном направлении по фактическим элементам массива. ",
    "Метод lastIndexOf()сравнивает searchElementэлементы массива, используя строгое равенство (тот же алгоритм, что и === оператор).",
    "NaNзначения никогда не сравниваются как равные, поэтому lastIndexOf()всегда возвращаются, -1когда searchElementесть NaN.",
    "Метод lastIndexOf()пропускает пустые слоты в разреженных массивах .",
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
                  title="Array.prototype.lastIndexOf()"
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf"
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
                <pre className="expanding__pre">
                  <code className="expanding__code">xxx</code>
                </pre>
              </div>

              <div className="expanding__content">
                <div className="expanding__pre">
                  <p className="expanding__paragraph-code">const nums = ['One', 'Two', 'Three', 'One'];</p>
                  <p className="expanding__paragraph-code">nums.lastIndexOf('One'); // 3</p>
                  <p className="expanding__paragraph-code">nums.lastIndexOf('Two'); // 1</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LastIndexOf;
