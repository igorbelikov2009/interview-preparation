"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion"); // анимация
var react_1 = require("react");
var PageLink_1 = require("../components/general/PageLink/PageLink");
var ServerIsLoading_1 = require("../components/general/serverIsLoading/ServerIsLoading");
var ServerError_1 = require("../components/general/serverError/ServerError");
// import { linksIconsLoaders } from "../data/iconsLoadersData";
var iconsLoadersAPI_1 = require("../services/iconsLoadersAPI");
var LinksToIconsLoaders = function () {
    var _a = iconsLoadersAPI_1.iconsLoadersAPI.useGetIconsLoadersQuery(), linksIconsLoaders = _a.data, isLoading = _a.isLoading, isError = _a.isError;
    return (react_1["default"].createElement(framer_motion_1.motion.div, { initial: { width: 0, opacity: 0 }, animate: { width: "100%", opacity: 1 }, exit: { x: window.innerWidth, transition: { duration: 0.1 }, opacity: 0 } },
        isLoading && react_1["default"].createElement(ServerIsLoading_1["default"], null),
        isError && react_1["default"].createElement(ServerError_1["default"], null),
        linksIconsLoaders && react_1["default"].createElement(PageLink_1["default"], { links: linksIconsLoaders, title: "\u0421\u0441\u044B\u043B\u043A\u0438 \u043D\u0430 \u0441\u0430\u0439\u0442\u044B \u0441 \u0438\u043A\u043E\u043D\u043A\u0430\u043C\u0438, \u043B\u043E\u0430\u0434\u0435\u0440\u0430\u043C\u0438" })));
};
exports["default"] = LinksToIconsLoaders;
