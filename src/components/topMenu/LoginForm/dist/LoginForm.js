"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var LoginForm_module_scss_1 = require("./LoginForm.module.scss");
var react_hook_form_1 = require("react-hook-form");
var context_1 = require("../../../context");
var InputSubmit_1 = require("../../ui/inputs/InputSubmit/InputSubmit");
var InputTitle_1 = require("../../ui/inputs/InputTitle/InputTitle");
var PrimaryButton_1 = require("../../ui/buttons/PrimaryButton/PrimaryButton");
var LoginForm = function (_a) {
    var _b, _c;
    var closeLoginForm = _a.closeLoginForm;
    var _d = react_1.useContext(context_1.AuthContext), isAuth = _d.isAuth, setAuth = _d.setAuth;
    // console.log(isAuth);
    var _e = react_1.useState(true), isDormancyUserName = _e[0], setDormancyUserName = _e[1];
    var _f = react_1.useState(true), isDormancyPhone = _f[0], setDormancyPhone = _f[1];
    var _g = react_hook_form_1.useForm({ mode: "all" }), register = _g.register, // позволяет регистрировать различные поля для форм
    _h = _g.formState, errors = _h.errors, isValid = _h.isValid, // объект с ошибками и т.д...
    handleSubmit = _g.handleSubmit, // некая обертка над нашим кастомным обработчиком отправки формы, она позволяет делать магии, связанные с валидацией.
    reset = _g.reset, // для очистки полей после отправки формы
    watch = _g.watch;
    var userData = {};
    // наш кастомный обработчик отправки формы
    var onSubmit = function (data) {
        //  data - это набор данных из нашей формы
        userData = data;
        // console.log(data);
        // console.log(userData);
        localStorage.setItem("userData-interview-preparation", JSON.stringify(userData));
        setAuth(true);
        localStorage.setItem("auth-interview-preparation", "true");
        reset();
        setDormancyUserName(true);
        setDormancyPhone(true);
        closeLoginForm();
    };
    // console.log(watch("firstName")); // следит за изменением значения
    // Восстановить из localStorage
    if (localStorage.getItem("userData-interview-preparation")) {
        userData = JSON.parse(localStorage.getItem("userData-interview-preparation") || "");
        // Для typescript вы можете использовать ||оператор и добавить к нему строку, чтобы она больше
        // не была нулевой. JSON.parse(localStorage.getItem("userData-interview-preparation") || "")
    }
    // console.log(userData);
    var handleSignOut = function (e) {
        e.stopPropagation();
        setAuth(false);
        localStorage.setItem("auth-interview-preparation", "false");
        closeLoginForm();
    };
    return (react_1["default"].createElement("form", { className: LoginForm_module_scss_1["default"]["login-form"], onSubmit: handleSubmit(onSubmit) },
        react_1["default"].createElement("p", { className: LoginForm_module_scss_1["default"]["login-form__admin"] }, "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0434\u043E\u0441\u0442\u0443\u043F"),
        react_1["default"].createElement("div", { className: LoginForm_module_scss_1["default"]["login-form__input-container"] },
            react_1["default"].createElement("label", { className: LoginForm_module_scss_1["default"]["my-input__label"] },
                react_1["default"].createElement(InputTitle_1["default"], { title: "\u0412\u0430\u0448\u0435 \u043B\u043E\u0433\u0438\u043D", isDormancy: isDormancyUserName }),
                react_1["default"].createElement("input", __assign({ className: (errors === null || errors === void 0 ? void 0 : errors.userName) ? LoginForm_module_scss_1["default"]["my-input__field_invalid"] : LoginForm_module_scss_1["default"]["my-input__field"], type: "text" }, register("userName", {
                    required: "Это поле обязательно к заполнению",
                    onChange: function (event) {
                        setDormancyUserName(false);
                    },
                    onBlur: function () {
                        if (watch("userName").length === 0) {
                            setDormancyUserName(true);
                        }
                    },
                    minLength: {
                        value: 3,
                        message: "Минимум 3 символов"
                    }
                }))),
                (errors === null || errors === void 0 ? void 0 : errors.userName) && (react_1["default"].createElement("span", { className: LoginForm_module_scss_1["default"]["my-input__error"] },
                    react_1["default"].createElement(react_1["default"].Fragment, null,
                        " ",
                        ((_b = errors === null || errors === void 0 ? void 0 : errors.userName) === null || _b === void 0 ? void 0 : _b.message) || "Error!"))))),
        react_1["default"].createElement("div", { className: LoginForm_module_scss_1["default"]["login-form__input-container"] },
            react_1["default"].createElement("label", { className: LoginForm_module_scss_1["default"]["my-input__label"] },
                react_1["default"].createElement(InputTitle_1["default"], { title: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D", isDormancy: isDormancyPhone }),
                react_1["default"].createElement("input", __assign({ className: (errors === null || errors === void 0 ? void 0 : errors.phone) ? LoginForm_module_scss_1["default"]["my-input__field_invalid"] : LoginForm_module_scss_1["default"]["my-input__field"], type: "tel" }, register("phone", {
                    required: "Это поле обязательно к заполнению",
                    onChange: function (event) {
                        setDormancyPhone(false);
                    },
                    onBlur: function () {
                        if (watch("phone").length === 0) {
                            setDormancyPhone(true);
                        }
                    },
                    minLength: {
                        value: 11,
                        message: "Минимум 11 символов"
                    },
                    maxLength: {
                        value: 16,
                        message: "Максимум 16 символов"
                    }
                }))),
                (errors === null || errors === void 0 ? void 0 : errors.phone) && (react_1["default"].createElement("span", { className: LoginForm_module_scss_1["default"]["my-input__error"] },
                    react_1["default"].createElement(react_1["default"].Fragment, null,
                        " ",
                        ((_c = errors === null || errors === void 0 ? void 0 : errors.phone) === null || _c === void 0 ? void 0 : _c.message) || "Error!",
                        " "))))),
        react_1["default"].createElement("div", { className: LoginForm_module_scss_1["default"]["login-form__button-container"] },
            react_1["default"].createElement(InputSubmit_1["default"], { children: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0434\u043E\u0441\u0442\u0443\u043F", disabled: !isValid })),
        react_1["default"].createElement("div", { className: LoginForm_module_scss_1["default"]["login-form__button-container"] },
            react_1["default"].createElement(PrimaryButton_1["default"], { children: "\u0412\u044B\u0439\u0442\u0438", disabled: !isAuth, handleButton: handleSignOut }))));
};
exports["default"] = LoginForm;
