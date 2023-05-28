/* eslint-disable eqeqeq */
/* eslint-disable no-useless-rename */
/* eslint-disable no-unreachable */
/* eslint-disable no-extend-native */
/* eslint-disable no-lone-blocks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { match, rejects } from "assert";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion"; // анимация
import { arch, type } from "os";
import { resolve } from "path";
import React, { useState, useEffect, useMemo, useCallback, FC } from "react";
import ExpandingHeading from "../general/expanding/ExpandingPanel/ExpandingHeading";
import LinkInfo from "../general/LinkInfo/LinkInfo";
import "./taskModel.scss";

interface IMapIndex {
  [key: string]: number;
}

const ClearString: FC = () => {
  const [isVisible, setVisible] = useState(false);
  const expanderHandler = () => {
    setVisible((prev) => !prev);
  };
  const [title] = useState("title");

  // // task
  // ===================================================================================

  // const sumOfTwo = (arr: Array<number>, target: number) => {
  //   const result: number[] = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     for (let j = i + 1; j < arr.length; j++) {
  //       if (arr[i] + arr[j] === target) {
  //         result.push(i);
  //         result.push(j);
  //       }
  //     }
  //   }

  //   return result;
  // };

  // console.log(sumOfTwo([2, 7, 11, 15], 22)); // [1, 3]

  const obj = { 2: 0, 7: 1, 11: 2, 15: 3 };

  const sumOfTwo = (arr: Array<number>, target: number) => {
    const numObject: IMapIndex = {};

    for (let i = 0; i < arr.length; i++) {
      numObject[arr[i]] = i;
    }

    for (let i = 0; i < arr.length; i++) {
      const diff = target - arr[i];

      if (numObject[diff] && numObject[diff] !== i) {
        return [i, numObject[diff]];
      }
    }
    return [];
  };

  console.log(sumOfTwo([2, 7, 11, 15], 9)); //  [0, 1]

  // Если в массиве нет чисел дающих нужную сумму, то возвращаем пустой массив
  console.log(sumOfTwo([2, 7, 11, 15], 90)); //  []

  console.log(sumOfTwo([2, 7, 11, 15], 14)); //  []

  // ===================================================================================

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
