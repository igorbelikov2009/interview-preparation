"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion"); // анимация
var react_1 = require("react");
var Paragraph_1 = require("../../paragraphs/Paragraph/Paragraph");
var ParagraphBefore_1 = require("../../paragraphs/ParagraphBefore/ParagraphBefore");
var ExpandingHeading_1 = require("../ExpandingPanel/ExpandingHeading");
var ExpanderTask_module_scss_1 = require("./ExpanderTask.module.scss");
var ExpanderTask = function (_a) {
    var heading = _a.heading, answer = _a.answer, isParagraph = _a.isParagraph, isParagraphBefore = _a.isParagraphBefore;
    var _b = react_1.useState(false), isVisible = _b[0], setVisible = _b[1];
    var expanderHandler = function () {
        setVisible(function (prev) { return !prev; });
    };
    return (react_1["default"].createElement("div", { className: ExpanderTask_module_scss_1["default"]["expanding"] },
        react_1["default"].createElement(ExpandingHeading_1["default"], { isContentVisible: isVisible, panelName: heading, onClickExpanding: expanderHandler }),
        react_1["default"].createElement(framer_motion_1.AnimatePresence, null, isVisible && (react_1["default"].createElement(framer_motion_1.motion.div, { initial: { height: 0, opacity: 0 }, animate: { height: "auto", opacity: 1 }, exit: { height: 0, opacity: 0 }, style: { overflow: "hidden" } },
            react_1["default"].createElement("div", null,
                isParagraph && (react_1["default"].createElement("div", { className: ExpanderTask_module_scss_1["default"]["expanding__content"] },
                    react_1["default"].createElement(Paragraph_1["default"], { paragraphs: answer }))),
                isParagraphBefore && (react_1["default"].createElement("div", { className: ExpanderTask_module_scss_1["default"]["expanding__content"] },
                    react_1["default"].createElement(ParagraphBefore_1["default"], { paragraphs: answer })))))))));
};
exports["default"] = ExpanderTask;
