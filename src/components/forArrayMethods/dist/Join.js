"use strict";
exports.__esModule = true;
/* eslint-disable react/jsx-no-comment-textnodes */
var framer_motion_1 = require("framer-motion"); // анимация
var react_1 = require("react");
var ExpandingHeading_1 = require("../general/expanding/ExpandingPanel/ExpandingHeading");
require("../../styles/dist/expanding.css");
var LinkInfo_1 = require("../general/LinkInfo/LinkInfo");
var Join = function () {
    var _a = react_1.useState(false), isVisible = _a[0], setVisible = _a[1];
    var title = react_1.useState("let string = array.join([ separator ]) - преобразует массив в строку по заданному разделителю: (', '), (' + '), ('/'), (' '), (''), (', super!') и т.д. ")[0];
    var descriptions = [
        "Метод join() - преобразует все элементы массива (или массивоподобного объекта) в новую строку, разделенную запятыми или заданным (separator-разделитель) разделителем. Если в массиве только один элемент, то этот элемент будет возвращен без использования разделителя.",
        "Элементы массива (строка, число - не важно) объединяются в одну строку. Если элемент равен 'undefined' или 'null', он преобразуется в пустую строку.",
        "Возвращаемое значение: строка со всеми объединенными элементами массива. Если arr.length равна 0, то возвращается пустая строка. ",
        "Синтаксис: ",
    ];
    var descriptionsBefore = [
        "join()",
        "join( separator )",
        "separator - (необязательный) задает вид разделителя ( запятая, пробел, строка; любой другой знак, символ, слово) для каждой пары соседних элементов массива. При необходимости разделитель преобразуется в строку. Если он опущен, элементы массива разделяются запятой ('',''). Если separator - пустая строка, все элементы соединяются без каких-либо символов между ними. ",
    ];
    var expanderHandler = function () {
        setVisible(function (prev) { return !prev; });
    };
    return (react_1["default"].createElement("div", { className: "expanding" },
        react_1["default"].createElement(ExpandingHeading_1["default"], { isContentVisible: isVisible, panelName: title, onClickExpanding: expanderHandler }),
        react_1["default"].createElement(framer_motion_1.AnimatePresence, null, isVisible && (react_1["default"].createElement(framer_motion_1.motion.div, { initial: { height: 0, opacity: 0 }, animate: { height: "auto", opacity: 1 }, exit: { height: 0, opacity: 0 }, style: { overflow: "hidden" } },
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement(LinkInfo_1["default"], { title: "Array.prototype.join()", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join" }),
                    descriptions &&
                        descriptions.map(function (item, index) { return (react_1["default"].createElement("p", { key: index, className: "expanding__paragraph" }, item)); }),
                    descriptionsBefore &&
                        descriptionsBefore.map(function (item, index) { return (react_1["default"].createElement("p", { key: index, className: "expanding__paragraph-before" }, item)); })),
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement("div", { className: "expanding__pre" },
                        react_1["default"].createElement("h2", { className: "expanding__heading" }, "\u041F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u043C\u0430\u0441\u0441\u0438\u0432\u0430 \u0447\u0435\u0442\u044B\u0440\u044C\u043C\u044F \u0440\u0430\u0437\u043D\u044B\u043C\u0438 \u0441\u043F\u043E\u0441\u043E\u0431\u0430\u043C\u0438"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph" }, "\u0412 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u043C \u043F\u0440\u0438\u043C\u0435\u0440\u0435 \u043F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u0443\u0435\u043C \u043C\u0430\u0441\u0441\u0438\u0432 a \u0432 \u0441\u0442\u0440\u043E\u043A\u0443 \u0447\u0435\u0442\u044B\u0440\u0435 \u0440\u0430\u0437\u0430: \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0440\u0430\u0437\u0434\u0435\u043B\u0438\u0442\u0435\u043B\u044F \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E, \u0437\u0430\u0442\u0435\u043C \u0437\u0430\u043F\u044F\u0442\u043E\u0439 \u0438 \u043F\u0440\u043E\u0431\u0435\u043B\u0430, \u0437\u0430\u0442\u0435\u043C \u043F\u043B\u044E\u0441\u0430 \u0438 \u043F\u0443\u0441\u0442\u043E\u0439 \u0441\u0442\u0440\u043E\u043A\u0438."),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "const a = [ \"Wind\", \"Water\", \"Fire\" ];"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "a.join(); // 'Wind,Water,Fire'"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "a.join(\", \"); // 'Wind, Water, Fire'"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "a.join(\" + \"); // 'Wind + Water + Fire'"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "a.join(\"\"); // 'WindWaterFire'"))),
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement("div", { className: "expanding__pre" },
                        react_1["default"].createElement("h2", { className: "expanding__heading" }, "6 \u0441\u043F\u043E\u0441\u043E\u0431\u043E\u0432. \u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439: \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0440\u0430\u0437\u0434\u0435\u043B\u0438\u0442\u0435\u043B\u044F \u043F\u0440\u0438\u043C\u0435\u043D\u044F\u0435\u043C \u0441\u0442\u0440\u043E\u043A\u0443"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, " const array = [ \"\u0412\u0435\u0442\u0435\u0440\", \"\u0414\u043E\u0436\u0434\u044C\", \"\u041E\u0433\u043E\u043D\u044C\" ];"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "console.log(array.join());"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "// \u0412\u0435\u0442\u0435\u0440,\u0414\u043E\u0436\u0434\u044C,\u041E\u0433\u043E\u043D\u044C"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "console.log(array.join(\", \"));"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "// \u0412\u0435\u0442\u0435\u0440, \u0414\u043E\u0436\u0434\u044C, \u041E\u0433\u043E\u043D\u044C"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "console.log(array.join(\" + \"));"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "// \u0412\u0435\u0442\u0435\u0440 + \u0414\u043E\u0436\u0434\u044C + \u041E\u0433\u043E\u043D\u044C"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "console.log(array.join(\" \"));"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "// \u0412\u0435\u0442\u0435\u0440 \u0414\u043E\u0436\u0434\u044C \u041E\u0433\u043E\u043D\u044C"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "console.log(array.join(\"\"));"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "// \u0412\u0435\u0442\u0435\u0440\u0414\u043E\u0436\u0434\u044C\u041E\u0433\u043E\u043D\u044C"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "console.log(array.join(\", \u043C\u044B \u043E\u0442 \u0442\u0435\u0431\u044F \u0443\u0441\u0442\u0430\u043B\u0438. \"));"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "// \u0412\u0435\u0442\u0435\u0440, \u043C\u044B \u043E\u0442 \u0442\u0435\u0431\u044F \u0443\u0441\u0442\u0430\u043B\u0438. \u0414\u043E\u0436\u0434\u044C, \u043C\u044B \u043E\u0442 \u0442\u0435\u0431\u044F \u0443\u0441\u0442\u0430\u043B\u0438. \u041E\u0433\u043E\u043D\u044C")))))))));
};
exports["default"] = Join;
