"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion"); // анимация
var PageForTask_1 = require("../components/general/PageForTask/PageForTask");
var tasksFromInterviewsData_1 = require("../data/tasksFromInterviewsData");
var TasksFromInterviews = function () {
    return (React.createElement(framer_motion_1.motion.div, { initial: { width: 0, opacity: 0 }, animate: { width: "100%", opacity: 1 }, exit: { x: window.innerWidth, transition: { duration: 0.1 }, opacity: 0 } },
        React.createElement(PageForTask_1["default"], { arrayTasks: tasksFromInterviewsData_1.arrayTasks, title: "\u0417\u0430\u0434\u0430\u0447\u0438 \u0438\u0437 \u0441\u043E\u0431\u0435\u0441\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u0439" })));
};
exports["default"] = TasksFromInterviews;
