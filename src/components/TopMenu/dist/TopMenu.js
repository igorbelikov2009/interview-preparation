"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var MenuLink_1 = require("../ui/links/MenuLink/MenuLink");
var TopMenu_module_scss_1 = require("./TopMenu.module.scss");
var TopMenu = function () {
    var _a = react_1.useState(true), isBackgroundWhite = _a[0], setBackgroundWhite = _a[1];
    var navigate = react_router_dom_1.useNavigate();
    var pathname = react_router_dom_1.useLocation().pathname;
    // console.log(pathname);
    var TopMenuLinks = [
        { to: "/", children: "Общие вопросы" },
        { to: "/axios", children: "Axios" },
        { to: "/css", children: "CSS" },
        { to: "/dom", children: "DOM" },
        { to: "/github", children: "GitHub" },
        { to: "/html", children: "HTML" },
        { to: "/http", children: "HTTP" },
        { to: "/javascript", children: "JavaScript" },
        { to: "/react", children: "React" },
    ];
    react_1.useEffect(function () {
        if (pathname === "*") {
            setBackgroundWhite(false);
        }
        else {
            setBackgroundWhite(true);
        }
    }, [pathname, setBackgroundWhite]);
    return (react_1["default"].createElement("header", { className: isBackgroundWhite ? TopMenu_module_scss_1["default"]["top-menu__with-border"] : TopMenu_module_scss_1["default"]["top-menu"] },
        react_1["default"].createElement("div", { className: TopMenu_module_scss_1["default"]["top-menu__container"] },
            react_1["default"].createElement("div", { className: TopMenu_module_scss_1["default"]["top-menu__nav"] }, TopMenuLinks.map(function (link) { return (react_1["default"].createElement(MenuLink_1["default"], { key: link.to, to: link.to, isBackgroundWhite: isBackgroundWhite }, link.children)); })),
            react_1["default"].createElement("div", { className: TopMenu_module_scss_1["default"]["top-menu__right-block"] }))));
};
exports["default"] = TopMenu;
