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
  [key: string]: string | number;
}

const ClearString: FC = () => {
  const [isVisible, setVisible] = useState(false);
  const expanderHandler = () => {
    setVisible((prev) => !prev);
  };
  const [title] = useState("title");

  // // task
  // ===================================================================================
  //  Покупаем за 1 во второй день, продаём за 6 в пятый день. Макс прибыль: 6 - 1 = 5 у.е.
  let arr1 = [7, 1, 5, 3, 6, 4];

  // В нижнем случае мы не можем сделать никакой выгодной операции. Возвращаем ноль.
  let arr2 = [7, 6, 4, 3, 1];

  function getMaxProfit(prices: number[]) {
    let minPrice = prices[0];
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
      const current = prices[i];
      if (current < minPrice) {
        minPrice = current;
      }
      if (current - minPrice > maxProfit) {
        maxProfit = current - minPrice;
      }
    }
    return maxProfit;
  }

  console.log(getMaxProfit(arr1)); // 5
  console.log(getMaxProfit(arr2)); // 0
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
