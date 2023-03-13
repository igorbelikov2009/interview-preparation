/* eslint-disable react/jsx-no-comment-textnodes */
import { motion, AnimatePresence } from "framer-motion"; // анимация
import React, { useState } from "react";
import ExpandingHeading from "../general/expanding/ExpandingPanel/ExpandingHeading";
import "../../styles/dist/expanding.css";
import LinkInfo from "../general/LinkInfo/LinkInfo";

const Some = () => {
  const [isVisible, setVisible] = useState(false);

  const [title] = useState(
    "Метод some() позволяет проверить: соответствует ли, по крайней мере один, элемент в массиве условию, заданному в передаваемой функции."
  );
  const descriptions: string[] = [
    "Возвращаемое значение метода будет логическое значение true, если функция обратного вызова возвращает значение true (найден элемент который соответствует заданному условию), в противном случае вернет логическое значение false (все элементы массива не соответствуют переданному условию).",
    "Функция обратного вызова, переданная в качестве параметра метода some(), не будет вызвана для удалённых или пропущенных элементов массива. Метод some() не изменяет массив для которого он был вызван. ",
    "синтаксис: ",
    "// только с callback функцией ",
    "array.some( function(item , index, arr ) ); ",
    "// с callback и с использованием объекта, на который может ссылаться ключевое слово this ",
    "array.some( callback( item, index, arr ), thisArg ) ",
    "Параметры:",
  ];
  const descriptionsBefore: string[] = [
    "callback - функция проверки каждого элемента, принимает три аргумента: ",
    "item - текущий обрабатываемый элемент массива.",
    "index - (необязательный) индекс текущего обрабатываемого элемента массива.",
    "array - (необязательный) массив, по которому осуществляется проход.",
    "thisArg - (необязательный) значение, используемое в качестве this при выполнении функции callback. ",
  ];

  const expanderHandler = () => {
    setVisible((prev) => !prev);
  };

  // //
  // const arrNumeric = [12, 5, 8, 130, 44];
  // console.log(arrNumeric.some((item) => item >= 10)); // true
  // console.log(arrNumeric.some((elem) => elem <= 10)); // true

  // const arrNumeric2 = [12, 54, 18, 130, 44];
  // console.log(arrNumeric2.some((elem) => elem <= 10)); // false

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
                  title="array.some()"
                  href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/some"
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
                  <h2 className="expanding__heading">Проверяем наличие в массиве элемента, который больше 10.</h2>
                  <p className="expanding__paragraph-code"> const arrNumeric = [ 12, 5, 8, 130, 44 ];</p>
                  <p className="expanding__paragraph-code">
                    console.log(arrNumeric.some(( item ) =&gt; item &gt;= 10 )); // true
                  </p>
                </div>
              </div>

              <div className="expanding__content">
                <div className="expanding__pre">
                  <h2 className="expanding__heading">Проверяем наличие в массиве элемента, который меньше 10.</h2>
                  <p className="expanding__paragraph-code"> const arrNumeric = [ 12, 5, 8, 130, 44 ];</p>
                  <p className="expanding__paragraph-code">
                    console.log(arrNumeric.some((elem) =&gt; elem &lt;= 10)); // true
                  </p>
                </div>
              </div>

              <div className="expanding__content">
                <div className="expanding__pre">
                  <h2 className="expanding__heading">Проверяем наличие в массиве элемента, который меньше 10.</h2>
                  <p className="expanding__paragraph-code">const arrNumeric2 = [ 12, 54, 18, 130, 44 ];</p>
                  <p className="expanding__paragraph-code">
                    console.log(arrNumeric2.some((elem) =&gt; elem &lt;= 10)); // false{" "}
                  </p>
                </div>
              </div>

              <div className="expanding__content">
                <div className="expanding__pre">
                  <h2 className="expanding__heading">
                    Проверяем: содержится ли элемент с определенным значением в массиве:
                  </h2>
                  <p className="expanding__paragraph">
                    // инициализируем переменную, содержащую массив числовых значений
                  </p>
                  <p className="expanding__paragraph-code">const arr = [ 10, 20, 30, 40 ];</p>
                  <p className="expanding__paragraph-code">
                    // создаём функцию, в которой проверяем: соответствует ли текущий элемент значению 30:
                  </p>
                  <p className="expanding__paragraph-code">function checkNumber( elem ) &#123; </p>
                  <p className="expanding__paragraph-code">return elem == 30;</p>
                  <p className="expanding__paragraph-code">&#125; </p>
                  <p className="expanding__paragraph">
                    // проверяем: соответствует ли хотя бы один элемент в массиве условию, заданному в передаваемой
                    функции
                  </p>
                  <p className="expanding__paragraph-code">arr.some( checkNumber ) // возвращаемое значение true</p>
                  <p className="expanding__paragraph-code">-</p>
                  <p className="expanding__paragraph-code">// аналогично с использованием стрелочной функции</p>
                  <p className="expanding__paragraph-code">
                    arr.some( currentValue =&gt; currentValue &gt; 100 ); // возвращаемое значение false
                  </p>
                  <p className="expanding__paragraph-code">
                    arr.some( currentValue =&gt; currentValue &lt; 100 ); // возвращаемое значение true
                  </p>
                </div>
              </div>

              <div className="expanding__content">
                <div className="expanding__pre">
                  <h2 className="expanding__heading">Использование второго аргумента thisArg :</h2>
                  <LinkInfo title="Пример использования" href="https://basicweb.ru/javascript/js_array_some.php" />
                  <p className="expanding__paragraph">
                    В следующем примере мы рассмотрим использование второго аргумента метода some(), который указывает
                    на объект, на который мы можем ссылаться с использованием ключевого слова this внутри функции
                    обратного вызова:
                  </p>
                  <p className="expanding__paragraph">
                    // инициализируем переменную, содержащую массив числовых значений
                  </p>
                  <p className="expanding__paragraph-code">const numbers = [10, 20, 30, 40];</p>
                  <p className="expanding__paragraph-code">
                    // инициализируем объект с методом checkNumber(), который принимает значение и проверяет его на
                    равенство == 40
                  </p>
                  <p className="expanding__paragraph-code">const myObject = &#123;</p>
                  <p className="expanding__paragraph-code">checkNumber: function( currentValue ) &#123;</p>
                  <p className="expanding__paragraph-code">return currentValue == 40;</p>
                  <p className="expanding__paragraph-code">&#125; &#125;;</p>
                  <p className="expanding__paragraph-code">
                    // проверяем: соответствует хотя бы один элемент в массива numbers заданному условию.
                  </p>
                  <p className="expanding__paragraph-code">numbers.some(</p>
                  <p className="expanding__paragraph-code"> function( currentValue ) &#123;</p>
                  <p className="expanding__paragraph-code">
                    // возвращаемое значение метода checkNumber объекта myObject
                  </p>
                  <p className="expanding__paragraph-code">return this.checkNumber( currentValue );</p>
                  <p className="expanding__paragraph-code">
                    // объект, на который мы ссылаемся с использованием ключевого слова this
                  </p>
                  <p className="expanding__paragraph-code">&#125;, myObject );</p>

                  <p className="expanding__paragraph-code">
                    // возвращаемое значение будет true (элемент со значением 40 содержится в массиве)
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

export default Some;
