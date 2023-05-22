"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion"); // анимация
var PageForTask_1 = require("../components/general/PageForTask/PageForTask");
var tasksForTypescriptData_1 = require("../data/tasksForTypescriptData");
var TasksForTypescript = function () {
    return (React.createElement(framer_motion_1.motion.div, { initial: { width: 0, opacity: 0 }, animate: { width: "100%", opacity: 1 }, exit: { x: window.innerWidth, transition: { duration: 0.1 }, opacity: 0 } },
        React.createElement(PageForTask_1["default"], { arrayTasks: tasksForTypescriptData_1.arrayTasksForTypescript, title: "\u0417\u0430\u0434\u0430\u0447\u0438 \u043F\u043E Typescript." })));
};
exports["default"] = TasksForTypescript;
