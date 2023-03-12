"use strict";
exports.__esModule = true;
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-comment-textnodes */
var framer_motion_1 = require("framer-motion"); // анимация
var react_1 = require("react");
var ExpandingHeading_1 = require("../general/expanding/ExpandingPanel/ExpandingHeading");
require("../../styles/dist/expanding.css");
var LinkInfo_1 = require("../general/LinkInfo/LinkInfo");
var Split = function () {
    var _a = react_1.useState(false), isVisible = _a[0], setVisible = _a[1];
    var title = react_1.useState("let array = string.split([ separator ]) - преобразует строку в массив по заданному разделителю: (', '), (' + '), ('/'), (' '), (''), и т.д.")[0];
    var descriptions = [
        "Создание массива из строки посредством её разбивания с помощью разделителя в JavaScript осуществляется с помощью метода split(). Разделитель указывается в качестве аргумента.",
        "Метод split() принимает шаблон строк и делит его на упорядоченный список подстрок. Создаёт и возвращает массив из этих подстрок.",
        "Возвращаемое значение: массив строк, разделенных в каждой точке, где встречается separator в данной строке. ",
        "Синтаксис: ",
    ];
    var descriptionsBefore = [
        "split(separator) ",
        "split(separator, limit) ",
        "separator - шаблон, описывающий вид каждого разделения. Может быть undefined, строкой, регулярным выражением. Если разделитель отсутствует или равен undefined, то создаётся создаёт массив с одним элементом, объединяющим в себя все строки.",
        "limit - (необязательный) неотрицательное целое число, указывающее на ограничение количества подстрок, которые должны быть включены в массив. Если предоставлено, разбивает строку при каждом появлении указанного separator, но останавливается, когда limitзаписи помещаются в массив. ",
        "Оставшийся текст не включается в массив.",
        "Если limit = 0, то возвращается пустой массив.",
    ];
    var expanderHandler = function () {
        setVisible(function (prev) { return !prev; });
    };
    // //   =====================
    // const names = "Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand ";
    // const re = /\s*(?:;|$)\s*/;
    // const nameList = names.split(re);
    // console.log(names);
    // console.log(nameList);
    return (react_1["default"].createElement("div", { className: "expanding" },
        react_1["default"].createElement(ExpandingHeading_1["default"], { isContentVisible: isVisible, panelName: title, onClickExpanding: expanderHandler }),
        react_1["default"].createElement(framer_motion_1.AnimatePresence, null, isVisible && (react_1["default"].createElement(framer_motion_1.motion.div, { initial: { height: 0, opacity: 0 }, animate: { height: "auto", opacity: 1 }, exit: { height: 0, opacity: 0 }, style: { overflow: "hidden" } },
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement(LinkInfo_1["default"], { title: "String.prototype.split()", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split" }),
                    descriptions &&
                        descriptions.map(function (item, index) { return (react_1["default"].createElement("p", { key: index, className: "expanding__paragraph" }, item)); }),
                    descriptionsBefore &&
                        descriptionsBefore.map(function (item, index) { return (react_1["default"].createElement("p", { key: index, className: "expanding__paragraph-before" }, item)); })),
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement("div", { className: "expanding__pre" },
                        react_1["default"].createElement("h2", { className: "expanding__heading" }, "\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u043C\u0435\u0442\u043E\u0434\u0430 split()"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph" }, "\u041A\u043E\u0433\u0434\u0430 \u043F\u0443\u0441\u0442\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430 \u0438 \u0443\u043A\u0430\u0437\u0430\u043D \u043D\u0435\u043F\u0443\u0441\u0442\u043E\u0439 \u0440\u0430\u0437\u0434\u0435\u043B\u0438\u0442\u0435\u043B\u044C, split()\u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 [\"\"]. \u0415\u0441\u043B\u0438 \u0438 \u0441\u0442\u0440\u043E\u043A\u0430, \u0438 \u0440\u0430\u0437\u0434\u0435\u043B\u0438\u0442\u0435\u043B\u044C \u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u043F\u0443\u0441\u0442\u044B\u043C\u0438, \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044F \u043F\u0443\u0441\u0442\u043E\u0439 \u043C\u0430\u0441\u0441\u0438\u0432."),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "const string = \"\"; // \u043F\u0443\u0441\u0442\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "-"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "// \u043F\u0443\u0441\u0442\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430, \u0430 \u0440\u0430\u0437\u0434\u0435\u043B\u0438\u0442\u0435\u043B\u044C \u043D\u0435 \u043F\u0443\u0441\u0442"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "console.log(string.split(\"a\")); // [\"\"]"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "-"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "// \u0441\u0442\u0440\u043E\u043A\u0430 \u0438 \u0440\u0430\u0437\u0434\u0435\u043B\u0438\u0442\u0435\u043B\u044C \u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u043F\u0443\u0441\u0442\u044B\u043C\u0438"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "console.log(string.split()); // []"))),
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement("div", { className: "expanding__pre" },
                        react_1["default"].createElement("h2", { className: "expanding__heading" }, "\u0423\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u043F\u0440\u043E\u0431\u0435\u043B\u043E\u0432 \u0438\u0437 \u0441\u0442\u0440\u043E\u043A\u0438"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph" }, "\u0412 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u043C \u043F\u0440\u0438\u043C\u0435\u0440\u0435 \u043C\u0435\u0442\u043E\u0434 split() \u0432 \u0438\u0441\u0445\u043E\u0434\u043D\u043E\u0439 \u0441\u0442\u0440\u043E\u0447\u043A\u0435 \u0443\u0434\u0430\u043B\u044F\u0435\u0442 \u0442\u043E\u0447\u043A\u0438 \u0441 \u0437\u0430\u043F\u044F\u0442\u043E\u0439 \";\" \u0438 \u043F\u0440\u043E\u0431\u0435\u043B\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0438\u043C\u0435\u044E\u0442\u0441\u044F \u0434\u043E \u0438 \u043F\u043E\u0441\u043B\u0435 \u0442\u043E\u0447\u043A\u0438 \u0441 \u0437\u0430\u043F\u044F\u0442\u043E\u0439 \";\". \u0418\u0437 \u043E\u0441\u0442\u0430\u0432\u0448\u0438\u0445\u0441\u044F \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u0441\u043E\u0437\u0434\u0430\u0451\u0442\u0441\u044F \u043C\u0430\u0441\u0441\u0438\u0432 nameList."),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "const names = \"Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand \";"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "-"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "const re = /\\s*(?:;|$)\\s*/;"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "const nameList = names.split(re);"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "-"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "console.log(names)"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" },
                            "// Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand",
                            " "),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "console.log(nameList);"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "// ['Harry Trump', 'Fred Barney', 'Helen Rigby', 'Bill Abel', 'Chris Hand', '']"))),
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement("div", { className: "expanding__pre" },
                        react_1["default"].createElement("h2", { className: "expanding__heading" }, "\u0420\u0430\u0437\u0431\u0438\u0432\u043A\u0430 \u043F\u043E \u0431\u0443\u043A\u0432\u0430\u043C"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph" }, "\u0412\u044B\u0437\u043E\u0432 split(s) \u0441 \u043F\u0443\u0441\u0442\u044B\u043C \u0430\u0440\u0433\u0443\u043C\u0435\u043D\u0442\u043E\u043C s \u0440\u0430\u0437\u0431\u0438\u043B \u0431\u044B \u0441\u0442\u0440\u043E\u043A\u0443 \u043D\u0430 \u043C\u0430\u0441\u0441\u0438\u0432 \u0431\u0443\u043A\u0432:"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "let string = \"\u0442\u0435\u0441\u0442\";"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "-"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "alert( string.split('') ); // \u0442,\u0435,\u0441,\u0442")))))))));
};
exports["default"] = Split;
