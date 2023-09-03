/* eslint-disable react/jsx-no-comment-textnodes */
import { motion, AnimatePresence } from "framer-motion"; // анимация
import React, { useState } from "react";
import ExpandingHeading from "../general/expanding/ExpandingPanel/ExpandingHeading";
import "../../styles/expanding.scss";
import LinkInfo from "../general/LinkInfo/LinkInfo";

const Filter = () => {
  const [isVisible, setVisible] = useState(false);

  const [title] = useState(
    "Array.filter() - метод создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции."
  );
  const descriptions: string[] = [
    "Метод filter() вызывает переданную функцию callback один раз для каждого элемента массива, и создаёт новый массив со всеми значениями, прошедшими проверку. Элементы массива, не прошедшие проверку функцией callback, просто пропускаются и не включаются в новый массив.",
    "Метод filter() не изменяет массив, для которого он был вызван, метод создаёт новый массив",
    "Синтаксис: ",
    "// Стрелочная функция ",
    "filter (( item ) => { ... } ) ",
    "filter (( item, index ) => { ... } ) ",
    "filter (( item, index, array ) => { ... } ) ",
    "- ",
    "// Колбэк-функция ",
    "filter ( callbackFn ) ",
    "filter ( callbackFn, thisArg ) ",
    "- ",
    "// Встроенная колбэк-функция ",
    "filter ( function callbackFn ( item ) { ... }) ",
    "filter ( function callbackFn( item, index ) { ... }) ",
    "filter ( function callbackFn( item, index, array ) { ... }) ",
    "filter ( function callbackFn( item, index, array ) { ... }, thisArg)",
    "Возвращаемое значение: вернётся новый массив с элементами, которые прошли проверку. Если ни один элемент не прошёл проверку, то будет возвращён пустой массив. ",
    "Параметры: ",
  ];
  const descriptionsBefore: string[] = [
    "callbackFn - функция, которая будет вызвана для проверки каждого элемента массива. Если функция возвращает true, то элемент остаётся в массиве, если false, то удаляется. ",
    "Принимает три аргумента: ",
    "item - текущий, обрабатываемый элемент в массиве. ",
    "index - (необязательный) индекс текущего, обрабатываемого элемента в массиве. ",
    "array - (необязательный) обрабатываемый массив, на котором был вызван метод filter(). ",
    "thisArg - (необязательный) значение, используемое в качестве this при вызове колбэк-функции callbackFn. ",
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
                  title="Array.prototype.filter()"
                  href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/filter"
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
                  <h2 className="expanding__heading">Например: </h2>
                  <p className="expanding__paragraph-code">let users = [</p>
                  <p className="expanding__paragraph-code">&#123; id: 1, name: "Вася" &#125;,</p>
                  <p className="expanding__paragraph-code">&#123; id: 2, name: "Петя" &#125;,</p>
                  <p className="expanding__paragraph-code">&#123; id: 3, name: "Маша" &#125;</p>
                  <p className="expanding__paragraph-code">];</p>
                  <p className="expanding__paragraph-code">
                    // возвращает массив, состоящий из двух первых пользователей
                  </p>
                  <p className="expanding__paragraph-code">
                    let someUsers = users.filter (( item ) =&gt; item.id &lt; 3 );
                  </p>
                  <p className="expanding__paragraph-code">
                    alert ( someUsers ); // [ &#123; id: 1, name: "Вася" &#125;, &#123; id: 2, name: "Петя" &#125;, ]
                  </p>
                </div>
              </div>

              <div className="expanding__content">
                <div className="expanding__pre">
                  <h2 className="expanding__heading">Фильтрация всех маленьких значений</h2>
                  <p className="expanding__paragraph">
                    Следующий пример использует метод filter() для создания отфильтрованного массива, все элементы
                    которого больше или равны 10, а те элементы, которые меньше 10, будут удалены.
                  </p>
                  <p className="expanding__paragraph-code">function isBigEnough( value ) &#123; </p>
                  <p className="expanding__paragraph-code">return value &gt;= 10;</p>
                  <p className="expanding__paragraph-code">&#125; </p>
                  <p className="expanding__paragraph-code">
                    let filtered = [ 12, 5, 8, 130, 44 ].filter( isBigEnough );
                  </p>
                  <p className="expanding__paragraph-code">// массив filtered теперь содержит [ 12, 130, 44 ]</p>
                </div>
              </div>

              <div className="expanding__content">
                <div className="expanding__pre">
                  <h2 className="expanding__heading">Найти все простые числа в массиве</h2>
                  <p className="expanding__paragraph">Следующий пример возвращает все простые числа в массиве:</p>
                  <p className="expanding__paragraph-code">function isPrime ( num ) &#123; </p>
                  <p className="expanding__paragraph-code"> for ( let i = 2; num &gt; i; i++ ) &#123; </p>
                  <p className="expanding__paragraph-code"> if ( num % i == 0 ) &#123; </p>
                  <p className="expanding__paragraph-code"> return false; </p>
                  <p className="expanding__paragraph-code">&#125; &#125;</p>
                  <p className="expanding__paragraph-code">return num &gt; 1;</p>
                  <p className="expanding__paragraph-code">&#125;</p>
                  <p className="expanding__paragraph-code">-</p>
                  <p className="expanding__paragraph-code">
                    const array = [ -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ];
                  </p>
                  <p className="expanding__paragraph-code">
                    console.log( array.filter ( isPrime )); // [ 2, 3, 5, 7, 11, 13 ]
                  </p>
                </div>
              </div>

              <div className="expanding__content">
                <div className="expanding__pre">
                  <h2 className="expanding__heading">Фильтрация неверных записей в JSON</h2>
                  <p className="expanding__paragraph">
                    В следующем примере метод filter() используется для создания отфильтрованного JSON-объекта, все
                    элементы которого содержат ненулевое числовое поле id.
                  </p>
                  <p className="expanding__paragraph-code">
                    let arr = [ &#123; id: 15 &#125;, &#123; id: -1 &#125;, &#123; id: 0 &#125;, &#123; id: 3 &#125;,
                    &#123; id: 12.2 &#125;, &#123; &#125;, &#123; id: null &#125;, &#123; id: NaN &#125;, &#123; id:
                    'undefined' &#125; ]
                  </p>
                  <p className="expanding__paragraph-code">-</p>
                  <p className="expanding__paragraph-code">let invalidEntries = 0</p>
                  <p className="expanding__paragraph-code">-</p>
                  <p className="expanding__paragraph-code">function filterByID ( item ) &#123; </p>
                  <p className="expanding__paragraph-code">
                    {" "}
                    if ( Number.isFinite ( item.id ) && item.id !== 0 ) &#123;{" "}
                  </p>
                  <p className="expanding__paragraph-code">return true</p>
                  <p className="expanding__paragraph-code">&#125;</p>
                  <p className="expanding__paragraph-code">invalidEntries++</p>
                  <p className="expanding__paragraph-code">return false;</p>
                  <p className="expanding__paragraph-code">&#125;</p>
                  <p className="expanding__paragraph-code">-</p>
                  <p className="expanding__paragraph-code">let arrByID = arr.filter ( filterByID )</p>
                  <p className="expanding__paragraph-code">console.log ( 'Отфильтрованный массив\n', arrByID )</p>
                  <p className="expanding__paragraph-code">// Отфильтрованный массив</p>
                  <p className="expanding__paragraph-code">
                    // [ &#123; id: 15 &#125;, &#123; id: -1 &#125;, &#123; id: 3 &#125;, &#123; id: 12.2 &#125; ]
                  </p>
                  <p className="expanding__paragraph-code">
                    console.log( 'Количество некорректных элементов = ', invalidEntries )
                  </p>
                  <p className="expanding__paragraph-code">// Количество некорректных элементов = 5 </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Filter;
