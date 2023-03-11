"use strict";
exports.__esModule = true;
/* eslint-disable react/jsx-no-comment-textnodes */
var framer_motion_1 = require("framer-motion"); // анимация
var react_1 = require("react");
var ExpandingHeading_1 = require("../general/expanding/ExpandingPanel/ExpandingHeading");
require("../../styles/dist/expanding.css");
var LinkInfo_1 = require("../general/LinkInfo/LinkInfo");
var Filter = function () {
    var _a = react_1.useState(false), isVisible = _a[0], setVisible = _a[1];
    var title = react_1.useState("Array.filter() - метод создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.")[0];
    var descriptions = [
        "Метод filter() вызывает переданную функцию callback один раз для каждого элемента массива, и создаёт новый массив со всеми значениями, прошедшими проверку. Элементы массива, не прошедшие проверку функцией callback, просто пропускаются и не включаются в новый массив.",
        "Метод filter() не изменяет массив, для которого он был вызван, метод создаёт новый массив",
        "Синтаксис: ",
        "// Стрелочная функция ",
        "filter (( item ) => { ... } ) ",
        "filter (( item, index ) => { ... } ) ",
        "filter (( item, index, array ) => { ... } ) ",
        "- ",
        "// Колбэк-функция ",
        "filter ( callbackFn ) ",
        "filter ( callbackFn, thisArg ) ",
        "- ",
        "// Встроенная колбэк-функция ",
        "filter ( function callbackFn ( item ) { ... }) ",
        "filter ( function callbackFn( item, index ) { ... }) ",
        "filter ( function callbackFn( item, index, array ) { ... }) ",
        "filter ( function callbackFn( item, index, array ) { ... }, thisArg)",
        "Возвращаемое значение: вернётся новый массив с элементами, которые прошли проверку. Если ни один элемент не прошёл проверку, то будет возвращён пустой массив. ",
        "Параметры: ",
    ];
    var descriptionsBefore = [
        "callbackFn - функция, которая будет вызвана для проверки каждого элемента массива. Если функция возвращает true, то элемент остаётся в массиве, если false, то удаляется. ",
        "Принимает три аргумента: ",
        "item - текущий, обрабатываемый элемент в массиве. ",
        "index - (необязательный) индекс текущего, обрабатываемого элемента в массиве. ",
        "array - (необязательный) обрабатываемый массив, на котором был вызван метод filter(). ",
        "thisArg - (необязательный) значение, используемое в качестве this при вызове колбэк-функции callbackFn. ",
    ];
    var expanderHandler = function () {
        setVisible(function (prev) { return !prev; });
    };
    return (react_1["default"].createElement("div", { className: "expanding" },
        react_1["default"].createElement(ExpandingHeading_1["default"], { isContentVisible: isVisible, panelName: title, onClickExpanding: expanderHandler }),
        react_1["default"].createElement(framer_motion_1.AnimatePresence, null, isVisible && (react_1["default"].createElement(framer_motion_1.motion.div, { initial: { height: 0, opacity: 0 }, animate: { height: "auto", opacity: 1 }, exit: { height: 0, opacity: 0 }, style: { overflow: "hidden" } },
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement(LinkInfo_1["default"], { title: "Array.prototype.filter()", href: "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/filter" }),
                    descriptions &&
                        descriptions.map(function (item, index) { return (react_1["default"].createElement("p", { key: index, className: "expanding__paragraph" }, item)); }),
                    descriptionsBefore &&
                        descriptionsBefore.map(function (item, index) { return (react_1["default"].createElement("p", { key: index, className: "expanding__paragraph-before" }, item)); })),
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement("div", { className: "expanding__pre" },
                        react_1["default"].createElement("h2", { className: "expanding__heading" }, "\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440: "),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "let users = ["),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "{ id: 1, name: \"\u0412\u0430\u0441\u044F\" },"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "{ id: 2, name: \"\u041F\u0435\u0442\u044F\" },"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "{ id: 3, name: \"\u041C\u0430\u0448\u0430\" }"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "];"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "// \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043C\u0430\u0441\u0441\u0438\u0432, \u0441\u043E\u0441\u0442\u043E\u044F\u0449\u0438\u0439 \u0438\u0437 \u0434\u0432\u0443\u0445 \u043F\u0435\u0440\u0432\u044B\u0445 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "let someUsers = users.filter (( item ) => item.id < 3 );"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "alert ( someUsers ); // [ { id: 1, name: \"\u0412\u0430\u0441\u044F\" }, { id: 2, name: \"\u041F\u0435\u0442\u044F\" }, ]"))),
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement("div", { className: "expanding__pre" },
                        react_1["default"].createElement("h2", { className: "expanding__heading" }, "\u0424\u0438\u043B\u044C\u0442\u0440\u0430\u0446\u0438\u044F \u0432\u0441\u0435\u0445 \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0445 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph" }, "\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u043F\u0440\u0438\u043C\u0435\u0440 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 \u043C\u0435\u0442\u043E\u0434 filter() \u0434\u043B\u044F \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u043E\u0442\u0444\u0438\u043B\u044C\u0442\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0433\u043E \u043C\u0430\u0441\u0441\u0438\u0432\u0430, \u0432\u0441\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u0431\u043E\u043B\u044C\u0448\u0435 \u0438\u043B\u0438 \u0440\u0430\u0432\u043D\u044B 10, \u0430 \u0442\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043C\u0435\u043D\u044C\u0448\u0435 10, \u0431\u0443\u0434\u0443\u0442 \u0443\u0434\u0430\u043B\u0435\u043D\u044B."),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "function isBigEnough( value ) { "),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "return value >= 10;"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "} "),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "let filtered = [ 12, 5, 8, 130, 44 ].filter( isBigEnough );"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "// \u043C\u0430\u0441\u0441\u0438\u0432 filtered \u0442\u0435\u043F\u0435\u0440\u044C \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 [ 12, 130, 44 ]"))),
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement("div", { className: "expanding__pre" },
                        react_1["default"].createElement("h2", { className: "expanding__heading" }, "\u041D\u0430\u0439\u0442\u0438 \u0432\u0441\u0435 \u043F\u0440\u043E\u0441\u0442\u044B\u0435 \u0447\u0438\u0441\u043B\u0430 \u0432 \u043C\u0430\u0441\u0441\u0438\u0432\u0435"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph" }, "\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u043F\u0440\u0438\u043C\u0435\u0440 \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0432\u0441\u0435 \u043F\u0440\u043E\u0441\u0442\u044B\u0435 \u0447\u0438\u0441\u043B\u0430 \u0432 \u043C\u0430\u0441\u0441\u0438\u0432\u0435:"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "function isPrime ( num ) { "),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, " for ( let i = 2; num > i; i++ ) { "),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, " if ( num % i == 0 ) { "),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, " return false; "),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "} }"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "return num > 1;"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "}"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "-"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "const array = [ -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ];"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "console.log( array.filter ( isPrime )); // [ 2, 3, 5, 7, 11, 13 ]"))),
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement("div", { className: "expanding__pre" },
                        react_1["default"].createElement("h2", { className: "expanding__heading" }, "\u0424\u0438\u043B\u044C\u0442\u0440\u0430\u0446\u0438\u044F \u043D\u0435\u0432\u0435\u0440\u043D\u044B\u0445 \u0437\u0430\u043F\u0438\u0441\u0435\u0439 \u0432 JSON"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph" }, "\u0412 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u043C \u043F\u0440\u0438\u043C\u0435\u0440\u0435 \u043C\u0435\u0442\u043E\u0434 filter() \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0434\u043B\u044F \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u043E\u0442\u0444\u0438\u043B\u044C\u0442\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0433\u043E JSON-\u043E\u0431\u044A\u0435\u043A\u0442\u0430, \u0432\u0441\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442 \u043D\u0435\u043D\u0443\u043B\u0435\u0432\u043E\u0435 \u0447\u0438\u0441\u043B\u043E\u0432\u043E\u0435 \u043F\u043E\u043B\u0435 id."),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "let arr = [ { id: 15 }, { id: -1 }, { id: 0 }, { id: 3 }, { id: 12.2 }, { }, { id: null }, { id: NaN }, { id: 'undefined' } ]"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "-"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "let invalidEntries = 0"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "-"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "function filterByID ( item ) { "),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" },
                            " ",
                            "if ( Number.isFinite ( item.id ) && item.id !== 0 ) {",
                            " "),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "return true"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "}"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "invalidEntries++"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "return false;"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "}"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "-"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "let arrByID = arr.filter ( filterByID )"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "console.log ( '\u041E\u0442\u0444\u0438\u043B\u044C\u0442\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u043C\u0430\u0441\u0441\u0438\u0432\\n', arrByID )"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "// \u041E\u0442\u0444\u0438\u043B\u044C\u0442\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u043C\u0430\u0441\u0441\u0438\u0432"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "// [ { id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 } ]"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "console.log( '\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0445 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 = ', invalidEntries )"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "// \u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0445 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 = 5 ")))))))));
};
exports["default"] = Filter;
