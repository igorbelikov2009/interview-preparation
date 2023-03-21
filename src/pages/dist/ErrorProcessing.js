"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion"); // анимация
var react_1 = require("react");
var Page_1 = require("../components/general/Page/Page");
var PageLink_1 = require("../components/general/PageLink/PageLink");
var ServerIsLoading_1 = require("../components/general/serverIsLoading/ServerIsLoading");
var ServerError_1 = require("../components/general/serverError/ServerError");
// import { arrayErrorProcessing, linksErrorProcessing } from "../data/errorProcessingData";
var linksErrorAPI_1 = require("../services/linksErrorAPI");
var arrayErrorAPI_1 = require("../services/arrayErrorAPI");
var ErrorProcessingPage = function () {
    var _a = linksErrorAPI_1.linksError.useGetLinksErrorQuery(), linksErrorProcessing = _a.data, isLoading = _a.isLoading, isError = _a.isError;
    var arrayErrorProcessing = arrayErrorAPI_1.arrayErrorAPI.useGetArrayErrorQuery().data;
    return (react_1["default"].createElement(framer_motion_1.motion.div, { initial: { width: 0, opacity: 0 }, animate: { width: "100%", opacity: 1 }, exit: { x: window.innerWidth, transition: { duration: 0.1 }, opacity: 0 } },
        isLoading && react_1["default"].createElement(ServerIsLoading_1["default"], null),
        isError && react_1["default"].createElement(ServerError_1["default"], null),
        linksErrorProcessing && react_1["default"].createElement(PageLink_1["default"], { links: linksErrorProcessing, title: "\u041E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043E\u0448\u0438\u0431\u043E\u043A, \u0441\u0441\u044B\u043B\u043A\u0438" }),
        arrayErrorProcessing && react_1["default"].createElement(Page_1["default"], { title: "\u0412\u043E\u043F\u0440\u043E\u0441\u044B \u043F\u043E \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0435 \u043E\u0448\u0438\u0431\u043E\u043A", ArrayHeadingAnswers: arrayErrorProcessing })));
};
exports["default"] = ErrorProcessingPage;
