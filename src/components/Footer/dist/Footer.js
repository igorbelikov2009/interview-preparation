"use strict";
exports.__esModule = true;
var react_1 = require("react");
var FooterLink_1 = require("../ui/links/FooterLink/FooterLink");
var Footer_module_scss_1 = require("./Footer.module.scss");
var Footer = function () {
    var FirstBlock = [
        { to: "/", children: "Общие вопросы" },
        { to: "/generalLinks", children: "Общие ссылки" },
        { to: "/referenceBooks", children: "Справочная литература" },
        { to: "/iconsLoaders", children: "Ссылки на иконки, спинеры" },
        { to: "/webDevelopment", children: "Веб-разработка" },
        { to: "/linksNPM", children: "npm менеджер пакетов" },
        { to: "/github", children: "GitHub" },
        { to: "/http", children: "HTTP" },
        { to: "/fireBase", children: "FireBase" },
        { to: "/interviews", children: "Собеседования" },
    ];
    var SecondBlock = [
        { to: "/css", children: "CSS" },
        { to: "/cssFishki", children: "CSS фишки" },
        { to: "/frameworksCSS", children: "Фреймворки CSS" },
        { to: "/javascript", children: "JavaScript" },
        { to: "/javascriptFishki", children: "JavaScript фишки" },
        { to: "/react", children: "React" },
        { to: "/reactRouter", children: "React Router" },
        { to: "/typescript", children: "Typescript" },
        { to: "/vue", children: "Vue" },
        { to: "/dom", children: "DOM" },
    ];
    var ThirdBlock = [
        { to: "/arraymethods", children: "Методы массивов" },
        { to: "/arraytasks", children: "Задачи методов массивов" },
        { to: "/objectmethods", children: "Методы объектов" },
        { to: "/numberMethods", children: "Методы чисел" },
        { to: "/stringMethods", children: "Методы строк" },
        { to: "/destructuring", children: "Деструктуризация" },
        { to: "/error", children: "Обработка ошибок" },
        { to: "/json", children: "Методы JSON" },
        { to: "/webStorage", children: "WebStorage - веб-хранилище" },
    ];
    var FourthBlock = [
        { to: "/youTube", children: "На YouTube" },
        { to: "/youTubeAuthor", children: "На YouTube авторы" },
        { to: "/youTubeReact", children: "На YouTube React" },
        { to: "/youTubeJavascript", children: "На YouTube Javascript " },
        { to: "/youTubeTasksJavascript", children: "На YouTube задачи по Javascript " },
        { to: "/youTubeTypescript", children: "На YouTube Typescript" },
        { to: "/youTubeCSS", children: "На YouTube CSS" },
        { to: "/youTubeInterview", children: "На YouTube собеседования" },
        { to: "/links", children: "Ссылки" },
        { to: "/barMenu", children: "Бар меню" },
    ];
    return (react_1["default"].createElement("footer", { className: Footer_module_scss_1["default"]["footer"] },
        react_1["default"].createElement("div", { className: Footer_module_scss_1["default"]["footer__nav"] },
            react_1["default"].createElement("div", { className: Footer_module_scss_1["default"]["footer__column"] }, FirstBlock.map(function (link) { return (react_1["default"].createElement(FooterLink_1["default"], { key: link.children, to: link.to }, link.children)); })),
            react_1["default"].createElement("div", { className: Footer_module_scss_1["default"]["footer__column"] }, SecondBlock.map(function (link) { return (react_1["default"].createElement(FooterLink_1["default"], { key: link.to, to: link.to }, link.children)); })),
            react_1["default"].createElement("div", { className: Footer_module_scss_1["default"]["footer__column"] }, ThirdBlock.map(function (link) { return (react_1["default"].createElement(FooterLink_1["default"], { key: link.to, to: link.to }, link.children)); })),
            react_1["default"].createElement("div", { className: Footer_module_scss_1["default"]["footer__column"] }, FourthBlock.map(function (link) { return (react_1["default"].createElement(FooterLink_1["default"], { key: link.to, to: link.to }, link.children)); })))));
};
exports["default"] = Footer;
