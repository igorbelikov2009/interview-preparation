"use strict";
exports.__esModule = true;
/* eslint-disable react/jsx-no-comment-textnodes */
var framer_motion_1 = require("framer-motion"); // анимация
var react_1 = require("react");
var ExpandingHeading_1 = require("../general/expanding/ExpandingPanel/ExpandingHeading");
require("../../styles/dist/expanding.css");
var LinkInfo_1 = require("../general/LinkInfo/LinkInfo");
var Entries = function () {
    var _a = react_1.useState(false), isVisible = _a[0], setVisible = _a[1];
    var title = react_1.useState("В JavaScript entry() — это метод Array, который используется для возврата нового объекта-итератора Array, который позволяет перебирать пары ключ/значение в массиве. Поскольку метод entry() является методом объекта Array, его необходимо вызывать через конкретный экземпляр класса Array.")[0];
    var descriptions = [
        "Синтаксис: ",
        "var iterator = array.entries() ",
        "Для метода entry() нет параметров или аргументов.",
        "Возвращает массив индексов и значений заданного массива.",
        "Array.entries() возвращает новый объект Array Iterator, который содержит пары ключей и значений для каждого индекса массива. ",
        "Описание: ",
        "Чтобы понять суть этого метода, вы также должны понимать, что такое итератор.",
    ];
    var descriptionsBefore = [
        "Итератор – это объект, который отслеживает свою текущую позицию, одновременно получая элементы в коллекции по одному.",
        "Итератор возвращает объект с двумя свойствами: done и value. ",
        "В JavaScript итератор предоставляет метод next(), который возвращает следующий элемент в последовательности ",
        "Когда последовательность завершится, значение value будет равно undefined,а done будет равным true.",
    ];
    var expanderHandler = function () {
        setVisible(function (prev) { return !prev; });
    };
    return (react_1["default"].createElement("div", { className: "expanding" },
        react_1["default"].createElement(ExpandingHeading_1["default"], { isContentVisible: isVisible, panelName: title, onClickExpanding: expanderHandler }),
        react_1["default"].createElement(framer_motion_1.AnimatePresence, null, isVisible && (react_1["default"].createElement(framer_motion_1.motion.div, { initial: { height: 0, opacity: 0 }, animate: { height: "auto", opacity: 1 }, exit: { height: 0, opacity: 0 }, style: { overflow: "hidden" } },
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement(LinkInfo_1["default"], { title: "Array.prototype.entries()", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries" }),
                    react_1["default"].createElement(LinkInfo_1["default"], { title: "Array.prototype.entries()", href: "https://www.techonthenet.com/js/array_entries.php" }),
                    descriptions &&
                        descriptions.map(function (item, index) { return (react_1["default"].createElement("p", { key: index, className: "expanding__paragraph" }, item)); }),
                    descriptionsBefore &&
                        descriptionsBefore.map(function (item, index) { return (react_1["default"].createElement("p", { key: index, className: "expanding__paragraph-before" }, item)); })),
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement("div", { className: "expanding__pre" },
                        react_1["default"].createElement("h2", { className: "expanding__heading" }, "\u041F\u0440\u0438\u043C\u0435\u0440"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "var arr = [ 'a', 'b', 'c' ];"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "var eArr = arr.entries();"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "-"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "console.log(eArr.next().value); // [ 0, 'a' ]"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "console.log(eArr.next().value); // [ 1, 'b' ]"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "console.log(eArr.next().value); // [ 2, 'c' ]"))),
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement("div", { className: "expanding__pre" },
                        react_1["default"].createElement("h2", { className: "expanding__heading" }, "\u041F\u0440\u0438\u043C\u0435\u0440 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0441 \u0446\u0438\u043A\u043B\u043E\u043C. "),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "// \u0438\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0438\u0440\u0443\u0435\u043C \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u0443\u044E, \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0449\u0443\u044E \u043C\u0430\u0441\u0441\u0438\u0432"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "let array = [ \"one\", \"two\", \"three\" ];"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "-"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, " // \u0438\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0438\u0440\u0443\u0435\u043C \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u0443\u044E, \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0449\u0443\u044E \u043E\u0431\u044A\u0435\u043A\u0442 \u0438\u0442\u0435\u0440\u0430\u0442\u043E\u0440"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "let iterator = array.entries();"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "-"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "// \u043F\u0440\u043E\u0445\u043E\u0434\u0438\u043C \u0446\u0438\u043A\u043B\u043E\u043C \u043F\u043E \u043E\u0431\u044A\u0435\u043A\u0442\u0443, \u0432\u044B\u0432\u043E\u0434\u0438\u043C \u043F\u0430\u0440\u044B \u043A\u043B\u044E\u0447/\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "for (let item of iterator) { "),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "console.log( item );"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "} "),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "// [ 0, \"one\" ]"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "// [ 1, \"two\" ]"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "// [ 2, \"three\" ]"))),
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement("div", { className: "expanding__pre" },
                        react_1["default"].createElement("h2", { className: "expanding__heading" }, "x"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "x"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "x"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "-"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "x"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "x"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "x"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "x"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "-"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "x"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "x"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "x"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "-"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "x"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "x")))))))));
};
exports["default"] = Entries;
