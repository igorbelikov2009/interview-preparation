"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion"); // анимация
var PageLink_1 = require("../components/general/PageLink/PageLink");
var typescriptLinksData_1 = require("../data/typescriptLinksData");
var LinksTypescript = function () {
    return (React.createElement(framer_motion_1.motion.div, { initial: { width: 0, opacity: 0 }, animate: { width: "100%", opacity: 1 }, exit: { x: window.innerWidth, transition: { duration: 0.1 }, opacity: 0 } },
        React.createElement(PageLink_1["default"], { links: typescriptLinksData_1.linksTypescript, title: "\u0421\u0441\u044B\u043B\u043A\u0438 \u043D\u0430 Typescript" })));
};
exports["default"] = LinksTypescript;
