"use strict";
exports.__esModule = true;
var react_1 = require("react");
var DarkIcon_1 = require("../../DarkIcon/DarkIcon");
var ExpandingHeading_module_scss_1 = require("./ExpandingHeading.module.scss");
var ExpandingHeading = function (_a) {
    var isContentVisible = _a.isContentVisible, panelName = _a.panelName, onClickExpanding = _a.onClickExpanding;
    return (react_1["default"].createElement("div", { className: ExpandingHeading_module_scss_1["default"]["expanding__row"], onClick: onClickExpanding },
        react_1["default"].createElement("h2", { className: ExpandingHeading_module_scss_1["default"]["expanding__title"] }, panelName),
        react_1["default"].createElement("div", { className: ExpandingHeading_module_scss_1["default"]["expanding__button"] },
            react_1["default"].createElement("div", { className: isContentVisible ? ExpandingHeading_module_scss_1["default"]["expanding__plus-rotate"] : ExpandingHeading_module_scss_1["default"]["expanding__plus"] },
                react_1["default"].createElement(DarkIcon_1["default"], { isDecreased: true, icon: "Plus Thin" })),
            react_1["default"].createElement("div", { className: isContentVisible ? ExpandingHeading_module_scss_1["default"]["expanding__minus-rotate"] : ExpandingHeading_module_scss_1["default"]["expanding__minus"] },
                react_1["default"].createElement(DarkIcon_1["default"], { isDecreased: true, icon: "Minus Thin" })))));
};
exports["default"] = ExpandingHeading;
