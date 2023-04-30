"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion"); // анимация
var Page_1 = require("../components/general/Page/Page");
var typescriptData_1 = require("../data/typescriptData");
var TypescriptPage = function () {
    return (React.createElement(framer_motion_1.motion.div, { initial: { width: 0 }, animate: { width: "100%" }, exit: { x: window.innerWidth, transition: { duration: 0.1 } } },
        React.createElement(Page_1["default"], { title: "\u0412\u043E\u043F\u0440\u043E\u0441\u044B \u043F\u043E Typescript", ArrayHeadingAnswers: typescriptData_1.arrayTypescript })));
};
exports["default"] = TypescriptPage;
