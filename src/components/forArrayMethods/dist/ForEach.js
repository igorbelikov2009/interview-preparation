"use strict";
exports.__esModule = true;
/* eslint-disable react/jsx-no-comment-textnodes */
var framer_motion_1 = require("framer-motion"); // анимация
var react_1 = require("react");
var ExpandingHeading_1 = require("../general/expanding/ExpandingPanel/ExpandingHeading");
require("../../styles/dist/expanding.css");
var LinkInfo_1 = require("../general/LinkInfo/LinkInfo");
var ForEach = function () {
    var _a = react_1.useState(false), isVisible = _a[0], setVisible = _a[1];
    var title = react_1.useState("forEach() - для перебора элементов, вызывает функцию callback один раз для каждого элемента.")[0];
    var descriptions = [
        "Метод forEach() выполняет указанную функцию один раз для каждого элемента в массиве.  Она не будет вызвана для удалённых или пропущенных элементов массива. Однако, она будет вызвана для элементов, которые присутствуют в массиве и имеют значение undefined.",
        "Синтаксис: arr.forEach(function callback(currentItem, index, array) { // ... делать что-то с currentItem }[, thisArg]);",
        "Параметры: ",
    ];
    var descriptionsBefore = [
        "callback - функция, которая будет вызвана для каждого элемента массива. Она принимает от одного до трёх аргументов: ",
        "currentItem -  текущий обрабатываемый элемент в массиве.",
        "index - (необязательный) индекс текущего обрабатываемого элемента в массиве.",
        "array - (необязательный) массив, по которому осуществляется проход.",
        "thisArg - необязательный параметр. Значение, используемое в качестве this при вызове функции callback.",
    ];
    //   ["Бильбо", "Гэндальф", "Назгул"].forEach((currentItem, index, array) => {
    //     console.log(`У ${currentItem} индекс ${index} в ${array}`);
    //   });
    var expanderHandler = function () {
        setVisible(function (prev) { return !prev; });
    };
    return (react_1["default"].createElement("div", { className: "expanding" },
        react_1["default"].createElement(ExpandingHeading_1["default"], { isContentVisible: isVisible, panelName: title, onClickExpanding: expanderHandler }),
        react_1["default"].createElement(framer_motion_1.AnimatePresence, null, isVisible && (react_1["default"].createElement(framer_motion_1.motion.div, { initial: { height: 0, opacity: 0 }, animate: { height: "auto", opacity: 1 }, exit: { height: 0, opacity: 0 }, style: { overflow: "hidden" } },
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement(LinkInfo_1["default"], { title: "Array.prototype.forEach()", href: "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach" }),
                    descriptions &&
                        descriptions.map(function (item, index) { return (react_1["default"].createElement("p", { key: index, className: "expanding__paragraph" }, item)); }),
                    descriptionsBefore &&
                        descriptionsBefore.map(function (item, index) { return (react_1["default"].createElement("p", { key: index, className: "expanding__paragraph-before" }, item)); })),
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement("div", { className: "expanding__pre" },
                        react_1["default"].createElement("h2", { className: "expanding__heading" }, "\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u044D\u0442\u043E\u0442 \u043A\u043E\u0434 \u0432\u044B\u0432\u0435\u0434\u0435\u0442 \u0432 console.log \u043A\u0430\u0436\u0434\u044B\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u043C\u0430\u0441\u0441\u0438\u0432\u0430:"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "// \u0412\u044B\u0437\u043E\u0432 \u0432 console.log \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "[\"\u0411\u0438\u043B\u044C\u0431\u043E\", \"\u0413\u044D\u043D\u0434\u0430\u043B\u044C\u0444\", \"\u041D\u0430\u0437\u0433\u0443\u043B\"].forEach(( currentItem ) => console.log( currentItem ));"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "// \u0411\u0438\u043B\u044C\u0431\u043E"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "// \u0413\u044D\u043D\u0434\u0430\u043B\u044C\u0444"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "// \u041D\u0430\u0437\u0433\u0443\u043B"))),
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement("div", { className: "expanding__pre" },
                        react_1["default"].createElement("h2", { className: "expanding__heading" }, "\u0410 \u044D\u0442\u043E\u0442 \u0432\u0434\u043E\u0431\u0430\u0432\u043E\u043A \u0440\u0430\u0441\u0441\u043A\u0430\u0436\u0435\u0442 \u0438 \u043E \u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 \u0432 \u0446\u0435\u043B\u0435\u0432\u043E\u043C \u043C\u0430\u0441\u0441\u0438\u0432\u0435:"),
                        react_1["default"].createElement("pre", { className: "expanding__pre" },
                            react_1["default"].createElement("code", { className: "expanding__code" },
                                react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "[\"\u0411\u0438\u043B\u044C\u0431\u043E\", \"\u0413\u044D\u043D\u0434\u0430\u043B\u044C\u0444\", \"\u041D\u0430\u0437\u0433\u0443\u043B\"].forEach(( currentItem, index, array ) =>"),
                                react_1["default"].createElement("p", { className: "expanding__paragraph-code" },
                                    react_1["default"].createElement(react_1["default"].Fragment, null, "{console.log(`\u0423 ${ currentItem } \u0438\u043D\u0434\u0435\u043A\u0441 ${ index } \u0432 ${ array }`)})")),
                                react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "// \u0423 \u0411\u0438\u043B\u044C\u0431\u043E \u0438\u043D\u0434\u0435\u043A\u0441 0 \u0432 \u0411\u0438\u043B\u044C\u0431\u043E, \u0413\u044D\u043D\u0434\u0430\u043B\u044C\u0444, \u041D\u0430\u0437\u0433\u0443\u043B"),
                                react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "// \u0423 \u0413\u044D\u043D\u0434\u0430\u043B\u044C\u0444 \u0438\u043D\u0434\u0435\u043A\u0441 1 \u0432 \u0411\u0438\u043B\u044C\u0431\u043E,\u0413\u044D\u043D\u0434\u0430\u043B\u044C\u0444, \u041D\u0430\u0437\u0433\u0443\u043B"),
                                react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "// \u0423 \u041D\u0430\u0437\u0433\u0443\u043B \u0438\u043D\u0434\u0435\u043A\u0441 2 \u0432 \u0411\u0438\u043B\u044C\u0431\u043E, \u0413\u044D\u043D\u0434\u0430\u043B\u044C\u0444, \u041D\u0430\u0437\u0433\u0443\u043B"))))),
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement("div", { className: "expanding__pre" },
                        react_1["default"].createElement("h2", { className: "expanding__heading" }, "\u041A\u043E\u043D\u0432\u0435\u0440\u0442\u0438\u0440\u0443\u0435\u043C \u0446\u0438\u043A\u043B for \u0432 forEach"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "const items = [ 'item1', 'item2', 'item3' ]"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "const copy = [ ]"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "-"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "// \u0434\u043E"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "for ( let i = 0; i < items.length; i++ ) {"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "copy.push( items[ i ] )"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "}"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "-"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "// \u043F\u043E\u0441\u043B\u0435"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "items.forEach(function(item){"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "copy.push(item)"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "})")))))))));
};
exports["default"] = ForEach;
