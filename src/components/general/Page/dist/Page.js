"use strict";
exports.__esModule = true;
var react_1 = require("react");
var ExpandingAnswer_1 = require("../expanding/ExpandingAnswer/ExpandingAnswer");
var Page_module_scss_1 = require("./Page.module.scss");
var Page = function (_a) {
    var title = _a.title, ArrayHeadingAnswers = _a.ArrayHeadingAnswers;
    return (react_1["default"].createElement("section", { className: Page_module_scss_1["default"]["page"] },
        react_1["default"].createElement("div", { className: Page_module_scss_1["default"]["page__container"] },
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("h1", { className: Page_module_scss_1["default"]["page__heading"] },
                    title,
                    " "),
                ArrayHeadingAnswers.map(function (item, index) { return (react_1["default"].createElement(ExpandingAnswer_1["default"], { key: index, heading: item.heading, answer: item.answer, isParagraph: true })); })))));
};
exports["default"] = Page;
