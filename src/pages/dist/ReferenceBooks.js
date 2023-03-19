"use strict";
exports.__esModule = true;
var react_1 = require("react");
var PageLink_1 = require("../components/general/PageLink/PageLink");
var referenceBooksData_1 = require("../data/referenceBooksData");
var ReferenceBooks = function () {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(PageLink_1["default"], { links: referenceBooksData_1.linksReferenceBooks, title: "\u0421\u0441\u044B\u043B\u043A\u0438 \u043D\u0430 \u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A\u0438, \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u0438\u0438" })));
};
exports["default"] = ReferenceBooks;
