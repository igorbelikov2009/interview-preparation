/* eslint-disable no-extend-native */
/* eslint-disable no-lone-blocks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { motion, AnimatePresence } from "framer-motion"; // анимация
import { type } from "os";
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

  // // task

  // type GetStatus<T> = T extends object ? (T extends { status: string } ? T["status"] : null) : null;

  // И теперь используем infer с нашим кодом GetStatus. Вместо того, чтобы проверять наш код
  // на статус { status: string }, мы сразу же распознаем переданный нами код и сохраним
  // в переменную U. Проверим, что если (U extends { status: any } ?, то мы вернём этот U["status"].

  type GetStatus<T> = T extends infer U ? (U extends { status: any } ? U["status"] : null) : null;

  // Таким образом, если мы передадим сюда статус число 125, то мы должны получить число 125.
  type Status1 = GetStatus<{ status: 125 }>; // type Status1 = 125

  // Если передаём строку "LOL", то мы и получаем строку "LOL".
  type Status2 = GetStatus<{ status: "LOL" }>; // type Status2 = "LOL"

  // Если передаём массив, то мы его и получим.
  type Status3 = GetStatus<{ status: ["a", "s", "s", "a"] }>; // type Status3 = ["a", "s", "s", "a"]

  type Status4 = GetStatus<{ status: [1, 2, 3, 4, 5] }>; // type Status4 = [1, 2, 3, 4, 5]

  // Если передаём объект, то и получаем объект
  type Status5 = GetStatus<{ status: { name: "max"; age: 25 } }>; // type Status5 = { name: "max"; age: 25 }

  // // task
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
