"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Concat_1 = require("../components/forArrayMethods/Concat");
var ForEach_1 = require("../components/forArrayMethods/ForEach");
var IndexOf_1 = require("../components/forArrayMethods/IndexOf");
var LastIndexOf_1 = require("../components/forArrayMethods/LastIndexOf");
var Pop_1 = require("../components/forArrayMethods/Pop");
var Push_1 = require("../components/forArrayMethods/Push");
var Shift_1 = require("../components/forArrayMethods/Shift");
var Slice_1 = require("../components/forArrayMethods/Slice");
var Splice_1 = require("../components/forArrayMethods/Splice");
var Unshift_1 = require("../components/forArrayMethods/Unshift");
var PageLink_1 = require("../components/general/PageLink/PageLink");
require("../styles/arrayMethods.scss");
var ArrayMethodsPage = function () {
    var linksArrayMethods = [
        {
            href: "https://learn.javascript.ru/array",
            title: "Массивы"
        },
        {
            href: "https://learn.javascript.ru/array-methods",
            title: "Методы массивов"
        },
        {
            href: "https://habr.com/ru/company/plarium/blog/483958/",
            title: "15 методов работы с массивами в JavaScript, которые необходимо знать в 2020 году"
        },
        {
            href: "https://digitrain.ru/articles/272353/",
            title: "Мутировать или не мутировать? Шпаргалка по методам массивов JavaScript"
        },
        {
            href: "https://itchief.ru/javascript/arrays",
            title: "Массивы в JavaScript"
        },
        {
            href: "https://only-to-top.ru/blog/coding/2020-12-30-js-array-cheatsheet.html ",
            title: "Методы массивов"
        },
    ];
    return (react_1["default"].createElement("section", { className: "array-methods" },
        react_1["default"].createElement("div", { className: "array-methods__container" },
            react_1["default"].createElement(PageLink_1["default"], { links: linksArrayMethods, title: "\u041C\u0435\u0442\u043E\u0434\u044B \u043C\u0430\u0441\u0441\u0438\u0432\u043E\u0432, \u0441\u0441\u044B\u043B\u043A\u0438" }),
            react_1["default"].createElement("h1", { className: "array-methods__heading" }, " \u041C\u0435\u0442\u043E\u0434\u044B \u043C\u0430\u0441\u0441\u0438\u0432\u043E\u0432 "),
            react_1["default"].createElement("h2", { className: "array-methods__subheading" }, " \u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435/\u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432"),
            react_1["default"].createElement(Push_1["default"], null),
            react_1["default"].createElement(Unshift_1["default"], null),
            react_1["default"].createElement(Pop_1["default"], null),
            react_1["default"].createElement(Shift_1["default"], null),
            react_1["default"].createElement("h2", { className: "array-methods__subheading" }, "\u0424\u0443\u043D\u043A\u0446\u0438\u0438 \u0434\u043B\u044F \u0440\u0430\u0431\u043E\u0442\u044B \u0441 \u043C\u0430\u0441\u0441\u0438\u0432\u0430\u043C\u0438 (\u043C\u0435\u0442\u043E\u0434\u044B \u043E\u0431\u044A\u0435\u043A\u0442\u0430 Array)"),
            react_1["default"].createElement(Slice_1["default"], null),
            react_1["default"].createElement(Splice_1["default"], null),
            react_1["default"].createElement(Concat_1["default"], null),
            react_1["default"].createElement(ForEach_1["default"], null),
            react_1["default"].createElement("h2", { className: "array-methods__subheading" }, "\u041F\u043E\u0438\u0441\u043A \u0432 \u043C\u0430\u0441\u0441\u0438\u0432\u0435 (\u043C\u0435\u0442\u043E\u0434\u044B \u043F\u043E\u0438\u0441\u043A\u0430 \u0432 \u043C\u0430\u0441\u0441\u0438\u0432\u0435)"),
            react_1["default"].createElement(IndexOf_1["default"], null),
            react_1["default"].createElement(LastIndexOf_1["default"], null))));
};
exports["default"] = ArrayMethodsPage;
