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

  const hignestRank = (arr: number[]) => {
    // Введём переменную для объекта, где будут лежать ключи - числа массива,
    // а их значение - количество их повторений.
    const map: any = {};

    // Введём переменную в которой мы будем считать максимальное количество повторений
    // любых чисел. Грубо говоря это будет счётчик максимального количества повторений
    // в нашем массиве.
    let maxRepeat = 0;

    // Пройдёмся по массиву: какое число нужно присвоить map[n]? Либо 1, если map[n] не
    // существует, либо map[n] + 1, как раз для подсчёта повторений.
    arr.forEach((n) => {
      // Оператор ~~ используется для округления числа с плавающей запятой в меньшую сторону:
      // но самое главное: оператор ~~ приводит undefined к нулю. Что нам в принципе и нужно:
      // для map[n], которого ещё нет, мы скажем ноль плюс 1. Фактически, в для map[n] будут
      // всегда лежать корректные данные.
      map[n] = ~~map[n] + 1;

      if (map[n] > maxRepeat) {
        // если условие выполняется, то максимальное повторение map[n] заносим в maxRepeat
        maxRepeat = map[n];
      }
    });

    return Object.entries(map).reduce(
      (maxValue, [n, repeat]) => (repeat === maxRepeat && +n > maxValue ? +n : maxValue),
      -Infinity
    );
  };

  console.log(hignestRank([12, 10, 8, 12, 7, 6, 4, 10, 12])); // 12
  console.log(hignestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 8, 10, 8])); // 12
  console.log(hignestRank([12, 10, 8, 8, 3, 3, 2, 4, 10, 12, 3])); // 3

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
