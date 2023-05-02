"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion"); // анимация
var react_1 = require("react");
var Page_1 = require("../components/general/Page/Page");
var PageLink_1 = require("../components/general/PageLink/PageLink");
var VuePage = function () {
    var links = [
        {
            href: "https://www.youtube.com/watch?v=c2SK1IlmYL8&t=86s",
            title: "Сгенерировать новый проект во Vue. 1 минута 57 секунда"
        },
        {
            href: "https://www.youtube.com/watch?v=S8AiEvuXcAg",
            title: "Vue 3 + Firebase + TypeScript - строим приложение музыкальной коллекции"
        },
        {
            href: "https://www.youtube.com/watch?v=6wYu4_6hcDY",
            title: "Vue.js. Полный курс. webDev от 02.05.2023г"
        },
        {
            href: "",
            title: ""
        },
    ];
    var ArrayHeadingAnswers = [
        {
            heading: " ",
            answer: [" ", " ", " ", " ", " ", " ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " ", " ", " ", " ", " ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " ", " ", " ", " ", " ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " ", " ", " ", " ", " ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " ", " ", " ", " ", " ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " ", " ", " ", " ", " ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " ", " ", " ", " ", " ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " ", " ", " ", " ", " ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " ", " ", " ", " ", " ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " ", " ", " ", " ", " ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " ", " ", " ", " ", " ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " ", " ", " ", " ", " ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " ", " ", " ", " ", " ", " "],
            isParagraph: true
        },
    ];
    return (react_1["default"].createElement(framer_motion_1.motion.div, { initial: { width: 0, opacity: 0 }, animate: { width: "100%", opacity: 1 }, exit: { x: window.innerWidth, transition: { duration: 0.1 }, opacity: 0 } },
        react_1["default"].createElement(PageLink_1["default"], { links: links, title: "Vue, \u0441\u0441\u044B\u043B\u043A\u0438" }),
        react_1["default"].createElement(Page_1["default"], { title: "\u0412\u043E\u043F\u0440\u043E\u0441\u044B \u043F\u043E Vue", ArrayHeadingAnswers: ArrayHeadingAnswers })));
};
exports["default"] = VuePage;
