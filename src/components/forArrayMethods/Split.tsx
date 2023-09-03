/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-comment-textnodes */
import { motion, AnimatePresence } from "framer-motion"; // анимация
import React, { useState } from "react";
import ExpandingHeading from "../general/expanding/ExpandingPanel/ExpandingHeading";
import "../../styles/expanding.scss";
import LinkInfo from "../general/LinkInfo/LinkInfo";

const Split = () => {
  const [isVisible, setVisible] = useState(false);

  const [title] = useState(
    "let array = string.split([ separator ]) - преобразует строку в массив по заданному разделителю: (', '), (' + '), ('/'), (' '), (''), и т.д."
  );
  const descriptions: string[] = [
    "Создание массива из строки посредством её разбивания с помощью разделителя в JavaScript осуществляется с помощью метода split(). Разделитель указывается в качестве аргумента.",
    "Метод split() принимает шаблон строк и делит его на упорядоченный список подстрок. Создаёт и возвращает массив из этих подстрок.",
    "Возвращаемое значение: массив строк, разделенных в каждой точке, где встречается separator в данной строке. ",
    "Синтаксис: ",
  ];
  const descriptionsBefore: string[] = [
    "split(separator) ",
    "split(separator, limit) ",
    "separator - шаблон, описывающий вид каждого разделения. Может быть undefined, строкой, регулярным выражением. Если разделитель отсутствует или равен undefined, то создаётся создаёт массив с одним элементом, объединяющим в себя все строки.",
    "limit - (необязательный) неотрицательное целое число, указывающее на ограничение количества подстрок, которые должны быть включены в массив. Если предоставлено, разбивает строку при каждом появлении указанного separator, но останавливается, когда limitзаписи помещаются в массив. ",
    "Оставшийся текст не включается в массив.",
    "Если limit = 0, то возвращается пустой массив.",
  ];

  const expanderHandler = () => {
    setVisible((prev) => !prev);
  };

  // //   =====================
  // const names = "Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand ";

  // const re = /\s*(?:;|$)\s*/;
  // const nameList = names.split(re);

  // console.log(names);
  // console.log(nameList);

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
                  title="String.prototype.split()"
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split"
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
                  <h2 className="expanding__heading">Использование метода split()</h2>
                  <p className="expanding__paragraph">
                    Когда пустая строка и указан непустой разделитель, split()возвращает [""]. Если и строка, и
                    разделитель являются пустыми, возвращается пустой массив.
                  </p>
                  <p className="expanding__paragraph-code">const string = ""; // пустая строка</p>
                  <p className="expanding__paragraph-code">-</p>
                  <p className="expanding__paragraph-code">// пустая строка, а разделитель не пуст</p>
                  <p className="expanding__paragraph-code">console.log(string.split("a")); // [""]</p>
                  <p className="expanding__paragraph-code">-</p>
                  <p className="expanding__paragraph-code">// строка и разделитель являются пустыми</p>
                  <p className="expanding__paragraph-code">console.log(string.split()); // []</p>
                </div>
              </div>

              <div className="expanding__content">
                <div className="expanding__pre">
                  <h2 className="expanding__heading">Удаление пробелов из строки</h2>
                  <p className="expanding__paragraph">
                    В следующем примере метод split() в исходной строчке удаляет точки с запятой ";" и пробелы, которые
                    имеются до и после точки с запятой ";". Из оставшихся элементов создаётся массив nameList.
                  </p>
                  <p className="expanding__paragraph-code">
                    const names = "Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand ";
                  </p>
                  <p className="expanding__paragraph-code">-</p>
                  <p className="expanding__paragraph-code">const re = /\s*(?:;|$)\s*/;</p>
                  <p className="expanding__paragraph-code">const nameList = names.split(re);</p>
                  <p className="expanding__paragraph-code">-</p>
                  <p className="expanding__paragraph-code">console.log(names)</p>
                  <p className="expanding__paragraph-code">
                    // Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand{" "}
                  </p>
                  <p className="expanding__paragraph-code">console.log(nameList);</p>
                  <p className="expanding__paragraph-code">
                    // ['Harry Trump', 'Fred Barney', 'Helen Rigby', 'Bill Abel', 'Chris Hand', '']
                  </p>
                </div>
              </div>

              <div className="expanding__content">
                <div className="expanding__pre">
                  <h2 className="expanding__heading">Разбивка по буквам</h2>
                  <p className="expanding__paragraph">
                    Вызов split(s) с пустым аргументом s разбил бы строку на массив букв:
                  </p>
                  <p className="expanding__paragraph-code">let string = "тест";</p>
                  <p className="expanding__paragraph-code">-</p>
                  <p className="expanding__paragraph-code">alert( string.split('') ); // т,е,с,т</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Split;
