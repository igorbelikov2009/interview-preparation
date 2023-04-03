"use strict";
exports.__esModule = true;
/* eslint-disable @typescript-eslint/no-unused-vars */
var framer_motion_1 = require("framer-motion"); // анимация
var react_1 = require("react");
var ExpandingHeading_1 = require("../general/expanding/ExpandingPanel/ExpandingHeading");
var LinkInfo_1 = require("../general/LinkInfo/LinkInfo");
require("./taskModel.scss");
var EvenOrOdd = function () {
    var _a = react_1.useState(false), isVisible = _a[0], setVisible = _a[1];
    var expanderHandler = function () {
        setVisible(function (prev) { return !prev; });
    };
    // задача
    var title = react_1.useState("Чётное или нечётное?")[0];
    var number = 1263;
    var number2 = 1264;
    function even_or_odd(number) {
        return number % 2 === 0 ? "чётное" : "нечётное";
    }
    // console.log(even_or_odd(number));
    // console.log(even_or_odd(number2));
    // задача
    return (react_1["default"].createElement("div", { className: "expanding" },
        react_1["default"].createElement(ExpandingHeading_1["default"], { isContentVisible: isVisible, panelName: title, onClickExpanding: expanderHandler }),
        react_1["default"].createElement(framer_motion_1.AnimatePresence, null, isVisible && (react_1["default"].createElement(framer_motion_1.motion.div, { initial: { height: 0, opacity: 0 }, animate: { height: "auto", opacity: 1 }, exit: { height: 0, opacity: 0 }, style: { overflow: "hidden" } },
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement(LinkInfo_1["default"], { title: title, href: "" })),
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement("div", { className: "expanding__pre" },
                        react_1["default"].createElement("h2", { className: "expanding__heading" },
                            title,
                            " "),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "const number = 1263;"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "const number2 = 1264;"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "-"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "function even_or_odd(number: number) {"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "return number % 2 === 0 ? \"\u0447\u0451\u0442\u043D\u043E\u0435\" : \"\u043D\u0435\u0447\u0451\u0442\u043D\u043E\u0435\";"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "}"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "-"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "console.log(even_or_odd(number)); // \u043D\u0435\u0447\u0451\u0442\u043D\u043E\u0435"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "console.log(even_or_odd(number2)); // \u0447\u0451\u0442\u043D\u043E\u0435")))))))));
};
exports["default"] = EvenOrOdd;
