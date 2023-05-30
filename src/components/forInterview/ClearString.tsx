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

  function isEquals(str1: string, str2: string) {
    // Проверяем равенство первого с последним элементом
    return str1.toLowerCase() === str2.toLowerCase();
  }

  function isLetter(char: string) {
    // Проверяем, являются ли наши символы буквами. Смысл в том, что буквы разных
    // регистров отличаются друг от друга, а символы и пробелы не отличаются.
    return char.toLowerCase() !== char.toUpperCase();
  }

  function isPalindrome(str: string) {
    let start = 0; // указатель на первый элемент в строке
    let end = str.length - 1; // указатель на последний элемент в строке

    while (start < end) {
      const firstChar = str[start];
      const endChar = str[end];

      if (!isLetter(firstChar)) {
        start += 1;
        continue;
      }

      if (!isLetter(endChar)) {
        end -= 1;
        continue;
      }

      if (!isEquals(firstChar, endChar)) {
        // Проверяем равенство первого с последним элементом
        return false;
      }

      start += 1; // сдвигаем  указатели
      end -= 1; // сдвигаем  указатели
    }
    return true;
  }

  console.log(isPalindrome("Казак")); // true
  console.log(isPalindrome("А роза упала на лапу Азора")); // true
  console.log(isPalindrome("Do geese see God")); // true
  console.log(isPalindrome("Madam, I'm Adam")); // true

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
