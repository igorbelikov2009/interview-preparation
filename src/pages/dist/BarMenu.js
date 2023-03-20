"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion"); // анимация
var react_1 = require("react");
var PageBar_1 = require("../components/general/PageBar/PageBar");
var PageLink_1 = require("../components/general/PageLink/PageLink");
var BarMenuPage = function () {
    var links = [
        {
            href: " ",
            title: " "
        },
        {
            href: " ",
            title: " "
        },
    ];
    var ArrayHeadingAnswers = [
        {
            heading: " ",
            answer: [" ", " ", " ", " "],
            isParagraphBefore: true
        },
        {
            heading: " ",
            answer: [" ", " ", " ", " "],
            isParagraphBefore: true
        },
    ];
    return (react_1["default"].createElement(framer_motion_1.motion.div, { initial: { width: 0, opacity: 0 }, animate: { width: "100%", opacity: 1 }, exit: { x: window.innerWidth, transition: { duration: 0.1 }, opacity: 0 } },
        react_1["default"].createElement(PageLink_1["default"], { links: links, title: "\u0411\u0430\u0440 \u043C\u0435\u043D\u044E" }),
        react_1["default"].createElement(PageBar_1["default"], { ArrayHeadingAnswers: ArrayHeadingAnswers, title: "\u0411\u0430\u0440 \u043C\u0435\u043D\u044E" })));
};
exports["default"] = BarMenuPage;
