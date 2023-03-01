"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
var react_1 = require("react");
var Layout_module_scss_1 = require("./Layout.module.scss");
var Footer_1 = require("../Footer/Footer");
var TopMenu_1 = require("../TopMenu/TopMenu");
var Layout = function () {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("main", { className: Layout_module_scss_1["default"]["layuot"] },
            react_1["default"].createElement(react_router_dom_1.Outlet, null)),
        react_1["default"].createElement(TopMenu_1["default"], null),
        react_1["default"].createElement(Footer_1["default"], null)));
};
exports["default"] = Layout;
