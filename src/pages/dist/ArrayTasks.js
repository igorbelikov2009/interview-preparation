"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion"); // анимация
var react_1 = require("react");
var Page_1 = require("../components/general/Page/Page");
var PageLink_1 = require("../components/general/PageLink/PageLink");
var ArrayTasksPage = function () {
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
        react_1["default"].createElement(PageLink_1["default"], { links: links, title: "\u0417\u0430\u0434\u0430\u0447\u0438 \u043F\u043E \u043C\u0435\u0442\u043E\u0434\u0430\u043C \u043C\u0430\u0441\u0441\u0438\u0432\u043E\u0432, \u0441\u0441\u044B\u043B\u043A\u0438" }),
        react_1["default"].createElement(Page_1["default"], { title: "\u0417\u0430\u0434\u0430\u0447\u0438 \u043F\u043E \u043C\u0435\u0442\u043E\u0434\u0430\u043C \u043C\u0430\u0441\u0441\u0438\u0432\u043E\u0432", ArrayHeadingAnswers: ArrayHeadingAnswers })));
};
exports["default"] = ArrayTasksPage;
