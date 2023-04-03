/* eslint-disable react/jsx-no-comment-textnodes */
import { motion, AnimatePresence } from "framer-motion"; // анимация
import React, { useState, useEffect } from "react";
import ExpandingHeading from "../general/expanding/ExpandingPanel/ExpandingHeading";
import LinkInfo from "../general/LinkInfo/LinkInfo";
import "./taskModel.scss";

const RemoveSpacesFromString = () => {
  const [isVisible, setVisible] = useState(false);

  const expanderHandler = () => {
    setVisible((prev) => !prev);
  };

  const [title] = useState("Удалить пробелы из строки. Метод string.replace() с регулярным выражением внутри.");
  // задача
  const [str] = useState(" ftu  ft  ggwr ");
  const [strNoSpace, setStrNoSpace] = useState("");

  function noSpace(x: string) {
    return x.replace(/\s/g, "");
  }

  useEffect(() => {
    setStrNoSpace(noSpace(str));
  }, [str]);

  //   console.log(str);
  //   console.log(strNoSpace);
  // задача

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
                  title={title}
                  href="https://www.youtube.com/watch?v=awtOmYDEMY8&list=PLPiq_hi6UrQo3ornWsqYnivc77kPn3Gwi&index=3"
                />
              </div>

              <div className="expanding__content">
                <div className="expanding__pre">
                  <h2 className="expanding__heading">
                    {title} " ftu ft ggwr =&gt; {strNoSpace}"
                  </h2>
                  <p className="expanding__paragraph-code">const [str] = useState(" ftu ft ggwr ");</p>
                  <p className="expanding__paragraph-code">const [strNoSpace, setStrNoSpace] = useState("");</p>
                  <p className="expanding__paragraph-code">-</p>
                  <p className="expanding__paragraph-code">function noSpace(x: string) &#123; </p>
                  <p className="expanding__paragraph-code">return x.replace(/\s/g, "");</p>
                  <p className="expanding__paragraph-code">&#125;</p>
                  <p className="expanding__paragraph-code">-</p>
                  <p className="expanding__paragraph-code">useEffect(() =&gt; &#123;</p>
                  <p className="expanding__paragraph-code">setStrNoSpace(noSpace(str));</p>
                  <p className="expanding__paragraph-code">&#125;, [str]);</p>
                  <p className="expanding__paragraph-code">-</p>
                  <p className="expanding__paragraph-code">console.log(str); // " ftu ft ggwr "</p>
                  <p className="expanding__paragraph-code">console.log(strNoSpace); // ftuftggwr </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RemoveSpacesFromString;
