/* eslint-disable react/jsx-no-comment-textnodes */
import { motion, AnimatePresence } from "framer-motion"; // анимация
import React, { useState } from "react";
import ExpandingHeading from "../general/expanding/ExpandingPanel/ExpandingHeading";
import "../../styles/expanding.scss";
import LinkInfo from "../general/LinkInfo/LinkInfo";

const Find = () => {
  const [isVisible, setVisible] = useState(false);

  const [title] = useState(
    "Array.find() - метод позволяет найти первый (один) объект в массиве по заданному условию, иначе возвращается undefined. findLastIndex() и findIndex()"
  );
  const descriptions: string[] = [
    "Array.find() - метод используется для получения значения первого элемента массива, удовлетворяющего заданному условию, переданному в callback функции. В противном случае возвращается undefined.",
    "Он проверяет все элементы массива и выводит первый элемент, удовлетворяющий условию. Эта функция не будет работать с функцией, имеющей пустые элементы массива, а также не изменяет исходный массив. ",
    "Метод find() вызывает переданную функцию callback по очереди один раз для каждого элемента, присутствующего в массиве, до тех пор, пока она не вернёт true. Если такой элемент найден, метод find() немедленно вернёт значение этого элемента. В противном случае, метод find() вернёт undefined.",
    "Функция callback вызывается с тремя аргументами: значением элемента, индексом элемента и массивом, по которому осуществляется проход. ",
    "Метод find() не изменяет массив, для которого он был вызван. ",
    "Синтаксис:",
    "let result = array.find(callback(item, index, array) {",
    " // если true - возвращается текущий элемент и перебор прерывается ",
    " // если все итерации оказались ложными, возвращается undefined ",
    "}); ",
    "Параметры: ",
  ];
  const descriptionsBefore: string[] = [
    "callback - функция, вызывающаяся по очереди для каждого значения в массиве, принимает три аргумента:",
    "item – очередной элемент. ",
    "index – его индекс. ",
    "array – сам массив. ",
    "Если item находится, то поиск прерывается и возвращается item. Если ничего не найдено, возвращается undefined. ",
    "Возвращаемое значение - значение элемента из массива, если элемент прошёл проверку, иначе undefined. ",
    "В реальной жизни массивы объектов – обычное дело, поэтому метод find() крайне полезен. ",
    "У метода arr.findIndex() такой же синтаксис, но он возвращает индекс, на котором был найден элемент, а не сам элемент. Значение -1 возвращается, если ничего не найдено. ",
    "Метод arr.findLastIndex() похож на findIndex(), но ищет справа налево, наподобие lastIndexOf(). ",
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
                  title="Array.prototype.find()"
                  href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/find"
                />
                <LinkInfo
                  title="Array.prototype.findIndex()"
                  href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex"
                />
                <LinkInfo
                  title="Array.prototype.findLastIndex()"
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLastIndex"
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
                  <p className="expanding__paragraph">
                    У нас есть массив пользователей, каждый из которых имеет поля id и name. Найдем пользователя с id ==
                    1:
                  </p>
                  <p className="expanding__paragraph-code">let users = [</p>
                  <p className="expanding__paragraph-code">&#123; id: 1, name: "Вася" &#125;,</p>
                  <p className="expanding__paragraph-code">&#123; id: 2, name: "Петя" &#125;,</p>
                  <p className="expanding__paragraph-code">&#123; id: 3, name: "Маша" &#125;</p>
                  <p className="expanding__paragraph-code">];</p>
                  <p className="expanding__paragraph-code">let user = users.find ( item =&gt; item.id == 1 );</p>
                  <p className="expanding__paragraph-code">alert ( user.name ); // Вася</p>
                  <p className="expanding__paragraph-code">
                    Обратите внимание, что в данном примере мы передаём методу find() функцию item =&gt; item.id == 1 с
                    одним аргументом. Это типично, другие аргументы этой функции используются редко.
                  </p>
                </div>
              </div>

              <div className="expanding__content">
                <div className="expanding__pre">
                  <p className="expanding__paragraph">
                    У метода arr.findIndex() такой же синтаксис, но он возвращает индекс, на котором был найден элемент,
                    а не сам элемент. Значение -1 возвращается, если ничего не найдено.
                  </p>
                  <p className="expanding__paragraph">
                    Метод arr.findLastIndex() похож на findIndex(), но ищет справа налево, наподобие lastIndexOf().
                  </p>
                  <h2 className="expanding__heading">Например:</h2>
                  <p className="expanding__paragraph-code">let users = [</p>
                  <p className="expanding__paragraph-code">&#123; id: 1, name: "Вася" &#125;,</p>
                  <p className="expanding__paragraph-code">&#123; id: 2, name: "Петя" &#125;,</p>
                  <p className="expanding__paragraph-code">&#123; id: 3, name: "Маша" &#125;,</p>
                  <p className="expanding__paragraph-code">&#123; id: 4, name: "Вася" &#125;</p>
                  <p className="expanding__paragraph-code">];</p>
                  <p className="expanding__paragraph-code">// Найти индекс первого Васи</p>
                  <p className="expanding__paragraph-code">
                    alert( users.findIndex ( user =&gt; user.name == 'Вася')); // 0
                  </p>
                  <p className="expanding__paragraph-code">// Найти индекс последнего Васи</p>
                  <p className="expanding__paragraph-code">
                    alert( users.findLastIndex ( user =&gt; user.name == 'Вася' )); // 3
                  </p>
                </div>
              </div>

              <div className="expanding__content">
                <div className="expanding__pre">
                  <h2 className="expanding__heading">Пример: поиск простого числа в массиве</h2>
                  <p className="expanding__paragraph">
                    Следующий пример находит в массиве положительных чисел элемент, являющийся простым числом (либо
                    возвращает undefined, если в массиве нет простых чисел).
                  </p>
                  <p className="expanding__paragraph-code">function isPrime( element, index, array ) &#123; </p>
                  <p className="expanding__paragraph-code">var start = 2;</p>
                  <p className="expanding__paragraph-code">while ( start &lt;= Math.sqrt ( element )) &#123; </p>
                  <p className="expanding__paragraph-code">if ( element % start++ &lt; 1 ) &#123; </p>
                  <p className="expanding__paragraph-code">return false;</p>
                  <p className="expanding__paragraph-code">&#125;</p>
                  <p className="expanding__paragraph-code">&#125;</p>
                  <p className="expanding__paragraph-code">return element &gt; 1;</p>
                  <p className="expanding__paragraph-code">&#125;</p>
                  <p className="expanding__paragraph-code">
                    console.log([ 4, 6, 8, 12 ].find( isPrime )); // undefined, не найдено
                  </p>
                  <p className="expanding__paragraph-code">console.log([ 4, 5, 8, 12 ].find( isPrime )); // 5</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Find;
