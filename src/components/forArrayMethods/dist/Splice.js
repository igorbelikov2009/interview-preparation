"use strict";
exports.__esModule = true;
/* eslint-disable react/jsx-no-comment-textnodes */
var framer_motion_1 = require("framer-motion"); // анимация
var react_1 = require("react");
var ExpandingHeading_1 = require("../general/expanding/ExpandingPanel/ExpandingHeading");
require("../../styles/dist/expanding.css");
var LinkInfo_1 = require("../general/LinkInfo/LinkInfo");
var Splice = function () {
    var _a = react_1.useState(false), isVisible = _a[0], setVisible = _a[1];
    var title = react_1.useState("splice() - используется для добавления/ удаления элементов в массиве.")[0];
    var descriptions = [
        "Метод splice предназначен для изменения содержимого массива. Он может использоваться как для добавления элементов в массив, так и для их удаления.",
        "Синтаксис: array.splice(startIndex, deleteCount [, element1[, element2[, ...]]]);",
        "Параметры: ",
    ];
    var descriptionsBefore = [
        "'startIndex' (обязательный) - стартовый индекс элемента, с которого нужно начать изменение массива. Если в качестве startIndex указать число, большее длины массива, то стартовый индекс будет установлен на конец массива. Если в качестве startIndex указать отрицательное число, то отсчет стартового элемента будет вестись с конца.",
        " 'deleteCount' (обязательный) - число, показывающее какое количество элементов необходимо удалить из массива. Если элементы не нужно удалять из массива, то deleteCount необходимо установить 0. После этого нужно указать как минимум один новый элемент, который нужно добавить в массив. Если в качестве deleteCount указать число, которое будет превышать количество оставшихся элементов в массиве, начиная с startIndex, то в этом случае они всё равно будут удалены (т.е. все элементы до конца массива, начиная со стартового индекса)",
        "'element1', 'element2', ... (необязательные) - элементы которые нужно добавить в массив.",
    ];
    var expanderHandler = function () {
        setVisible(function (prev) { return !prev; });
    };
    return (react_1["default"].createElement("div", { className: "expanding" },
        react_1["default"].createElement(ExpandingHeading_1["default"], { isContentVisible: isVisible, panelName: title, onClickExpanding: expanderHandler }),
        react_1["default"].createElement(framer_motion_1.AnimatePresence, null, isVisible && (react_1["default"].createElement(framer_motion_1.motion.div, { initial: { height: 0, opacity: 0 }, animate: { height: "auto", opacity: 1 }, exit: { height: 0, opacity: 0 }, style: { overflow: "hidden" } },
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement(LinkInfo_1["default"], { title: "Array.prototype.splice()", href: "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice" }),
                    descriptions &&
                        descriptions.map(function (item, index) { return (react_1["default"].createElement("p", { key: index, className: "expanding__paragraph" }, item)); }),
                    descriptionsBefore &&
                        descriptionsBefore.map(function (item, index) { return (react_1["default"].createElement("p", { key: index, className: "expanding__paragraph-before" }, item)); })),
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement("div", { className: "expanding__pre" },
                        react_1["default"].createElement("h2", { className: "expanding__heading" }, "\u0423\u0434\u0430\u043B\u044F\u0435\u0442 0 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u043F\u043E \u0438\u043D\u0434\u0435\u043A\u0441\u0443 2 \u0438 \u0432\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \"drum\""),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "var removed = myFish.splice(2, 0, 'drum');"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "--"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "// myFish \u0440\u0430\u0432\u0435\u043D [\"angel\", \"clown\", \"drum\", \"mandarin\", \"sturgeon\"]"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "// removed \u0440\u0430\u0432\u0435\u043D [], \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u0443\u0434\u0430\u043B\u0435\u043D\u043E"))),
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement("div", { className: "expanding__pre" },
                        react_1["default"].createElement("h2", { className: "expanding__heading" }, "\u0423\u0434\u0430\u043B\u044F\u0435\u0442 1 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u043F\u043E \u0438\u043D\u0434\u0435\u043A\u0441\u0443 3"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "var myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "var removed = myFish.splice(3, 1);"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "--"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "// removed \u0440\u0430\u0432\u0435\u043D [\"mandarin\"]"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "// myFish \u0440\u0430\u0432\u0435\u043D [\"angel\", \"clown\", \"drum\", \"sturgeon\"]"))),
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement("div", { className: "expanding__pre" },
                        react_1["default"].createElement("h2", { className: "expanding__heading" }, "\u0423\u0434\u0430\u043B\u044F\u0435\u0442 1 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u043F\u043E \u0438\u043D\u0434\u0435\u043A\u0441\u0443 2 \u0438 \u0432\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \"trumpet\""),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "var myFish = ['angel', 'clown', 'drum', 'sturgeon'];"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "var removed = myFish.splice(2, 1, 'trumpet');"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "--"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "// myFish \u0440\u0430\u0432\u0435\u043D [\"angel\", \"clown\", \"trumpet\", \"sturgeon\"]"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "// removed \u0440\u0430\u0432\u0435\u043D [\"drum\"]"))),
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement("div", { className: "expanding__pre" },
                        react_1["default"].createElement("h2", { className: "expanding__heading" }, "\u0423\u0434\u0430\u043B\u044F\u0435\u0442 2 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 \u043D\u0430\u0447\u0438\u043D\u0430\u044F \u0441 \u0438\u043D\u0434\u0435\u043A\u0441\u0430 0 \u0438 \u0432\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \"parrot\", \"anemone\" \u0438 \"blue\""),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "var myFish = ['angel', 'clown', 'trumpet', 'sturgeon'];"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "var removed = myFish.splice(0, 2, 'parrot', 'anemone', 'blue');"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "--"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "// myFish \u0440\u0430\u0432\u0435\u043D [\"parrot\", \"anemone\", \"blue\", \"trumpet\", \"sturgeon\"]"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "// removed \u0440\u0430\u0432\u0435\u043D [\"angel\", \"clown\"]"))),
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement("div", { className: "expanding__pre" },
                        react_1["default"].createElement("h2", { className: "expanding__heading" }, "\u0423\u0434\u0430\u043B\u044F\u0435\u0442 2 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 \u043D\u0430\u0447\u0438\u043D\u0430\u044F \u0441 \u0438\u043D\u0434\u0435\u043A\u0441\u0430 2"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "var myFish = ['parrot', 'anemone', 'blue', 'trumpet', 'sturgeon'];"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "var removed = myFish.splice(myFish.length - 3, 2);"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "--"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "// myFish \u0440\u0430\u0432\u0435\u043D [\"parrot\", \"anemone\", \"sturgeon\"]"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "// removed \u0440\u0430\u0432\u0435\u043D [\"blue\", \"trumpet\"]"))),
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement("div", { className: "expanding__pre" },
                        react_1["default"].createElement("h2", { className: "expanding__heading" }, "\u0423\u0434\u0430\u043B\u044F\u0435\u0442 1 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u043F\u043E \u0438\u043D\u0434\u0435\u043A\u0441\u0443 -2"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "var removed = myFish.splice(-2, 1);"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "--"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "// myFish \u0440\u0430\u0432\u0435\u043D [\"angel\", \"clown\", \"sturgeon\"]"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "// removed \u0440\u0430\u0432\u0435\u043D s [\"mandarin\"]"))),
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement("div", { className: "expanding__pre" },
                        react_1["default"].createElement("h2", { className: "expanding__heading" }, "\u0423\u0434\u0430\u043B\u044F\u0435\u0442 \u0432\u0441\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u043F\u043E\u0441\u043B\u0435 \u0438\u043D\u0434\u0435\u043A\u0441\u0430 2 (\u0432\u043A\u043B\u044E\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E)"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "var removed = myFish.splice(2);"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "--"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "// myFish \u0440\u0430\u0432\u0435\u043D [\"angel\", \"clown\"]"),
                        react_1["default"].createElement("p", { className: "expanding__paragraph-code" }, "// removed \u0440\u0430\u0432\u0435\u043D [\"mandarin\", \"sturgeon\"]")))))))));
};
exports["default"] = Splice;
