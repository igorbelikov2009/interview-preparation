/* eslint-disable react/jsx-no-comment-textnodes */
import { motion, AnimatePresence } from "framer-motion"; // анимация
import React, { useState } from "react";
import ExpandingHeading from "../general/expanding/ExpandingPanel/ExpandingHeading";
import "../../styles/dist/expanding.css";
import LinkInfo from "../general/LinkInfo/LinkInfo";

const Join = () => {
  const [isVisible, setVisible] = useState(false);

  const [title] = useState(
    "let string = array.join([ separator ]) - преобразует массив в строку по заданному разделителю: (', '), (' + '), ('/'), (' '), (''), (', super!') и т.д. "
  );
  const descriptions: string[] = [
    "Метод join() - преобразует все элементы массива (или массивоподобного объекта) в новую строку, разделенную запятыми или заданным (separator-разделитель) разделителем. Если в массиве только один элемент, то этот элемент будет возвращен без использования разделителя.",
    "Элементы массива (строка, число - не важно) объединяются в одну строку. Если элемент равен 'undefined' или 'null', он преобразуется в пустую строку.",
    "Возвращаемое значение: строка со всеми объединенными элементами массива. Если arr.length равна 0, то возвращается пустая строка. ",
    "Синтаксис: ",
  ];
  const descriptionsBefore: string[] = [
    "join()",
    "join( separator )",
    "separator - (необязательный) задает вид разделителя ( запятая, пробел, строка; любой другой знак, символ, слово) для каждой пары соседних элементов массива. При необходимости разделитель преобразуется в строку. Если он опущен, элементы массива разделяются запятой ('',''). Если separator - пустая строка, все элементы соединяются без каких-либо символов между ними. ",
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
                  title="Array.prototype.join()"
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join"
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
                  <h2 className="expanding__heading">Преобразование массива четырьмя разными способами</h2>
                  <p className="expanding__paragraph">
                    В следующем примере преобразуем массив a в строку четыре раза: с помощью разделителя по умолчанию,
                    затем запятой и пробела, затем плюса и пустой строки.
                  </p>
                  <p className="expanding__paragraph-code">const a = [ "Wind", "Water", "Fire" ];</p>
                  <p className="expanding__paragraph-code">a.join(); // 'Wind,Water,Fire'</p>
                  <p className="expanding__paragraph-code">a.join(", "); // 'Wind, Water, Fire'</p>
                  <p className="expanding__paragraph-code">a.join(" + "); // 'Wind + Water + Fire'</p>
                  <p className="expanding__paragraph-code">a.join(""); // 'WindWaterFire'</p>
                </div>
              </div>

              <div className="expanding__content">
                <div className="expanding__pre">
                  <h2 className="expanding__heading">6 способов. Последний: в качестве разделителя применяем строку</h2>
                  <p className="expanding__paragraph-code"> const array = [ "Ветер", "Дождь", "Огонь" ];</p>

                  <p className="expanding__paragraph-code">console.log(array.join());</p>
                  <p className="expanding__paragraph-code">// Ветер,Дождь,Огонь</p>

                  <p className="expanding__paragraph-code">console.log(array.join(", "));</p>
                  <p className="expanding__paragraph-code">// Ветер, Дождь, Огонь</p>

                  <p className="expanding__paragraph-code">console.log(array.join(" + "));</p>
                  <p className="expanding__paragraph-code">// Ветер + Дождь + Огонь</p>

                  <p className="expanding__paragraph-code">console.log(array.join(" "));</p>
                  <p className="expanding__paragraph-code">// Ветер Дождь Огонь</p>

                  <p className="expanding__paragraph-code">console.log(array.join(""));</p>
                  <p className="expanding__paragraph-code">// ВетерДождьОгонь</p>

                  <p className="expanding__paragraph-code">console.log(array.join(", мы от тебя устали. "));</p>
                  <p className="expanding__paragraph-code">
                    // Ветер, мы от тебя устали. Дождь, мы от тебя устали. Огонь
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

export default Join;
