"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Page_1 = require("../components/general/Page/Page");
var PageLink_1 = require("../components/general/PageLink/PageLink");
var destructuringData_1 = require("../data/destructuringData");
var DestructuringPage = function () {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(PageLink_1["default"], { links: destructuringData_1.linksDestructuring, title: "\u0414\u0435\u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0438\u0437\u0430\u0446\u0438\u044F, \u0441\u0441\u044B\u043B\u043A\u0438" }),
        react_1["default"].createElement(Page_1["default"], { title: "\u0412\u043E\u043F\u0440\u043E\u0441\u044B \u043F\u043E \u0434\u0435\u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0438\u0437\u0430\u0446\u0438\u0438 \u043C\u0430\u0441\u0441\u0438\u0432\u043E\u0432", ArrayHeadingAnswers: destructuringData_1.arrayDestructuringArrays }),
        react_1["default"].createElement(Page_1["default"], { title: "\u0412\u043E\u043F\u0440\u043E\u0441\u044B \u043F\u043E \u0434\u0435\u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0438\u0437\u0430\u0446\u0438\u0438 \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432", ArrayHeadingAnswers: destructuringData_1.arrayDestructuringObjects })));
};
exports["default"] = DestructuringPage;
