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
    var str1 = ["BTS", "CLEVERCAT", "YEE", "PUGACHEVA", "ACDC"];
    var str2 = ["ACDC", "YEE", "CLEVERCAT", "PUGACHEVA", "BTS"];
    var str3 = ["BTS", "YEE", "PUGACHEVA", "CLEVERCAT", "ACDC"];
    var str4 = ["ACDC", "YEE", "CLEVERCAT", "BTS", "PUGACHEVA"];
    // Сортировка масссива строк по возрастанию
    function sortData(arr) {
        return arr.sort();
    }
    // console.log(sortData(str1)); //  ['ACDC', 'BTS', 'CLEVERCAT', 'PUGACHEVA', 'YEE']
    // console.log(sortData(str2)); //  ['ACDC', 'BTS', 'CLEVERCAT', 'PUGACHEVA', 'YEE']
    // console.log(sortData(str3)); //  ['ACDC', 'BTS', 'CLEVERCAT', 'PUGACHEVA', 'YEE']
    // console.log(sortData(str4)); //  ['ACDC', 'BTS', 'CLEVERCAT', 'PUGACHEVA', 'YEE']
    // Сортировка масссива строк случайным образом
    function mixData(arr) {
        return arr.sort(function () { return 0.5 - Math.random(); });
    }
    // console.log(mixData(str1)); // ['PUGACHEVA', 'YEE', 'CLEVERCAT', 'ACDC', 'BTS']
    // console.log(mixData(str2)); // ['PUGACHEVA', 'CLEVERCAT', 'YEE', 'BTS', 'ACDC']
    // console.log(mixData(str3)); // ['CLEVERCAT', 'BTS', 'YEE', 'ACDC', 'PUGACHEVA']
    // console.log(mixData(str4)); // ['BTS', 'CLEVERCAT', 'YEE', 'ACDC', 'PUGACHEVA']
    // // ===================================================================================
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
