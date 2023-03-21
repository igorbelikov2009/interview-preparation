"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion"); // анимация
var react_1 = require("react");
var Page_1 = require("../components/general/Page/Page");
var PageLink_1 = require("../components/general/PageLink/PageLink");
var ServerIsLoading_1 = require("../components/general/serverIsLoading/ServerIsLoading");
var ServerError_1 = require("../components/general/serverError/ServerError");
// import { arrayHTTP, linksHTTP } from "../data/httpData";
var linksHTTPAPI_1 = require("../services/linksHTTPAPI");
var arrayHTTPAPI_1 = require("../services/arrayHTTPAPI");
var HTTP = function () {
    var _a = linksHTTPAPI_1.linksHTTPAPI.useGetLinksHTTPQuery(), linksHTTP = _a.data, isLoading = _a.isLoading, isError = _a.isError;
    var arrayHTTP = arrayHTTPAPI_1.arrayHTTPAPI.useGetArrayHTTPQuery().data;
    return (react_1["default"].createElement(framer_motion_1.motion.div, { initial: { width: 0, opacity: 0 }, animate: { width: "100%", opacity: 1 }, exit: { x: window.innerWidth, transition: { duration: 0.1 }, opacity: 0 } },
        isLoading && react_1["default"].createElement(ServerIsLoading_1["default"], null),
        isError && react_1["default"].createElement(ServerError_1["default"], null),
        linksHTTP && react_1["default"].createElement(PageLink_1["default"], { links: linksHTTP, title: "HTTP \u0441\u0441\u044B\u043B\u043A\u0438" }),
        arrayHTTP && react_1["default"].createElement(Page_1["default"], { title: "\u0412\u043E\u043F\u0440\u043E\u0441\u044B \u043F\u043E HTTP \u0438 \u043A\u043B\u0438\u0435\u043D\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u043D\u043E\u0439 \u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u0435", ArrayHeadingAnswers: arrayHTTP })));
};
exports["default"] = HTTP;
