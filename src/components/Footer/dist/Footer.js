"use strict";
exports.__esModule = true;
var react_1 = require("react");
var FooterLink_1 = require("../ui/links/FooterLink/FooterLink");
var Footer_module_scss_1 = require("./Footer.module.scss");
var Footer = function () {
    var FirstBlock = [
        { to: "/", children: "Общие вопросы" },
        { to: "/websiteLayout", children: "Вёрстка web-сайтов" },
        { to: "/javascript", children: "JavaScript" },
        { to: "/javascriptFishki", children: "JavaScript фишки" },
        { to: "/linksjavascript", children: "Ссылки JavaScript" },
        { to: "/react", children: "React" },
        { to: "/reactFishki", children: "React фишки" },
        { to: "/http", children: "HTTP" },
        { to: "/axios", children: "Axios" },
        { to: "/mobx", children: "Mobx" },
        { to: "/linksvue", children: "Ссылки Vue" },
    ];
    var SecondBlock = [
        { to: "/typescript", children: "Typescript" },
        { to: "/typescriptFishki", children: "Typescript фишки" },
        { to: "/destructuring", children: "Деструктуризация" },
        { to: "/error", children: "Обработка ошибок" },
        { to: "/json", children: "Методы JSON" },
        { to: "/browserlinks", children: "Браузерные ссылки" },
        { to: "/objectmethods", children: "Методы объектов" },
        { to: "/promise", children: "Промисы" },
    ];
    var ThirdBlock = [
        { to: "/vue", children: "Vue" },
        { to: "/dom", children: "DOM" },
        { to: "/github", children: "GitHub" },
        { to: "/arraymethods", children: "Методы массивов" },
        { to: "/arraytasks", children: "Задачи методов массивов" },
        { to: "/numberMethods", children: "Работа с числами" },
        { to: "/stringMethods", children: "Методы строк" },
        { to: "/css", children: "CSS" },
        { to: "/html", children: "HTML" },
        { to: "/barMenu", children: "Бар меню" },
        { to: "/localStorage", children: "LocalStorage" },
    ];
    var FourthBlock = [
        { to: "/browserLinksCSSFishki", children: "Ссылки на фишки CSS" },
        { to: "/browserLinksGitHub", children: "Ссылки на GitHub" },
        { to: "/browserLinksFireBase", children: "Ссылки на FireBase" },
        { to: "/browserLinksDirectory", children: "Ссылки на справочники" },
        { to: "/browserLinksCssFrameworks", children: "Ссылки на фреймворки CSS" },
        { to: "/browserLinksTypescript", children: "Ссылки на Typescript" },
        { to: "/browserLinksReact", children: "Ссылки на React" },
        { to: "/browserLinksNPM", children: "Ссылки на npm" },
        { to: "/browserLinksIconsLoaders", children: "Ссылки на иконки, спинеры" },
        { to: "/youTube", children: "На YouTube" },
        { to: "/youTubeAuthor", children: "На YouTube авторы" },
        { to: "/youTubeCSS", children: "На YouTube CSS-фишки" },
        { to: "/youTubeJavascript", children: "На YouTube Javascript" },
        { to: "/youTubeJavascriptFishki", children: "На YouTube Javascript-фишки" },
        { to: "/youTubeReact", children: "На YouTube React" },
        { to: "/youTubeTypescript", children: "На YouTube Typescript" },
        { to: "/youTubeInterview", children: "На YouTube собеседования" },
    ];
    return (react_1["default"].createElement("footer", { className: Footer_module_scss_1["default"]["footer"] },
        react_1["default"].createElement("div", { className: Footer_module_scss_1["default"]["footer__nav"] },
            react_1["default"].createElement("div", { className: Footer_module_scss_1["default"]["footer__column"] }, FirstBlock.map(function (link) { return (react_1["default"].createElement(FooterLink_1["default"], { key: link.children, to: link.to }, link.children)); })),
            react_1["default"].createElement("div", { className: Footer_module_scss_1["default"]["footer__column"] }, SecondBlock.map(function (link) { return (react_1["default"].createElement(FooterLink_1["default"], { key: link.to, to: link.to }, link.children)); })),
            react_1["default"].createElement("div", { className: Footer_module_scss_1["default"]["footer__column"] }, ThirdBlock.map(function (link) { return (react_1["default"].createElement(FooterLink_1["default"], { key: link.to, to: link.to }, link.children)); })),
            react_1["default"].createElement("div", { className: Footer_module_scss_1["default"]["footer__column"] }, FourthBlock.map(function (link) { return (react_1["default"].createElement(FooterLink_1["default"], { key: link.to, to: link.to }, link.children)); })))));
};
exports["default"] = Footer;
