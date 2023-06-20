"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion"); // анимация
var react_1 = require("react");
var PageLink_1 = require("../components/general/PageLink/PageLink");
var youTubeData_1 = require("../data/youTubeData");
var YouTube = function () {
    return (react_1["default"].createElement(framer_motion_1.motion.div, { initial: { width: 0 }, animate: { width: "100%" }, exit: { x: window.innerWidth, transition: { duration: 0.1 } } },
        react_1["default"].createElement(PageLink_1["default"], { links: youTubeData_1.linksYouTube, title: "\u0421\u0441\u044B\u043B\u043A\u0438 \u043D\u0430 YouTube" })));
};
exports["default"] = YouTube;
