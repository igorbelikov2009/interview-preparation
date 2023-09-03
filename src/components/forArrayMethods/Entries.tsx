/* eslint-disable react/jsx-no-comment-textnodes */
import { motion, AnimatePresence } from "framer-motion"; // анимация
import React, { useState } from "react";
import ExpandingHeading from "../general/expanding/ExpandingPanel/ExpandingHeading";
import "../../styles/expanding.scss";
import LinkInfo from "../general/LinkInfo/LinkInfo";

const Entries = () => {
  const [isVisible, setVisible] = useState(false);

  const [title] = useState(
    "В JavaScript entry() — это метод Array, который используется для возврата нового объекта-итератора Array, который позволяет перебирать пары ключ/значение в массиве. Поскольку метод entry() является методом объекта Array, его необходимо вызывать через конкретный экземпляр класса Array."
  );
  const descriptions: string[] = [
    "Синтаксис: ",
    "var iterator = array.entries() ",
    "Для метода entry() нет параметров или аргументов.",
    "Возвращает массив индексов и значений заданного массива.",
    "Array.entries() возвращает новый объект Array Iterator, который содержит пары ключей и значений для каждого индекса массива. ",
    "Описание: ",
    "Чтобы понять суть этого метода, вы также должны понимать, что такое итератор.",
  ];
  const descriptionsBefore: string[] = [
    "Итератор – это объект, который отслеживает свою текущую позицию, одновременно получая элементы в коллекции по одному.",
    "Итератор возвращает объект с двумя свойствами: done и value. ",
    "В JavaScript итератор предоставляет метод next(), который возвращает следующий элемент в последовательности ",
    "Когда последовательность завершится, значение value будет равно undefined,а done будет равным true.",
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
                  title="Array.prototype.entries()"
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries"
                />
                <LinkInfo title="Array.prototype.entries()" href="https://www.techonthenet.com/js/array_entries.php" />

                {descriptions &&
                  descriptions.map((item, index) => (
                    <p key={index} className="expanding__paragraph">
                      {item}
                    </p>
                  ))}

                <LinkInfo
                  title="Generator.prototype.next()"
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator/next"
                />

                {descriptionsBefore &&
                  descriptionsBefore.map((item, index) => (
                    <p key={index} className="expanding__paragraph-before">
                      {item}
                    </p>
                  ))}
              </div>

              <div className="expanding__content">
                <div className="expanding__pre">
                  <h2 className="expanding__heading">Пример</h2>
                  <p className="expanding__paragraph-code">var arr = [ 'a', 'b', 'c' ];</p>
                  <p className="expanding__paragraph-code">var eArr = arr.entries();</p>
                  <p className="expanding__paragraph-code">-</p>
                  <p className="expanding__paragraph-code">console.log(eArr.next().value); // [ 0, 'a' ]</p>
                  <p className="expanding__paragraph-code">console.log(eArr.next().value); // [ 1, 'b' ]</p>
                  <p className="expanding__paragraph-code">console.log(eArr.next().value); // [ 2, 'c' ]</p>
                </div>
              </div>

              <div className="expanding__content">
                <div className="expanding__pre">
                  <h2 className="expanding__heading">Пример использования с циклом. </h2>
                  <p className="expanding__paragraph-code">// инициализируем переменную, содержащую массив</p>
                  <p className="expanding__paragraph-code">let array = [ "one", "two", "three" ];</p>
                  <p className="expanding__paragraph-code">-</p>
                  <p className="expanding__paragraph-code"> // инициализируем переменную, содержащую объект итератор</p>
                  <p className="expanding__paragraph-code">let iterator = array.entries();</p>
                  <p className="expanding__paragraph-code">-</p>
                  <p className="expanding__paragraph-code">// проходим циклом по объекту, выводим пары ключ/значение</p>
                  <p className="expanding__paragraph-code">for (let item of iterator) &#123; </p>
                  <p className="expanding__paragraph-code">console.log( item );</p>
                  <p className="expanding__paragraph-code">&#125; </p>
                  <p className="expanding__paragraph-code">// [ 0, "one" ]</p>
                  <p className="expanding__paragraph-code">// [ 1, "two" ]</p>
                  <p className="expanding__paragraph-code">// [ 2, "three" ]</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Entries;
