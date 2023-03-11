/* eslint-disable react/jsx-no-comment-textnodes */
import { motion, AnimatePresence } from "framer-motion"; // анимация
import React, { useState } from "react";
import ExpandingHeading from "../general/expanding/ExpandingPanel/ExpandingHeading";
import "../../styles/dist/expanding.css";
import LinkInfo from "../general/LinkInfo/LinkInfo";

const IndexOf = () => {
  const [isVisible, setVisible] = useState(false);

  const [title] = useState(
    "Array.indexOf(item, from) - метод ищет item начиная с индекса from и возвращает номер индекса, на котором был найден искомый элемент, в противном случае -1, если он отсутствует."
  );
  const descriptions: string[] = [
    "Метод indexOf() возвращает первый индекс, по которому данный элемент может быть найден в массиве, или -1, если он отсутствует.",
    "Метод indexOf() сравнивает searchElement и элементы массива, используя строгое равенство ( === ). NaN значения никогда не сравниваются как равные, поэтому indexOf() всегда возвращаются, -1 когда searchElement есть NaN.",
    "Метод indexOf() пропускает пустые слоты в разреженных массивах .",
    "Метод indexOf() универсальный . Он ожидает, что this значение будет иметь length свойство и свойства с целочисленным ключом.",
    "Синтаксис: ",
    " - indexOf(searchElement) ",
    " - indexOf(searchElement, fromIndex) ",
    "Параметры: ",
  ];
  const descriptionsBefore: string[] = [
    "searchElement - элемент, который нужно найти в массиве. ",
    "fromIndex - (необязательный) индекс, преобразованный в целое число, с отсчетом от нуля, с которого следует начать поиск. ",
    "Отрицательный индекс отсчитывается от конца массива — если используется , fromIndex < 0. fromIndex + array.lengthОбратите внимание, что в этом случае массив по-прежнему просматривается спереди назад. ",
    "Если fromIndex < -array.lengthили fromIndexопущено, 0используется, что приводит к поиску всего массива. ",
    "Если fromIndex >= array.lengthмассив не ищется и -1возвращается. ",
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
                  title="Array.prototype.indexOf()"
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf"
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
                <div className="expanding__content">
                  <div className="expanding__pre">
                    <h2 className="expanding__heading">Поиск элемента в массиве</h2>

                    <p className="expanding__paragraph-code">
                      Найти элемент в массиве можно с помощью метода indexOf():
                    </p>
                    <p className="expanding__paragraph-code">const disks = ['500Gb', '1Tb', '2Tb'];</p>
                    <p className="expanding__paragraph-code">const index = disks.indexOf('1Tb'); // 1</p>
                    <p className="expanding__paragraph-code">
                      В качестве результата он возвращает индекс первого найденного элемента.
                    </p>
                    <p className="expanding__paragraph-code">
                      Если элемент не найден, то indexOf() возвращает -1. Это можно использовать, например, чтобы
                      проверить существует ли элемент в массиве:
                    </p>
                    <p className="expanding__paragraph-code">-</p>
                    <p className="expanding__paragraph-code">const disks = ['500Gb', '1Tb', '2Tb'];</p>
                    <p className="expanding__paragraph-code">if (disks.indexOf('1Tb') &gt; -1) &#123;</p>
                    <p className="expanding__paragraph-code"> console.log( 'Этот элемент в массиве есть!' );</p>
                    <p className="expanding__paragraph-code">&#125;</p>
                    <p className="expanding__paragraph-code">
                      Метод indexOf() позволяет искать элементы не только с начала, но и с определённого индекса. Для
                      этого ему нужно его указать в качестве второго аргумента:
                    </p>
                    <p className="expanding__paragraph-code">const nums = ['One', 'Two', 'One'];</p>
                    <p className="expanding__paragraph-code">nums.indexOf('One', 1); // 2</p>
                  </div>
                </div>

                <div className="expanding__pre">
                  <h2 className="expanding__heading">Поиск значений в массиве.</h2>

                  <p className="expanding__paragraph-code">const array = [2, 9, 9];</p>
                  <p className="expanding__paragraph-code">array.indexOf(2); // 0</p>
                  <p className="expanding__paragraph-code">array.indexOf(7); // -1</p>
                  <p className="expanding__paragraph-code">array.indexOf(9, 2); // 2</p>
                  <p className="expanding__paragraph-code">array.indexOf(2, -1); // -1</p>
                  <p className="expanding__paragraph-code">array.indexOf(2, -3); // 0</p>
                  <h2 className="expanding__heading">Вы не можете использовать indexOf()для поиска NaN.</h2>

                  <p className="expanding__paragraph-code">const array = [NaN];</p>
                  <p className="expanding__paragraph-code">array.indexOf(NaN); // -1</p>
                </div>
              </div>

              <div className="expanding__content">
                <div className="expanding__pre">
                  <h2 className="expanding__heading">Нахождение всех вхождений элемента</h2>

                  <p className="expanding__paragraph-code">const indices = [ ];</p>
                  <p className="expanding__paragraph-code">const array = [ "a", "b", "a", "c", "a", "d" ];</p>
                  <p className="expanding__paragraph-code">const element = "a";</p>
                  <p className="expanding__paragraph-code">let idx = array.indexOf( element );</p>
                  <p className="expanding__paragraph-code">while ( idx !== -1 ) &#123; </p>
                  <p className="expanding__paragraph-code">
                    // если idx !== -1, значит по этому индексу находится искомый элемент
                  </p>
                  <p className="expanding__paragraph-code">indices.push( idx );</p>
                  <p className="expanding__paragraph-code">
                    // собираем в массив все индексы, по которым находится наши элемент
                  </p>
                  <p className="expanding__paragraph-code"> idx = array.indexOf( element, idx + 1 );</p>
                  <p className="expanding__paragraph-code">&#125; </p>
                  <p className="expanding__paragraph-code">console.log( indices );</p>
                  <p className="expanding__paragraph-code">// [ 0, 2, 4 ]</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default IndexOf;
