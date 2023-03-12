"use strict";
exports.__esModule = true;
/* eslint-disable react/jsx-no-comment-textnodes */
var framer_motion_1 = require("framer-motion"); // анимация
var react_1 = require("react");
var ExpandingHeading_1 = require("../general/expanding/ExpandingPanel/ExpandingHeading");
require("../../styles/dist/expanding.css");
var Sort = function () {
    var _a = react_1.useState(false), isVisible = _a[0], setVisible = _a[1];
    var title = react_1.useState("Array.sort() сортирует массив на месте, меняя в нём порядок элементов. Array.reverse() сортирует в обратном порядке.")[0];
    var descriptions = [
        "Сортировка массива выполняется с помощью метода sort(). По умолчанию он сортирует массив в порядке следования символов в кодировке Unicode.",
        "По умолчанию, элементы сортируются как строки. Буквально, элементы преобразуются в строки при сравнении. Для строк применяется лексикографический порядок, и действительно выходит, что '2' > '15'. ",
    ];
    var descriptionsBefore = [
        "Лучше использовать стрелочные функции",
        "Сравнение чисел: arr.sort( (a, b) => a - b ); ",
        "Для сравнения строк используйте localeCompare: const sorted = ( array.sort( (a, b) => a.localeCompare(b) ) );",
        "Объекты могут быть отсортированы по значению одного из своих свойств: ",
        "const sorted = array.sort(( a, b ) => a.name - b.name ) // работает;",
        "const sorted = items.sort((a, b) => a.name.localeCompare(b.name)) // работает;",
        "const sorted = array.sort( (a, b) => a.name > b.name ? 1 : -1) // работает;",
    ];
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
                        react_1["default"].createElement("h2", { className: "expanding__heading" }, "\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u043C\u0430\u0441\u0441\u0438\u0432\u0430 \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E: "),
                        react_1["default"].createElement("p", { className: "expanding__paragraph" }, "\u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E \u043C\u0435\u0442\u043E\u0434 sort() \u0441\u043E\u0440\u0442\u0438\u0440\u0443\u0435\u0442 \u043C\u0430\u0441\u0441\u0438\u0432 \u0432 \u043F\u043E\u0440\u044F\u0434\u043A\u0435 \u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u044F \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432 \u0432 \u043A\u043E\u0434\u0438\u0440\u043E\u0432\u043A\u0435 Unicode."),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "const auto = [ 'Mazda', 'Audi', 'Toyota', 'Nissan', 'Tesla' ];"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "// \u0441\u043E\u0440\u0442\u0438\u0440\u0443\u0435\u043C \u043C\u0430\u0441\u0441\u0438\u0432"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "auto.sort(); // [ 'Audi', 'Mazda', 'Nissan', 'Tesla', 'Toyota' ]"))),
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement("div", { className: "expanding__pre" },
                        react_1["default"].createElement("h2", { className: "expanding__heading" }, "\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u043C\u0430\u0441\u0441\u0438\u0432\u0430 \u0432 \u043E\u0431\u0440\u0430\u0442\u043D\u043E\u043C \u043F\u043E\u0440\u044F\u0434\u043A\u0435:"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "auto.sort().reverse(); // [ 'Toyota', 'Tesla', 'Nissan', 'Mazda', 'Audi' ]"))),
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement("div", { className: "expanding__pre" },
                        react_1["default"].createElement("h2", { className: "expanding__heading" }, "\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 localeCompare \u0434\u043B\u044F \u0441\u0442\u0440\u043E\u043A"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph" }, "\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u043E\u0442\u0441\u043E\u0440\u0442\u0438\u0440\u0443\u0435\u043C \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0441\u0442\u0440\u0430\u043D \u043D\u0430 \u043D\u0435\u043C\u0435\u0446\u043A\u043E\u043C \u044F\u0437\u044B\u043A\u0435:"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "let countries = [ '\u00D6sterreich', 'Andorra', 'Vietnam' ];"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "alert( countries.sort( (a, b) => a > b ? 1 : -1) ); // \u041D\u0415\u041F\u0420\u0410\u0412\u0418\u041B\u042C\u041D\u041E\u0415 \u0421\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "alert( countries.sort( (a, b) => a.localeCompare(b) ) ); // Andorra,\u00D6sterreich,Vietnam (\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E!)"))),
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement("div", { className: "expanding__pre" },
                        react_1["default"].createElement("h2", { className: "expanding__heading" }, "\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u0447\u0438\u0441\u0435\u043B"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "var numbers = [4, 2, 5, 1, 3];"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "numbers.sort(( a, b ) => a - b) "),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "console.log(numbers); // [ 1, 2, 3, 4, 5 ]"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "numbers.sort(( a, b ) =< a - b) "),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "console.log(numbers); // [ 5, 4, 3, 2, 1 ]"))),
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement("div", { className: "expanding__pre" },
                        react_1["default"].createElement("h2", { className: "expanding__heading" }, "\u041E\u0431\u044A\u0435\u043A\u0442\u044B \u043C\u043E\u0433\u0443\u0442 \u0431\u044B\u0442\u044C \u043E\u0442\u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u044B \u043F\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044E \u043E\u0434\u043D\u043E\u0433\u043E \u0438\u0437 \u0441\u0432\u043E\u0438\u0445 \u0441\u0432\u043E\u0439\u0441\u0442\u0432."),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "var items = [ { name: 'Edward', value: 21 }, { name: 'Sharpe', value: 37 }, { name: 'And', value: 45 }, { name: 'The', value: -12 } ]"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432 \u043F\u043E \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0443 name"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "items.sort( (a, b) =< a.name < b.name ? 1 : -1)"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432 \u043F\u043E \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0443 value"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "items.sort( (a, b) =< a.value < b.value ? 1 : -1)")))))))));
};
exports["default"] = Sort;
