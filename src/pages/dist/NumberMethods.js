"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion"); // анимация
var react_1 = require("react");
var Page_1 = require("../components/general/Page/Page");
var PageLink_1 = require("../components/general/PageLink/PageLink");
var numberMethodsData_1 = require("../data/numberMethodsData");
var NumberMethods = function () {
    return (react_1["default"].createElement(framer_motion_1.motion.div, { initial: { width: 0, opacity: 0 }, animate: { width: "100%", opacity: 1 }, exit: { x: window.innerWidth, transition: { duration: 0.1 }, opacity: 0 } },
        react_1["default"].createElement(PageLink_1["default"], { links: numberMethodsData_1.linksNumberMethods, title: "\u0420\u0430\u0431\u043E\u0442\u0430 \u0441 \u0447\u0438\u0441\u043B\u0430\u043C\u0438, \u0441\u0441\u044B\u043B\u043A\u0438" }),
        react_1["default"].createElement(Page_1["default"], { title: "\u0420\u0430\u0431\u043E\u0442\u0430 \u0441 \u0447\u0438\u0441\u043B\u0430\u043C\u0438 \u0432 JavaScript", ArrayHeadingAnswers: numberMethodsData_1.arrayNumberMethods })));
};
exports["default"] = NumberMethods;
