"use strict";
exports.__esModule = true;
/* eslint-disable react/jsx-no-comment-textnodes */
var framer_motion_1 = require("framer-motion"); // анимация
var react_1 = require("react");
var ExpandingHeading_1 = require("../general/expanding/ExpandingPanel/ExpandingHeading");
require("../../styles/dist/expanding.css");
var LinkInfo_1 = require("../general/LinkInfo/LinkInfo");
var Map = function () {
    var _a = react_1.useState(false), isVisible = _a[0], setVisible = _a[1];
    var title = react_1.useState("Array.map() - метод создает новый массив из результатов вызванной функции для каждого элемента массива.")[0];
    var descriptions = [
        "Метод вызывает функцию для каждого элемента массива и возвращает массив результатов выполнения этой функции. ",
        "Возвращаемое значение: новый массив, где каждый элемент является результатом callback функции.",
        "Синтаксис: ",
        " let result = arr.map ( function ( item, index, array ) { ",
        " // возвращается новое значение вместо элемента ",
        " });",
        "Параметры: ",
    ];
    var descriptionsBefore = [
        "function - функция, вызываемая для каждого элемента массива arr. Каждый раз, когда callback выполняется, возвращаемое значение добавляется в new_array. Функция callback, создающая элемент в новом массиве, принимает три аргумента: ",
        "item - текущий обрабатываемый элемент массива. ",
        "index - (необязательный) индекс текущего обрабатываемого элемента в массиве. ",
        "array - (необязательный) массив, по которому осуществляется проход.",
    ];
    var expanderHandler = function () {
        setVisible(function (prev) { return !prev; });
    };
    return (react_1["default"].createElement("div", { className: "expanding" },
        react_1["default"].createElement(ExpandingHeading_1["default"], { isContentVisible: isVisible, panelName: title, onClickExpanding: expanderHandler }),
        react_1["default"].createElement(framer_motion_1.AnimatePresence, null, isVisible && (react_1["default"].createElement(framer_motion_1.motion.div, { initial: { height: 0, opacity: 0 }, animate: { height: "auto", opacity: 1 }, exit: { height: 0, opacity: 0 }, style: { overflow: "hidden" } },
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement(LinkInfo_1["default"], { title: "Array.prototype.map()", href: "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/map" }),
                    descriptions &&
                        descriptions.map(function (item, index) { return (react_1["default"].createElement("p", { key: index, className: "expanding__paragraph" }, item)); }),
                    descriptionsBefore &&
                        descriptionsBefore.map(function (item, index) { return (react_1["default"].createElement("p", { key: index, className: "expanding__paragraph-before" }, item)); })),
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement("div", { className: "expanding__pre" },
                        react_1["default"].createElement("h2", { className: "expanding__heading" }, "\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u0437\u0434\u0435\u0441\u044C \u043C\u044B \u043F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u0443\u0435\u043C \u043A\u0430\u0436\u0434\u044B\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0432 \u0435\u0433\u043E \u0434\u043B\u0438\u043D\u0443:"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "let lengths = [ \"\u0411\u0438\u043B\u044C\u0431\u043E\", \"\u0413\u044D\u043D\u0434\u0430\u043B\u044C\u0444\", \"\u041D\u0430\u0437\u0433\u0443\u043B\" ].map( item => item.length );"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "alert ( lengths ); // 6,8,6"))),
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement("div", { className: "expanding__pre" },
                        react_1["default"].createElement("h2", { className: "expanding__heading" }, "\u041F\u0440\u0438\u043C\u0435\u0440: \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043C\u0430\u0441\u0441\u0438\u0432\u0430 \u0447\u0438\u0441\u0435\u043B \u0438\u0437 \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u043D\u044B\u0445 \u043A\u043E\u0440\u043D\u0435\u0439 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0449\u0435\u0433\u043E \u043C\u0430\u0441\u0441\u0438\u0432\u0430."),
                        react_1["default"].createElement("p", { className: "expanding__paragraph" }, "\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u043A\u043E\u0434 \u0431\u0435\u0440\u0451\u0442 \u043C\u0430\u0441\u0441\u0438\u0432 \u0447\u0438\u0441\u0435\u043B \u0438 \u0441\u043E\u0437\u0434\u0430\u0451\u0442 \u043D\u043E\u0432\u044B\u0439 \u043C\u0430\u0441\u0441\u0438\u0432, \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0449\u0438\u0439 \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u043D\u044B\u0435 \u043A\u043E\u0440\u043D\u0438 \u0447\u0438\u0441\u0435\u043B \u0438\u0437 \u043F\u0435\u0440\u0432\u043E\u0433\u043E \u043C\u0430\u0441\u0441\u0438\u0432\u0430."),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "const numbers = [ 1, 4, 9 ];"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "const roots = numbers.map ( Math.sqrt );"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "// \u0441\u043E\u0437\u0434\u0430\u043B\u0438 \u043C\u0430\u0441\u0441\u0438\u0432 roots, \u0440\u0430\u0432\u043D\u044B\u0439: [ 1, 2, 3 ], \u0430 numbers \u043E\u0441\u0442\u0430\u043B\u0441\u044F \u043F\u0440\u0435\u0436\u043D\u0438\u043C [ 1, 4, 9 ]"))),
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement("div", { className: "expanding__pre" },
                        react_1["default"].createElement("h2", { className: "expanding__heading" }, "\u041F\u0440\u0438\u043C\u0435\u0440: \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043C\u0430\u0441\u0441\u0438\u0432\u0430 \u0447\u0438\u0441\u0435\u043B \u0441 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435\u043C \u0444\u0443\u043D\u043A\u0446\u0438\u0438, \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0449\u0435\u0439 \u0430\u0440\u0433\u0443\u043C\u0435\u043D\u0442"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph" }, "\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u043A\u043E\u0434 \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442, \u043A\u0430\u043A \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043C\u0430\u0441\u0441\u0438\u0432\u0430, \u043A\u043E\u0433\u0434\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u044F \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u043E\u0434\u0438\u043D \u0430\u0440\u0433\u0443\u043C\u0435\u043D\u0442. \u0410\u0440\u0433\u0443\u043C\u0435\u043D\u0442 \u0431\u0443\u0434\u0435\u0442 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u043F\u0440\u0438\u0441\u0432\u0430\u0438\u0432\u0430\u0442\u044C\u0441\u044F \u043A\u0430\u0436\u0434\u043E\u043C\u0443 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0443 \u043C\u0430\u0441\u0441\u0438\u0432\u0430, \u043A\u043E\u0433\u0434\u0430 map \u043F\u0440\u043E\u0445\u043E\u0434\u0438\u0442 \u043F\u043E \u043E\u0440\u0438\u0433\u0438\u043D\u0430\u043B\u044C\u043D\u043E\u043C\u0443 \u043C\u0430\u0441\u0441\u0438\u0432\u0443."),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "const numbers = [ 1, 4, 9 ];"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "const doubles = numbers.map (( num ) => num * 2 );"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "// \u0442\u0435\u043F\u0435\u0440\u044C doubles \u0440\u0430\u0432\u0435\u043D [ 2, 8, 18 ], \u0430 numbers \u0432\u0441\u0451 \u0435\u0449\u0451 \u0440\u0430\u0432\u0435\u043D [ 1, 4, 9 ]"))),
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement("div", { className: "expanding__pre" },
                        react_1["default"].createElement("h2", { className: "expanding__heading" }, "\u041F\u0440\u0438\u043C\u0435\u0440: \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 map \u0434\u043B\u044F \u043F\u0435\u0440\u0435\u0432\u043E\u0440\u0430\u0447\u0438\u0432\u0430\u043D\u0438\u044F \u0441\u0442\u0440\u043E\u043A\u0438"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "const string = '12345';"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "const reversed = Array.prototype.map.call ( string, ( x ) => x ).reverse().join( '' );"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "// reversed \u0440\u0430\u0432\u0435\u043D '54321'"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "// \u0411\u043E\u043D\u0443\u0441: \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 '===' \u0434\u043B\u044F \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 \u0442\u043E\u0433\u043E, \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043B\u0438 \u0441\u0442\u0440\u043E\u043A\u0430 \u043F\u0430\u043B\u0438\u043D\u0434\u0440\u043E\u043C\u043E\u043C")))))))));
};
exports["default"] = Map;
