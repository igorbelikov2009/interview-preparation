/* eslint-disable eqeqeq */
/* eslint-disable no-useless-rename */
/* eslint-disable no-unreachable */
/* eslint-disable no-extend-native */
/* eslint-disable no-lone-blocks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { match, rejects } from "assert";
import axios from "axios";
import { motion, AnimatePresence, m } from "framer-motion"; // анимация
import { arch, type } from "os";
import { resolve } from "path";
import React, { useState, useEffect, useMemo, useCallback, FC } from "react";
import { forEachChild } from "typescript";
import ExpandingHeading from "../general/expanding/ExpandingPanel/ExpandingHeading";
import LinkInfo from "../general/LinkInfo/LinkInfo";
import "./taskModel.scss";

interface IAdmin {
  [key: string]: string | number | boolean;
}
interface IValue {
  x: number;
}

const ClearString: FC = () => {
  const [isVisible, setVisible] = useState(false);
  const expanderHandler = () => {
    setVisible((prev) => !prev);
  };
  const [title] = useState("title");

  // // task
  // ===================================================================================

  const numeric = [12, 5, 8, 130, 44];

  let result: number[] = [];

  function makeArray(arr: number[]) {
    for (let value of arr) {
      value += 1;
      result.push(value);
    }

    return result;
  }

  console.log(makeArray(numeric));
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
