"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion"); // анимация
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var context_1 = require("../../../context");
var TripleIcon_1 = require("../../general/TripleIcon/TripleIcon");
var MenuLink_1 = require("../../ui/links/MenuLink/MenuLink");
var LoginForm_1 = require("../LoginForm/LoginForm");
var TopMenu_module_scss_1 = require("./TopMenu.module.scss");
var aboutFundTop_jpg_1 = require("../../../assets/images/aboutFundTop.jpg");
var TopMenu = function () {
    var _a = react_1.useContext(context_1.AuthContext), isBackgroundWhite = _a.isBackgroundWhite, setBackgroundWhite = _a.setBackgroundWhite, isLoginFormVisible = _a.isLoginFormVisible, setLoginFormVisible = _a.setLoginFormVisible;
    var _b = react_1.useState(false), isPrivateOfficeHovered = _b[0], setPrivateOfficeHovered = _b[1];
    var pathname = react_router_dom_1.useLocation().pathname;
    var TopMenuLinks = [
        { to: "/", children: "Общие вопросы" },
        { to: "/websiteLayout", children: "Вёрстка web-сайтов" },
        { to: "/css", children: "CSS" },
        { to: "/html", children: "HTML" },
        { to: "/javascript", children: "JavaScript" },
        { to: "/javascriptFishki", children: "JavaScript фишки" },
        { to: "/react", children: "React" },
        { to: "/reactFishki", children: "React фишки" },
        { to: "/typescript", children: "Typescript" },
        { to: "/typescriptFishki", children: "Typescript фишки" },
    ];
    react_1.useEffect(function () {
        if (pathname === "/" ||
            pathname === "/websiteLayout" ||
            pathname === "/css" ||
            pathname === "/html" ||
            pathname === "/javascript" ||
            pathname === "/javascriptFishki" ||
            pathname === "/react" ||
            pathname === "/reactFishki" ||
            pathname === "/typescript" ||
            pathname === "/typescriptFishki" ||
            pathname === "*") {
            setBackgroundWhite(false);
        }
        else {
            setBackgroundWhite(true);
        }
    }, [pathname, setBackgroundWhite]);
    var openLoginForm = function () {
        setLoginFormVisible(function (prev) { return !prev; });
        if (isLoginFormVisible) {
            document.body.style.overflow = "";
        }
        else {
            document.body.style.overflow = "hidden";
        }
    };
    var closeLoginForm = function () {
        setLoginFormVisible(function (prev) { return !prev; });
        if (isLoginFormVisible) {
            document.body.style.overflow = "";
        }
        else {
            document.body.style.overflow = "hidden";
        }
    };
    return (react_1["default"].createElement("header", { className: isBackgroundWhite ? TopMenu_module_scss_1["default"]["top-menu__with-border"] : TopMenu_module_scss_1["default"]["top-menu"], style: { backgroundImage: "url(" + aboutFundTop_jpg_1["default"] + ")" } },
        react_1["default"].createElement("div", { className: TopMenu_module_scss_1["default"]["top-menu__container"] },
            react_1["default"].createElement("div", { className: TopMenu_module_scss_1["default"]["top-menu__nav"] }, TopMenuLinks.map(function (link) { return (react_1["default"].createElement(MenuLink_1["default"], { key: link.to, to: link.to, isBackgroundWhite: isBackgroundWhite }, link.children)); })),
            react_1["default"].createElement("div", { className: TopMenu_module_scss_1["default"]["top-menu__right-block"] },
                react_1["default"].createElement("div", { onMouseOver: function () { return setPrivateOfficeHovered(true); }, onMouseOut: function () { return setPrivateOfficeHovered(false); }, onClick: openLoginForm, className: TopMenu_module_scss_1["default"]["top-menu__private-office"] },
                    react_1["default"].createElement(TripleIcon_1["default"], { icon: "User", light: !isBackgroundWhite, hovered: isPrivateOfficeHovered }),
                    react_1["default"].createElement("p", { className: isBackgroundWhite ? TopMenu_module_scss_1["default"]["top-menu__title_news"] : TopMenu_module_scss_1["default"]["top-menu__title"] }, "\u041B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442")))),
        react_1["default"].createElement(framer_motion_1.AnimatePresence, null, isLoginFormVisible && (react_1["default"].createElement(framer_motion_1.motion.div, { initial: { height: 0, opacity: 0 }, animate: { height: "auto", opacity: 1 }, exit: { height: 0, opacity: 0 }, style: { overflow: "hidden" } },
            react_1["default"].createElement(LoginForm_1["default"], { closeLoginForm: closeLoginForm }))))));
};
exports["default"] = TopMenu;
