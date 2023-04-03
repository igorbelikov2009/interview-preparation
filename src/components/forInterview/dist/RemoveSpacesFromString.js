"use strict";
exports.__esModule = true;
/* eslint-disable react/jsx-no-comment-textnodes */
var framer_motion_1 = require("framer-motion"); // анимация
var react_1 = require("react");
var ExpandingHeading_1 = require("../general/expanding/ExpandingPanel/ExpandingHeading");
var LinkInfo_1 = require("../general/LinkInfo/LinkInfo");
require("./taskModel.scss");
var RemoveSpacesFromString = function () {
    var _a = react_1.useState(false), isVisible = _a[0], setVisible = _a[1];
    var expanderHandler = function () {
        setVisible(function (prev) { return !prev; });
    };
    var title = react_1.useState("Удалить пробелы из строки. Метод string.replace() с регулярным выражением внутри.")[0];
    // задача
    var str = react_1.useState(" ftu  ft  ggwr ")[0];
    var _b = react_1.useState(""), strNoSpace = _b[0], setStrNoSpace = _b[1];
    function noSpace(x) {
        return x.replace(/\s/g, "");
    }
    react_1.useEffect(function () {
        setStrNoSpace(noSpace(str));
    }, [str]);
    //   console.log(str);
    //   console.log(strNoSpace);
    // задача
    return (react_1["default"].createElement("div", { className: "expanding" },
        react_1["default"].createElement(ExpandingHeading_1["default"], { isContentVisible: isVisible, panelName: title, onClickExpanding: expanderHandler }),
        react_1["default"].createElement(framer_motion_1.AnimatePresence, null, isVisible && (react_1["default"].createElement(framer_motion_1.motion.div, { initial: { height: 0, opacity: 0 }, animate: { height: "auto", opacity: 1 }, exit: { height: 0, opacity: 0 }, style: { overflow: "hidden" } },
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement(LinkInfo_1["default"], { title: title, href: "https://www.youtube.com/watch?v=awtOmYDEMY8&list=PLPiq_hi6UrQo3ornWsqYnivc77kPn3Gwi&index=3" })),
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement("div", { className: "expanding__pre" },
                        react_1["default"].createElement("h2", { className: "expanding__heading" },
                            title,
                            " \" ftu ft ggwr => ",
                            strNoSpace,
                            "\""),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "const [str] = useState(\" ftu ft ggwr \");"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "const [strNoSpace, setStrNoSpace] = useState(\"\");"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "-"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "function noSpace(x: string) { "),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "return x.replace(/\\s/g, \"\");"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "}"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "-"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "useEffect(() => {"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "setStrNoSpace(noSpace(str));"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "}, [str]);"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "-"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "console.log(str); // \" ftu ft ggwr \""),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "console.log(strNoSpace); // ftuftggwr ")))))))));
};
exports["default"] = RemoveSpacesFromString;
