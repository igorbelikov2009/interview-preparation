"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion"); // анимация
var react_1 = require("react");
var PageLink_1 = require("../components/general/PageLink/PageLink");
var YouTubeJavascript = function () {
    var linksYouTubeJavascript = [
        {
            href: "https://www.youtube.com/watch?v=GsYiq4Ic384&list=PLM7wFzahDYnGF4WqYaSuwnItYDEBakTDS",
            title: "30 вопросов JavaScript собеседования - бесплатный курс"
        },
        {
            href: "https://www.youtube.com/watch?v=2dPEFTpzTgE",
            title: "Простой способ обойти защиту копирования контента! Пишем script защиты контента. JS, keydown, copy."
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
        react_1["default"].createElement(PageLink_1["default"], { links: linksYouTubeJavascript, title: "Javascript \u043D\u0430 YouTube." })));
};
exports["default"] = YouTubeJavascript;
