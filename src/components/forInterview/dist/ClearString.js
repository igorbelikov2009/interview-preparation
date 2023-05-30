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
    function isEquals(str1, str2) {
        // Проверяем равенство первого с последним элементом
        return str1.toLowerCase() === str2.toLowerCase();
    }
    function isLetter(char) {
        // Проверяем, являются ли наши символы буквами. Смысл в том, что буквы разных
        // регистров отличаются друг от друга, а символы и пробелы не отличаются.
        return char.toLowerCase() !== char.toUpperCase();
    }
    function isPalindrome(str) {
        var start = 0; // указатель на первый элемент в строке
        var end = str.length - 1; // указатель на последний элемент в строке
        while (start < end) {
            var firstChar = str[start];
            var endChar = str[end];
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
