"use strict";
exports.__esModule = true;
/* eslint-disable react/jsx-no-comment-textnodes */
var framer_motion_1 = require("framer-motion"); // анимация
var react_1 = require("react");
var ExpandingHeading_1 = require("../general/expanding/ExpandingPanel/ExpandingHeading");
require("../../styles/dist/expanding.css");
var LinkInfo_1 = require("../general/LinkInfo/LinkInfo");
var Some = function () {
    var _a = react_1.useState(false), isVisible = _a[0], setVisible = _a[1];
    var title = react_1.useState("Метод some() позволяет проверить: соответствует ли, по крайней мере один, элемент в массиве условию, заданному в передаваемой функции.")[0];
    var descriptions = [
        "Возвращаемое значение метода будет логическое значение true, если функция обратного вызова возвращает значение true (найден элемент который соответствует заданному условию), в противном случае вернет логическое значение false (все элементы массива не соответствуют переданному условию).",
        "Функция обратного вызова, переданная в качестве параметра метода some(), не будет вызвана для удалённых или пропущенных элементов массива. Метод some() не изменяет массив для которого он был вызван. ",
        "синтаксис: ",
        "// только с callback функцией ",
        "array.some( function(item , index, arr ) ); ",
        "// с callback и с использованием объекта, на который может ссылаться ключевое слово this ",
        "array.some( callback( item, index, arr ), thisArg ) ",
        "Параметры:",
    ];
    var descriptionsBefore = [
        "callback - функция проверки каждого элемента, принимает три аргумента: ",
        "item - текущий обрабатываемый элемент массива.",
        "index - (необязательный) индекс текущего обрабатываемого элемента массива.",
        "array - (необязательный) массив, по которому осуществляется проход.",
        "thisArg - (необязательный) значение, используемое в качестве this при выполнении функции callback. ",
    ];
    var expanderHandler = function () {
        setVisible(function (prev) { return !prev; });
    };
    // //
    // const arrNumeric = [12, 5, 8, 130, 44];
    // console.log(arrNumeric.some((item) => item >= 10)); // true
    // console.log(arrNumeric.some((elem) => elem <= 10)); // true
    // const arrNumeric2 = [12, 54, 18, 130, 44];
    // console.log(arrNumeric2.some((elem) => elem <= 10)); // false
    return (react_1["default"].createElement("div", { className: "expanding" },
        react_1["default"].createElement(ExpandingHeading_1["default"], { isContentVisible: isVisible, panelName: title, onClickExpanding: expanderHandler }),
        react_1["default"].createElement(framer_motion_1.AnimatePresence, null, isVisible && (react_1["default"].createElement(framer_motion_1.motion.div, { initial: { height: 0, opacity: 0 }, animate: { height: "auto", opacity: 1 }, exit: { height: 0, opacity: 0 }, style: { overflow: "hidden" } },
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement(LinkInfo_1["default"], { title: "array.some()", href: "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/some" }),
                    descriptions &&
                        descriptions.map(function (item, index) { return (react_1["default"].createElement("p", { key: index, className: "expanding__paragraph" }, item)); }),
                    descriptionsBefore &&
                        descriptionsBefore.map(function (item, index) { return (react_1["default"].createElement("p", { key: index, className: "expanding__paragraph-before" }, item)); })),
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement("div", { className: "expanding__pre" },
                        react_1["default"].createElement("h2", { className: "expanding__heading" }, "\u041F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C \u043D\u0430\u043B\u0438\u0447\u0438\u0435 \u0432 \u043C\u0430\u0441\u0441\u0438\u0432\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0431\u043E\u043B\u044C\u0448\u0435 10."),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, " const arrNumeric = [ 12, 5, 8, 130, 44 ];"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "console.log(arrNumeric.some(( item ) => item >= 10 )); // true"))),
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement("div", { className: "expanding__pre" },
                        react_1["default"].createElement("h2", { className: "expanding__heading" }, "\u041F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C \u043D\u0430\u043B\u0438\u0447\u0438\u0435 \u0432 \u043C\u0430\u0441\u0441\u0438\u0432\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043C\u0435\u043D\u044C\u0448\u0435 10."),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, " const arrNumeric = [ 12, 5, 8, 130, 44 ];"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "console.log(arrNumeric.some((elem) => elem <= 10)); // true"))),
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement("div", { className: "expanding__pre" },
                        react_1["default"].createElement("h2", { className: "expanding__heading" }, "\u041F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C \u043D\u0430\u043B\u0438\u0447\u0438\u0435 \u0432 \u043C\u0430\u0441\u0441\u0438\u0432\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043C\u0435\u043D\u044C\u0448\u0435 10."),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "const arrNumeric2 = [ 12, 54, 18, 130, 44 ];"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" },
                            "console.log(arrNumeric2.some((elem) => elem <= 10)); // false",
                            " "))),
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement("div", { className: "expanding__pre" },
                        react_1["default"].createElement("h2", { className: "expanding__heading" }, "\u041F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C: \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442\u0441\u044F \u043B\u0438 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0441 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u044B\u043C \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435\u043C \u0432 \u043C\u0430\u0441\u0441\u0438\u0432\u0435:"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph" }, "// \u0438\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0438\u0440\u0443\u0435\u043C \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u0443\u044E, \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0449\u0443\u044E \u043C\u0430\u0441\u0441\u0438\u0432 \u0447\u0438\u0441\u043B\u043E\u0432\u044B\u0445 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "const arr = [ 10, 20, 30, 40 ];"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "// \u0441\u043E\u0437\u0434\u0430\u0451\u043C \u0444\u0443\u043D\u043A\u0446\u0438\u044E, \u0432 \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C: \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043B\u0438 \u0442\u0435\u043A\u0443\u0449\u0438\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044E 30:"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "function checkNumber( elem ) { "),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "return elem == 30;"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "} "),
                        react_1["default"].createElement("p", { className: "expanding__paragraph" }, "// \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C: \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043B\u0438 \u0445\u043E\u0442\u044F \u0431\u044B \u043E\u0434\u0438\u043D \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0432 \u043C\u0430\u0441\u0441\u0438\u0432\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u044E, \u0437\u0430\u0434\u0430\u043D\u043D\u043E\u043C\u0443 \u0432 \u043F\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0435\u043C\u043E\u0439 \u0444\u0443\u043D\u043A\u0446\u0438\u0438"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "arr.some( checkNumber ) // \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043C\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 true"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "-"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "// \u0430\u043D\u0430\u043B\u043E\u0433\u0438\u0447\u043D\u043E \u0441 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435\u043C \u0441\u0442\u0440\u0435\u043B\u043E\u0447\u043D\u043E\u0439 \u0444\u0443\u043D\u043A\u0446\u0438\u0438"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "arr.some( currentValue => currentValue > 100 ); // \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043C\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 false"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "arr.some( currentValue => currentValue < 100 ); // \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043C\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 true"))),
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement("div", { className: "expanding__pre" },
                        react_1["default"].createElement("h2", { className: "expanding__heading" }, "\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0432\u0442\u043E\u0440\u043E\u0433\u043E \u0430\u0440\u0433\u0443\u043C\u0435\u043D\u0442\u0430 thisArg :"),
                        react_1["default"].createElement(LinkInfo_1["default"], { title: "\u041F\u0440\u0438\u043C\u0435\u0440 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F", href: "https://basicweb.ru/javascript/js_array_some.php" }),
                        react_1["default"].createElement("p", { className: "expanding__paragraph" }, "\u0412 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u043C \u043F\u0440\u0438\u043C\u0435\u0440\u0435 \u043C\u044B \u0440\u0430\u0441\u0441\u043C\u043E\u0442\u0440\u0438\u043C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0432\u0442\u043E\u0440\u043E\u0433\u043E \u0430\u0440\u0433\u0443\u043C\u0435\u043D\u0442\u0430 \u043C\u0435\u0442\u043E\u0434\u0430 some(), \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0443\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442 \u043D\u0430 \u043E\u0431\u044A\u0435\u043A\u0442, \u043D\u0430 \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043C\u044B \u043C\u043E\u0436\u0435\u043C \u0441\u0441\u044B\u043B\u0430\u0442\u044C\u0441\u044F \u0441 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435\u043C \u043A\u043B\u044E\u0447\u0435\u0432\u043E\u0433\u043E \u0441\u043B\u043E\u0432\u0430 this \u0432\u043D\u0443\u0442\u0440\u0438 \u0444\u0443\u043D\u043A\u0446\u0438\u0438 \u043E\u0431\u0440\u0430\u0442\u043D\u043E\u0433\u043E \u0432\u044B\u0437\u043E\u0432\u0430:"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph" }, "// \u0438\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0438\u0440\u0443\u0435\u043C \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u0443\u044E, \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0449\u0443\u044E \u043C\u0430\u0441\u0441\u0438\u0432 \u0447\u0438\u0441\u043B\u043E\u0432\u044B\u0445 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "const numbers = [10, 20, 30, 40];"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "// \u0438\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0438\u0440\u0443\u0435\u043C \u043E\u0431\u044A\u0435\u043A\u0442 \u0441 \u043C\u0435\u0442\u043E\u0434\u043E\u043C checkNumber(), \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0438 \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u0442 \u0435\u0433\u043E \u043D\u0430 \u0440\u0430\u0432\u0435\u043D\u0441\u0442\u0432\u043E == 40"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "const myObject = {"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "checkNumber: function( currentValue ) {"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "return currentValue == 40;"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "} };"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "// \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C: \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0445\u043E\u0442\u044F \u0431\u044B \u043E\u0434\u0438\u043D \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0432 \u043C\u0430\u0441\u0441\u0438\u0432\u0430 numbers \u0437\u0430\u0434\u0430\u043D\u043D\u043E\u043C\u0443 \u0443\u0441\u043B\u043E\u0432\u0438\u044E."),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "numbers.some("),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, " function( currentValue ) {"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "// \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043C\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043C\u0435\u0442\u043E\u0434\u0430 checkNumber \u043E\u0431\u044A\u0435\u043A\u0442\u0430 myObject"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "return this.checkNumber( currentValue );"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "// \u043E\u0431\u044A\u0435\u043A\u0442, \u043D\u0430 \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043C\u044B \u0441\u0441\u044B\u043B\u0430\u0435\u043C\u0441\u044F \u0441 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435\u043C \u043A\u043B\u044E\u0447\u0435\u0432\u043E\u0433\u043E \u0441\u043B\u043E\u0432\u0430 this"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "}, myObject );"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "// \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043C\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 true (\u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0441\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435\u043C 40 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442\u0441\u044F \u0432 \u043C\u0430\u0441\u0441\u0438\u0432\u0435)")))))))));
};
exports["default"] = Some;
