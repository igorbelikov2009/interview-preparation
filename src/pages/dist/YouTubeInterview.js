"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion"); // анимация
var react_1 = require("react");
var PageLink_1 = require("../components/general/PageLink/PageLink");
var YouTubeInterview = function () {
    var links = [
        {
            href: "",
            title: ""
        },
        {
            href: "",
            title: ""
        },
        {
            href: "",
            title: ""
        },
        {
            href: "",
            title: ""
        },
        {
            href: "",
            title: ""
        },
        {
            href: "",
            title: ""
        },
        {
            href: "",
            title: ""
        },
        {
            href: "",
            title: ""
        },
        {
            href: "",
            title: ""
        },
        {
            href: "",
            title: ""
        },
        {
            href: "",
            title: ""
        },
        {
            href: "",
            title: ""
        },
        {
            href: "",
            title: ""
        },
        {
            href: "",
            title: ""
        },
        {
            href: "",
            title: ""
        },
        {
            href: "",
            title: ""
        },
        {
            href: "",
            title: ""
        },
        {
            href: "",
            title: ""
        },
        {
            href: "",
            title: ""
        },
        {
            href: "",
            title: ""
        },
    ];
    return (react_1["default"].createElement(framer_motion_1.motion.div, { initial: { width: 0, opacity: 0 }, animate: { width: "100%", opacity: 1 }, exit: { x: window.innerWidth, transition: { duration: 0.1 }, opacity: 0 } },
        react_1["default"].createElement(PageLink_1["default"], { links: links, title: "\u0421\u0441\u044B\u043B\u043A\u0438 \u043D\u0430 YouTube \u0441\u043E\u0431\u0435\u0441\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u0435" })));
};
exports["default"] = YouTubeInterview;
