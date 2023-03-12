"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion"); // анимация
var react_1 = require("react");
var ExpandingHeading_1 = require("../general/expanding/ExpandingPanel/ExpandingHeading");
require("../../styles/dist/expanding.css");
var For = function () {
    var _a = react_1.useState(false), isVisible = _a[0], setVisible = _a[1];
    var title = react_1.useState("for () - для перебора элементов массива по цифровым индексам.")[0];
    var descriptions = [
        "Одним из самых старых способов перебора элементов массива является цикл for по цифровым индексам.",
    ];
    var descriptionsBefore = [];
    var expanderHandler = function () {
        setVisible(function (prev) { return !prev; });
    };
    return (react_1["default"].createElement("div", { className: "expanding" },
        react_1["default"].createElement(ExpandingHeading_1["default"], { isContentVisible: isVisible, panelName: title, onClickExpanding: expanderHandler }),
        react_1["default"].createElement(framer_motion_1.AnimatePresence, null, isVisible && (react_1["default"].createElement(framer_motion_1.motion.div, { initial: { height: 0, opacity: 0 }, animate: { height: "auto", opacity: 1 }, exit: { height: 0, opacity: 0 }, style: { overflow: "hidden" } },
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("div", { className: "expanding__content" },
                    descriptions &&
                        descriptions.map(function (item, index) { return (react_1["default"].createElement("p", { key: index, className: "expanding__paragraph" }, item)); }),
                    descriptionsBefore &&
                        descriptionsBefore.map(function (item, index) { return (react_1["default"].createElement("p", { key: index, className: "expanding__paragraph-before" }, item)); })),
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement("div", { className: "expanding__pre" },
                        react_1["default"].createElement("h2", { className: "expanding__heading" }, "\u041F\u0440\u0438\u043C\u0435\u0440: "),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "let arr = [ '\u042F\u0431\u043B\u043E\u043A\u043E', '\u0410\u043F\u0435\u043B\u044C\u0441\u0438\u043D', '\u0413\u0440\u0443\u0448\u0430' ];"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "for ( let i = 0; i < arr.length; i++ ) {"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, " alert( arr [ i ] )"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "}")))))))));
};
exports["default"] = For;
