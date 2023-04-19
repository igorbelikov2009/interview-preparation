/* eslint-disable @typescript-eslint/no-unused-vars */
import { motion, AnimatePresence } from "framer-motion"; // анимация
import React, { useState, useEffect } from "react";
import ExpandingHeading from "../general/expanding/ExpandingPanel/ExpandingHeading";
import LinkInfo from "../general/LinkInfo/LinkInfo";
import "./taskModel.scss";

const ClearString = () => {
  const [isVisible, setVisible] = useState(false);
  const expanderHandler = () => {
    setVisible((prev) => !prev);
  };
  const [title] = useState("title");

  // task
  const queueTime = (customers: number[], n: number) => {
    // Если количество покупателей равно количеству касс.
    if (customers.length === 0) return 0;

    // Если количество покупателей меньше количества касс.
    if (customers.length <= n) return Math.max(...customers);

    // Если количество покупателей больше количества касс, например ([2, 3, 8], 2).
    // Введём новую переменную queues (массив очередей - количество сумм времени
    // в этих очередях), в нём будет n - элементов (количество касс), значение
    // которых определим равными нулю fill(0). То есть, мы создали очереди к кассам:
    // к первой кассе стоит первый клиент, ко второй - второй клиент. Если какая-то
    // касса освобождается, то к ней подходит очередной клиент.
    // 1-й элемент массива будет принимать время первого человека,
    // второй - время второго человека. Изначальное время для всех задали равное нулю.
    const queues: number[] = new Array(n).fill(0); //  Array [0, 0]

    // Пройдём по массиву покупателей
    for (const time of customers) {
      // Будем находить индекс у массива очередей. Мы берём самое меньшее число в очередях,
      // и находим его индекс. Так мы получаем самую свободную на данный момент кассу
      // - индекс кассы.
      const index = queues.indexOf(Math.min(...queues));

      // У нас есть список очередей, есть индекс, и мы прибавляем к тому что есть там
      // определённое время - значение элемента массива покупателей customers.
      // Фактически, мы заполняем наш массив очередей.
      queues[index] += time; // Array [(2 + 8), 3] =  [10, 3]
    }
    // Нам в конце остаётся только возвратить самое большое число из массива очередей.
    return Math.max(...queues); // 10
  };

  console.log(queueTime([2, 3, 4], 1)); // 9
  console.log(queueTime([2, 3, 8], 2)); // 10
  console.log(queueTime([11, 2, 3, 3], 2)); // 11
  // task

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
                  title="JS Задачи: Очистить строку от числовых символов"
                  href="https://www.youtube.com/watch?v=oQ-0bm9-_yA&list=PLPiq_hi6UrQo3ornWsqYnivc77kPn3Gwi&index=5"
                />
              </div>

              <div className="expanding__content">
                <div className="expanding__pre">
                  <h2 className="expanding__heading">
                    Очистить строку 'This looks5 grea8te' от числовых символов =&gt; 'This looks greate'.
                  </h2>
                  <h2 className="expanding__subheading"> </h2>
                  <p className="expanding__paragraph-code">const [ elem ] = useState( "This looks5 grea8te" );</p>
                  <p className="expanding__paragraph-code">const [ elemClear, setElemClear ] = useState( "" );</p>
                  <p className="expanding__paragraph-code">-</p>
                  <p className="expanding__paragraph-code">function stringCleaner( s: string ) &#123;</p>
                  <p className="expanding__paragraph-code">return s.replaceAll( /\d/g, "" );</p>
                  <p className="expanding__paragraph-code">&#125; </p>
                  <p className="expanding__paragraph-code">-</p>
                  <p className="expanding__paragraph-code">useEffect(() =&gt; &#123;</p>
                  <p className="expanding__paragraph-code">setElemClear( stringCleaner( elem ));</p>
                  <p className="expanding__paragraph-code">&#125;, [ elem ]);</p>
                  <p className="expanding__paragraph-code">-</p>
                  <p className="expanding__paragraph-code">console.log( elem ); // 'This looks5 grea8te'</p>
                  <p className="expanding__paragraph-code">console.log( elemClear ); // This looks greate </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ClearString;
