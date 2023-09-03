"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion"); // анимация
var react_1 = require("react");
var ArrayIsArray_1 = require("../components/forArrayMethods/ArrayIsArray");
var Concat_1 = require("../components/forArrayMethods/Concat");
var CopyWithin_1 = require("../components/forArrayMethods/CopyWithin");
var Entries_1 = require("../components/forArrayMethods/Entries");
var Filter_1 = require("../components/forArrayMethods/Filter");
var Find_1 = require("../components/forArrayMethods/Find");
var For_1 = require("../components/forArrayMethods/For");
var ForEach_1 = require("../components/forArrayMethods/ForEach");
var ForOf_1 = require("../components/forArrayMethods/ForOf");
var Includes_1 = require("../components/forArrayMethods/Includes");
var IndexOf_1 = require("../components/forArrayMethods/IndexOf");
var Join_1 = require("../components/forArrayMethods/Join");
var LastIndexOf_1 = require("../components/forArrayMethods/LastIndexOf");
var Map_1 = require("../components/forArrayMethods/Map");
var MethodList_1 = require("../components/forArrayMethods/MethodList");
var Pop_1 = require("../components/forArrayMethods/Pop");
var Push_1 = require("../components/forArrayMethods/Push");
var Reduce_1 = require("../components/forArrayMethods/Reduce");
var Shift_1 = require("../components/forArrayMethods/Shift");
var Slice_1 = require("../components/forArrayMethods/Slice");
var Some_1 = require("../components/forArrayMethods/Some");
var Sort_1 = require("../components/forArrayMethods/Sort");
var Splice_1 = require("../components/forArrayMethods/Splice");
var Split_1 = require("../components/forArrayMethods/Split");
var Unshift_1 = require("../components/forArrayMethods/Unshift");
var PageLink_1 = require("../components/general/PageLink/PageLink");
var ServerIsLoading_1 = require("../components/general/serverIsLoading/ServerIsLoading");
var ServerError_1 = require("../components/general/serverError/ServerError");
var arrayMethodsAPI_1 = require("../services/arrayMethodsAPI");
require("../styles/arrayMethods.scss");
var Flat_1 = require("../components/forArrayMethods/Flat");
// import { linksArrayMethods } from "../dataArchive.ts/arrayMethodsData";
var ArrayMethodsPage = function () {
    var _a = arrayMethodsAPI_1.arrayMethodsAPI.useGetLinksArrayMethodsQuery(), linksArrayMethods = _a.data, isLoading = _a.isLoading, isError = _a.isError;
    return (react_1["default"].createElement("div", { className: "array-methods" },
        react_1["default"].createElement(framer_motion_1.motion.div, { initial: { width: 0, opacity: 0 }, animate: { width: "100%", opacity: 1 }, exit: { x: window.innerWidth, transition: { duration: 0.1 }, opacity: 0 } },
            react_1["default"].createElement("div", { className: "array-methods__container" },
                isLoading && react_1["default"].createElement(ServerIsLoading_1["default"], null),
                isError && react_1["default"].createElement(ServerError_1["default"], null),
                linksArrayMethods && react_1["default"].createElement(PageLink_1["default"], { links: linksArrayMethods, title: "\u041C\u0435\u0442\u043E\u0434\u044B \u043C\u0430\u0441\u0441\u0438\u0432\u043E\u0432, \u0441\u0441\u044B\u043B\u043A\u0438" }),
                react_1["default"].createElement("h1", { className: "array-methods__heading" }, " \u041C\u0435\u0442\u043E\u0434\u044B \u043C\u0430\u0441\u0441\u0438\u0432\u043E\u0432 "),
                react_1["default"].createElement("h2", { className: "array-methods__subheading" }, "\u0420\u0430\u0441\u043F\u0430\u043A\u043E\u0432\u043A\u0430 \u043F\u043E\u0434\u043C\u0430\u0441\u0441\u0438\u0432\u043E\u0432 \u0432 \u043E\u0434\u0438\u043D \u043C\u0430\u0441\u0441\u0438\u0432"),
                react_1["default"].createElement(Flat_1["default"], null),
                react_1["default"].createElement("h2", { className: "array-methods__subheading" }, " \u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435/\u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432"),
                react_1["default"].createElement(Push_1["default"], null),
                react_1["default"].createElement(Unshift_1["default"], null),
                react_1["default"].createElement(Pop_1["default"], null),
                react_1["default"].createElement(Shift_1["default"], null),
                react_1["default"].createElement("h2", { className: "array-methods__subheading" }, "\u0424\u0443\u043D\u043A\u0446\u0438\u0438 \u0434\u043B\u044F \u0440\u0430\u0431\u043E\u0442\u044B \u0441 \u043C\u0430\u0441\u0441\u0438\u0432\u0430\u043C\u0438 (\u043C\u0435\u0442\u043E\u0434\u044B \u043E\u0431\u044A\u0435\u043A\u0442\u0430 Array)"),
                react_1["default"].createElement(Slice_1["default"], null),
                react_1["default"].createElement(Splice_1["default"], null),
                react_1["default"].createElement(Concat_1["default"], null),
                react_1["default"].createElement("h2", { className: "array-methods__subheading" }, "\u041F\u0435\u0440\u0435\u0431\u043E\u0440 \u043C\u0430\u0441\u0441\u0438\u0432\u0430."),
                react_1["default"].createElement(For_1["default"], null),
                react_1["default"].createElement(ForOf_1["default"], null),
                react_1["default"].createElement(ForEach_1["default"], null),
                react_1["default"].createElement("h2", { className: "array-methods__subheading" }, "\u041F\u043E\u0438\u0441\u043A \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 \u0432 \u043C\u0430\u0441\u0441\u0438\u0432\u0435."),
                react_1["default"].createElement(IndexOf_1["default"], null),
                react_1["default"].createElement(LastIndexOf_1["default"], null),
                react_1["default"].createElement(Includes_1["default"], null),
                react_1["default"].createElement("h2", { className: "array-methods__subheading" }, "\u041F\u043E\u0438\u0441\u043A \u043F\u0435\u0440\u0432\u043E\u0433\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 \u0432 \u043C\u0430\u0441\u0441\u0438\u0432\u0435 \u043F\u043E \u0437\u0430\u0434\u0430\u043D\u043D\u043E\u043C\u0443 \u0443\u0441\u043B\u043E\u0432\u0438\u044E."),
                react_1["default"].createElement(Find_1["default"], null),
                react_1["default"].createElement("h2", { className: "array-methods__subheading" }, "\u041F\u043E\u0438\u0441\u043A \u0432\u0441\u0435\u0445 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u0432 \u043C\u0430\u0441\u0441\u0438\u0432\u0435, \u0443\u0434\u043E\u0432\u043B\u0435\u0442\u0432\u043E\u0440\u044F\u0449\u0438\u0445 \u0437\u0430\u0434\u0430\u043D\u043D\u043E\u043C\u0443 \u0443\u0441\u043B\u043E\u0432\u0438\u044E."),
                react_1["default"].createElement(Filter_1["default"], null),
                react_1["default"].createElement("h2", { className: "array-methods__subheading" }, "\u041F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u043C\u0430\u0441\u0441\u0438\u0432\u0430."),
                react_1["default"].createElement(Map_1["default"], null),
                react_1["default"].createElement(Sort_1["default"], null),
                react_1["default"].createElement("h2", { className: "array-methods__subheading" }, "\u041F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u043C\u0430\u0441\u0441\u0438\u0432\u0430 \u0432 \u0441\u0442\u0440\u043E\u043A\u0443 \u0438 \u043E\u0431\u0440\u0430\u0442\u043D\u043E: \u043C\u0435\u0442\u043E\u0434\u044B join() \u0438 split()."),
                react_1["default"].createElement(Join_1["default"], null),
                react_1["default"].createElement(Split_1["default"], null),
                react_1["default"].createElement("h2", { className: "array-methods__subheading" }, "\u0412\u044B\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u0435 \u0435\u0434\u0438\u043D\u043E\u0433\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0435 \u0432\u0441\u0435\u0433\u043E \u043C\u0430\u0441\u0441\u0438\u0432\u0430."),
                react_1["default"].createElement(Reduce_1["default"], null),
                react_1["default"].createElement("h2", { className: "array-methods__subheading" }, "\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u043C\u0430\u0441\u0441\u0438\u0432\u0430."),
                react_1["default"].createElement(ArrayIsArray_1["default"], null),
                react_1["default"].createElement(MethodList_1["default"], null),
                react_1["default"].createElement(Some_1["default"], null),
                react_1["default"].createElement(CopyWithin_1["default"], null),
                react_1["default"].createElement(Entries_1["default"], null)))));
};
exports["default"] = ArrayMethodsPage;
