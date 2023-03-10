/* eslint-disable react/jsx-no-comment-textnodes */
import { motion, AnimatePresence } from "framer-motion"; // анимация
import React, { useState } from "react";
import ExpandingHeading from "../general/expanding/ExpandingPanel/ExpandingHeading";
import "../../styles/dist/expanding.css";
import LinkInfo from "../general/LinkInfo/LinkInfo";

const Splice = () => {
  const [isVisible, setVisible] = useState(false);

  const [title] = useState("splice() - используется для добавления/ удаления элементов в массиве.");
  const descriptions: string[] = [
    "Метод splice предназначен для изменения содержимого массива. Он может использоваться как для добавления элементов в массив, так и для их удаления.",
    "Синтаксис: array.splice(startIndex, deleteCount [, element1[, element2[, ...]]]);",
    "Параметры: ",
  ];
  const descriptionsBefore: string[] = [
    "'startIndex' (обязательный) - стартовый индекс элемента, с которого нужно начать изменение массива. Если в качестве startIndex указать число, большее длины массива, то стартовый индекс будет установлен на конец массива. Если в качестве startIndex указать отрицательное число, то отсчет стартового элемента будет вестись с конца.",
    " 'deleteCount' (обязательный) - число, показывающее какое количество элементов необходимо удалить из массива. Если элементы не нужно удалять из массива, то deleteCount необходимо установить 0. После этого нужно указать как минимум один новый элемент, который нужно добавить в массив. Если в качестве deleteCount указать число, которое будет превышать количество оставшихся элементов в массиве, начиная с startIndex, то в этом случае они всё равно будут удалены (т.е. все элементы до конца массива, начиная со стартового индекса)",
    "'element1', 'element2', ... (необязательные) - элементы которые нужно добавить в массив.",
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
                  title="Array.prototype.splice()"
                  href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice"
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
                  <h2 className="expanding__heading">Удаляет 0 элементов по индексу 2 и вставляет "drum"</h2>
                  <p className="expanding__paragraph-code">var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];</p>
                  <p className="expanding__paragraph-code">var removed = myFish.splice(2, 0, 'drum');</p>
                  <p className="expanding__paragraph-code">--</p>
                  <p className="expanding__paragraph-code">
                    // myFish равен ["angel", "clown", "drum", "mandarin", "sturgeon"]
                  </p>
                  <p className="expanding__paragraph-code">// removed равен [], ничего не удалено</p>
                </div>
              </div>

              <div className="expanding__content">
                <div className="expanding__pre">
                  <h2 className="expanding__heading">Удаляет 1 элемент по индексу 3</h2>
                  <p className="expanding__paragraph-code">
                    var myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
                  </p>
                  <p className="expanding__paragraph-code">var removed = myFish.splice(3, 1);</p>
                  <p className="expanding__paragraph-code">--</p>
                  <p className="expanding__paragraph-code">// removed равен ["mandarin"]</p>
                  <p className="expanding__paragraph-code">// myFish равен ["angel", "clown", "drum", "sturgeon"]</p>
                </div>
              </div>

              <div className="expanding__content">
                <div className="expanding__pre">
                  <h2 className="expanding__heading">Удаляет 1 элемент по индексу 2 и вставляет "trumpet"</h2>
                  <p className="expanding__paragraph-code">var myFish = ['angel', 'clown', 'drum', 'sturgeon'];</p>
                  <p className="expanding__paragraph-code">var removed = myFish.splice(2, 1, 'trumpet');</p>
                  <p className="expanding__paragraph-code">--</p>
                  <p className="expanding__paragraph-code">// myFish равен ["angel", "clown", "trumpet", "sturgeon"]</p>
                  <p className="expanding__paragraph-code">// removed равен ["drum"]</p>
                </div>
              </div>

              <div className="expanding__content">
                <div className="expanding__pre">
                  <h2 className="expanding__heading">
                    Удаляет 2 элемента начиная с индекса 0 и вставляет "parrot", "anemone" и "blue"
                  </h2>
                  <p className="expanding__paragraph-code">var myFish = ['angel', 'clown', 'trumpet', 'sturgeon'];</p>
                  <p className="expanding__paragraph-code">
                    var removed = myFish.splice(0, 2, 'parrot', 'anemone', 'blue');
                  </p>
                  <p className="expanding__paragraph-code">--</p>
                  <p className="expanding__paragraph-code">
                    // myFish равен ["parrot", "anemone", "blue", "trumpet", "sturgeon"]
                  </p>
                  <p className="expanding__paragraph-code">// removed равен ["angel", "clown"]</p>
                </div>
              </div>

              <div className="expanding__content">
                <div className="expanding__pre">
                  <h2 className="expanding__heading">Удаляет 2 элемента начиная с индекса 2</h2>
                  <p className="expanding__paragraph-code">
                    var myFish = ['parrot', 'anemone', 'blue', 'trumpet', 'sturgeon'];
                  </p>
                  <p className="expanding__paragraph-code">var removed = myFish.splice(myFish.length - 3, 2);</p>
                  <p className="expanding__paragraph-code">--</p>
                  <p className="expanding__paragraph-code">// myFish равен ["parrot", "anemone", "sturgeon"]</p>
                  <p className="expanding__paragraph-code">// removed равен ["blue", "trumpet"]</p>
                </div>
              </div>

              <div className="expanding__content">
                <div className="expanding__pre">
                  <h2 className="expanding__heading">Удаляет 1 элемент по индексу -2</h2>
                  <p className="expanding__paragraph-code">var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];</p>
                  <p className="expanding__paragraph-code">var removed = myFish.splice(-2, 1);</p>
                  <p className="expanding__paragraph-code">--</p>
                  <p className="expanding__paragraph-code">// myFish равен ["angel", "clown", "sturgeon"]</p>
                  <p className="expanding__paragraph-code">// removed равен s ["mandarin"]</p>
                </div>
              </div>

              <div className="expanding__content">
                <div className="expanding__pre">
                  <h2 className="expanding__heading">Удаляет все элементы после индекса 2 (включительно)</h2>
                  <p className="expanding__paragraph-code">var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];</p>
                  <p className="expanding__paragraph-code">var removed = myFish.splice(2);</p>
                  <p className="expanding__paragraph-code">--</p>
                  <p className="expanding__paragraph-code">// myFish равен ["angel", "clown"]</p>
                  <p className="expanding__paragraph-code">// removed равен ["mandarin", "sturgeon"]</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Splice;
