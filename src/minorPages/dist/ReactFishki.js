"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Page_1 = require("../components/general/Page/Page");
var PageLink_1 = require("../components/general/PageLink/PageLink");
var reactRouterData_1 = require("../data/reactRouterData");
var ReactFishki = function () {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(PageLink_1["default"], { links: reactRouterData_1.linksReactRouter, title: "React Router." }),
        react_1["default"].createElement(Page_1["default"], { title: "\u0412\u043E\u043F\u0440\u043E\u0441\u044B \u043F\u043E React Router", ArrayHeadingAnswers: reactRouterData_1.arrayReactRouter })));
};
exports["default"] = ReactFishki;
