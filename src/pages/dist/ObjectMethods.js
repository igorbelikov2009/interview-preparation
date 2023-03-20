"use strict";
exports.__esModule = true;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion"); // анимация
var Page_1 = require("../components/general/Page/Page");
var PageLink_1 = require("../components/general/PageLink/PageLink");
var objectMethodsData_1 = require("../data/objectMethodsData");
var ObjectMethodsPage = function () {
    return (react_1["default"].createElement(framer_motion_1.motion.div, { initial: { width: 0, opacity: 0 }, animate: { width: "100%", opacity: 1 }, exit: { x: window.innerWidth, transition: { duration: 0.1 }, opacity: 0 } },
        react_1["default"].createElement(PageLink_1["default"], { links: objectMethodsData_1.linksObjectMethods, title: "\u041C\u0435\u0442\u043E\u0434\u044B \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432, \u0441\u0441\u044B\u043B\u043A\u0438" }),
        react_1["default"].createElement(Page_1["default"], { title: "\u0412\u043E\u043F\u0440\u043E\u0441\u044B \u043F\u043E \u043C\u0435\u0442\u043E\u0434\u0430\u043C \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432", ArrayHeadingAnswers: objectMethodsData_1.arrayObjectMethods })));
};
exports["default"] = ObjectMethodsPage;
