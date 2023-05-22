/* eslint-disable no-unreachable */
/* eslint-disable no-extend-native */
/* eslint-disable no-lone-blocks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { match, rejects } from "assert";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion"; // анимация
import { type } from "os";
import { resolve } from "path";
import React, { useState, useEffect, useMemo, useCallback, FC } from "react";
import ExpandingHeading from "../general/expanding/ExpandingPanel/ExpandingHeading";
import LinkInfo from "../general/LinkInfo/LinkInfo";
import "./taskModel.scss";

interface IMapIndex {
  [key: string]: any;
}

const ClearString: FC = () => {
  const [isVisible, setVisible] = useState(false);
  const expanderHandler = () => {
    setVisible((prev) => !prev);
  };
  const [title] = useState("title");

  // // task
  // ===================================================================================

  const str1: string[] = ["BTS", "CLEVERCAT", "YEE", "PUGACHEVA", "ACDC"];
  const str2: string[] = ["ACDC", "YEE", "CLEVERCAT", "PUGACHEVA", "BTS"];
  const str3: string[] = ["BTS", "YEE", "PUGACHEVA", "CLEVERCAT", "ACDC"];
  const str4: string[] = ["ACDC", "YEE", "CLEVERCAT", "BTS", "PUGACHEVA"];

  // Сортировка масссива строк по возрастанию
  function sortData(arr: string[]) {
    return arr.sort();
  }

  // console.log(sortData(str1)); //  ['ACDC', 'BTS', 'CLEVERCAT', 'PUGACHEVA', 'YEE']
  // console.log(sortData(str2)); //  ['ACDC', 'BTS', 'CLEVERCAT', 'PUGACHEVA', 'YEE']
  // console.log(sortData(str3)); //  ['ACDC', 'BTS', 'CLEVERCAT', 'PUGACHEVA', 'YEE']
  // console.log(sortData(str4)); //  ['ACDC', 'BTS', 'CLEVERCAT', 'PUGACHEVA', 'YEE']

  // Сортировка масссива строк случайным образом
  function mixData(arr: string[]) {
    return arr.sort(() => 0.5 - Math.random());
  }

  // console.log(mixData(str1)); // ['PUGACHEVA', 'YEE', 'CLEVERCAT', 'ACDC', 'BTS']
  // console.log(mixData(str2)); // ['PUGACHEVA', 'CLEVERCAT', 'YEE', 'BTS', 'ACDC']
  // console.log(mixData(str3)); // ['CLEVERCAT', 'BTS', 'YEE', 'ACDC', 'PUGACHEVA']
  // console.log(mixData(str4)); // ['BTS', 'CLEVERCAT', 'YEE', 'ACDC', 'PUGACHEVA']
  // // ===================================================================================
  // // task
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
                <div className="expanding__pre"></div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ClearString;
function getPasswords() {
  throw new Error("Function not implemented.");
}
