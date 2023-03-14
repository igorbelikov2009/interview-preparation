"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Page_1 = require("../components/general/Page/Page");
var PageLink_1 = require("../components/general/PageLink/PageLink");
var GitHubPage = function () {
    var links = [
        {
            href: "https://github.com/igorbelikov2009?tab=repositories",
            title: "Мой репозиторий на гитхабе."
        },
        {
            href: "https://htmlacademy.ru/blog/html_old",
            title: "Бесплатный учебник по Git и GitHub"
        },
        {
            href: "https://www.youtube.com/watch?v=9e5OSBCCvvU",
            title: "Основы командной разработки git в Visual Studio Code"
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
            href: "https://github.com/Shkulipa/online-store",
            title: "Shkulipa/online-storePublic. Онлайн-магазин, который я делал"
        },
        {
            href: "https://github.com/utimur/online-store-full-course",
            title: "utimur/online-store-full-coursePublic. Онлайн-магазин, который я делал"
        },
    ];
    var ArrayHeadingAnswers = [
        {
            heading: " ",
            answer: [" ", " ", " ", " "],
            isParagraphBefore: true
        },
        {
            heading: " ",
            answer: [" ", " ", " ", " "],
            isParagraphBefore: true
        },
        {
            heading: " ",
            answer: [" ", " ", " ", " "],
            isParagraphBefore: true
        },
        {
            heading: " ",
            answer: [" ", " ", " ", " "],
            isParagraphBefore: true
        },
        {
            heading: " ",
            answer: [" ", " ", " ", " "],
            isParagraphBefore: true
        },
        {
            heading: " ",
            answer: [" ", " ", " ", " "],
            isParagraphBefore: true
        },
    ];
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(PageLink_1["default"], { links: links, title: "GitHub, \u0441\u0441\u044B\u043B\u043A\u0438" }),
        react_1["default"].createElement(Page_1["default"], { title: "\u0412\u043E\u043F\u0440\u043E\u0441\u044B \u043F\u043E GitHub", ArrayHeadingAnswers: ArrayHeadingAnswers })));
};
exports["default"] = GitHubPage;
