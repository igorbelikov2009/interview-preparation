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
    var isValid = function (str) {
        // На входе строка '12.255.56.1'. Для начала выделяем группы чисел, разделяем
        // строчку посимвольно методом split() с разделитетелем точка.
        var numbers = str.split("."); // ['12', '255', '56', '1']
        // Сраниваем получившиеся количество групп с заданным числом: numbers.length === 4
        // В filter((n) => +n) приводим строку к числу (+n) и проверяем это число
        // на соответствие интервалу от 0 до 255
        // String(+n).length <= таким образом мы обрабатываем такой IP: '\n1.2.3.4'
        return (numbers.length === 4 && numbers.filter(function (n) { return +n >= 0 && +n <= 255 && n.length === String(+n).length; }).length === 4);
    };
    console.log(isValid("0.0.0.0")); // ['0', '0', '0', '0']  // true
    console.log(isValid("12.255.56.1")); // ['12', '255', '56', '1']  // true
    console.log(isValid("137.255.1.100")); // ['137', '255', '1', '100']  // true
    console.log(isValid("123.456.789.0")); // ['123', '0'] // false
    console.log(isValid("abc.def.ghi.jkl")); // []  // false
    console.log(isValid("\n1.2.3.4")); //  ['2', '3', '4'] // false
    console.log(isValid("")); // false  // false
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
