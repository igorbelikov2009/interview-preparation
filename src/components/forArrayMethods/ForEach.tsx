/* eslint-disable react/jsx-no-comment-textnodes */
import { motion, AnimatePresence } from "framer-motion"; // анимация
import React, { useState } from "react";
import ExpandingHeading from "../general/expanding/ExpandingPanel/ExpandingHeading";
import "../../styles/dist/expanding.css";
import LinkInfo from "../general/LinkInfo/LinkInfo";

const ForEach = () => {
  const [isVisible, setVisible] = useState(false);

  const [title] = useState(
    "forEach() - для перебора элементов, вызывает функцию callback один раз для каждого элемента."
  );
  const descriptions: string[] = [
    "Метод forEach() выполняет указанную функцию один раз для каждого элемента в массиве.  Она не будет вызвана для удалённых или пропущенных элементов массива. Однако, она будет вызвана для элементов, которые присутствуют в массиве и имеют значение undefined.",
    "Синтаксис: arr.forEach(function callback(currentItem, index, array) { // ... делать что-то с currentItem }[, thisArg]);",
    "Параметры: ",
  ];
  const descriptionsBefore: string[] = [
    "callback - функция, которая будет вызвана для каждого элемента массива. Она принимает от одного до трёх аргументов: ",
    "currentItem -  текущий обрабатываемый элемент в массиве.",
    "index - (необязательный) индекс текущего обрабатываемого элемента в массиве.",
    "array - (необязательный) массив, по которому осуществляется проход.",
    "thisArg - необязательный параметр. Значение, используемое в качестве this при вызове функции callback.",
  ];

  //   ["Бильбо", "Гэндальф", "Назгул"].forEach((currentItem, index, array) => {
  //     console.log(`У ${currentItem} индекс ${index} в ${array}`);
  //   });

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
                  title="Array.prototype.forEach()"
                  href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach"
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
                <div className="expanding__pre">
                  <h2 className="expanding__heading">
                    Например, этот код выведет в console.log каждый элемент массива:
                  </h2>
                  <p className="expanding__paragraph-code">// Вызов в console.log каждого элемента</p>
                  <p className="expanding__paragraph-code">
                    ["Бильбо", "Гэндальф", "Назгул"].forEach(( currentItem ) =&gt; console.log( currentItem ));
                  </p>
                  <p className="expanding__paragraph-code">// Бильбо</p>
                  <p className="expanding__paragraph-code">// Гэндальф</p>
                  <p className="expanding__paragraph-code">// Назгул</p>
                </div>
              </div>

              <div className="expanding__content">
                <div className="expanding__pre">
                  <h2 className="expanding__heading">
                    А этот вдобавок расскажет и о позиции элемента в целевом массиве:
                  </h2>

                  <pre className="expanding__pre">
                    <code className="expanding__code">
                      <p className="expanding__paragraph-code">
                        ["Бильбо", "Гэндальф", "Назгул"].forEach(( currentItem, index, array ) =&gt;
                      </p>
                      <p className="expanding__paragraph-code">
                        <>
                          &#123;console.log(`У &#36;&#123; currentItem &#125; индекс &#36;&#123; index &#125; в
                          &#36;&#123; array &#125;`)&#125;)
                        </>
                      </p>
                      <p className="expanding__paragraph-code">// У Бильбо индекс 0 в Бильбо, Гэндальф, Назгул</p>
                      <p className="expanding__paragraph-code">// У Гэндальф индекс 1 в Бильбо,Гэндальф, Назгул</p>
                      <p className="expanding__paragraph-code">// У Назгул индекс 2 в Бильбо, Гэндальф, Назгул</p>
                    </code>
                  </pre>
                </div>
              </div>

              <div className="expanding__content">
                <div className="expanding__pre">
                  <h2 className="expanding__heading">Конвертируем цикл for в forEach</h2>
                  <p className="expanding__paragraph-code">const items = [ 'item1', 'item2', 'item3' ]</p>
                  <p className="expanding__paragraph-code">const copy = [ ]</p>
                  <p className="expanding__paragraph-code">-</p>
                  <p className="expanding__paragraph-code">// до</p>
                  <p className="expanding__paragraph-code">for ( let i = 0; i &lt; items.length; i++ ) &#123;</p>
                  <p className="expanding__paragraph-code">copy.push( items[ i ] )</p>
                  <p className="expanding__paragraph-code">&#125;</p>
                  <p className="expanding__paragraph-code">-</p>
                  <p className="expanding__paragraph-code">// после</p>
                  <p className="expanding__paragraph-code">items.forEach(function(item)&#123;</p>
                  <p className="expanding__paragraph-code">copy.push(item)</p>
                  <p className="expanding__paragraph-code">&#125;)</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ForEach;
