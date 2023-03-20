"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion"); // анимация
var react_1 = require("react");
var NotfoundPage = function () {
    return (react_1["default"].createElement(framer_motion_1.motion.div, { initial: { width: 0, opacity: 0 }, animate: { width: "100%", opacity: 1 }, exit: { x: window.innerWidth, transition: { duration: 0.1 }, opacity: 0 } }, "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u043F\u043E \u044D\u0442\u043E\u043C\u0443 \u0430\u0434\u0440\u0435\u0441\u0443 \u043D\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442"));
};
exports["default"] = NotfoundPage;
