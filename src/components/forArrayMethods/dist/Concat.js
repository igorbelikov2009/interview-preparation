"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion"); // анимация
var react_1 = require("react");
var ExpandingHeading_1 = require("../general/expanding/ExpandingPanel/ExpandingHeading");
require("../../styles/dist/expanding.css");
var LinkInfo_1 = require("../general/LinkInfo/LinkInfo");
var Concat = function () {
    var _a = react_1.useState(false), isVisible = _a[0], setVisible = _a[1];
    var title = react_1.useState("concat() - объединяет два или более массива")[0];
    var descriptions = [
        "Метод concat() создаёт новый массив, в который копирует данные из других массивов и дополнительные значения.",
        "Этот метод объединяет два или более массива/значения и возвращает новый массив.",
        "Синтаксис: arr.concat(arg1, arg2...)",
    ];
    var descriptionsBefore = [
        "Он принимает любое количество аргументов, которые могут быть как массивами, так и простыми значениями.",
        "В результате – новый массив, включающий в себя элементы из arr, затем arg1, arg2 и так далее. ",
        "Если аргумент argN – массив, то копируются все его элементы. Иначе копируется сам аргумент. ",
        "Примечание: Соединение массивов и/или значений в новый массив оставит соединяемые массивы/значения неизменными. Кроме того, любая операция над новым массивом (если только элемент не является ссылкой) не будет затрагивать исходные массивы и наоборот. ",
    ];
    var expanderHandler = function () {
        setVisible(function (prev) { return !prev; });
    };
    return (react_1["default"].createElement("div", { className: "expanding" },
        react_1["default"].createElement(ExpandingHeading_1["default"], { isContentVisible: isVisible, panelName: title, onClickExpanding: expanderHandler }),
        react_1["default"].createElement(framer_motion_1.AnimatePresence, null, isVisible && (react_1["default"].createElement(framer_motion_1.motion.div, { initial: { height: 0, opacity: 0 }, animate: { height: "auto", opacity: 1 }, exit: { height: 0, opacity: 0 }, style: { overflow: "hidden" } },
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement(LinkInfo_1["default"], { title: "Array.prototype.concat()", href: "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/concat" }),
                    descriptions &&
                        descriptions.map(function (item, index) { return (react_1["default"].createElement("p", { key: index, className: "expanding__paragraph" }, item)); }),
                    descriptionsBefore &&
                        descriptionsBefore.map(function (item, index) { return (react_1["default"].createElement("p", { key: index, className: "expanding__paragraph-before" }, item)); })),
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement("div", { className: "expanding__pre" },
                        react_1["default"].createElement("h2", { className: "expanding__heading" }, "\u0421\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435 \u0434\u0432\u0443\u0445 \u043C\u0430\u0441\u0441\u0438\u0432\u043E\u0432"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "var alpha = ['a', 'b', 'c'];"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "var numeric = [1, 2, 3]; "),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "var alphaNumeric = alpha.concat(numeric);"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "console.log(alphaNumeric); // \u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442: ['a', 'b', 'c', 1, 2, 3]"))),
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement("div", { className: "expanding__pre" },
                        react_1["default"].createElement("h2", { className: "expanding__heading" }, "\u0421\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435 \u0442\u0440\u0451\u0445 \u043C\u0430\u0441\u0441\u0438\u0432\u043E\u0432"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "var num1 = [1, 2, 3];"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "var num2 = [4, 5, 6];"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "var num3 = [7, 8, 9];"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "var nums = num1.concat(num2, num3);"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "console.log(nums); // \u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442: [1, 2, 3, 4, 5, 6, 7, 8, 9]"))),
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement("div", { className: "expanding__pre" },
                        react_1["default"].createElement("h2", { className: "expanding__heading" }, "\u0421\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439 \u0432 \u043C\u0430\u0441\u0441\u0438\u0432"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "var alpha = ['a', 'b', 'c'];"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "var alphaNumeric = alpha.concat(1, [2, 3]);"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "console.log(alphaNumeric); // \u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442: ['a', 'b', 'c', 1, 2, 3]")))))))));
};
exports["default"] = Concat;
