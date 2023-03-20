"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion"); // анимация
var react_1 = require("react");
var PageLink_1 = require("../components/general/PageLink/PageLink");
var ServerIsLoading_1 = require("../components/general/serverIsLoading/ServerIsLoading");
var ServerError_1 = require("../components/general/serverError/ServerError");
// import { linksFrameworksCSS } from "../data/cssData";
var frameworksCSSAPI_1 = require("../services/frameworksCSSAPI");
var FrameworksCSS = function () {
    var _a = frameworksCSSAPI_1.frameworksCSSAPI.useGetFrameworksCSSQuery(), linksFrameworksCSS = _a.data, isLoading = _a.isLoading, isError = _a.isError;
    return (react_1["default"].createElement(framer_motion_1.motion.div, { initial: { width: 0, opacity: 0 }, animate: { width: "100%", opacity: 1 }, exit: { x: window.innerWidth, transition: { duration: 0.1 }, opacity: 0 } },
        isLoading && react_1["default"].createElement(ServerIsLoading_1["default"], null),
        isError && react_1["default"].createElement(ServerError_1["default"], null),
        linksFrameworksCSS && react_1["default"].createElement(PageLink_1["default"], { links: linksFrameworksCSS, title: "\u0421\u0441\u044B\u043B\u043A\u0438 \u043D\u0430 \u0444\u0440\u0435\u0439\u043C\u0432\u043E\u0440\u043A\u0438 CSS" })));
};
exports["default"] = FrameworksCSS;
