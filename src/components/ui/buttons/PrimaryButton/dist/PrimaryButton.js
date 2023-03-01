"use strict";
exports.__esModule = true;
var react_1 = require("react");
var PrimaryButton_module_scss_1 = require("./PrimaryButton.module.scss");
var PrimaryButton = function (_a) {
    var children = _a.children, disabled = _a.disabled, handleButton = _a.handleButton;
    return (react_1["default"].createElement("button", { disabled: disabled, onClick: handleButton, className: PrimaryButton_module_scss_1["default"]["primary-button"] }, children));
};
exports["default"] = PrimaryButton;
