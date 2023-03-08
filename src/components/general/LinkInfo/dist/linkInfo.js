"use strict";
exports.__esModule = true;
var react_1 = require("react");
var TripleIcon_1 = require("../TripleIcon/TripleIcon");
var LinkInfo_module_scss_1 = require("./LinkInfo.module.scss");
var LinkInfo = function (_a) {
    var href = _a.href, title = _a.title;
    var _b = react_1.useState(false), isHovered = _b[0], setHovered = _b[1];
    return (react_1["default"].createElement("a", { target: "_blank", className: LinkInfo_module_scss_1["default"]["link-info"], href: href, onMouseOver: function () { return setHovered(true); }, onMouseOut: function () { return setHovered(false); }, rel: "noreferrer" },
        react_1["default"].createElement("div", { className: LinkInfo_module_scss_1["default"]["link-info__icon"] },
            react_1["default"].createElement(TripleIcon_1["default"], { hovered: isHovered, light: false, icon: "Pdf" })),
        react_1["default"].createElement("div", { className: LinkInfo_module_scss_1["default"]["link-info__row"] },
            react_1["default"].createElement("p", { className: LinkInfo_module_scss_1["default"]["link-info__title"] }, title))));
};
exports["default"] = LinkInfo;
