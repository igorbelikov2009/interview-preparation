"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion"); // анимация
var Page_1 = require("../components/general/Page/Page");
var PageLink_1 = require("../components/general/PageLink/PageLink");
var regularExpressionData_1 = require("../data/regularExpressionData");
var RegularExpression = function () {
    return (React.createElement(framer_motion_1.motion.div, { initial: { width: 0, opacity: 0 }, animate: { width: "100%", opacity: 1 }, exit: { x: window.innerWidth, transition: { duration: 0.1 }, opacity: 0 } },
        React.createElement(PageLink_1["default"], { links: regularExpressionData_1.linksRegularExpression, title: "\u0420\u0435\u0433\u0443\u043B\u044F\u0440\u043D\u043E\u0435 \u0432\u044B\u0440\u0430\u0436\u0435\u043D\u0438\u0435, \u0441\u0441\u044B\u043B\u043A\u0438" }),
        React.createElement(Page_1["default"], { title: "\u0420\u0435\u0433\u0443\u043B\u044F\u0440\u043D\u043E\u0435 \u0432\u044B\u0440\u0430\u0436\u0435\u043D\u0438\u0435, \u0448\u043F\u0430\u0440\u0433\u0430\u043B\u043A\u0430 Elena Litvinova.", ArrayHeadingAnswers: regularExpressionData_1.arrayRegularExpression })));
};
exports["default"] = RegularExpression;
