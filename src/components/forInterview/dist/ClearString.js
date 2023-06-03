"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion"); // анимация
var react_1 = require("react");
var ExpandingHeading_1 = require("../general/expanding/ExpandingPanel/ExpandingHeading");
require("./taskModel.scss");
var ClearString = function () {
    var _a = react_1.useState(false), isVisible = _a[0], setVisible = _a[1];
    var expanderHandler = function () {
        setVisible(function (prev) { return !prev; });
    };
    var title = react_1.useState("title")[0];
    // // task
    // ===================================================================================
    //  Покупаем за 1 во второй день, продаём за 6 в пятый день. Макс прибыль: 6 - 1 = 5 у.е.
    var arr1 = [7, 1, 5, 3, 6, 4];
    // В нижнем случае мы не можем сделать никакой выгодной операции. Возвращаем ноль.
    var arr2 = [7, 6, 4, 3, 1];
    function getMaxProfit(prices) {
        var minPrice = prices[0];
        var maxProfit = 0;
        for (var i = 0; i < prices.length; i++) {
            var current = prices[i];
            if (current < minPrice) {
                minPrice = current;
            }
            if (current - minPrice > maxProfit) {
                maxProfit = current - minPrice;
            }
        }
        return maxProfit;
    }
    console.log(getMaxProfit(arr1)); // 5
    console.log(getMaxProfit(arr2)); // 0
    // ===================================================================================
    // // task
    return (react_1["default"].createElement("div", { className: "expanding" },
        react_1["default"].createElement(ExpandingHeading_1["default"], { isContentVisible: isVisible, panelName: title, onClickExpanding: expanderHandler }),
        react_1["default"].createElement(framer_motion_1.AnimatePresence, null, isVisible && (react_1["default"].createElement(framer_motion_1.motion.div, { initial: { height: 0, opacity: 0 }, animate: { height: "auto", opacity: 1 }, exit: { height: 0, opacity: 0 }, style: { overflow: "hidden" } },
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("div", { className: "expanding__content" },
                    react_1["default"].createElement("div", { className: "expanding__pre" }))))))));
};
exports["default"] = ClearString;
function getPasswords() {
    throw new Error("Function not implemented.");
}
