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

interface User {
  name: string;
  password: string;
  address: string;
  phone: number;
  admin: boolean;
}

type U1 = User["name"]; // type U1 = string
type U2 = User["password"]; // type U2 = string
type U3 = User["address"]; // type U3 = string
type U4 = User["phone"]; // type U4 = number
type U5 = User["admin"]; // type U5 = boolean
type U6 = User[keyof User]; // type U6 = string | number | boolean
// ===================================================================================

type Task = {
  id: number;
  text: string;
  isCompleted?: boolean;
  completedDate?: Date | undefined;
};

type OptionalTask = Partial<Task>;
// ===================================================================================
const ClearString: FC = () => {
  const [isVisible, setVisible] = useState(false);
  const expanderHandler = () => {
    setVisible((prev) => !prev);
  };
  const [title] = useState("title");

  // // task
  // ===================================================================================
  // : Readonly<User>

  // const user: Partial<User> = {
  //   name: "Dima",
  //   password: "iv89375445418",
  //   address: "Kamsk",
  //   phone: 89269582820,
  //   admin: true,
  // };

  // console.log(user);
  // // ===================================================================================

  const task: Task = {
    id: 0,
    text: "Text",
  };

  function update(task: Task, patch: Partial<Task>): Task {
    return {
      ...task,
      ...patch,
    };
  }

  console.log(update(task, { id: 2, isCompleted: false }));
  console.log(task);
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
