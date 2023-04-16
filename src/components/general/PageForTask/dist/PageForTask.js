"use strict";
exports.__esModule = true;
var react_1 = require("react");
var InputSearch_1 = require("../../ui/inputs/InputSearch");
var ExpandingForTask_1 = require("../expanding/ExpandingForTask/ExpandingForTask");
var PageForTask_module_scss_1 = require("./PageForTask.module.scss");
var PageForTask = function (_a) {
    var title = _a.title, arrayTasks = _a.arrayTasks;
    var _b = react_1.useState(""), searchQuery = _b[0], setSearchQuery = _b[1];
    var filteredArray = react_1.useMemo(function () {
        return arrayTasks.filter(function (task) { return task.heading.toLowerCase().includes(searchQuery); });
    }, [arrayTasks, searchQuery]);
    return (react_1["default"].createElement("section", { className: PageForTask_module_scss_1["default"]["page"] },
        react_1["default"].createElement("div", { className: PageForTask_module_scss_1["default"]["page__container"] },
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("h1", { className: PageForTask_module_scss_1["default"]["page__heading"] },
                    title,
                    " "),
                react_1["default"].createElement("div", { className: PageForTask_module_scss_1["default"]["page__container-search-query"] },
                    react_1["default"].createElement(InputSearch_1["default"], { placeholder: "\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u0443\u0441\u043B\u043E\u0432\u0438\u044E \u0437\u0430\u0434\u0430\u0447.", searchQuery: searchQuery, setSearchQuery: setSearchQuery })),
                filteredArray.map(function (item, index) { return (react_1["default"].createElement(ExpandingForTask_1["default"], { key: index, heading: item.heading, href: item.href, taskCode: item.taskCode })); })))));
};
exports["default"] = PageForTask;
