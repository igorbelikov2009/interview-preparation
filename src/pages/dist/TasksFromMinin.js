"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion"); // анимация
var PageForTask_1 = require("../components/general/PageForTask/PageForTask");
var tasksFromMininData_1 = require("../data/tasksFromMininData");
var TasksFromMinin = function () {
    return (React.createElement(framer_motion_1.motion.div, { initial: { width: 0, opacity: 0 }, animate: { width: "100%", opacity: 1 }, exit: { x: window.innerWidth, transition: { duration: 0.1 }, opacity: 0 } },
        React.createElement(PageForTask_1["default"], { arrayTasks: tasksFromMininData_1.arrayTasksFromMinin, title: "\u0420\u0435\u0448\u0435\u043D\u0438\u0435 \u0437\u0430\u0434\u0430\u0447 \u043D\u0430 \u0441\u043E\u0431\u0435\u0441\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u044F\u0445. \u041C\u0438\u043D\u0438\u043D." })));
};
exports["default"] = TasksFromMinin;
