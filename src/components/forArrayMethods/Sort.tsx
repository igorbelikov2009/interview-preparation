/* eslint-disable react/jsx-no-comment-textnodes */
import { motion, AnimatePresence } from "framer-motion"; // анимация
import React, { useState } from "react";
import ExpandingHeading from "../general/expanding/ExpandingPanel/ExpandingHeading";
import "../../styles/expanding.scss";

const Sort = () => {
  const [isVisible, setVisible] = useState(false);

  const [title] = useState(
    "Array.sort() сортирует массив на месте, меняя в нём порядок элементов. Array.reverse() сортирует в обратном порядке."
  );
  const descriptions: string[] = [
    "Сортировка массива выполняется с помощью метода sort(). По умолчанию он сортирует массив в порядке следования символов в кодировке Unicode.",
    "По умолчанию, элементы сортируются как строки. Буквально, элементы преобразуются в строки при сравнении. Для строк применяется лексикографический порядок, и действительно выходит, что '2' > '15'. ",
  ];
  const descriptionsBefore: string[] = [
    "Лучше использовать стрелочные функции",
    "Сравнение чисел: arr.sort( (a, b) => a - b ); ",
    "Для сравнения строк используйте localeCompare: const sorted = ( array.sort( (a, b) => a.localeCompare(b) ) );",
    "Объекты могут быть отсортированы по значению одного из своих свойств: ",
    "const sorted = array.sort(( a, b ) => a.name - b.name ) // работает;",
    "const sorted = items.sort((a, b) => a.name.localeCompare(b.name)) // работает;",
    "const sorted = array.sort( (a, b) => a.name > b.name ? 1 : -1) // работает;",
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
                  <h2 className="expanding__heading">Сортировка массива по умолчанию: </h2>
                  <p className="expanding__paragraph">
                    По умолчанию метод sort() сортирует массив в порядке следования символов в кодировке Unicode.
                  </p>
                  <p className="expanding__paragraph-code">
                    const auto = [ 'Mazda', 'Audi', 'Toyota', 'Nissan', 'Tesla' ];
                  </p>
                  <p className="expanding__paragraph-code">// сортируем массив</p>
                  <p className="expanding__paragraph-code">
                    auto.sort(); // [ 'Audi', 'Mazda', 'Nissan', 'Tesla', 'Toyota' ]
                  </p>
                </div>
              </div>

              <div className="expanding__content">
                <div className="expanding__pre">
                  <h2 className="expanding__heading">Сортировка массива в обратном порядке:</h2>
                  <p className="expanding__paragraph-code">
                    auto.sort().reverse(); // [ 'Toyota', 'Tesla', 'Nissan', 'Mazda', 'Audi' ]
                  </p>
                </div>
              </div>

              <div className="expanding__content">
                <div className="expanding__pre">
                  <h2 className="expanding__heading">Используйте localeCompare для строк</h2>
                  <p className="expanding__paragraph">Например, отсортируем несколько стран на немецком языке:</p>
                  <p className="expanding__paragraph-code">let countries = [ 'Österreich', 'Andorra', 'Vietnam' ];</p>
                  <p className="expanding__paragraph-code">
                    alert( countries.sort( (a, b) =&gt; a &gt; b ? 1 : -1) ); // НЕПРАВИЛЬНОЕ Сравнение
                  </p>
                  <p className="expanding__paragraph-code">
                    alert( countries.sort( (a, b) =&gt; a.localeCompare(b) ) ); // Andorra,Österreich,Vietnam
                    (правильно!)
                  </p>
                </div>
              </div>

              <div className="expanding__content">
                <div className="expanding__pre">
                  <h2 className="expanding__heading">Сортировка чисел</h2>
                  <p className="expanding__paragraph-code">var numbers = [4, 2, 5, 1, 3];</p>
                  <p className="expanding__paragraph-code">numbers.sort(( a, b ) =&gt; a - b) </p>
                  <p className="expanding__paragraph-code">console.log(numbers); // [ 1, 2, 3, 4, 5 ]</p>
                  <p className="expanding__paragraph-code">numbers.sort(( a, b ) =&lt; a - b) </p>
                  <p className="expanding__paragraph-code">console.log(numbers); // [ 5, 4, 3, 2, 1 ]</p>
                </div>
              </div>

              <div className="expanding__content">
                <div className="expanding__pre">
                  <h2 className="expanding__heading">
                    Объекты могут быть отсортированы по значению одного из своих свойств.
                  </h2>
                  <p className="expanding__paragraph-code">
                    var items = [ &#123; name: 'Edward', value: 21 &#125;, &#123; name: 'Sharpe', value: 37 &#125;,
                    &#123; name: 'And', value: 45 &#125;, &#123; name: 'The', value: -12 &#125; ]
                  </p>
                  <p className="expanding__paragraph-code">Сортировка объектов по свойству name</p>
                  <p className="expanding__paragraph-code">items.sort( (a, b) =&lt; a.name &lt; b.name ? 1 : -1)</p>
                  <p className="expanding__paragraph-code">Сортировка объектов по свойству value</p>
                  <p className="expanding__paragraph-code">items.sort( (a, b) =&lt; a.value &lt; b.value ? 1 : -1)</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default Sort;
