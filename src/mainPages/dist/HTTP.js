"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Page_1 = require("../components/general/Page/Page");
var PageLink_1 = require("../components/general/PageLink/PageLink");
var httpData_1 = require("../data/httpData");
var HTTP = function () {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(PageLink_1["default"], { links: httpData_1.linksHTTP, title: "HTTP \u0441\u0441\u044B\u043B\u043A\u0438" }),
        react_1["default"].createElement(Page_1["default"], { title: "\u0412\u043E\u043F\u0440\u043E\u0441\u044B \u043F\u043E HTTP \u0438 \u043A\u043B\u0438\u0435\u043D\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u043D\u043E\u0439 \u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u0435", ArrayHeadingAnswers: httpData_1.arrayHTTP })));
};
exports["default"] = HTTP;
