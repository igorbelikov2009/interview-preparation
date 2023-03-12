import { motion, AnimatePresence } from "framer-motion"; // анимация
import React, { useState } from "react";
import ExpandingHeading from "../general/expanding/ExpandingPanel/ExpandingHeading";
import "../../styles/dist/expanding.css";
import LinkInfo from "../general/LinkInfo/LinkInfo";

const Reduce = () => {
  const [isVisible, setVisible] = useState(false);

  const [title] = useState(
    "Методы reduce() и reduceRight() вычисляют одно значение на основе всего массива (суммирование, умножение и т.д...). "
  );
  const descriptions: string[] = [
    "array.reduce() - используется для вычисления какого-нибудь единого значения на основе всех элементов массива (суммирование всех элементов, умножение друг на друга и другое). В результате на выходе получится одно значение.",
    "Значение, возвращённое методом reduce(), будет равным последнему результату выполнения колбэк-функции. Метод reduce() применяет функцию reducer к каждому элементу массива (слева-направо), возвращая одно результирующее значение. Массив, к которому применяется метод, остаётся неизменным.",
    "Синтаксис:",
    "let value = arr.reduce( function ( accumulator, item, index, array ) { // ... }, [ initial ]);",
    "Функция применяется по очереди ко всем элементам массива и «переносит» свой результат на следующий вызов.",
    "Аргументы: ",
  ];
  const descriptionsBefore: string[] = [
    "accumulator – результат предыдущего вызова этой функции, равен initial при первом вызове (если передан initial),",
    "item – очередной элемент массива,",
    "index – его позиция,",
    "array – сам массив.",
    "При вызове функции результат её предыдущего вызова передаётся на следующий вызов в качестве первого аргумента.",
    "Так, первый аргумент является по сути аккумулятором, который хранит объединённый результат всех предыдущих вызовов функции. По окончании он становится результатом reduce.",
    "При отсутствии initial в качестве первого значения берётся первый элемент массива, а перебор стартует со второго. Таблица вычислений будет с вычетом первой строки.",
    "Если массив пуст, вызов reduce без начального значения выдаст ошибку.",
    "Поэтому рекомендуется всегда указывать начальное значение. ",
    "Метод array.reduceRight() работает аналогично, но проходит по массиву справа налево. ",
  ];

  const expanderHandler = () => {
    setVisible((prev) => !prev);
  };
  // ==============================================
  //// Тут мы получим средний возраст пользователей
  //   const arr = [
  //     { name: "Вася", age: 25 },
  //     { name: "Петя", age: 30 },
  //     { name: "Маша", age: 29 },
  //   ];

  //   const getAverageAge = (users: any[]) => {
  //     return users.reduce((prev, user) => prev + user.age, 0) / users.length;
  //   };

  //   console.log(getAverageAge(arr)); // 28

  // ==============================================
  //// Сумма значений в массиве объектов
  //   const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];
  //   const sum = objects.reduce((accumulator, item) => accumulator + item.x, 0);
  //   console.log(sum); // 6

  //   // ==============================================
  //   //   Создать из массива массивов один массив
  //   const arrayOfArrays: number[][] = [
  //     [0, 1],
  //     [2, 3],
  //     [4, 5],
  //   ];
  //   const flattened = arrayOfArrays.reduce((accumulator, item) => accumulator.concat(item), []);
  //   console.log(flattened); // [0, 1, 2, 3, 4, 5]

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
                  title="array.reduce()"
                  href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce"
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
                  <h2 className="expanding__heading">Тут мы получим сумму всех элементов массива одной строкой: </h2>
                  <p className="expanding__paragraph-code">let arr = [ 1, 2, 3, 4, 5 ]; </p>
                  <p className="expanding__paragraph-code">
                    let result = arr.reduce((sum, current) =&gt; sum + current, 0);
                  </p>
                  <p className="expanding__paragraph-code">alert(result); // 15</p>
                </div>
              </div>

              <div className="expanding__content">
                <div className="expanding__pre">
                  <h2 className="expanding__heading">Тут мы получим средний возраст пользователей</h2>
                  <p className="expanding__paragraph-code">const arr = [</p>
                  <p className="expanding__paragraph-code">&#123; name: "Вася", age: 25 &#125;,</p>
                  <p className="expanding__paragraph-code">&#123; name: "Петя", age: 30 &#125;,</p>
                  <p className="expanding__paragraph-code">&#123; name: "Маша", age: 29 &#125;,</p>
                  <p className="expanding__paragraph-code">];</p>
                  <p className="expanding__paragraph-code"> const getAverageAge = (users: any[]) =&gt; &#123;</p>
                  <p className="expanding__paragraph-code">
                    return users.reduce((prev, user) =&gt; prev + user.age, 0) / users.length;
                  </p>
                  <p className="expanding__paragraph-code"> &#125;;</p>
                  <p className="expanding__paragraph-code">console.log(getAverageAge(arr)); // 28</p>
                </div>
              </div>

              <div className="expanding__content">
                <div className="expanding__pre">
                  <h2 className="expanding__heading">Сумма значений в массиве объектов</h2>
                  <p className="expanding__paragraph">
                    Чтобы суммировать значения, содержащиеся в массиве объектов, вы должны указать initialValue, чтобы
                    каждый элемент проходил через вашу функцию. Без initialValue будет ошибка.
                  </p>
                  <p className="expanding__paragraph-code">
                    const objects = [&#123; x: 1 &#125;, &#123; x: 2 &#125;, &#123; x: 3 &#125;];
                  </p>
                  <p className="expanding__paragraph-code">
                    const sum = objects.reduce((accumulator, item) =&gt; accumulator + item.x, 0);
                  </p>
                  <p className="expanding__paragraph-code"> console.log(sum); // 6</p>
                </div>
              </div>

              <div className="expanding__content">
                <div className="expanding__pre">
                  <h2 className="expanding__heading">Создать из массива массивов один массив</h2>
                  <p className="expanding__paragraph-code">const arrayOfArrays: number[ ] [ ] = [</p>
                  <p className="expanding__paragraph-code">[ 0, 1 ],</p>
                  <p className="expanding__paragraph-code">[ 2, 3 ],</p>
                  <p className="expanding__paragraph-code">[ 4, 5 ],</p>
                  <p className="expanding__paragraph-code">];</p>
                  <p className="expanding__paragraph-code">
                    const flattened = arrayOfArrays.reduce (( accumulator, item ) =&gt; accumulator.concat ( item ), [
                    ]);
                  </p>
                  <p className="expanding__paragraph-code">console.log(flattened); // [0, 1, 2, 3, 4, 5]</p>
                </div>
              </div>

              <div className="expanding__content">
                <div className="expanding__pre">
                  <h2 className="expanding__heading">x</h2>
                  <p className="expanding__paragraph-code">x</p>
                  <p className="expanding__paragraph-code">x</p>
                  <p className="expanding__paragraph-code">-</p>
                  <p className="expanding__paragraph-code">x</p>
                  <p className="expanding__paragraph-code">x</p>
                  <p className="expanding__paragraph-code">x</p>
                  <p className="expanding__paragraph-code">x</p>
                  <p className="expanding__paragraph-code">-</p>
                  <p className="expanding__paragraph-code">x</p>
                  <p className="expanding__paragraph-code">x</p>
                </div>
              </div>

              <div className="expanding__content">
                <div className="expanding__pre">
                  <h2 className="expanding__heading">x</h2>
                  <p className="expanding__paragraph-code">x</p>
                  <p className="expanding__paragraph-code">x</p>
                  <p className="expanding__paragraph-code">-</p>
                  <p className="expanding__paragraph-code">x</p>
                  <p className="expanding__paragraph-code">x</p>
                  <p className="expanding__paragraph-code">x</p>
                  <p className="expanding__paragraph-code">x</p>
                  <p className="expanding__paragraph-code">-</p>
                  <p className="expanding__paragraph-code">x</p>
                  <p className="expanding__paragraph-code">x</p>
                </div>
              </div>

              <div className="expanding__content">
                <div className="expanding__pre">
                  <h2 className="expanding__heading">x</h2>
                  <p className="expanding__paragraph-code">x</p>
                  <p className="expanding__paragraph-code">x</p>
                  <p className="expanding__paragraph-code">-</p>
                  <p className="expanding__paragraph-code">x</p>
                  <p className="expanding__paragraph-code">x</p>
                  <p className="expanding__paragraph-code">x</p>
                  <p className="expanding__paragraph-code">x</p>
                  <p className="expanding__paragraph-code">-</p>
                  <p className="expanding__paragraph-code">x</p>
                  <p className="expanding__paragraph-code">x</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Reduce;
