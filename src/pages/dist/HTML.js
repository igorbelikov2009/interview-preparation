"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion"); // анимация
var Page_1 = require("../components/general/Page/Page");
var PageLink_1 = require("../components/general/PageLink/PageLink");
var htmlData_1 = require("../data/htmlData");
var HTML = function () {
    return (React.createElement(framer_motion_1.motion.div, { initial: { width: 0, opacity: 0 }, animate: { width: "100%", opacity: 1 }, exit: { x: window.innerWidth, transition: { duration: 0.1 }, opacity: 0 } },
        React.createElement(PageLink_1["default"], { links: htmlData_1.linksHTML, title: "HTML \u0441\u0441\u044B\u043B\u043A\u0438" }),
        React.createElement(Page_1["default"], { title: "\u0412\u043E\u043F\u0440\u043E\u0441\u044B \u043F\u043E HTML", ArrayHeadingAnswers: htmlData_1.arrayHTML })));
};
exports["default"] = HTML;
