"use strict";
exports.__esModule = true;
var react_1 = require("react");
var FooterLink_1 = require("../ui/links/FooterLink/FooterLink");
var Footer_module_scss_1 = require("./Footer.module.scss");
var Footer = function () {
    var FirstBlock = [
        { to: "/", children: "Общие вопросы" },
        { to: "/axios", children: "Axios" },
        { to: "/css", children: "CSS" },
        { to: "/dom", children: "DOM" },
        { to: "/github", children: "GitHub" },
        { to: "/html", children: "HTML" },
        { to: "/http", children: "HTTP" },
        { to: "/javascript", children: "JavaScript" },
        { to: "/react", children: "React" },
    ];
    var SecondBlock = [
        { to: "/destructuring", children: "Деструктуризация" },
        { to: "/error", children: "Обработка ошибок" },
        { to: "/json", children: "Методы JSON" },
        { to: "/linksjavascript", children: "Ссылки JavaScript" },
        { to: "/browserlinks", children: "Браузерные ссылки" },
        { to: "/objectmethods", children: "Методы объектов" },
        { to: "/promise", children: "Промисы" },
    ];
    var ThirdBlock = [
        { to: "/linksvue", children: "Ссылки Vue" },
        { to: "/vue", children: "Vue" },
    ];
    var FourthBlock = [
        { to: "/arraymethods", children: "Методы массивов" },
        { to: "/arraytasks", children: "Задачи методов массивов" },
    ];
    return (react_1["default"].createElement("footer", { className: Footer_module_scss_1["default"]["footer"] },
        react_1["default"].createElement("div", { className: Footer_module_scss_1["default"]["footer__nav"] },
            react_1["default"].createElement("div", { className: Footer_module_scss_1["default"]["footer__column"] }, FirstBlock.map(function (link) { return (react_1["default"].createElement(FooterLink_1["default"], { key: link.children, to: link.to }, link.children)); })),
            react_1["default"].createElement("div", { className: Footer_module_scss_1["default"]["footer__column"] }, SecondBlock.map(function (link) { return (react_1["default"].createElement(FooterLink_1["default"], { key: link.to, to: link.to }, link.children)); })),
            react_1["default"].createElement("div", { className: Footer_module_scss_1["default"]["footer__column"] }, ThirdBlock.map(function (link) { return (react_1["default"].createElement(FooterLink_1["default"], { key: link.to, to: link.to }, link.children)); })),
            react_1["default"].createElement("div", { className: Footer_module_scss_1["default"]["footer__column"] }, FourthBlock.map(function (link) { return (react_1["default"].createElement(FooterLink_1["default"], { key: link.to, to: link.to }, link.children)); })))));
};
exports["default"] = Footer;