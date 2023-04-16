"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion"); // анимация
var ClearString_1 = require("../components/forInterview/ClearString");
var TaskModel_1 = require("../components/forInterview/TaskModel");
require("../styles/arrayMethods.scss");
var ArrayTasksPage = function () {
    return (React.createElement(framer_motion_1.motion.div, { initial: { width: 0, opacity: 0 }, animate: { width: "100%", opacity: 1 }, exit: { x: window.innerWidth, transition: { duration: 0.1 }, opacity: 0 } },
        React.createElement("div", { className: "array-methods__container" },
            React.createElement("h1", { className: "array-methods__heading" }, " \u0417\u0430\u0434\u0430\u0447\u0438 \u043F\u043E \u043C\u0435\u0442\u043E\u0434\u0430\u043C \u043C\u0430\u0441\u0441\u0438\u0432\u043E\u0432 "),
            React.createElement(ClearString_1["default"], null),
            React.createElement(TaskModel_1["default"], null))));
};
exports["default"] = ArrayTasksPage;
