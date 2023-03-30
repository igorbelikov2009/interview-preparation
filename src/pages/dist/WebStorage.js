"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion"); // анимация
var react_1 = require("react");
var Page_1 = require("../components/general/Page/Page");
var PageLink_1 = require("../components/general/PageLink/PageLink");
var webStorageData_1 = require("../data/webStorageData");
var WebStorage = function () {
    return (react_1["default"].createElement(framer_motion_1.motion.div, { initial: { width: 0, opacity: 0 }, animate: { width: "100%", opacity: 1 }, exit: { x: window.innerWidth, transition: { duration: 0.1 }, opacity: 0 } },
        react_1["default"].createElement(PageLink_1["default"], { links: webStorageData_1.linksWebStorage, title: "\u041A\u0443\u043A\u0438-\u0444\u0430\u0439\u043B\u044B, \u0441\u0435\u0441\u0441\u0438\u043E\u043D\u043D\u043E\u0435 \u0445\u0440\u0430\u043D\u0438\u043B\u0438\u0449\u0435 \u0438 \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u043E\u0435 \u0445\u0440\u0430\u043D\u0438\u043B\u0438\u0449\u0435, \u0441\u0441\u044B\u043B\u043A\u0438" }),
        react_1["default"].createElement(Page_1["default"], { title: "\u0427\u0435\u043C \u043E\u0442\u043B\u0438\u0447\u0430\u044E\u0442\u0441\u044F \u043A\u0443\u043A\u0438-\u0444\u0430\u0439\u043B\u044B, \u0441\u0435\u0441\u0441\u0438\u043E\u043D\u043D\u043E\u0435 \u0445\u0440\u0430\u043D\u0438\u043B\u0438\u0449\u0435 \u0438 \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u043E\u0435 \u0445\u0440\u0430\u043D\u0438\u043B\u0438\u0449\u0435?", ArrayHeadingAnswers: webStorageData_1.arrayWebStorage })));
};
exports["default"] = WebStorage;
