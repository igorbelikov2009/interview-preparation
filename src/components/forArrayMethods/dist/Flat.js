"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion"); // анимация
var react_1 = require("react");
var ExpandingHeading_1 = require("../general/expanding/ExpandingPanel/ExpandingHeading");
require("../../styles/dist/expanding.css");
var LinkInfo_1 = require("../general/LinkInfo/LinkInfo");
var Flat = function () {
    var _a = react_1.useState(false), isVisible = _a[0], setVisible = _a[1];
    var title = react_1.useState("Метод flat() создает новый массив со всеми элементами подмассива, объединенными в него рекурсивно до указанной глубины.")[0];
    var descriptions = [
        "Метод flat()создает новый массив со всеми элементами подмассива, объединенными в него рекурсивно до указанной глубины. ",
        "Синтаксис: ",
        "      flat()",
        "      flat(depth)",
        "depth - Уровень глубины, указывающий, насколько глубоко должна быть сведена структура вложенного массива. По умолчанию 1. ",
        "Если уровень вложенности не известен, то для depth можно указать Infinity: array.flat(Infinity) ",
        "Если уровень вложенности не известен, то для depth можно указать Infinity: array.flat(Infinity) !!! ",
        "Если уровень вложенности не известен, то для depth можно указать Infinity: array.flat(Infinity) !!! ",
    ];
    var expanderHandler = function () {
        setVisible(function (prev) { return !prev; });
    };
    return (react_1["default"].createElement("div", { className: "expanding" },
        react_1["default"].createElement(ExpandingHeading_1["default"], { isContentVisible: isVisible, panelName: title, onClickExpanding: expanderHandler }),
        react_1["default"].createElement(framer_motion_1.AnimatePresence, null, isVisible && (react_1["default"].createElement(framer_motion_1.motion.div, { initial: { height: 0, opacity: 0 }, animate: { height: "auto", opacity: 1 }, exit: { height: 0, opacity: 0 }, style: { overflow: "hidden" } },
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement(LinkInfo_1["default"], { title: "Array.prototype.flat()", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat" }),
                    descriptions &&
                        descriptions.map(function (item, index) { return (react_1["default"].createElement("p", { key: index, className: "expanding__paragraph" }, item)); })),
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement("div", { className: "expanding__pre" },
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "const arr1 = [ 0, 1, 2, [ 3, 4 ]]; "),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, " console.log( arr1.flat() ); // [ 0, 1, 2, 3, 4 ] "))),
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement("div", { className: "expanding__pre" },
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "const arr2 = [ 0, 1, 2, [[[ 3, 4 ]]]];"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "console.log( arr2.flat( 2 )); // [ 0, 1, 2, Array(2) [ 3, 4 ]]"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, " console.log( arr2.flat( 3 )); // [ 0, 1, 2, 3, 4 ]"))),
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement("div", { className: "expanding__pre" },
                        react_1["default"].createElement("h2", { className: "expanding__heading" }, "\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C \u0431\u0435\u0441\u043A\u043E\u043D\u0435\u0447\u043D\u044B\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u0432\u043B\u043E\u0436\u0435\u043D\u043D\u043E\u0441\u0442\u0438 - Infinity: "),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" },
                            "const arrArr = [ [3, 2, 1 ], [[[ 10, 11 ]]], [[[[[[[[[ 12 ]]]]]]]]]];",
                            " "),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" },
                            " ",
                            "console.log(arrArr.flat(Infinity)); // \u00A0[ 3, 2, 1, 10, 11, 12 ]"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, " ")))))))));
};
exports["default"] = Flat;
