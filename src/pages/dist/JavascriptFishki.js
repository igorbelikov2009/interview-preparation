"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Page_1 = require("../components/general/Page/Page");
var PageLink_1 = require("../components/general/PageLink/PageLink");
var javascriptFishkiData_1 = require("../data/javascriptFishkiData");
var JavascriptFishkiPage = function () {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(PageLink_1["default"], { links: javascriptFishkiData_1.linksJavascriptFishki, title: "Javascript \u0444\u0438\u0448\u043A\u0438, \u0441\u0441\u044B\u043B\u043A\u0438" }),
        react_1["default"].createElement(Page_1["default"], { title: "\u0412\u043E\u043F\u0440\u043E\u0441\u044B \u043F\u043E Javascript", ArrayHeadingAnswers: javascriptFishkiData_1.arrayJavascriptFishki })));
};
exports["default"] = JavascriptFishkiPage;
