/* eslint-disable no-extend-native */
/* eslint-disable no-lone-blocks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
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
  {
    // 1-ый вариант:
    function search(array: Array<number>, target: number) {
      for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
          return i;
        }
      }
      return -1;
    }

    // console.log(search([1, 3, 6, 13, 17], 13)); // -> 3
    // console.log(search([1, 3, 6, 13, 17], 12)); // -> -1
  }

  {
    // 2-ой оптимизированный вариант:
    function search(array: Array<number>, target: number) {
      let start = 0;
      let end = array.length - 1;

      if (target < array[start] || target > array[end]) {
        return -1;
      }

      while (true) {
        if (target === array[start]) {
          return start;
        }

        if (target === array[end]) {
          return end;
        }

        if (end - start <= 1) {
          return -1;
        }

        const middle = Math.floor((start + end) / 2);

        if (target > array[middle]) {
          start = middle + 1;
        } else if (target < array[middle]) {
          end = middle - 1;
        } else if (target === array[middle]) {
          return middle;
        }
      }
    }

    console.log(search([1, 3, 6, 13, 17], 6)); // -> 2
    console.log(search([1, 3, 6, 13, 17], 13)); // -> 3
    console.log(search([1, 3, 6, 13, 17], 17)); // -> 4
    console.log(search([1, 3, 6, 13, 17], 12)); // -> -1
  }

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
