"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion"); // анимация
var react_1 = require("react");
var ExpandingHeading_1 = require("../general/expanding/ExpandingPanel/ExpandingHeading");
require("../../styles/dist/expanding.css");
var LinkInfo_1 = require("../general/LinkInfo/LinkInfo");
var Slice = function () {
    var _a = react_1.useState(false), isVisible = _a[0], setVisible = _a[1];
    var title = react_1.useState("slice() - возвращает новый массив, предназначен для копирования участка массива.")[0];
    var descriptions = [
        "Метод slice() возвращает новый массив. Предназначен для копирования участка массива. При этом он не изменяет исходный массив, а возвращает в качестве результата новый массив, состоящий из выбранных элементов.",
        "Метод slice имеет 2 параметра:",
    ];
    var descriptionsBefore = [
        "1 параметр (обязательный) - предназначен для указания индекса элемента, с которого необходимо начать копировать элементы;",
        "2 параметр (необязательный) - предназначен для указания индекса элемента, до которого необходимо копировать (при этом он не включается в новый массив). Если его не указать, то будут скопированы элементы до конца указанного массива. ",
    ];
    var expanderHandler = function () {
        setVisible(function (prev) { return !prev; });
    };
    return (react_1["default"].createElement("div", { className: "expanding" },
        react_1["default"].createElement(ExpandingHeading_1["default"], { isContentVisible: isVisible, panelName: title, onClickExpanding: expanderHandler }),
        react_1["default"].createElement(framer_motion_1.AnimatePresence, null, isVisible && (react_1["default"].createElement(framer_motion_1.motion.div, { initial: { height: 0, opacity: 0 }, animate: { height: "auto", opacity: 1 }, exit: { height: 0, opacity: 0 }, style: { overflow: "hidden" } },
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement(LinkInfo_1["default"], { title: "Array.prototype.slice()", href: "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/slice" }),
                    descriptions &&
                        descriptions.map(function (item, index) { return (react_1["default"].createElement("p", { key: index, className: "expanding__paragraph" }, item)); }),
                    descriptionsBefore &&
                        descriptionsBefore.map(function (item, index) { return (react_1["default"].createElement("p", { key: index, className: "expanding__paragraph-before" }, item)); })),
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement("div", { className: "expanding__pre" },
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" },
                            "console.log(animals.slice(2)) // [\"camel\", \"duck\", \"elephant\"]",
                            " "),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "console.log(animals.slice(2, 4)) // [\"camel\", \"duck\"] "),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "console.log(animals.slice(1, 5)) // [\"bison\", \"camel\", \"duck\", \"elephant\"]"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "console.log(animals.slice(-2)) // [\"duck\", \"elephant\"] "),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "console.log(animals.slice(2, -1)) // [\"camel\", \"duck\"] "),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" },
                            "console.log(animals.slice()) // [\"ant\", \"bison\", \"camel\", \"duck\", \"elephant\"]",
                            " ")))))))));
};
exports["default"] = Slice;
