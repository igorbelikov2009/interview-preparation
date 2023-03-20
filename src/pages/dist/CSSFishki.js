"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion"); // анимация
var react_1 = require("react");
var PageLink_1 = require("../components/general/PageLink/PageLink");
var cssData_1 = require("../data/cssData");
var CSSFishki = function () {
    return (react_1["default"].createElement(framer_motion_1.motion.div, { initial: { width: 0, opacity: 0 }, animate: { width: "100%", opacity: 1 }, exit: { x: window.innerWidth, transition: { duration: 0.1 }, opacity: 0 } },
        react_1["default"].createElement(PageLink_1["default"], { links: cssData_1.linksCSSFishki, title: "\u0424\u0438\u0448\u043A\u0438 CSS, \u0441\u0441\u044B\u043B\u043A\u0438" })));
};
exports["default"] = CSSFishki;
