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
  const arrayTree = [
    {
      v: 5,
      c: [
        { v: 18, c: [{ v: 11 }] },
        { v: 7, c: [{ v: 5, c: [{ v: 1 }] }] },
        { v: 5, c: [{ v: 18 }, { v: 15 }] },
      ],
    },
  ];

  // 2 с итерацией

  const iteration = (tree: any) => {
    // Если дерево пустое, тогда возвращаем ноль
    if (!tree.length) {
      return 0;
    }

    // Без рекурсии с использованием стэка.
    const stack: any[] = [];
    let sum = 0;

    tree.forEach((node: any) => {
      // Каждый узел (node) добавляем в стэк:
      stack.push(node);
      // По окончании этой функции, в стэке будут только вершины дерева.
    });

    // Делаем бесконечный цикл, которой будет крутиться, пока стэк не пустой:
    while (stack.length) {
      // На каждой итерации цикла достаём один из узлов и суммируем его значение:
      const node = stack.pop();
      sum += node.v;
      // Если у узла, который мы вытащили на этой итерации, есть дети (проверим это)
      if (node.c) {
        // то пробегаемся уже по детям узла:
        node.c.forEach((n: any) => {
          // Каждого ребенка этого узла мы опять добавляем в стэк:
          stack.push(n);
        });
      }
    }
    // По итогу возвращаем сумму:
    return sum;
  };

  console.log(iteration(arrayTree)); // 85

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
