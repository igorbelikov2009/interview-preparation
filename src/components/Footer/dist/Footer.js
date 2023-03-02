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
        { to: "/http", children: "HTTP" },
        { to: "/axios", children: "Axios" },
        { to: "/linksvue", children: "Ссылки Vue" },
        { to: "/vue", children: "Vue" },
        { to: "/dom", children: "DOM" },
        { to: "/github", children: "GitHub" },
    ];
    var FourthBlock = [
        { to: "/arraymethods", children: "Методы массивов" },
        { to: "/arraytasks", children: "Задачи методов массивов" },
        { to: "/css", children: "CSS" },
        { to: "/html", children: "HTML" },
    ];
    return (react_1["default"].createElement("footer", { className: Footer_module_scss_1["default"]["footer"] },
        react_1["default"].createElement("div", { className: Footer_module_scss_1["default"]["footer__nav"] },
            react_1["default"].createElement("div", { className: Footer_module_scss_1["default"]["footer__column"] }, FirstBlock.map(function (link) { return (react_1["default"].createElement(FooterLink_1["default"], { key: link.children, to: link.to }, link.children)); })),
            react_1["default"].createElement("div", { className: Footer_module_scss_1["default"]["footer__column"] }, SecondBlock.map(function (link) { return (react_1["default"].createElement(FooterLink_1["default"], { key: link.to, to: link.to }, link.children)); })),
            react_1["default"].createElement("div", { className: Footer_module_scss_1["default"]["footer__column"] }, ThirdBlock.map(function (link) { return (react_1["default"].createElement(FooterLink_1["default"], { key: link.to, to: link.to }, link.children)); })),
            react_1["default"].createElement("div", { className: Footer_module_scss_1["default"]["footer__column"] }, FourthBlock.map(function (link) { return (react_1["default"].createElement(FooterLink_1["default"], { key: link.to, to: link.to }, link.children)); })))));
};
exports["default"] = Footer;
