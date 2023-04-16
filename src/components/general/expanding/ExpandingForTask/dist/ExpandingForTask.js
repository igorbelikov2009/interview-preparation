"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion"); // анимация
var react_1 = require("react");
var LinkInfo_1 = require("../../LinkInfo/LinkInfo");
var ParagraphTask_1 = require("../../paragraphs/ParagraphTask/ParagraphTask");
var ExpandingHeading_1 = require("../ExpandingPanel/ExpandingHeading");
var ExpandingForTask_module_scss_1 = require("./ExpandingForTask.module.scss");
var ExpandingForTask = function (_a) {
    var heading = _a.heading, href = _a.href, taskCode = _a.taskCode;
    var _b = react_1.useState(false), isVisible = _b[0], setVisible = _b[1];
    var expanderHandler = function () {
        setVisible(function (prev) { return !prev; });
    };
    return (react_1["default"].createElement("div", { className: ExpandingForTask_module_scss_1["default"]["expanding"] },
        react_1["default"].createElement(ExpandingHeading_1["default"], { isContentVisible: isVisible, panelName: heading, onClickExpanding: expanderHandler }),
        react_1["default"].createElement(framer_motion_1.AnimatePresence, null, isVisible && (react_1["default"].createElement(framer_motion_1.motion.div, { initial: { height: 0, opacity: 0 }, animate: { height: "auto", opacity: 1 }, exit: { height: 0, opacity: 0 }, style: { overflow: "hidden" } },
            react_1["default"].createElement("div", { className: ExpandingForTask_module_scss_1["default"]["expanding__content"] },
                react_1["default"].createElement(LinkInfo_1["default"], { href: href, title: heading }),
                react_1["default"].createElement("div", { className: ExpandingForTask_module_scss_1["default"]["expanding__content-code-pre"] },
                    react_1["default"].createElement(ParagraphTask_1["default"], { paragraphsTask: taskCode }))))))));
};
exports["default"] = ExpandingForTask;
