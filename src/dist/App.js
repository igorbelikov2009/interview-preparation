"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./styles/App.css");
var AppRouter_1 = require("./components/AppRouter");
var index_1 = require("./context/index");
function App() {
    var _a = react_1.useState(false), isAuth = _a[0], setAuth = _a[1];
    var _b = react_1.useState(false), isBackgroundWhite = _b[0], setBackgroundWhite = _b[1];
    var _c = react_1.useState(false), isLoginFormVisible = _c[0], setLoginFormVisible = _c[1];
    react_1.useEffect(function () {
        if (localStorage.getItem("auth-interview-preparation")) {
            setAuth(true);
        }
    }, []);
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement(index_1.AuthContext.Provider, { value: {
                isAuth: isAuth,
                setAuth: setAuth,
                isBackgroundWhite: isBackgroundWhite,
                setBackgroundWhite: setBackgroundWhite,
                isLoginFormVisible: isLoginFormVisible,
                setLoginFormVisible: setLoginFormVisible
            } },
            react_1["default"].createElement(AppRouter_1["default"], null))));
}
exports["default"] = App;
