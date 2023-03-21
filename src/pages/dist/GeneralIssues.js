"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion"); // анимация
var react_1 = require("react");
var Page_1 = require("../components/general/Page/Page");
var generalIssuesData_1 = require("../data/generalIssuesData");
var GeneralIssues = function () {
    return (react_1["default"].createElement(framer_motion_1.motion.div, { initial: { width: 0 }, animate: { width: "100%" }, exit: { x: window.innerWidth, transition: { duration: 0.1 } } },
        react_1["default"].createElement(Page_1["default"], { title: "\u041E\u0431\u0449\u0438\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B", ArrayHeadingAnswers: generalIssuesData_1.generalIssues })));
};
exports["default"] = GeneralIssues;
