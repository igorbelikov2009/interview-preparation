"use strict";
exports.__esModule = true;
/* eslint-disable react/jsx-no-comment-textnodes */
var framer_motion_1 = require("framer-motion"); // анимация
var react_1 = require("react");
var ExpandingHeading_1 = require("../general/expanding/ExpandingPanel/ExpandingHeading");
var LinkInfo_1 = require("../general/LinkInfo/LinkInfo");
require("./taskModel.scss");
var Even_or_odd = function () {
    var _a = react_1.useState(false), isVisible = _a[0], setVisible = _a[1];
    var expanderHandler = function () {
        setVisible(function (prev) { return !prev; });
    };
    // задача
    var title = react_1.useState("Чётное или нечётное?")[0];
    var number = 1263;
    function even_or_odd(number) {
        return number % 2 === 0 ? "чётное" : "нечётное";
    }
    console.log(even_or_odd(number));
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
                        react_1["default"].createElement("h2", { className: "expanding__subheading" }, "x"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "x"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "x"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "-"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, " x"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "x")))))))));
};
exports["default"] = Even_or_odd;
