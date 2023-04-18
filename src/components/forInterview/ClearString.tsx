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
  const isValid = (str: string) => {
    // На входе строка '12.255.56.1'. Для начала выделяем группы чисел, разделяем
    // строчку посимвольно методом split() с разделитетелем точка.
    const numbers = str.split("."); // ['12', '255', '56', '1']
    // Сраниваем получившиеся количество групп с заданным числом: numbers.length === 4
    // В filter((n) => +n) приводим строку к числу (+n) и проверяем это число
    // на соответствие интервалу от 0 до 255
    // String(+n).length <= таким образом мы обрабатываем такой IP: '\n1.2.3.4'

    return (
      numbers.length === 4 && numbers.filter((n) => +n >= 0 && +n <= 255 && n.length === String(+n).length).length === 4
    );
  };

  console.log(isValid("0.0.0.0")); // ['0', '0', '0', '0']  // true
  console.log(isValid("12.255.56.1")); // ['12', '255', '56', '1']  // true
  console.log(isValid("137.255.1.100")); // ['137', '255', '1', '100']  // true
  console.log(isValid("123.456.789.0")); // ['123', '0'] // false
  console.log(isValid("abc.def.ghi.jkl")); // []  // false
  console.log(isValid("\n1.2.3.4")); //  ['2', '3', '4'] // false
  console.log(isValid("")); // false  // false

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
