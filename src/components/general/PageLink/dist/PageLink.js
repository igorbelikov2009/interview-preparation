"use strict";
exports.__esModule = true;
var react_1 = require("react");
var InputSearch_1 = require("../../ui/inputs/InputSearch");
var LinkInfo_1 = require("../LinkInfo/LinkInfo");
var PageLink_module_scss_1 = require("./PageLink.module.scss");
var PageLink = function (_a) {
    var title = _a.title, links = _a.links;
    var _b = react_1.useState(""), searchQuery = _b[0], setSearchQuery = _b[1];
    var filteredLinks = react_1.useMemo(function () {
        return links.filter(function (link) { return link.title.toLowerCase().includes(searchQuery); });
    }, [links, searchQuery]);
    return (react_1["default"].createElement("section", { className: PageLink_module_scss_1["default"]["page"] },
        react_1["default"].createElement("div", { className: PageLink_module_scss_1["default"]["page__container"] },
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("h1", { className: PageLink_module_scss_1["default"]["page__heading"] },
                    title,
                    " "),
                react_1["default"].createElement("div", { className: PageLink_module_scss_1["default"]["page__container-search-query"] },
                    react_1["default"].createElement(InputSearch_1["default"], { placeholder: "\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044E \u0441\u0441\u044B\u043B\u043E\u043A", searchQuery: searchQuery, setSearchQuery: setSearchQuery })),
                filteredLinks.map(function (item, index) { return (react_1["default"].createElement(LinkInfo_1["default"], { key: index, href: item.href, title: item.title })); })))));
};
exports["default"] = PageLink;
