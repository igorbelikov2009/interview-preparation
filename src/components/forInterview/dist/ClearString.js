"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion"); // анимация
var react_1 = require("react");
var ExpandingHeading_1 = require("../general/expanding/ExpandingPanel/ExpandingHeading");
require("./taskModel.scss");
var ClearString = function () {
    var _a = react_1.useState(false), isVisible = _a[0], setVisible = _a[1];
    var expanderHandler = function () {
        setVisible(function (prev) { return !prev; });
    };
    var title = react_1.useState("title")[0];
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
    var obj = { 2: 0, 7: 1, 11: 2, 15: 3 };
    var sumOfTwo = function (arr, target) {
        var numObject = {};
        for (var i = 0; i < arr.length; i++) {
            numObject[arr[i]] = i;
        }
        for (var i = 0; i < arr.length; i++) {
            var diff = target - arr[i];
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
    return (react_1["default"].createElement("div", { className: "expanding" },
        react_1["default"].createElement(ExpandingHeading_1["default"], { isContentVisible: isVisible, panelName: title, onClickExpanding: expanderHandler }),
        react_1["default"].createElement(framer_motion_1.AnimatePresence, null, isVisible && (react_1["default"].createElement(framer_motion_1.motion.div, { initial: { height: 0, opacity: 0 }, animate: { height: "auto", opacity: 1 }, exit: { height: 0, opacity: 0 }, style: { overflow: "hidden" } },
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement("div", { className: "expanding__pre" }))))))));
};
exports["default"] = ClearString;
function getPasswords() {
    throw new Error("Function not implemented.");
}
