"use strict";
exports.__esModule = true;
var react_1 = require("react");
var InputSearch_1 = require("../../ui/inputs/InputSearch");
var ExpandingAnswer_1 = require("../expanding/ExpandingAnswer/ExpandingAnswer");
var Page_module_scss_1 = require("./Page.module.scss");
var Page = function (_a) {
    var title = _a.title, ArrayHeadingAnswers = _a.ArrayHeadingAnswers;
    var _b = react_1.useState(""), searchQuery = _b[0], setSearchQuery = _b[1];
    var filteredArray = react_1.useMemo(function () {
        return ArrayHeadingAnswers.filter(function (question) { return question.heading.toLowerCase().includes(searchQuery); });
    }, [ArrayHeadingAnswers, searchQuery]);
    return (react_1["default"].createElement("section", { className: Page_module_scss_1["default"]["page"] },
        react_1["default"].createElement("div", { className: Page_module_scss_1["default"]["page__container"] },
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("h1", { className: Page_module_scss_1["default"]["page__heading"] },
                    title,
                    " "),
                react_1["default"].createElement("div", { className: Page_module_scss_1["default"]["page__container-search-query"] },
                    react_1["default"].createElement(InputSearch_1["default"], { placeholder: "\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044E \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432.", searchQuery: searchQuery, setSearchQuery: setSearchQuery })),
                filteredArray.map(function (item, index) { return (react_1["default"].createElement(ExpandingAnswer_1["default"], { key: index, heading: item.heading, answer: item.answer, isParagraph: true })); })))));
};
exports["default"] = Page;
