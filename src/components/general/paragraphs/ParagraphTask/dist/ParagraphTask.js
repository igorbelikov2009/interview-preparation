"use strict";
exports.__esModule = true;
var react_1 = require("react");
var ParagraphTask_module_scss_1 = require("./ParagraphTask.module.scss");
var ParagraphTask = function (_a) {
    var paragraphsTask = _a.paragraphsTask;
    return (react_1["default"].createElement(react_1["default"].Fragment, null, paragraphsTask &&
        paragraphsTask.map(function (paragraph, index) { return (react_1["default"].createElement("p", { key: index, className: ParagraphTask_module_scss_1["default"]["paragraph-task"] }, paragraph)); })));
};
exports["default"] = ParagraphTask;
