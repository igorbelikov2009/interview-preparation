"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion"); // анимация
var react_1 = require("react");
var PageLink_1 = require("../components/general/PageLink/PageLink");
var ServerIsLoading_1 = require("../components/general/serverIsLoading/ServerIsLoading");
var ServerError_1 = require("../components/general/serverError/ServerError");
var cssFishkiAPI_1 = require("../services/cssFishkiAPI");
// import { linksCSSFishki } from "../data/cssData";
var CSSFishki = function () {
    var _a = cssFishkiAPI_1.cssFishkiAPI.useGetCssFishkiQuery(), linksCSSFishki = _a.data, isLoading = _a.isLoading, isError = _a.isError;
    return (react_1["default"].createElement(framer_motion_1.motion.div, { initial: { width: 0, opacity: 0 }, animate: { width: "100%", opacity: 1 }, exit: { x: window.innerWidth, transition: { duration: 0.1 }, opacity: 0 } },
        isLoading && react_1["default"].createElement(ServerIsLoading_1["default"], null),
        isError && react_1["default"].createElement(ServerError_1["default"], null),
        linksCSSFishki && react_1["default"].createElement(PageLink_1["default"], { links: linksCSSFishki, title: "\u0424\u0438\u0448\u043A\u0438 CSS, \u0441\u0441\u044B\u043B\u043A\u0438" })));
};
exports["default"] = CSSFishki;
