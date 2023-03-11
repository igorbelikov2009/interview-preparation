/* eslint-disable react/jsx-no-comment-textnodes */
import { motion, AnimatePresence } from "framer-motion"; // анимация
import React, { useState } from "react";
import ExpandingHeading from "../general/expanding/ExpandingPanel/ExpandingHeading";
import "../../styles/dist/expanding.css";
import LinkInfo from "../general/LinkInfo/LinkInfo";

const Map = () => {
  const [isVisible, setVisible] = useState(false);

  const [title] = useState(
    "Array.map() - метод создает новый массив из результатов вызванной функции для каждого элемента массива."
  );
  const descriptions: string[] = [
    "Метод вызывает функцию для каждого элемента массива и возвращает массив результатов выполнения этой функции. ",
    "Возвращаемое значение: новый массив, где каждый элемент является результатом callback функции.",
    "Синтаксис: ",
    " let result = arr.map ( function ( item, index, array ) { ",
    " // возвращается новое значение вместо элемента ",
    " });",
    "Параметры: ",
  ];
  const descriptionsBefore: string[] = [
    "function - функция, вызываемая для каждого элемента массива arr. Каждый раз, когда callback выполняется, возвращаемое значение добавляется в new_array. Функция callback, создающая элемент в новом массиве, принимает три аргумента: ",
    "item - текущий обрабатываемый элемент массива. ",
    "index - (необязательный) индекс текущего обрабатываемого элемента в массиве. ",
    "array - (необязательный) массив, по которому осуществляется проход.",
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
                  title="Array.prototype.map()"
                  href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/map"
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
                  <h2 className="expanding__heading">Например, здесь мы преобразуем каждый элемент в его длину:</h2>
                  <p className="expanding__paragraph-code">
                    let lengths = [ "Бильбо", "Гэндальф", "Назгул" ].map( item =&gt; item.length );
                  </p>
                  <p className="expanding__paragraph-code">alert ( lengths ); // 6,8,6</p>
                </div>
              </div>

              <div className="expanding__content">
                <div className="expanding__pre">
                  <h2 className="expanding__heading">
                    Пример: создание массива чисел из квадратных корней существующего массива.
                  </h2>
                  <p className="expanding__paragraph">
                    Следующий код берёт массив чисел и создаёт новый массив, содержащий квадратные корни чисел из
                    первого массива.
                  </p>
                  <p className="expanding__paragraph-code">const numbers = [ 1, 4, 9 ];</p>
                  <p className="expanding__paragraph-code">const roots = numbers.map ( Math.sqrt );</p>
                  <p className="expanding__paragraph-code">
                    // создали массив roots, равный: [ 1, 2, 3 ], а numbers остался прежним [ 1, 4, 9 ]
                  </p>
                </div>
              </div>

              <div className="expanding__content">
                <div className="expanding__pre">
                  <h2 className="expanding__heading">
                    Пример: создание массива чисел с использованием функции, содержащей аргумент
                  </h2>
                  <p className="expanding__paragraph">
                    Следующий код показывает, как работает создание массива, когда функция требует один аргумент.
                    Аргумент будет автоматически присваиваться каждому элементу массива, когда map проходит по
                    оригинальному массиву.
                  </p>
                  <p className="expanding__paragraph-code">const numbers = [ 1, 4, 9 ];</p>
                  <p className="expanding__paragraph-code">const doubles = numbers.map (( num ) =&gt; num * 2 );</p>
                  <p className="expanding__paragraph-code">
                    // теперь doubles равен [ 2, 8, 18 ], а numbers всё ещё равен [ 1, 4, 9 ]
                  </p>
                </div>
              </div>

              <div className="expanding__content">
                <div className="expanding__pre">
                  <h2 className="expanding__heading">Пример: использование map для переворачивания строки</h2>
                  <p className="expanding__paragraph-code">const string = '12345';</p>
                  <p className="expanding__paragraph-code">
                    const reversed = Array.prototype.map.call ( string, ( x ) =&gt; x ).reverse().join( '' );
                  </p>
                  <p className="expanding__paragraph-code">// reversed равен '54321'</p>
                  <p className="expanding__paragraph-code">
                    // Бонус: используйте '===' для проверки того, является ли строка палиндромом
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default Map;
