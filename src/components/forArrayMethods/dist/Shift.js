"use strict";
exports.__esModule = true;
/* eslint-disable react/jsx-no-comment-textnodes */
var framer_motion_1 = require("framer-motion"); // анимация
var react_1 = require("react");
var ExpandingHeading_1 = require("../general/expanding/ExpandingPanel/ExpandingHeading");
require("../../styles/dist/expanding.css");
var Shift = function () {
    var _a = react_1.useState(false), isVisible = _a[0], setVisible = _a[1];
    var title = react_1.useState("array.shift() - удаляет элемент в начале массива и возвращает его")[0];
    var descriptions = ["shift() – удаляет первый элемент массива и возвращает его."];
    var planets = ["Венера ", "Меркурий ", "Земля"];
    var firstElem = planets.shift();
    var expanderHandler = function () {
        setVisible(function (prev) { return !prev; });
    };
    return (react_1["default"].createElement("div", { className: "expanding" },
        react_1["default"].createElement(ExpandingHeading_1["default"], { isContentVisible: isVisible, panelName: title, onClickExpanding: expanderHandler }),
        react_1["default"].createElement(framer_motion_1.AnimatePresence, null, isVisible && (react_1["default"].createElement(framer_motion_1.motion.div, { initial: { height: 0, opacity: 0 }, animate: { height: "auto", opacity: 1 }, exit: { height: 0, opacity: 0 }, style: { overflow: "hidden" } },
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("div", { className: "expanding__content" }, descriptions &&
                    descriptions.map(function (item, index) { return (react_1["default"].createElement("p", { key: index, className: "expanding__paragraph" }, item)); })),
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement("div", { className: "expanding__pre" },
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "const planets = [\"\u0412\u0435\u043D\u0435\u0440\u0430 \", \"\u041C\u0435\u0440\u043A\u0443\u0440\u0438\u0439 \", \"\u0417\u0435\u043C\u043B\u044F\"]"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "const firstElem = planets.shift(); // \u0443\u0434\u0430\u043B\u044F\u0435\u043C \u043F\u0435\u0440\u0432\u044B\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" },
                            " console.log(firstElem); // ",
                            firstElem,
                            " "),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, " console.log(planets); // [\"\u041C\u0435\u0440\u043A\u0443\u0440\u0438\u0439 \", \"\u0417\u0435\u043C\u043B\u044F\"] ")))))))));
};
exports["default"] = Shift;
