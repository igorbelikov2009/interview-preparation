"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion"); // анимация
var react_1 = require("react");
var Page_1 = require("../components/general/Page/Page");
var PageLink_1 = require("../components/general/PageLink/PageLink");
var Interviews = function () {
    var links = [
        {
            href: "https://www.youtube.com/watch?v=bqQI9rFm1ro",
            title: "[Redux] Мой любимый вопрос на собеседовании"
        },
        {
            href: "https://www.youtube.com/watch?v=OtAlPwW8DNU",
            title: "Все ли вы знаете о React key?"
        },
        {
            href: "https://www.youtube.com/watch?v=2Wp7QPTkpms&t=43s",
            title: "Что вы знаете о useCallback?"
        },
        {
            href: "https://www.youtube.com/watch?v=n_OtFAsh6aU",
            title: "какая разница между useLayoutEffect, componentDidMount и useEffect?"
        },
        {
            href: "https://www.youtube.com/watch?v=-lHQ8b0GpEQ",
            title: "SENIOR пошел на JUNIOR Javascript Developer собеседование"
        },
        {
            href: " ",
            title: " "
        },
        {
            href: " ",
            title: " "
        },
        {
            href: " ",
            title: " "
        },
        {
            href: " ",
            title: " "
        },
        {
            href: " ",
            title: " "
        },
        {
            href: " ",
            title: " "
        },
        {
            href: " ",
            title: " "
        },
    ];
    var ArrayHeadingAnswers = [
        {
            heading: " ",
            answer: [" ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " "],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " "],
            isParagraph: true
        },
    ];
    return (react_1["default"].createElement(framer_motion_1.motion.div, { initial: { width: 0, opacity: 0 }, animate: { width: "100%", opacity: 1 }, exit: { x: window.innerWidth, transition: { duration: 0.1 }, opacity: 0 } },
        react_1["default"].createElement(PageLink_1["default"], { links: links, title: "\u0421\u043E\u0431\u0435\u0441\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u044F \u0441\u0441\u044B\u043B\u043A\u0438" }),
        react_1["default"].createElement(Page_1["default"], { ArrayHeadingAnswers: ArrayHeadingAnswers, title: "\u0412\u043E\u043F\u0440\u043E\u0441\u044B \u043F\u043E \u0441\u043E\u0431\u0435\u0441\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u044E." })));
};
exports["default"] = Interviews;
