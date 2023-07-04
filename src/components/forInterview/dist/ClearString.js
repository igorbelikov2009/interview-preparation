"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion"); // анимация
var react_1 = require("react");
var ExpandingHeading_1 = require("../general/expanding/ExpandingPanel/ExpandingHeading");
require("./taskModel.scss");
var ClearString = function () {
    var _a = react_1.useState(false), isVisible = _a[0], setVisible = _a[1];
    var expanderHandler = function () {
        setVisible(function (prev) { return !prev; });
    };
    var title = react_1.useState("title")[0];
    // // task
    // ===================================================================================
    // const admin: any = {
    //   name: "Anna",
    //   age: 21,
    //   isAdmin: true,
    //   sizes: {
    //     height: 165,
    //     weight: 55,
    //   },
    // };
    // // let copyAdmin = Object.assign({}, admin);
    // // let copyAdmin = { ...admin };
    // // let copyAdmin = Object.create(admin);
    // // let copyAdmin: any = {};
    // // for (let key in admin) {
    // //   copyAdmin[key] = admin[key];
    // // }
    // // let copyAdmin = structuredClone(admin);
    // let copyAdmin = JSON.parse(JSON.stringify(admin));
    // admin.name = "Vasy";
    // admin.sizes.height = 180;
    // copyAdmin.name = "Shura";
    // copyAdmin.sizes.height = 150;
    // console.log(admin.name, admin.sizes.height); // Vasy 180
    // console.log(copyAdmin.name, copyAdmin.sizes.height); // Shura 150
    // -----------------------------------------------------------------------
    var stringJSON = '{"name" : "Matt", "age" : 21}';
    var student = JSON.parse(stringJSON);
    console.log(student); // '{'name':'Matt','age': 21}'
    // ===================================================================================
    // // task
    return (react_1["default"].createElement("div", { className: "expanding" },
        react_1["default"].createElement(ExpandingHeading_1["default"], { isContentVisible: isVisible, panelName: title, onClickExpanding: expanderHandler }),
        react_1["default"].createElement(framer_motion_1.AnimatePresence, null, isVisible && (react_1["default"].createElement(framer_motion_1.motion.div, { initial: { height: 0, opacity: 0 }, animate: { height: "auto", opacity: 1 }, exit: { height: 0, opacity: 0 }, style: { overflow: "hidden" } },
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement("div", { className: "expanding__pre" }))))))));
};
exports["default"] = ClearString;
function getPasswords() {
    throw new Error("Function not implemented.");
}
