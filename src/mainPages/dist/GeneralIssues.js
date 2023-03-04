"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Page_1 = require("../components/general/Page/Page");
var PageLink_1 = require("../components/general/PageLink/PageLink");
var generalIssuesData_1 = require("../data/generalIssuesData");
var GeneralIssues = function () {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(PageLink_1["default"], { links: generalIssuesData_1.linksGeneralIssues, title: "\u041E\u0431\u0449\u0438\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B, \u0441\u0441\u044B\u043B\u043A\u0438" }),
        react_1["default"].createElement(Page_1["default"], { title: "\u041E\u0431\u0449\u0438\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B", ArrayHeadingAnswers: generalIssuesData_1.arrayGeneralIssues })));
};
exports["default"] = GeneralIssues;
