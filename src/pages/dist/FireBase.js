"use strict";
exports.__esModule = true;
var react_1 = require("react");
var PageLink_1 = require("../components/general/PageLink/PageLink");
var fireBaseData_1 = require("../data/fireBaseData");
var FireBase = function () {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(PageLink_1["default"], { links: fireBaseData_1.linksFireBase, title: "\u0421\u0441\u044B\u043B\u043A\u0438 \u043D\u0430 FireBase" })));
};
exports["default"] = FireBase;
