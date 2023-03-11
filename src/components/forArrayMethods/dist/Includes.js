"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion"); // анимация
var react_1 = require("react");
var ExpandingHeading_1 = require("../general/expanding/ExpandingPanel/ExpandingHeading");
require("../../styles/dist/expanding.css");
var LinkInfo_1 = require("../general/LinkInfo/LinkInfo");
var Includes = function () {
    var _a = react_1.useState(false), isVisible = _a[0], setVisible = _a[1];
    var title = react_1.useState("Array.includes(item, from) - метод ищет item начиная с индекса from и возвращает true, если поиск успешен. Или false, если item не найден")[0];
    var descriptions = [
        "includes() - метод определяет, содержит ли массив определённый элемент, возвращая в зависимости от этого true или false",
        "Если мы хотим проверить наличие элемента в массиве и нет необходимости знать его индекс, предпочтительно использовать arr.includes.",
        "Синтаксис: ",
        "includes(searchElement)",
        "includes(searchElement, fromIndex)",
        "Параметры",
    ];
    var descriptionsBefore = [
        "searchElement - искомый элемент.",
        "fromIndex - (необязательный) индекс с отсчетом от нуля, с которого следует начать поиск, преобразованный в целое число . ",
        "Отрицательный индекс отсчитывается от конца массива — если используется , fromIndex < 0. fromIndex + array.length. Однако в этом случае массив по-прежнему просматривается спереди назад. ",
        "Если fromIndex < -array.length или fromIndex опущено, 0 используется, что приводит к поиску всего массива. ",
        "Если fromIndex >= array.length массив не ищется и false возвращается. ",
        "Возвращаемое значение - логическое значение, которое равно true, если значение searchElement найдено в массиве (или в части массива, обозначенной индексом fromIndex, если он указан). ",
    ];
    var expanderHandler = function () {
        setVisible(function (prev) { return !prev; });
    };
    return (react_1["default"].createElement("div", { className: "expanding" },
        react_1["default"].createElement(ExpandingHeading_1["default"], { isContentVisible: isVisible, panelName: title, onClickExpanding: expanderHandler }),
        react_1["default"].createElement(framer_motion_1.AnimatePresence, null, isVisible && (react_1["default"].createElement(framer_motion_1.motion.div, { initial: { height: 0, opacity: 0 }, animate: { height: "auto", opacity: 1 }, exit: { height: 0, opacity: 0 }, style: { overflow: "hidden" } },
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement(LinkInfo_1["default"], { title: "Array.prototype.includes()", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes" }),
                    descriptions &&
                        descriptions.map(function (item, index) { return (react_1["default"].createElement("p", { key: index, className: "expanding__paragraph" }, item)); }),
                    descriptionsBefore &&
                        descriptionsBefore.map(function (item, index) { return (react_1["default"].createElement("p", { key: index, className: "expanding__paragraph-before" }, item)); })),
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement("div", { className: "expanding__pre" },
                        react_1["default"].createElement("h2", { className: "expanding__heading" }, "\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u043C\u0435\u0442\u043E\u0434\u0430 includes()"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "[1, 2, 3].includes(2); // true"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "[1, 2, 3].includes(4); // false"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "[1, 2, 3].includes(3, 3); // false"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "[1, 2, 3].includes(3, -1); // true"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "[1, 2, NaN].includes(NaN); // true"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "[\"1\", \"2\", \"3\"].includes(3); // false"))),
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement("div", { className: "expanding__pre" },
                        react_1["default"].createElement("h2", { className: "expanding__heading" }, "fromIndex \u0431\u043E\u043B\u044C\u0448\u0435 \u0438\u043B\u0438 \u0440\u0430\u0432\u0435\u043D \u0434\u043B\u0438\u043D\u0435 \u043C\u0430\u0441\u0441\u0438\u0432\u0430"),
                        react_1["default"].createElement("h2", { className: "expanding__subheading" }, "\u0415\u0441\u043B\u0438 fromIndex \u0431\u043E\u043B\u044C\u0448\u0435 \u0438\u043B\u0438 \u0440\u0430\u0432\u0435\u043D \u0434\u043B\u0438\u043D\u0435 \u043C\u0430\u0441\u0441\u0438\u0432\u0430, \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044F false, \u043F\u043E\u0438\u0441\u043A \u043E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0441\u044F."),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "const arr = [\"a\", \"b\", \"c\"];"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "arr.includes(\"c\", 3); // false"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "arr.includes(\"c\", 100); // false"))),
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement("div", { className: "expanding__pre" },
                        react_1["default"].createElement("h2", { className: "expanding__heading" }, "\u041C\u0435\u0442\u043E\u0434 includes() \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E \u043E\u0431\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0435\u0442 NaN"),
                        react_1["default"].createElement("h2", { className: "expanding__subheading" }, "\u041D\u0435\u0437\u043D\u0430\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F, \u043D\u043E \u0437\u0430\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u044E\u0449\u0430\u044F \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u044F \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E\u0441\u0442\u044C includes() \u2013 \u043E\u043D \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E \u043E\u0431\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0435\u0442 NaN, \u0432 \u043E\u0442\u043B\u0438\u0447\u0438\u0435 \u043E\u0442 indexOf():"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "const arr = [NaN];"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "alert( arr.indexOf(NaN) ); // -1 (\u043D\u0435\u0432\u0435\u0440\u043D\u043E, \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C 0)"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "alert( arr.includes(NaN) );// true (\u0432\u0435\u0440\u043D\u043E)")))))))));
};
exports["default"] = Includes;
