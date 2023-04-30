"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion"); // анимация
var react_1 = require("react");
var PageLink_1 = require("../components/general/PageLink/PageLink");
var YouTubeTypescript = function () {
    var links = [
        {
            href: "https://www.youtube.com/playlist?list=PLo0i68fkgCJ261LA9eiDIPACsEri2x8Mm",
            title: "React TypeScript Library UI. Public Code 33 видео"
        },
        {
            href: "https://www.youtube.com/playlist?list=PLNkWIWHIRwMFQBDhZ6HfwO9NL09X3N3Gq",
            title: "TypeScript + React. webDev 13 видео"
        },
        {
            href: "https://www.youtube.com/watch?v=hpPkwsRaWcA",
            title: "Особенности типизации children в React компонентах. Михаил Непомнящий."
        },
        {
            href: "https://www.youtube.com/watch?v=ltn9QoBCJkU&t=9s",
            title: "Axios + TS. Axios от А до Я. Полный курс в React приложении. "
        },
        {
            href: "https://www.youtube.com/watch?v=VBpmbqTi86Y",
            title: "Фишки TypeScript о которых ТЫ НЕ ЗНАЛ! Ulbi TV."
        },
        {
            href: "https://www.youtube.com/playlist?list=PLCp7YGqt4kFrLLx2rrg5RXVELPIzCJAT0",
            title: "Краткий Обзор TypeScript"
        },
        {
            href: "https://www.youtube.com/playlist?list=PLdTPrJkdrLGGgSnXMsO-Rix3MTuySb_mF",
            title: "TypeScript. wise.js"
        },
        {
            href: "https://www.youtube.com/playlist?list=PL3kMIP8C86shhC2qYjVUXyuk6Mk87bBDw",
            title: "TypeScript Дмитрий Герасимов"
        },
        {
            href: "https://www.youtube.com/playlist?list=PLFe0raUk4QF5QqZ8PYuPcoInxAJ1gaHpj",
            title: "Уроки TypeScript Веб Программирование"
        },
        {
            href: "https://www.youtube.com/playlist?list=PLGS5TF12xmz81204LuIeraH9YFUEfFSgd",
            title: "Typescript с нуля, 10 видео. Лабіринт Знання"
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
        react_1["default"].createElement(PageLink_1["default"], { links: links, title: "\u0421\u0441\u044B\u043B\u043A\u0438 \u043D\u0430 YouTube typescript" })));
};
exports["default"] = YouTubeTypescript;
