"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Page_1 = require("../components/general/Page/Page");
var PageLink_1 = require("../components/general/PageLink/PageLink");
var errorProcessingData_1 = require("../data/errorProcessingData");
var ErrorProcessingPage = function () {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(PageLink_1["default"], { links: errorProcessingData_1.linksErrorProcessing, title: "\u041E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043E\u0448\u0438\u0431\u043E\u043A, \u0441\u0441\u044B\u043B\u043A\u0438" }),
        react_1["default"].createElement(Page_1["default"], { title: "\u0412\u043E\u043F\u0440\u043E\u0441\u044B \u043F\u043E \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0435 \u043E\u0448\u0438\u0431\u043E\u043A", ArrayHeadingAnswers: errorProcessingData_1.arrayErrorProcessing })));
};
exports["default"] = ErrorProcessingPage;
