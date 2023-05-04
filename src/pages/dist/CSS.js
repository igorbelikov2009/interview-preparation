"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion"); // анимация
var react_1 = require("react");
var Page_1 = require("../components/general/Page/Page");
var PageLink_1 = require("../components/general/PageLink/PageLink");
var ServerIsLoading_1 = require("../components/general/serverIsLoading/ServerIsLoading");
var ServerError_1 = require("../components/general/serverError/ServerError");
// import { arrayCSS, linksCSS } from "../data/cssData";
var cssAPI_1 = require("../services/cssAPI");
var arrayCSSAPI_1 = require("../services/arrayCSSAPI");
var cssData_1 = require("../dataArchive.ts/cssData");
var CSS = function () {
    var _a = cssAPI_1.cssAPI.useGetLinksCSSQuery(), linksCSS = _a.data, isLoading = _a.isLoading, isError = _a.isError;
    var arrayCSS = arrayCSSAPI_1.arrayCSSAPI.useGetArrayCSSQuery().data;
    return (react_1["default"].createElement(framer_motion_1.motion.div, { initial: { width: 0, opacity: 0 }, animate: { width: "100%", opacity: 1 }, exit: { x: window.innerWidth, transition: { duration: 0.1 }, opacity: 0 } },
        isLoading && react_1["default"].createElement(ServerIsLoading_1["default"], null),
        isError && react_1["default"].createElement(ServerError_1["default"], null),
        react_1["default"].createElement(PageLink_1["default"], { links: cssData_1.linksCSSFishki, title: "CSS - \u0444\u0438\u0448\u043A\u0438 \u0441\u0441\u044B\u043B\u043A\u0438" }),
        linksCSS && react_1["default"].createElement(PageLink_1["default"], { links: linksCSS, title: "CSS \u0441\u0441\u044B\u043B\u043A\u0438" }),
        arrayCSS && react_1["default"].createElement(Page_1["default"], { title: "\u0412\u043E\u043F\u0440\u043E\u0441\u044B \u043F\u043E CSS", ArrayHeadingAnswers: arrayCSS })));
};
exports["default"] = CSS;
