"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion"); // анимация
var react_1 = require("react");
var PageLink_1 = require("../components/general/PageLink/PageLink");
var fireBaseData_1 = require("../data/fireBaseData");
var FireBase = function () {
    return (react_1["default"].createElement(framer_motion_1.motion.div, { initial: { width: 0, opacity: 0 }, animate: { width: "100%", opacity: 1 }, exit: { x: window.innerWidth, transition: { duration: 0.1 }, opacity: 0 } },
        react_1["default"].createElement(PageLink_1["default"], { links: fireBaseData_1.linksFireBase, title: "\u0421\u0441\u044B\u043B\u043A\u0438 \u043D\u0430 FireBase" })));
};
exports["default"] = FireBase;
