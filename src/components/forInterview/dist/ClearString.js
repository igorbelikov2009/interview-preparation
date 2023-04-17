"use strict";
exports.__esModule = true;
/* eslint-disable @typescript-eslint/no-unused-vars */
var framer_motion_1 = require("framer-motion"); // анимация
var react_1 = require("react");
var ExpandingHeading_1 = require("../general/expanding/ExpandingPanel/ExpandingHeading");
var LinkInfo_1 = require("../general/LinkInfo/LinkInfo");
require("./taskModel.scss");
var ClearString = function () {
    var _a = react_1.useState(false), isVisible = _a[0], setVisible = _a[1];
    var expanderHandler = function () {
        setVisible(function (prev) { return !prev; });
    };
    var title = react_1.useState("title")[0];
    // task
    // const numeric = {
    //   1: 0,
    //   17: 0,
    // };
    // //
    var intersectNubmers = function (a, b) {
        var set = new Set();
        var pick = {};
        a.forEach(function (n) {
            if (!set.has(n)) {
                set.add(n);
            }
            else {
                pick[n] = 0;
            }
        });
        // return pick; // {1: 0, 17: 0, 56: 0} // результат проверки первого массива
        // Проверяем второй массив
        b.forEach(function (n) {
            if (n in pick) {
                pick[n] = pick[n] + 1;
            }
        });
        // return pick; // {1: 3, 17: 2, 56: 1} // результат проверки обоих массивов
        // Преобразуем объект в массив, в котором будут лежать только ключи
        return Object.entries(pick).reduce(function (result, _a) {
            var n = _a[0], count = _a[1];
            if (count > 1) {
                result.push(+n);
            }
            return result;
        });
    };
    console.log(intersectNubmers([7, 17, 1, 9, 1, 17, 56, 56, 23], [56, 17, 17, 1, 23, 34, 23, 1, 8, 1]));
    // task
    return (react_1["default"].createElement("div", { className: "expanding" },
        react_1["default"].createElement(ExpandingHeading_1["default"], { isContentVisible: isVisible, panelName: title, onClickExpanding: expanderHandler }),
        react_1["default"].createElement(framer_motion_1.AnimatePresence, null, isVisible && (react_1["default"].createElement(framer_motion_1.motion.div, { initial: { height: 0, opacity: 0 }, animate: { height: "auto", opacity: 1 }, exit: { height: 0, opacity: 0 }, style: { overflow: "hidden" } },
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement(LinkInfo_1["default"], { title: "JS \u0417\u0430\u0434\u0430\u0447\u0438: \u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u0441\u0442\u0440\u043E\u043A\u0443 \u043E\u0442 \u0447\u0438\u0441\u043B\u043E\u0432\u044B\u0445 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432", href: "https://www.youtube.com/watch?v=oQ-0bm9-_yA&list=PLPiq_hi6UrQo3ornWsqYnivc77kPn3Gwi&index=5" })),
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement("div", { className: "expanding__pre" },
                        react_1["default"].createElement("h2", { className: "expanding__heading" }, "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u0441\u0442\u0440\u043E\u043A\u0443 'This looks5 grea8te' \u043E\u0442 \u0447\u0438\u0441\u043B\u043E\u0432\u044B\u0445 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432 => 'This looks greate'."),
                        react_1["default"].createElement("h2", { className: "expanding__subheading" }, " "),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "const [ elem ] = useState( \"This looks5 grea8te\" );"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "const [ elemClear, setElemClear ] = useState( \"\" );"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "-"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "function stringCleaner( s: string ) {"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "return s.replaceAll( /\\d/g, \"\" );"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "} "),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "-"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "useEffect(() => {"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "setElemClear( stringCleaner( elem ));"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "}, [ elem ]);"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "-"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "console.log( elem ); // 'This looks5 grea8te'"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "console.log( elemClear ); // This looks greate ")))))))));
};
exports["default"] = ClearString;
