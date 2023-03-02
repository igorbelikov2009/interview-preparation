"use strict";
exports.__esModule = true;
var react_1 = require("react");
var SidebarLink_1 = require("../../ui/links/SidebarLink/SidebarLink");
var DarkIcon_1 = require("../DarkIcon/DarkIcon");
var ExpandingAnswer_1 = require("../expanding/ExpandingAnswer/ExpandingAnswer");
var BarPage_module_scss_1 = require("./BarPage.module.scss");
var BarPage = function (_a) {
    var ArrayHeadingAnswers = _a.ArrayHeadingAnswers;
    var block1 = react_1.useRef(null);
    var block2 = react_1.useRef(null);
    var block3 = react_1.useRef(null);
    var block4 = react_1.useRef(null);
    var block5 = react_1.useRef(null);
    var block6 = react_1.useRef(null);
    var block7 = react_1.useRef(null);
    var refBbarContainer = react_1.useRef(null);
    var _b = react_1.useState(0), barContainerTop = _b[0], setBarContainerTop = _b[1];
    var _c = react_1.useState(true), barNavAbsolute = _c[0], setBarNavAbsolute = _c[1];
    var _d = react_1.useState("0"), idSidebarLink = _d[0], setIdSidebarLink = _d[1];
    var _e = react_1.useState(0), iconTop = _e[0], setIconTop = _e[1];
    var h00 = react_1.useState(452)[0]; // высота (topBlock - 100px)
    var _f = react_1.useState(0), h01 = _f[0], setH01 = _f[1];
    var _g = react_1.useState(0), h02 = _g[0], setH02 = _g[1];
    var _h = react_1.useState(0), h03 = _h[0], setH03 = _h[1];
    var _j = react_1.useState(0), h04 = _j[0], setH04 = _j[1];
    var _k = react_1.useState(0), h05 = _k[0], setH05 = _k[1];
    var _l = react_1.useState(0), h06 = _l[0], setH06 = _l[1];
    var _m = react_1.useState(0), h07 = _m[0], setH07 = _m[1];
    var _o = react_1.useState(0), scrollY = _o[0], setScrollY = _o[1];
    var sidebarLinks = [
        { itemName: "Правление", id: "0" },
        { itemName: "Совет директоров", id: "1" },
        { itemName: "Команда", id: "2" },
        { itemName: "Ревизионная комиссия", id: "3" },
        { itemName: "Главный бухгалтер", id: "4" },
        { itemName: "Контролер", id: "5" },
        { itemName: "Собрание акционеров", id: "6" },
        { itemName: "Правление", id: "7" },
        { itemName: "Совет директоров", id: "8" },
        { itemName: "Команда", id: "9" },
        { itemName: "Ревизионная комиссия", id: "10" },
        { itemName: "Главный бухгалтер", id: "11" },
        { itemName: "Контролер", id: "12" },
        { itemName: "Собрание акционеров", id: "13" },
        { itemName: "Правление", id: "14" },
        { itemName: "Совет директоров", id: "15" },
        { itemName: "Команда", id: "16" },
        { itemName: "Ревизионная комиссия", id: "17" },
        { itemName: "Главный бухгалтер", id: "18" },
        { itemName: "Контролер", id: "19" },
        { itemName: "Собрание акционеров", id: "20" },
        { itemName: "Правление", id: "21" },
        { itemName: "Совет директоров", id: "22" },
        { itemName: "Команда", id: "23" },
        { itemName: "Ревизионная комиссия", id: "24" },
        { itemName: "Главный бухгалтер", id: "25" },
        { itemName: "Контролер", id: "26" },
        { itemName: "Собрание акционеров", id: "27" },
        { itemName: "Правление", id: "28" },
        { itemName: "Совет директоров", id: "29" },
        { itemName: "Команда", id: "30" },
        { itemName: "Ревизионная комиссия", id: "31" },
        { itemName: "Главный бухгалтер", id: "32" },
        { itemName: "Контролер", id: "33" },
        { itemName: "Собрание акционеров", id: "34" },
    ];
    react_1.useEffect(function () {
        getTopBarContainer();
        changeStyleBarNav();
        getIconTop();
        document.addEventListener("scroll", scrollHandler);
        // "Этот код срабатывает при размонтировании!
        return function () {
            document.removeEventListener("scroll", scrollHandler);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [barContainerTop]);
    var scrollHandler = function (event) {
        getTopBarContainer();
        getTopAllComponents();
        setScrollY(window.scrollY);
    };
    // console.log(scrollY);
    var getTopBarContainer = function () {
        if (refBbarContainer.current) {
            setBarContainerTop(refBbarContainer.current.getBoundingClientRect().top);
        }
    };
    // console.log(barContainerTop);
    var changeStyleBarNav = function () {
        if (barContainerTop > 0) {
            setBarNavAbsolute(true);
        }
        else {
            // баг здесь ==============
            // setBarNavAbsolute(false);
        }
    };
    // console.log(barNavAbsolute);
    var getTopAllComponents = function () {
        if (block1.current) {
            setH01(block1.current.getBoundingClientRect().height);
        }
        if (block2.current) {
            setH02(block2.current.getBoundingClientRect().height);
        }
        if (block3.current) {
            setH03(block3.current.getBoundingClientRect().height);
        }
        if (block4.current) {
            setH04(block4.current.getBoundingClientRect().height);
        }
        if (block5.current) {
            setH05(block5.current.getBoundingClientRect().height);
        }
        if (block6.current) {
            setH06(block6.current.getBoundingClientRect().height);
        }
        if (block7.current) {
            setH07(block7.current.getBoundingClientRect().height);
        }
    };
    /* Если не нравится эта логика, то можно использовать:
       Якорное меню с плавной прокруткой в ​​ReactJS , подробное руководство.
       https://medium.com/the-coders-guide-to-javascript/smooth-scrolling-anchor-menu-in-reactjs-175030d0bce2
    */
    var getIconTop = function () {
        if (scrollY >= h00 && scrollY < h00 + h01) {
            setIconTop(0);
            setIdSidebarLink("0");
        }
        else if (scrollY >= h00 + h01 && scrollY < h00 + h01 + h02) {
            setIconTop(1);
            setIdSidebarLink("1");
        }
        else if (scrollY >= h00 + h01 + h02 && scrollY < h00 + h01 + h02 + h03) {
            setIconTop(2);
            setIdSidebarLink("2");
        }
        else if (scrollY >= h00 + h01 + h02 + h03 && scrollY < h00 + h01 + h02 + h03 + h04) {
            setIconTop(3);
            setIdSidebarLink("3");
        }
        else if (scrollY >= h00 + h01 + h02 + h03 + h04 && scrollY < h00 + h01 + h02 + h03 + h04 + h05) {
            setIconTop(4);
            setIdSidebarLink("4");
        }
        else if (scrollY >= h00 + h01 + h02 + h03 + h04 + h05 && scrollY < h00 + h01 + h02 + h03 + h04 + h05 + h06 - 21) {
            setIconTop(5);
            setIdSidebarLink("5");
        }
        else if (scrollY >= h00 + h01 + h02 + h03 + h04 + h05 + h06 - 21 &&
            scrollY < h00 + h01 + h02 + h03 + h04 + h05 + h06 + h07) {
            setIconTop(6);
            setIdSidebarLink("6");
        }
    };
    var getValueId = function (id) {
        setIdSidebarLink(id);
    };
    // =======================
    return (react_1["default"].createElement("section", { className: BarPage_module_scss_1["default"]["bar-page"] },
        react_1["default"].createElement("div", { className: BarPage_module_scss_1["default"]["bar-page__container"] },
            react_1["default"].createElement("div", { className: BarPage_module_scss_1["default"]["bar-page__content"] },
                react_1["default"].createElement("h1", { className: BarPage_module_scss_1["default"]["bar-page__heading"] }, "\u0412\u043E\u043F\u0440\u043E\u0441\u044B \u0438 \u043E\u0442\u0432\u0435\u0442\u044B"),
                ArrayHeadingAnswers.map(function (item, index) { return (react_1["default"].createElement(ExpandingAnswer_1["default"], { key: index, heading: item.heading, answer: item.answer, isParagraph: true })); }),
                react_1["default"].createElement("div", { className: BarPage_module_scss_1["default"]["bar-page__department"], id: "\u041F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435", ref: block1 }, "\u041F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435"),
                react_1["default"].createElement("div", { className: BarPage_module_scss_1["default"]["bar-page__department"], id: "\u0421\u043E\u0432\u0435\u0442 \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u043E\u0432", ref: block2 }, "\u0421\u043E\u0432\u0435\u0442 \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u043E\u0432"),
                react_1["default"].createElement("div", { className: BarPage_module_scss_1["default"]["bar-page__department"], id: "\u041A\u043E\u043C\u0430\u043D\u0434\u0430", ref: block3 }, "\u041A\u043E\u043C\u0430\u043D\u0434\u0430"),
                react_1["default"].createElement("div", { className: BarPage_module_scss_1["default"]["bar-page__department"], id: "\u0420\u0435\u0432\u0438\u0437\u0438\u043E\u043D\u043D\u0430\u044F \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u044F", ref: block4 }, "\u0420\u0435\u0432\u0438\u0437\u0438\u043E\u043D\u043D\u0430\u044F \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u044F"),
                react_1["default"].createElement("div", { className: BarPage_module_scss_1["default"]["bar-page__department"], id: "\u0413\u043B\u0430\u0432\u043D\u044B\u0439 \u0431\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440", ref: block5 }, "\u0413\u043B\u0430\u0432\u043D\u044B\u0439 \u0431\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440"),
                react_1["default"].createElement("div", { className: BarPage_module_scss_1["default"]["bar-page__department"], id: "\u041A\u043E\u043D\u0442\u0440\u043E\u043B\u0435\u0440", ref: block6 }, "\u041A\u043E\u043D\u0442\u0440\u043E\u043B\u0435\u0440"),
                react_1["default"].createElement("div", { className: BarPage_module_scss_1["default"]["bar-page__department"], id: "\u0421\u043E\u0431\u0440\u0430\u043D\u0438\u0435 \u0430\u043A\u0446\u0438\u043E\u043D\u0435\u0440\u043E\u0432", ref: block7 }, "\u0421\u043E\u0431\u0440\u0430\u043D\u0438\u0435 \u0430\u043A\u0446\u0438\u043E\u043D\u0435\u0440\u043E\u0432")),
            react_1["default"].createElement("div", { className: BarPage_module_scss_1["default"]["bar-page__bar-container"], ref: refBbarContainer },
                react_1["default"].createElement("aside", { className: barNavAbsolute ? BarPage_module_scss_1["default"]["bar-page__nav_absolute"] : BarPage_module_scss_1["default"]["bar-page__nav_fixed"] },
                    react_1["default"].createElement("div", { className: BarPage_module_scss_1["default"]["bar-page__bar-icon"], style: { top: iconTop * 48 + "px" } },
                        react_1["default"].createElement(DarkIcon_1["default"], { icon: "Arrow Down" })),
                    sidebarLinks.map(function (link, index) { return (react_1["default"].createElement(SidebarLink_1["default"], { key: index, itemName: link.itemName, id: link.id, isActive: index === Number(idSidebarLink), emitValueId: getValueId })); }))))));
};
exports["default"] = BarPage;
