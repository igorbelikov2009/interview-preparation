"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion"); // анимация
var react_1 = require("react");
var Page_1 = require("../components/general/Page/Page");
var PageLink_1 = require("../components/general/PageLink/PageLink");
var ServerIsLoading_1 = require("../components/general/serverIsLoading/ServerIsLoading");
var ServerError_1 = require("../components/general/serverError/ServerError");
// import { arrayDOM, linksDOM } from "../data/domData";
var linksDOMAPI_1 = require("../services/linksDOMAPI");
var arrayDOMAPI_1 = require("../services/arrayDOMAPI");
var DOM = function () {
    var _a = linksDOMAPI_1.linksDOMAPI.useGetLinksDOMQuery(), linksDOM = _a.data, isLoading = _a.isLoading, isError = _a.isError;
    var arrayDOM = arrayDOMAPI_1.arrayDOMAPI.useGetArrayDOMQuery().data;
    return (react_1["default"].createElement(framer_motion_1.motion.div, { initial: { width: 0, opacity: 0 }, animate: { width: "100%", opacity: 1 }, exit: { x: window.innerWidth, transition: { duration: 0.1 }, opacity: 0 } },
        isLoading && react_1["default"].createElement(ServerIsLoading_1["default"], null),
        isError && react_1["default"].createElement(ServerError_1["default"], null),
        linksDOM && react_1["default"].createElement(PageLink_1["default"], { links: linksDOM, title: "DOM, \u0441\u0441\u044B\u043B\u043A\u0438" }),
        arrayDOM && react_1["default"].createElement(Page_1["default"], { title: "\u0412\u043E\u043F\u0440\u043E\u0441\u044B \u043F\u043E DOM", ArrayHeadingAnswers: arrayDOM })));
};
exports["default"] = DOM;