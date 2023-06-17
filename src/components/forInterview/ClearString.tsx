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

interface IAdmin {
  [key: string]: string | number | boolean;
}

const ClearString: FC = () => {
  const [isVisible, setVisible] = useState(false);
  const expanderHandler = () => {
    setVisible((prev) => !prev);
  };
  const [title] = useState("title");

  // // task
  // ===================================================================================

  localStorage.setItem("favoriteColor", "gray");

  let data = localStorage.getItem("favoriteColor");
  console.log(data); // gray

  localStorage.removeItem("favoriteColor");
  console.log(data);
  localStorage.clear();

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
