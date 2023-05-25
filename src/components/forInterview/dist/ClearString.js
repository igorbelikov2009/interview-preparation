"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion"); // анимация
var react_1 = require("react");
var ExpandingHeading_1 = require("../general/expanding/ExpandingPanel/ExpandingHeading");
require("./taskModel.scss");
// ===================================================================================
var ClearString = function () {
    var _a = react_1.useState(false), isVisible = _a[0], setVisible = _a[1];
    var expanderHandler = function () {
        setVisible(function (prev) { return !prev; });
    };
    var title = react_1.useState("title")[0];
    // // task
    // ===================================================================================
    // remainder  --> остаток
    // entered    --> вошло пассажиров
    // released   --> вышло пассажиров
    var arrArr1 = [
        [10, 0],
        [3, 5],
        [5, 8],
    ];
    var arrArr2 = [
        [3, 0],
        [9, 1],
        [4, 10],
        [12, 2],
        [6, 1],
        [7, 10],
    ];
    var arrArr3 = [
        [3, 0],
        [9, 1],
        [4, 8],
        [12, 2],
        [6, 1],
        [7, 8],
    ];
    var number = function (busStop) {
        // [entered, released]  делаем деструктуризацию подмассива
        return busStop.reduce(function (remainder, _a) {
            var entered = _a[0], released = _a[1];
            return remainder + entered - released;
        }, 0);
    };
    console.log(number(arrArr1)); // 5
    console.log(number(arrArr2)); // 17
    console.log(number(arrArr3)); // 21
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
