import { motion, AnimatePresence } from "framer-motion"; // анимация
import React, { useState } from "react";
import ExpandingHeading from "../general/expanding/ExpandingPanel/ExpandingHeading";
import "../../styles/dist/expanding.css";
import LinkInfo from "../general/LinkInfo/LinkInfo";

const CopyWithin = () => {
  const [isVisible, setVisible] = useState(false);

  const [title] = useState(
    "Array.copyWithin() копирует часть массива в тот же массив и возвращает его без изменения размера, т. е. копирует элементы массива в пределах одного массива."
  );
  const descriptions: string[] = [
    "Метод copyWithin() копирует последовательность элементов массива внутри него в позицию, начинающуюся по индексу target. Копия фрагмента массива берётся по индексам, задаваемым вторым start и третьим аргументами end. Аргумент end является необязательным и по умолчанию равен длине массива array.length.",
    "Возвращаемое значение - измененный массив. ",
    "синтаксис:",
    "array.copyWithin( target, start )",
    "// с указанием конечного индекса для вставки",
    "array.copyWithin( target, start, end )",
  ];
  const descriptionsBefore: string[] = [
    "target - начальный индекс позиции цели, куда копировать элементы. Допускается использование отрицательных значений, в этом случае индекс с которого будет произведено копирование будет расчитан по следующей формуле: length (длина массива) + target. ",
    "start - начальный индекс массива, откуда начинать копировать элементы. Допускается использование отрицательных значений, в этом случае индекс с которого будет произведено копирование будет расчитан по следующей формуле: length (длина массива) + start. ",
    "end - необязательный параметр. Конечный индекс массива, которым заканчивается копирование элементов массива. Если параметр не указан, то будут скопированы все элементы от начальной позиции (start) и до конца массива. Допускается использование отрицательных значений, в этом случае индекс до которого будет произведено копирование будет расчитан по следующей формуле: length (длина массива) + end.",
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
                  title="Array.prototype.copyWithin()"
                  href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin"
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
                  <h2 className="expanding__heading">Пример использования</h2>
                  <p className="expanding__paragraph-code">
                    var x = [1, 2, 3, "a", "b", "c"]; // инициализируем переменную, содержащую массив
                  </p>
                  <p className="expanding__paragraph-code">
                    x.copyWithin( 0, 3 ); // возвращаемое значение ["a", "b", "c", "a", "b", "c"]
                  </p>
                  <p className="expanding__paragraph-code">
                    x.copyWithin( 3, 0 ); // возвращаемое значение [1, 2, 3, 1, 2, 3]
                  </p>
                  <p className="expanding__paragraph-code">
                    x.copyWithin( -2, 3 ); // возвращаемое значение [1, 2, 3, "a", "a", "b"]
                  </p>
                  <p className="expanding__paragraph-code">
                    x.copyWithin( 0, 3, 4 ); // возвращаемое значение ["a", 2, 3, "a", "b", "c"]
                  </p>
                  <p className="expanding__paragraph-code">
                    x.copyWithin( 0, 3, 5 ); // возвращаемое значение ["a", "b", 3, "a", "b", "c"]
                  </p>
                  <p className="expanding__paragraph-code">
                    x.copyWithin( 0, -2, -1 ); // возвращаемое значение ["b", 2, 3, "a", "b", "c"]
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

export default CopyWithin;
