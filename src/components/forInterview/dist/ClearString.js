"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion"); // анимация
var react_1 = require("react");
var ExpandingHeading_1 = require("../general/expanding/ExpandingPanel/ExpandingHeading");
require("./taskModel.scss");
var ClearString = function () {
    var _a = react_1.useState(false), isVisible = _a[0], setVisible = _a[1];
    var expanderHandler = function () {
        setVisible(function (prev) { return !prev; });
    };
    var title = react_1.useState("title")[0];
    // // task
    // ===================================================================================
    console.log("start");
    var promise1 = Promise.resolve().then(function () {
        console.log("promise1");
        var timer2 = setTimeout(function () {
            console.log("timer2");
        }, 0);
    });
    var timer1 = setTimeout(function () {
        console.log("timer1");
        var promise2 = Promise.resolve().then(function () {
            console.log("promise2");
        });
    }, 0);
    console.log("end");
    // start
    // end
    // promise1
    // timer1
    // promise2
    // timer2
    // ===================================================================================
    // // task
    return (react_1["default"].createElement("div", { className: "expanding" },
        react_1["default"].createElement(ExpandingHeading_1["default"], { isContentVisible: isVisible, panelName: title, onClickExpanding: expanderHandler }),
        react_1["default"].createElement(framer_motion_1.AnimatePresence, null, isVisible && (react_1["default"].createElement(framer_motion_1.motion.div, { initial: { height: 0, opacity: 0 }, animate: { height: "auto", opacity: 1 }, exit: { height: 0, opacity: 0 }, style: { overflow: "hidden" } },
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement("div", { className: "expanding__pre" }))))))));
};
exports["default"] = ClearString;
function getPasswords() {
    throw new Error("Function not implemented.");
}
