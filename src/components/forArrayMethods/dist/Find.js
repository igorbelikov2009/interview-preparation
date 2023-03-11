"use strict";
exports.__esModule = true;
/* eslint-disable react/jsx-no-comment-textnodes */
var framer_motion_1 = require("framer-motion"); // анимация
var react_1 = require("react");
var ExpandingHeading_1 = require("../general/expanding/ExpandingPanel/ExpandingHeading");
require("../../styles/dist/expanding.css");
var LinkInfo_1 = require("../general/LinkInfo/LinkInfo");
var Find = function () {
    var _a = react_1.useState(false), isVisible = _a[0], setVisible = _a[1];
    var title = react_1.useState("Array.find() - метод позволяет найти первый (один) объект в массиве по заданному условию, иначе возвращается undefined. findLastIndex() и findIndex()")[0];
    var descriptions = [
        "Array.find() - метод используется для получения значения первого элемента массива, удовлетворяющего заданному условию, переданному в callback функции. В противном случае возвращается undefined.",
        "Он проверяет все элементы массива и выводит первый элемент, удовлетворяющий условию. Эта функция не будет работать с функцией, имеющей пустые элементы массива, а также не изменяет исходный массив. ",
        "Метод find() вызывает переданную функцию callback по очереди один раз для каждого элемента, присутствующего в массиве, до тех пор, пока она не вернёт true. Если такой элемент найден, метод find() немедленно вернёт значение этого элемента. В противном случае, метод find() вернёт undefined.",
        "Функция callback вызывается с тремя аргументами: значением элемента, индексом элемента и массивом, по которому осуществляется проход. ",
        "Метод find() не изменяет массив, для которого он был вызван. ",
        "Синтаксис:",
        "let result = array.find(callback(item, index, array) {",
        " // если true - возвращается текущий элемент и перебор прерывается ",
        " // если все итерации оказались ложными, возвращается undefined ",
        "}); ",
        "Параметры: ",
    ];
    var descriptionsBefore = [
        "callback - функция, вызывающаяся по очереди для каждого значения в массиве, принимает три аргумента:",
        "item – очередной элемент. ",
        "index – его индекс. ",
        "array – сам массив. ",
        "Если item находится, то поиск прерывается и возвращается item. Если ничего не найдено, возвращается undefined. ",
        "Возвращаемое значение - значение элемента из массива, если элемент прошёл проверку, иначе undefined. ",
        "В реальной жизни массивы объектов – обычное дело, поэтому метод find() крайне полезен. ",
        "У метода arr.findIndex() такой же синтаксис, но он возвращает индекс, на котором был найден элемент, а не сам элемент. Значение -1 возвращается, если ничего не найдено. ",
        "Метод arr.findLastIndex() похож на findIndex(), но ищет справа налево, наподобие lastIndexOf(). ",
    ];
    var expanderHandler = function () {
        setVisible(function (prev) { return !prev; });
    };
    return (react_1["default"].createElement("div", { className: "expanding" },
        react_1["default"].createElement(ExpandingHeading_1["default"], { isContentVisible: isVisible, panelName: title, onClickExpanding: expanderHandler }),
        react_1["default"].createElement(framer_motion_1.AnimatePresence, null, isVisible && (react_1["default"].createElement(framer_motion_1.motion.div, { initial: { height: 0, opacity: 0 }, animate: { height: "auto", opacity: 1 }, exit: { height: 0, opacity: 0 }, style: { overflow: "hidden" } },
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement(LinkInfo_1["default"], { title: "Array.prototype.find()", href: "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/find" }),
                    react_1["default"].createElement(LinkInfo_1["default"], { title: "Array.prototype.findIndex()", href: "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex" }),
                    react_1["default"].createElement(LinkInfo_1["default"], { title: "Array.prototype.findLastIndex()", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLastIndex" }),
                    descriptions &&
                        descriptions.map(function (item, index) { return (react_1["default"].createElement("p", { key: index, className: "expanding__paragraph" }, item)); }),
                    descriptionsBefore &&
                        descriptionsBefore.map(function (item, index) { return (react_1["default"].createElement("p", { key: index, className: "expanding__paragraph-before" }, item)); })),
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement("div", { className: "expanding__pre" },
                        react_1["default"].createElement("h2", { className: "expanding__heading" }, "\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440: "),
                        react_1["default"].createElement("p", { className: "expanding__paragraph" }, "\u0423 \u043D\u0430\u0441 \u0435\u0441\u0442\u044C \u043C\u0430\u0441\u0441\u0438\u0432 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439, \u043A\u0430\u0436\u0434\u044B\u0439 \u0438\u0437 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0438\u043C\u0435\u0435\u0442 \u043F\u043E\u043B\u044F id \u0438 name. \u041D\u0430\u0439\u0434\u0435\u043C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0441 id == 1:"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "let users = ["),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "{ id: 1, name: \"\u0412\u0430\u0441\u044F\" },"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "{ id: 2, name: \"\u041F\u0435\u0442\u044F\" },"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "{ id: 3, name: \"\u041C\u0430\u0448\u0430\" }"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "];"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "let user = users.find ( item => item.id == 1 );"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "alert ( user.name ); // \u0412\u0430\u0441\u044F"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "\u041E\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435, \u0447\u0442\u043E \u0432 \u0434\u0430\u043D\u043D\u043E\u043C \u043F\u0440\u0438\u043C\u0435\u0440\u0435 \u043C\u044B \u043F\u0435\u0440\u0435\u0434\u0430\u0451\u043C \u043C\u0435\u0442\u043E\u0434\u0443 find() \u0444\u0443\u043D\u043A\u0446\u0438\u044E item => item.id == 1 \u0441 \u043E\u0434\u043D\u0438\u043C \u0430\u0440\u0433\u0443\u043C\u0435\u043D\u0442\u043E\u043C. \u042D\u0442\u043E \u0442\u0438\u043F\u0438\u0447\u043D\u043E, \u0434\u0440\u0443\u0433\u0438\u0435 \u0430\u0440\u0433\u0443\u043C\u0435\u043D\u0442\u044B \u044D\u0442\u043E\u0439 \u0444\u0443\u043D\u043A\u0446\u0438\u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442\u0441\u044F \u0440\u0435\u0434\u043A\u043E."))),
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement("div", { className: "expanding__pre" },
                        react_1["default"].createElement("p", { className: "expanding__paragraph" }, "\u0423 \u043C\u0435\u0442\u043E\u0434\u0430 arr.findIndex() \u0442\u0430\u043A\u043E\u0439 \u0436\u0435 \u0441\u0438\u043D\u0442\u0430\u043A\u0441\u0438\u0441, \u043D\u043E \u043E\u043D \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0438\u043D\u0434\u0435\u043A\u0441, \u043D\u0430 \u043A\u043E\u0442\u043E\u0440\u043E\u043C \u0431\u044B\u043B \u043D\u0430\u0439\u0434\u0435\u043D \u044D\u043B\u0435\u043C\u0435\u043D\u0442, \u0430 \u043D\u0435 \u0441\u0430\u043C \u044D\u043B\u0435\u043C\u0435\u043D\u0442. \u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 -1 \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044F, \u0435\u0441\u043B\u0438 \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E."),
                        react_1["default"].createElement("p", { className: "expanding__paragraph" }, "\u041C\u0435\u0442\u043E\u0434 arr.findLastIndex() \u043F\u043E\u0445\u043E\u0436 \u043D\u0430 findIndex(), \u043D\u043E \u0438\u0449\u0435\u0442 \u0441\u043F\u0440\u0430\u0432\u0430 \u043D\u0430\u043B\u0435\u0432\u043E, \u043D\u0430\u043F\u043E\u0434\u043E\u0431\u0438\u0435 lastIndexOf()."),
                        react_1["default"].createElement("h2", { className: "expanding__heading" }, "\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440:"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "let users = ["),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "{ id: 1, name: \"\u0412\u0430\u0441\u044F\" },"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "{ id: 2, name: \"\u041F\u0435\u0442\u044F\" },"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "{ id: 3, name: \"\u041C\u0430\u0448\u0430\" },"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "{ id: 4, name: \"\u0412\u0430\u0441\u044F\" }"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "];"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "// \u041D\u0430\u0439\u0442\u0438 \u0438\u043D\u0434\u0435\u043A\u0441 \u043F\u0435\u0440\u0432\u043E\u0433\u043E \u0412\u0430\u0441\u0438"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "alert( users.findIndex ( user => user.name == '\u0412\u0430\u0441\u044F')); // 0"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "// \u041D\u0430\u0439\u0442\u0438 \u0438\u043D\u0434\u0435\u043A\u0441 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0433\u043E \u0412\u0430\u0441\u0438"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "alert( users.findLastIndex ( user => user.name == '\u0412\u0430\u0441\u044F' )); // 3"))),
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement("div", { className: "expanding__pre" },
                        react_1["default"].createElement("h2", { className: "expanding__heading" }, "\u041F\u0440\u0438\u043C\u0435\u0440: \u043F\u043E\u0438\u0441\u043A \u043F\u0440\u043E\u0441\u0442\u043E\u0433\u043E \u0447\u0438\u0441\u043B\u0430 \u0432 \u043C\u0430\u0441\u0441\u0438\u0432\u0435"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph" }, "\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u043F\u0440\u0438\u043C\u0435\u0440 \u043D\u0430\u0445\u043E\u0434\u0438\u0442 \u0432 \u043C\u0430\u0441\u0441\u0438\u0432\u0435 \u043F\u043E\u043B\u043E\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u0447\u0438\u0441\u0435\u043B \u044D\u043B\u0435\u043C\u0435\u043D\u0442, \u044F\u0432\u043B\u044F\u044E\u0449\u0438\u0439\u0441\u044F \u043F\u0440\u043E\u0441\u0442\u044B\u043C \u0447\u0438\u0441\u043B\u043E\u043C (\u043B\u0438\u0431\u043E \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 undefined, \u0435\u0441\u043B\u0438 \u0432 \u043C\u0430\u0441\u0441\u0438\u0432\u0435 \u043D\u0435\u0442 \u043F\u0440\u043E\u0441\u0442\u044B\u0445 \u0447\u0438\u0441\u0435\u043B)."),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "function isPrime( element, index, array ) { "),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "var start = 2;"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "while ( start <= Math.sqrt ( element )) { "),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "if ( element % start++ < 1 ) { "),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "return false;"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "}"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "}"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "return element > 1;"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "}"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "console.log([ 4, 6, 8, 12 ].find( isPrime )); // undefined, \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "console.log([ 4, 5, 8, 12 ].find( isPrime )); // 5")))))))));
};
exports["default"] = Find;
