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
  const presses = (str: string): number => {
    // Создадим переменную, в которой будут лежать наши числа и буквы, они будут ключами,
    // а значением выступит количество их повторений - сколько раз нужно нажать на кнопку.
    // На старом телефоне, чтобы вывести букву С, нужно три раза нажать на кнопку (2abc).
    const numbers: any = {
      // По сути это клавиатура старого телефона
      "1": 1,
      a: 1,
      b: 2,
      c: 3,
      "2": 4,

      d: 1,
      e: 2,
      f: 3,
      "3": 4,

      g: 1,
      h: 2,
      i: 3,
      "4": 4,

      j: 1,
      k: 2,
      l: 3,
      "5": 4,

      m: 1,
      n: 2,
      o: 3,
      "6": 4,

      p: 1,
      q: 2,
      r: 3,
      s: 4,
      "7": 5,

      t: 1,
      u: 2,
      v: 3,
      "8": 4,

      w: 1,
      x: 2,
      y: 3,
      z: 4,
      "9": 5,

      " ": 1,
      "0": 2,
    };

    return str.split("").reduce((sum: number, char: string) => sum + numbers[char.toLowerCase()], 0);
  };

  console.log(presses("LOL")); // 9
  console.log(presses("WHERE DO U WANT 2 MEET L8R")); // 47
  console.log(presses("")); // 0

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
