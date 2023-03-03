"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var AxiosPage_1 = require("../minorPages/AxiosPage");
var CSSPage_1 = require("../mainPages/CSSPage");
var DOMPage_1 = require("../minorPages/DOMPage");
var GeneralIssues_1 = require("../mainPages/GeneralIssues");
var GitHubPage_1 = require("../minorPages/GitHubPage");
var HTMLPage_1 = require("../mainPages/HTMLPage");
var HTTPPage_1 = require("../mainPages/HTTPPage");
var JavascriptPage_1 = require("../mainPages/JavascriptPage");
var ReactPage_1 = require("../mainPages/ReactPage");
var ArrayMethodsPage_1 = require("../minorPages/ArrayMethodsPage");
var ArrayTasksPage_1 = require("../minorPages/ArrayTasksPage");
var BrowserLinksPage_1 = require("../minorPages/BrowserLinksPage");
var DestructuringPage_1 = require("../minorPages/DestructuringPage");
var ErrorProcessingPage_1 = require("../minorPages/ErrorProcessingPage");
var JSONPage_1 = require("../minorPages/JSONPage");
var LinksJavascriptPage_1 = require("../minorPages/LinksJavascriptPage");
var LinksVuePage_1 = require("../minorPages/LinksVuePage");
var NotfoundPage_1 = require("../minorPages/NotfoundPage");
var ObjectMethodsPage_1 = require("../minorPages/ObjectMethodsPage");
var PromisePage_1 = require("../minorPages/PromisePage");
var VuePage_1 = require("../minorPages/VuePage");
var Layout_1 = require("./Layout/Layout");
var JavascriptFishkiPage_1 = require("../mainPages/JavascriptFishkiPage");
var ReactFishkiPage_1 = require("../mainPages/ReactFishkiPage");
var TypescriptPage_1 = require("../mainPages/TypescriptPage");
var TypescriptFishkiPage_1 = require("../mainPages/TypescriptFishkiPage");
var WebsiteLayout_1 = require("../mainPages/WebsiteLayout");
var BarMenuPage_1 = require("../minorPages/BarMenuPage");
var LocalStoragePage_1 = require("../minorPages/LocalStoragePage");
var AppRouter = function () {
    return (react_1["default"].createElement(react_router_dom_1.Routes, null,
        react_1["default"].createElement(react_router_dom_1.Route, { path: "/", element: react_1["default"].createElement(Layout_1["default"], null) },
            react_1["default"].createElement(react_router_dom_1.Route, { index: true, element: react_1["default"].createElement(GeneralIssues_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "css", element: react_1["default"].createElement(CSSPage_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "dom", element: react_1["default"].createElement(DOMPage_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "github", element: react_1["default"].createElement(GitHubPage_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "html", element: react_1["default"].createElement(HTMLPage_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "http", element: react_1["default"].createElement(HTTPPage_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "javascript", element: react_1["default"].createElement(JavascriptPage_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "javascriptFishki", element: react_1["default"].createElement(JavascriptFishkiPage_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "react", element: react_1["default"].createElement(ReactPage_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "reactFishki", element: react_1["default"].createElement(ReactFishkiPage_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "axios", element: react_1["default"].createElement(AxiosPage_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "arrayMethods", element: react_1["default"].createElement(ArrayMethodsPage_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "arraytasks", element: react_1["default"].createElement(ArrayTasksPage_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "browserlinks", element: react_1["default"].createElement(BrowserLinksPage_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "destructuring", element: react_1["default"].createElement(DestructuringPage_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "error", element: react_1["default"].createElement(ErrorProcessingPage_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "json", element: react_1["default"].createElement(JSONPage_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "linksjavascript", element: react_1["default"].createElement(LinksJavascriptPage_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "linksvue", element: react_1["default"].createElement(LinksVuePage_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "objectMethods", element: react_1["default"].createElement(ObjectMethodsPage_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "promise", element: react_1["default"].createElement(PromisePage_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "vue", element: react_1["default"].createElement(VuePage_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "typescript", element: react_1["default"].createElement(TypescriptPage_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "typescriptFishki", element: react_1["default"].createElement(TypescriptFishkiPage_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "websiteLayout", element: react_1["default"].createElement(WebsiteLayout_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "barMenu", element: react_1["default"].createElement(BarMenuPage_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "localStorage", element: react_1["default"].createElement(LocalStoragePage_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "*", element: react_1["default"].createElement(NotfoundPage_1["default"], null) }))));
};
exports["default"] = AppRouter;
