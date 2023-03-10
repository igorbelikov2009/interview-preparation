"use strict";
exports.__esModule = true;
/* eslint-disable react/jsx-no-comment-textnodes */
var framer_motion_1 = require("framer-motion"); // анимация
var react_1 = require("react");
var ExpandingHeading_1 = require("../general/expanding/ExpandingPanel/ExpandingHeading");
require("../../styles/dist/expanding.css");
var LinkInfo_1 = require("../general/LinkInfo/LinkInfo");
var IndexOf = function () {
    var _a = react_1.useState(false), isVisible = _a[0], setVisible = _a[1];
    var title = react_1.useState("Array.indexOf() - метод возвращает первый индекс, по которому данный элемент может быть найден в массиве, или -1, если он отсутствует.")[0];
    var descriptions = [
        "Метод indexOf() возвращает первый индекс, по которому данный элемент может быть найден в массиве, или -1, если он отсутствует.",
        "Метод indexOf()сравнивает searchElementэлементы массива, используя строгое равенство (тот же алгоритм, что и ===оператор). NaNзначения никогда не сравниваются как равные, поэтому indexOf()всегда возвращаются, -1когда searchElementесть NaN.",
        "Метод indexOf()пропускает пустые слоты в разреженных массивах .",
        "Метод indexOf()универсальный . _ Он только ожидает, что thisзначение будет иметь lengthсвойство и свойства с целочисленным ключом.",
        "Синтаксис: ",
        " - indexOf(searchElement) ",
        " - indexOf(searchElement, fromIndex) ",
        "Параметры: ",
    ];
    var descriptionsBefore = [
        "searchElement - элемент, который нужно найти в массиве. ",
        "fromIndex - (необязательный) индекс, преобразованный в целое число, с отсчетом от нуля, с которого следует начать поиск. ",
        "Отрицательный индекс отсчитывается от конца массива — если используется , fromIndex < 0. fromIndex + array.lengthОбратите внимание, что в этом случае массив по-прежнему просматривается спереди назад. ",
        "Если fromIndex < -array.lengthили fromIndexопущено, 0используется, что приводит к поиску всего массива. ",
        "Если fromIndex >= array.lengthмассив не ищется и -1возвращается. ",
    ];
    var expanderHandler = function () {
        setVisible(function (prev) { return !prev; });
    };
    return (react_1["default"].createElement("div", { className: "expanding" },
        react_1["default"].createElement(ExpandingHeading_1["default"], { isContentVisible: isVisible, panelName: title, onClickExpanding: expanderHandler }),
        react_1["default"].createElement(framer_motion_1.AnimatePresence, null, isVisible && (react_1["default"].createElement(framer_motion_1.motion.div, { initial: { height: 0, opacity: 0 }, animate: { height: "auto", opacity: 1 }, exit: { height: 0, opacity: 0 }, style: { overflow: "hidden" } },
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement(LinkInfo_1["default"], { title: "Array.prototype.indexOf()", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf" }),
                    descriptions &&
                        descriptions.map(function (item, index) { return (react_1["default"].createElement("p", { key: index, className: "expanding__paragraph" }, item)); }),
                    descriptionsBefore &&
                        descriptionsBefore.map(function (item, index) { return (react_1["default"].createElement("p", { key: index, className: "expanding__paragraph-before" }, item)); })),
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement("div", { className: "expanding__content" },
                        react_1["default"].createElement("div", { className: "expanding__pre" },
                            react_1["default"].createElement("h2", { className: "expanding__heading" }, "\u041F\u043E\u0438\u0441\u043A \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 \u0432 \u043C\u0430\u0441\u0441\u0438\u0432\u0435"),
                            react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "\u041D\u0430\u0439\u0442\u0438 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0432 \u043C\u0430\u0441\u0441\u0438\u0432\u0435 \u043C\u043E\u0436\u043D\u043E \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043C\u0435\u0442\u043E\u0434\u0430 indexOf():"),
                            react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "const disks = ['500Gb', '1Tb', '2Tb'];"),
                            react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "const index = disks.indexOf('1Tb'); // 1"),
                            react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "\u0412 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0430 \u043E\u043D \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0438\u043D\u0434\u0435\u043A\u0441 \u043F\u0435\u0440\u0432\u043E\u0433\u043E \u043D\u0430\u0439\u0434\u0435\u043D\u043D\u043E\u0433\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430."),
                            react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "\u0415\u0441\u043B\u0438 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D, \u0442\u043E indexOf() \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 -1. \u042D\u0442\u043E \u043C\u043E\u0436\u043D\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C, \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u0447\u0442\u043E\u0431\u044B \u043F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u043B\u0438 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0432 \u043C\u0430\u0441\u0441\u0438\u0432\u0435:"),
                            react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "-"),
                            react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "const disks = ['500Gb', '1Tb', '2Tb'];"),
                            react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "if (disks.indexOf('1Tb') > -1) {"),
                            react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, " console.log( '\u042D\u0442\u043E\u0442 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0432 \u043C\u0430\u0441\u0441\u0438\u0432\u0435 \u0435\u0441\u0442\u044C!' );"),
                            react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "}"),
                            react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "\u041C\u0435\u0442\u043E\u0434 indexOf() \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0438\u0441\u043A\u0430\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u043D\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u0441 \u043D\u0430\u0447\u0430\u043B\u0430, \u043D\u043E \u0438 \u0441 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0451\u043D\u043D\u043E\u0433\u043E \u0438\u043D\u0434\u0435\u043A\u0441\u0430. \u0414\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u0435\u043C\u0443 \u043D\u0443\u0436\u043D\u043E \u0435\u0433\u043E \u0443\u043A\u0430\u0437\u0430\u0442\u044C \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0432\u0442\u043E\u0440\u043E\u0433\u043E \u0430\u0440\u0433\u0443\u043C\u0435\u043D\u0442\u0430:"),
                            react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "const nums = ['One', 'Two', 'One'];"),
                            react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "nums.indexOf('One', 1); // 2"))),
                    react_1["default"].createElement("div", { className: "expanding__pre" },
                        react_1["default"].createElement("h2", { className: "expanding__heading" }, "\u041F\u043E\u0438\u0441\u043A \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439 \u0432 \u043C\u0430\u0441\u0441\u0438\u0432\u0435."),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "const array = [2, 9, 9];"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "array.indexOf(2); // 0"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "array.indexOf(7); // -1"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "array.indexOf(9, 2); // 2"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "array.indexOf(2, -1); // -1"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "array.indexOf(2, -3); // 0"),
                        react_1["default"].createElement("h2", { className: "expanding__heading" }, "\u0412\u044B \u043D\u0435 \u043C\u043E\u0436\u0435\u0442\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C indexOf()\u0434\u043B\u044F \u043F\u043E\u0438\u0441\u043A\u0430 NaN."),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "const array = [NaN];"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "array.indexOf(NaN); // -1"))),
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement("div", { className: "expanding__pre" },
                        react_1["default"].createElement("h2", { className: "expanding__heading" }, "\u041D\u0430\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u0432\u0441\u0435\u0445 \u0432\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "const indices = [ ];"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "const array = [ \"a\", \"b\", \"a\", \"c\", \"a\", \"d\" ];"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "const element = \"a\";"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "let idx = array.indexOf( element );"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "while ( idx !== -1 ) { "),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "// \u0435\u0441\u043B\u0438 idx !== -1, \u0437\u043D\u0430\u0447\u0438\u0442 \u043F\u043E \u044D\u0442\u043E\u043C\u0443 \u0438\u043D\u0434\u0435\u043A\u0441\u0443 \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0441\u044F \u0438\u0441\u043A\u043E\u043C\u044B\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "indices.push( idx );"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "// \u0441\u043E\u0431\u0438\u0440\u0430\u0435\u043C \u0432 \u043C\u0430\u0441\u0441\u0438\u0432 \u0432\u0441\u0435 \u0438\u043D\u0434\u0435\u043A\u0441\u044B, \u043F\u043E \u043A\u043E\u0442\u043E\u0440\u044B\u043C \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0441\u044F \u043D\u0430\u0448\u0438 \u044D\u043B\u0435\u043C\u0435\u043D\u0442"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, " idx = array.indexOf( element, idx + 1 );"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "} "),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "console.log( indices );"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "// [ 0, 2, 4 ]")))))))));
};
exports["default"] = IndexOf;
