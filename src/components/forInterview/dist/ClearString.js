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
    var queueTime = function (customers, n) {
        // Если количество покупателей равно количеству касс.
        if (customers.length === 0)
            return 0;
        // Если количество покупателей меньше количества касс.
        if (customers.length <= n)
            return Math.max.apply(Math, customers);
        // Если количество покупателей больше количества касс, например ([2, 3, 8], 2).
        // Введём новую переменную queues (массив очередей - количество сумм времени
        // в этих очередях), в нём будет n - элементов (количество касс), значение
        // которых определим равными нулю fill(0). То есть, мы создали очереди к кассам:
        // к первой кассе стоит первый клиент, ко второй - второй клиент. Если какая-то
        // касса освобождается, то к ней подходит очередной клиент.
        // 1-й элемент массива будет принимать время первого человека,
        // второй - время второго человека. Изначальное время для всех задали равное нулю.
        var queues = new Array(n).fill(0); //  Array [0, 0]
        // Пройдём по массиву покупателей
        for (var _i = 0, customers_1 = customers; _i < customers_1.length; _i++) {
            var time = customers_1[_i];
            // Будем находить индекс у массива очередей. Мы берём самое меньшее число в очередях,
            // и находим его индекс. Так мы получаем самую свободную на данный момент кассу
            // - индекс кассы.
            var index = queues.indexOf(Math.min.apply(Math, queues));
            // У нас есть список очередей, есть индекс, и мы прибавляем к тому что есть там
            // определённое время - значение элемента массива покупателей customers.
            // Фактически, мы заполняем наш массив очередей.
            queues[index] += time; // Array [(2 + 8), 3] =  [10, 3]
        }
        // Нам в конце остаётся только возвратить самое большое число из массива очередей.
        return Math.max.apply(Math, queues); // 10
    };
    console.log(queueTime([2, 3, 4], 1)); // 9
    console.log(queueTime([2, 3, 8], 2)); // 10
    console.log(queueTime([11, 2, 3, 3], 2)); // 11
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
