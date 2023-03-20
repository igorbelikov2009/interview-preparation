"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion"); // анимация
var react_1 = require("react");
var Page_1 = require("../components/general/Page/Page");
var PageLink_1 = require("../components/general/PageLink/PageLink");
var stringMethodsData_1 = require("../data/stringMethodsData");
var StringMethods = function () {
    return (react_1["default"].createElement(framer_motion_1.motion.div, { initial: { width: 0, opacity: 0 }, animate: { width: "100%", opacity: 1 }, exit: { x: window.innerWidth, transition: { duration: 0.1 }, opacity: 0 } },
        react_1["default"].createElement(PageLink_1["default"], { links: stringMethodsData_1.linksStringMethods, title: "\u041C\u0435\u0442\u043E\u0434\u044B \u0441\u0442\u0440\u043E\u043A, \u0441\u0441\u044B\u043B\u043A\u0438" }),
        react_1["default"].createElement(Page_1["default"], { title: "\u041C\u0435\u0442\u043E\u0434\u044B \u0441\u0442\u0440\u043E\u043A \u0432 JavaScript: \u043F\u0440\u043E\u0441\u0442\u0430\u044F \u0448\u043F\u0430\u0440\u0433\u0430\u043B\u043A\u0430 \u0441 \u043F\u0440\u0438\u043C\u0435\u0440\u0430\u043C\u0438.", ArrayHeadingAnswers: stringMethodsData_1.arrayStringMethods })));
};
exports["default"] = StringMethods;
