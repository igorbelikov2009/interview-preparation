"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion"); // анимация
var react_1 = require("react");
var ExpandingHeading_1 = require("../general/expanding/ExpandingPanel/ExpandingHeading");
require("../../styles/dist/expanding.css");
var LinkInfo_1 = require("../general/LinkInfo/LinkInfo");
var CopyWithin = function () {
    var _a = react_1.useState(false), isVisible = _a[0], setVisible = _a[1];
    var title = react_1.useState("Array.copyWithin() копирует часть массива в тот же массив и возвращает его без изменения размера, т. е. копирует элементы массива в пределах одного массива.")[0];
    var descriptions = [
        "Метод copyWithin() копирует последовательность элементов массива внутри него в позицию, начинающуюся по индексу target. Копия фрагмента массива берётся по индексам, задаваемым вторым start и третьим аргументами end. Аргумент end является необязательным и по умолчанию равен длине массива array.length.",
        "Возвращаемое значение - измененный массив. ",
        "синтаксис:",
        "array.copyWithin( target, start )",
        "// с указанием конечного индекса для вставки",
        "array.copyWithin( target, start, end )",
    ];
    var descriptionsBefore = [
        "target - начальный индекс позиции цели, куда копировать элементы. Допускается использование отрицательных значений, в этом случае индекс с которого будет произведено копирование будет расчитан по следующей формуле: length (длина массива) + target. ",
        "start - начальный индекс массива, откуда начинать копировать элементы. Допускается использование отрицательных значений, в этом случае индекс с которого будет произведено копирование будет расчитан по следующей формуле: length (длина массива) + start. ",
        "end - необязательный параметр. Конечный индекс массива, которым заканчивается копирование элементов массива. Если параметр не указан, то будут скопированы все элементы от начальной позиции (start) и до конца массива. Допускается использование отрицательных значений, в этом случае индекс до которого будет произведено копирование будет расчитан по следующей формуле: length (длина массива) + end.",
    ];
    var expanderHandler = function () {
        setVisible(function (prev) { return !prev; });
    };
    return (react_1["default"].createElement("div", { className: "expanding" },
        react_1["default"].createElement(ExpandingHeading_1["default"], { isContentVisible: isVisible, panelName: title, onClickExpanding: expanderHandler }),
        react_1["default"].createElement(framer_motion_1.AnimatePresence, null, isVisible && (react_1["default"].createElement(framer_motion_1.motion.div, { initial: { height: 0, opacity: 0 }, animate: { height: "auto", opacity: 1 }, exit: { height: 0, opacity: 0 }, style: { overflow: "hidden" } },
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement(LinkInfo_1["default"], { title: "Array.prototype.copyWithin()", href: "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin" }),
                    descriptions &&
                        descriptions.map(function (item, index) { return (react_1["default"].createElement("p", { key: index, className: "expanding__paragraph" }, item)); }),
                    descriptionsBefore &&
                        descriptionsBefore.map(function (item, index) { return (react_1["default"].createElement("p", { key: index, className: "expanding__paragraph-before" }, item)); })),
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement("div", { className: "expanding__pre" },
                        react_1["default"].createElement("h2", { className: "expanding__heading" }, "\u041F\u0440\u0438\u043C\u0435\u0440 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "var x = [1, 2, 3, \"a\", \"b\", \"c\"]; // \u0438\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0438\u0440\u0443\u0435\u043C \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u0443\u044E, \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0449\u0443\u044E \u043C\u0430\u0441\u0441\u0438\u0432"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "x.copyWithin( 0, 3 ); // \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043C\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 [\"a\", \"b\", \"c\", \"a\", \"b\", \"c\"]"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "x.copyWithin( 3, 0 ); // \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043C\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 [1, 2, 3, 1, 2, 3]"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "x.copyWithin( -2, 3 ); // \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043C\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 [1, 2, 3, \"a\", \"a\", \"b\"]"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "x.copyWithin( 0, 3, 4 ); // \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043C\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 [\"a\", 2, 3, \"a\", \"b\", \"c\"]"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "x.copyWithin( 0, 3, 5 ); // \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043C\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 [\"a\", \"b\", 3, \"a\", \"b\", \"c\"]"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "x.copyWithin( 0, -2, -1 ); // \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043C\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 [\"b\", 2, 3, \"a\", \"b\", \"c\"]")))))))));
};
exports["default"] = CopyWithin;
