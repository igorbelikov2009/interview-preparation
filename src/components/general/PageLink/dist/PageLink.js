"use strict";
exports.__esModule = true;
var react_1 = require("react");
var LinkInfo_1 = require("../LinkInfo/LinkInfo");
var PageLink_module_scss_1 = require("./PageLink.module.scss");
var PageLink = function (_a) {
    var title = _a.title, links = _a.links;
    return (react_1["default"].createElement("section", { className: PageLink_module_scss_1["default"]["page"] },
        react_1["default"].createElement("div", { className: PageLink_module_scss_1["default"]["page__container"] },
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("h1", { className: PageLink_module_scss_1["default"]["page__heading"] },
                    title,
                    " "),
                links.map(function (item, index) { return (react_1["default"].createElement(LinkInfo_1["default"], { key: index, href: item.href, title: item.title })); })))));
};
exports["default"] = PageLink;
