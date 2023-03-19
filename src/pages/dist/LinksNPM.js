"use strict";
exports.__esModule = true;
var react_1 = require("react");
var PageLink_1 = require("../components/general/PageLink/PageLink");
var npmData_1 = require("../data/npmData");
var LinksNPM = function () {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(PageLink_1["default"], { links: npmData_1.linkNPM, title: "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u043F\u0430\u043A\u0435\u0442\u043E\u0432 npm" })));
};
exports["default"] = LinksNPM;
