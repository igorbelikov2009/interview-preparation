"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var AxiosPage_1 = require("../minorPages/AxiosPage");
var CSS_1 = require("../mainPages/CSS");
var DOM_1 = require("../minorPages/DOM");
var GeneralIssues_1 = require("../mainPages/GeneralIssues");
var GitHub_1 = require("../minorPages/GitHub");
var HTML_1 = require("../mainPages/HTML");
var HTTP_1 = require("../mainPages/HTTP");
var Javascript_1 = require("../mainPages/Javascript");
var ReactPage_1 = require("../mainPages/ReactPage");
var ArrayMethods_1 = require("../minorPages/ArrayMethods");
var ArrayTasks_1 = require("../minorPages/ArrayTasks");
var Links_1 = require("../minorPages/Links");
var Destructuring_1 = require("../minorPages/Destructuring");
var ErrorProcessing_1 = require("../minorPages/ErrorProcessing");
var JSONPage_1 = require("../minorPages/JSONPage");
var NotfoundPage_1 = require("../minorPages/NotfoundPage");
var ObjectMethods_1 = require("../minorPages/ObjectMethods");
var PromisePage_1 = require("../minorPages/PromisePage");
var VuePage_1 = require("../minorPages/VuePage");
var Layout_1 = require("./Layout/Layout");
var JavascriptFishki_1 = require("../mainPages/JavascriptFishki");
var ReactFishki_1 = require("../mainPages/ReactFishki");
var TypescriptPage_1 = require("../mainPages/TypescriptPage");
var TypescriptFishki_1 = require("../mainPages/TypescriptFishki");
var WebsiteLayout_1 = require("../mainPages/WebsiteLayout");
var BarMenu_1 = require("../minorPages/BarMenu");
var LocalStoragePage_1 = require("../minorPages/LocalStoragePage");
var NumberMethods_1 = require("../minorPages/NumberMethods");
var StringMethods_1 = require("../minorPages/StringMethods");
var FireBase_1 = require("../minorPages/FireBase");
var ReferenceBooks_1 = require("../minorPages/ReferenceBooks");
var FrameworksCSS_1 = require("../minorPages/FrameworksCSS");
var LinksNPM_1 = require("../minorPages/LinksNPM");
var LinksToIconsLoaders_1 = require("../minorPages/LinksToIconsLoaders");
var YouTubeTypescript_1 = require("../minorPages/YouTubeTypescript");
var YouTubeReact_1 = require("../minorPages/YouTubeReact");
var YouTubeInterview_1 = require("../minorPages/YouTubeInterview");
var YouTubeAuthor_1 = require("../minorPages/YouTubeAuthor");
var YouTube_1 = require("../minorPages/YouTube");
var YouTubeCSS_1 = require("../minorPages/YouTubeCSS");
var YouTubeJavascript_1 = require("../minorPages/YouTubeJavascript");
var CSSFishki_1 = require("../minorPages/CSSFishki");
var Mobx_1 = require("../minorPages/Mobx");
var AppRouter = function () {
    return (react_1["default"].createElement(react_router_dom_1.Routes, null,
        react_1["default"].createElement(react_router_dom_1.Route, { path: "/", element: react_1["default"].createElement(Layout_1["default"], null) },
            react_1["default"].createElement(react_router_dom_1.Route, { index: true, element: react_1["default"].createElement(GeneralIssues_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "css", element: react_1["default"].createElement(CSS_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "dom", element: react_1["default"].createElement(DOM_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "github", element: react_1["default"].createElement(GitHub_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "html", element: react_1["default"].createElement(HTML_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "http", element: react_1["default"].createElement(HTTP_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "javascript", element: react_1["default"].createElement(Javascript_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "javascriptFishki", element: react_1["default"].createElement(JavascriptFishki_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "react", element: react_1["default"].createElement(ReactPage_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "reactFishki", element: react_1["default"].createElement(ReactFishki_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "axios", element: react_1["default"].createElement(AxiosPage_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "arrayMethods", element: react_1["default"].createElement(ArrayMethods_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "arraytasks", element: react_1["default"].createElement(ArrayTasks_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "links", element: react_1["default"].createElement(Links_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "destructuring", element: react_1["default"].createElement(Destructuring_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "error", element: react_1["default"].createElement(ErrorProcessing_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "json", element: react_1["default"].createElement(JSONPage_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "objectMethods", element: react_1["default"].createElement(ObjectMethods_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "promise", element: react_1["default"].createElement(PromisePage_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "vue", element: react_1["default"].createElement(VuePage_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "typescript", element: react_1["default"].createElement(TypescriptPage_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "typescriptFishki", element: react_1["default"].createElement(TypescriptFishki_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "websiteLayout", element: react_1["default"].createElement(WebsiteLayout_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "barMenu", element: react_1["default"].createElement(BarMenu_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "localStorage", element: react_1["default"].createElement(LocalStoragePage_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "numberMethods", element: react_1["default"].createElement(NumberMethods_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "stringMethods", element: react_1["default"].createElement(StringMethods_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "fireBase", element: react_1["default"].createElement(FireBase_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "referenceBooks", element: react_1["default"].createElement(ReferenceBooks_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "frameworksCSS", element: react_1["default"].createElement(FrameworksCSS_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "linksNPM", element: react_1["default"].createElement(LinksNPM_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "linksIconsLoaders", element: react_1["default"].createElement(LinksToIconsLoaders_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "cssFishki", element: react_1["default"].createElement(CSSFishki_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "youTubeTypescript", element: react_1["default"].createElement(YouTubeTypescript_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "youTubeReact", element: react_1["default"].createElement(YouTubeReact_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "youTubeInterview", element: react_1["default"].createElement(YouTubeInterview_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "youTubeAuthor", element: react_1["default"].createElement(YouTubeAuthor_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "youTube", element: react_1["default"].createElement(YouTube_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "youTubeCSS", element: react_1["default"].createElement(YouTubeCSS_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "youTubeJavascript", element: react_1["default"].createElement(YouTubeJavascript_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "mobx", element: react_1["default"].createElement(Mobx_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "*", element: react_1["default"].createElement(NotfoundPage_1["default"], null) }))));
};
exports["default"] = AppRouter;
