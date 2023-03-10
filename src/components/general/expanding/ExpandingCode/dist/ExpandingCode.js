"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion"); // анимация
var react_1 = require("react");
var ExpandingHeading_1 = require("../ExpandingPanel/ExpandingHeading");
var ExpandingCode_module_scss_1 = require("./ExpandingCode.module.scss");
var ExpandingCode = function () {
    var _a = react_1.useState(false), isVisible = _a[0], setVisible = _a[1];
    var title = react_1.useState("xx")[0];
    var descriptions = ["x ", "x "];
    var expanderHandler = function () {
        setVisible(function (prev) { return !prev; });
    };
    return (react_1["default"].createElement("div", { className: ExpandingCode_module_scss_1["default"]["expanding"] },
        react_1["default"].createElement(ExpandingHeading_1["default"], { isContentVisible: isVisible, panelName: title, onClickExpanding: expanderHandler }),
        react_1["default"].createElement(framer_motion_1.AnimatePresence, null, isVisible && (react_1["default"].createElement(framer_motion_1.motion.div, { initial: { height: 0, opacity: 0 }, animate: { height: "auto", opacity: 1 }, exit: { height: 0, opacity: 0 }, style: { overflow: "hidden" } },
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("div", { className: ExpandingCode_module_scss_1["default"]["expanding__content"] }, descriptions &&
                    descriptions.map(function (item, index) { return (react_1["default"].createElement("p", { key: index, className: ExpandingCode_module_scss_1["default"]["expanding__paragraph"] }, item)); })),
                react_1["default"].createElement("div", { className: ExpandingCode_module_scss_1["default"]["expanding__content"] },
                    react_1["default"].createElement("pre", { className: ExpandingCode_module_scss_1["default"]["expanding__pre"] },
                        react_1["default"].createElement("code", { className: ExpandingCode_module_scss_1["default"]["expanding__code"] }, "xxx")))))))));
};
exports["default"] = ExpandingCode;
