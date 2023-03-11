"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion"); // анимация
var react_1 = require("react");
var ExpandingHeading_1 = require("../general/expanding/ExpandingPanel/ExpandingHeading");
require("../../styles/dist/expanding.css");
var LinkInfo_1 = require("../general/LinkInfo/LinkInfo");
var LastIndexOf = function () {
    var _a = react_1.useState(false), isVisible = _a[0], setVisible = _a[1];
    var title = react_1.useState("Array.lastIndexOf(item, from) - метод возвращает последний индекс, по которому данный элемент может быть найден в массиве, или -1, если он отсутствует.")[0];
    var descriptions = [
        "Метод lastIndexOf() выполняет то же самое что indexOf(), только осуществляет это с конца, ищет справа налево.",
        "Метод lastIndexOf() возвращает последний индекс, по которому данный элемент может быть найден в массиве, или -1, если он отсутствует. Массив просматривается в обратном направлении, начиная с fromIndex.",
        "Синтаксис: ",
        "lastIndexOf(searchElement)",
        "lastIndexOf(searchElement, fromIndex)",
        "Параметры: ",
    ];
    var descriptionsBefore = [
        "searchElement - элемент, который нужно найти в массиве. ",
        "fromIndex - (необязательный) индекс с отсчетом от нуля, с которого начинается поиск в обратном направлении, преобразованный в целое число . ",
        "Отрицательный индекс отсчитывается от конца массива — если используется , fromIndex < 0.fromIndex + array.length",
        "Если fromIndex < -array.lengthмассив не ищется и -1возвращается. Концептуально вы можете думать об этом как о начале с несуществующей позиции перед началом массива и движении назад оттуда. На пути нет элементов массива, поэтому searchElementон никогда не будет найден. ",
        "Если fromIndex >= array.lengthили fromIndexопущено, array.length - 1используется, что приводит к поиску всего массива. Концептуально вы можете думать об этом как о начале с несуществующей позиции за концом массива и движении назад оттуда. В конечном итоге он достигает реальной конечной позиции массива, после чего начинает поиск в обратном направлении по фактическим элементам массива. ",
        "Метод lastIndexOf()сравнивает searchElementэлементы массива, используя строгое равенство (тот же алгоритм, что и === оператор).",
        "NaNзначения никогда не сравниваются как равные, поэтому lastIndexOf()всегда возвращаются, -1когда searchElementесть NaN.",
        "Метод lastIndexOf()пропускает пустые слоты в разреженных массивах .",
    ];
    var expanderHandler = function () {
        setVisible(function (prev) { return !prev; });
    };
    return (react_1["default"].createElement("div", { className: "expanding" },
        react_1["default"].createElement(ExpandingHeading_1["default"], { isContentVisible: isVisible, panelName: title, onClickExpanding: expanderHandler }),
        react_1["default"].createElement(framer_motion_1.AnimatePresence, null, isVisible && (react_1["default"].createElement(framer_motion_1.motion.div, { initial: { height: 0, opacity: 0 }, animate: { height: "auto", opacity: 1 }, exit: { height: 0, opacity: 0 }, style: { overflow: "hidden" } },
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement(LinkInfo_1["default"], { title: "Array.prototype.lastIndexOf()", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf" }),
                    descriptions &&
                        descriptions.map(function (item, index) { return (react_1["default"].createElement("p", { key: index, className: "expanding__paragraph" }, item)); }),
                    descriptionsBefore &&
                        descriptionsBefore.map(function (item, index) { return (react_1["default"].createElement("p", { key: index, className: "expanding__paragraph-before" }, item)); })),
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement("div", { className: "expanding__pre" },
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "const nums = ['One', 'Two', 'Three', 'One'];"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "nums.lastIndexOf('One'); // 3"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "nums.lastIndexOf('Two'); // 1")))))))));
};
exports["default"] = LastIndexOf;
