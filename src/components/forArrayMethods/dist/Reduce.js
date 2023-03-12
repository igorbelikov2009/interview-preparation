"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion"); // анимация
var react_1 = require("react");
var ExpandingHeading_1 = require("../general/expanding/ExpandingPanel/ExpandingHeading");
require("../../styles/dist/expanding.css");
var LinkInfo_1 = require("../general/LinkInfo/LinkInfo");
var Reduce = function () {
    var _a = react_1.useState(false), isVisible = _a[0], setVisible = _a[1];
    var title = react_1.useState("Методы reduce() и reduceRight() вычисляют одно значение на основе всего массива (суммирование, умножение и т.д...). ")[0];
    var descriptions = [
        "array.reduce() - используется для вычисления какого-нибудь единого значения на основе всех элементов массива (суммирование всех элементов, умножение друг на друга и другое). В результате на выходе получится одно значение.",
        "Значение, возвращённое методом reduce(), будет равным последнему результату выполнения колбэк-функции. Метод reduce() применяет функцию reducer к каждому элементу массива (слева-направо), возвращая одно результирующее значение. Массив, к которому применяется метод, остаётся неизменным.",
        "Синтаксис:",
        "let value = arr.reduce( function ( accumulator, item, index, array ) { // ... }, [ initial ]);",
        "Функция применяется по очереди ко всем элементам массива и «переносит» свой результат на следующий вызов.",
        "Аргументы: ",
    ];
    var descriptionsBefore = [
        "accumulator – результат предыдущего вызова этой функции, равен initial при первом вызове (если передан initial),",
        "item – очередной элемент массива,",
        "index – его позиция,",
        "array – сам массив.",
        "При вызове функции результат её предыдущего вызова передаётся на следующий вызов в качестве первого аргумента.",
        "Так, первый аргумент является по сути аккумулятором, который хранит объединённый результат всех предыдущих вызовов функции. По окончании он становится результатом reduce.",
        "При отсутствии initial в качестве первого значения берётся первый элемент массива, а перебор стартует со второго. Таблица вычислений будет с вычетом первой строки.",
        "Если массив пуст, вызов reduce без начального значения выдаст ошибку.",
        "Поэтому рекомендуется всегда указывать начальное значение. ",
        "Метод array.reduceRight() работает аналогично, но проходит по массиву справа налево. ",
    ];
    var expanderHandler = function () {
        setVisible(function (prev) { return !prev; });
    };
    // ==============================================
    //// Тут мы получим средний возраст пользователей
    //   const arr = [
    //     { name: "Вася", age: 25 },
    //     { name: "Петя", age: 30 },
    //     { name: "Маша", age: 29 },
    //   ];
    //   const getAverageAge = (users: any[]) => {
    //     return users.reduce((prev, user) => prev + user.age, 0) / users.length;
    //   };
    //   console.log(getAverageAge(arr)); // 28
    // ==============================================
    //// Сумма значений в массиве объектов
    //   const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];
    //   const sum = objects.reduce((accumulator, item) => accumulator + item.x, 0);
    //   console.log(sum); // 6
    //   // ==============================================
    //   //   Создать из массива массивов один массив
    //   const arrayOfArrays: number[][] = [
    //     [0, 1],
    //     [2, 3],
    //     [4, 5],
    //   ];
    //   const flattened = arrayOfArrays.reduce((accumulator, item) => accumulator.concat(item), []);
    //   console.log(flattened); // [0, 1, 2, 3, 4, 5]
    return (react_1["default"].createElement("div", { className: "expanding" },
        react_1["default"].createElement(ExpandingHeading_1["default"], { isContentVisible: isVisible, panelName: title, onClickExpanding: expanderHandler }),
        react_1["default"].createElement(framer_motion_1.AnimatePresence, null, isVisible && (react_1["default"].createElement(framer_motion_1.motion.div, { initial: { height: 0, opacity: 0 }, animate: { height: "auto", opacity: 1 }, exit: { height: 0, opacity: 0 }, style: { overflow: "hidden" } },
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement(LinkInfo_1["default"], { title: "array.reduce()", href: "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce" }),
                    descriptions &&
                        descriptions.map(function (item, index) { return (react_1["default"].createElement("p", { key: index, className: "expanding__paragraph" }, item)); }),
                    descriptionsBefore &&
                        descriptionsBefore.map(function (item, index) { return (react_1["default"].createElement("p", { key: index, className: "expanding__paragraph-before" }, item)); })),
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement("div", { className: "expanding__pre" },
                        react_1["default"].createElement("h2", { className: "expanding__heading" }, "\u0422\u0443\u0442 \u043C\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u043C \u0441\u0443\u043C\u043C\u0443 \u0432\u0441\u0435\u0445 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u043C\u0430\u0441\u0441\u0438\u0432\u0430 \u043E\u0434\u043D\u043E\u0439 \u0441\u0442\u0440\u043E\u043A\u043E\u0439: "),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "let arr = [ 1, 2, 3, 4, 5 ]; "),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "let result = arr.reduce((sum, current) => sum + current, 0);"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "alert(result); // 15"))),
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement("div", { className: "expanding__pre" },
                        react_1["default"].createElement("h2", { className: "expanding__heading" }, "\u0422\u0443\u0442 \u043C\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u043C \u0441\u0440\u0435\u0434\u043D\u0438\u0439 \u0432\u043E\u0437\u0440\u0430\u0441\u0442 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "const arr = ["),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "{ name: \"\u0412\u0430\u0441\u044F\", age: 25 },"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "{ name: \"\u041F\u0435\u0442\u044F\", age: 30 },"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "{ name: \"\u041C\u0430\u0448\u0430\", age: 29 },"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "];"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, " const getAverageAge = (users: any[]) => {"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "return users.reduce((prev, user) => prev + user.age, 0) / users.length;"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, " };"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "console.log(getAverageAge(arr)); // 28"))),
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement("div", { className: "expanding__pre" },
                        react_1["default"].createElement("h2", { className: "expanding__heading" }, "\u0421\u0443\u043C\u043C\u0430 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439 \u0432 \u043C\u0430\u0441\u0441\u0438\u0432\u0435 \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph" }, "\u0427\u0442\u043E\u0431\u044B \u0441\u0443\u043C\u043C\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F, \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0449\u0438\u0435\u0441\u044F \u0432 \u043C\u0430\u0441\u0441\u0438\u0432\u0435 \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432, \u0432\u044B \u0434\u043E\u043B\u0436\u043D\u044B \u0443\u043A\u0430\u0437\u0430\u0442\u044C initialValue, \u0447\u0442\u043E\u0431\u044B \u043A\u0430\u0436\u0434\u044B\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u043F\u0440\u043E\u0445\u043E\u0434\u0438\u043B \u0447\u0435\u0440\u0435\u0437 \u0432\u0430\u0448\u0443 \u0444\u0443\u043D\u043A\u0446\u0438\u044E. \u0411\u0435\u0437 initialValue \u0431\u0443\u0434\u0435\u0442 \u043E\u0448\u0438\u0431\u043A\u0430."),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "const sum = objects.reduce((accumulator, item) => accumulator + item.x, 0);"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, " console.log(sum); // 6"))),
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement("div", { className: "expanding__pre" },
                        react_1["default"].createElement("h2", { className: "expanding__heading" }, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0438\u0437 \u043C\u0430\u0441\u0441\u0438\u0432\u0430 \u043C\u0430\u0441\u0441\u0438\u0432\u043E\u0432 \u043E\u0434\u0438\u043D \u043C\u0430\u0441\u0441\u0438\u0432"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "const arrayOfArrays: number[ ] [ ] = ["),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "[ 0, 1 ],"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "[ 2, 3 ],"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "[ 4, 5 ],"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "];"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "const flattened = arrayOfArrays.reduce (( accumulator, item ) => accumulator.concat ( item ), [ ]);"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "console.log(flattened); // [0, 1, 2, 3, 4, 5]"))),
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement("div", { className: "expanding__pre" },
                        react_1["default"].createElement("h2", { className: "expanding__heading" }, "x"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "x"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "x"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "-"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "x"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "x"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "x"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "x"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "-"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "x"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "x"))),
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement("div", { className: "expanding__pre" },
                        react_1["default"].createElement("h2", { className: "expanding__heading" }, "x"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "x"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "x"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "-"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "x"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "x"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "x"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "x"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "-"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "x"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "x"))),
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement("div", { className: "expanding__pre" },
                        react_1["default"].createElement("h2", { className: "expanding__heading" }, "x"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "x"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "x"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "-"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "x"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "x"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "x"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "x"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "-"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "x"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "x")))))))));
};
exports["default"] = Reduce;
