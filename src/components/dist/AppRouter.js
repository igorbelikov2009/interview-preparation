"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var Interviews_1 = require("../pages/Interviews");
var CSS_1 = require("../pages/CSS");
var DOM_1 = require("../pages/DOM");
var GeneralIssues_1 = require("../pages/GeneralIssues");
var GitHub_1 = require("../pages/GitHub");
var HTTP_1 = require("../pages/HTTP");
var Javascript_1 = require("../pages/Javascript");
var ReactPage_1 = require("../pages/ReactPage");
var ArrayMethods_1 = require("../pages/ArrayMethods");
var ArrayTasks_1 = require("../pages/ArrayTasks");
var Links_1 = require("../pages/Links");
var Destructuring_1 = require("../pages/Destructuring");
var ErrorProcessing_1 = require("../pages/ErrorProcessing");
var JSONPage_1 = require("../pages/JSONPage");
var NotfoundPage_1 = require("../pages/NotfoundPage");
var ObjectMethods_1 = require("../pages/ObjectMethods");
var VuePage_1 = require("../pages/VuePage");
var Layout_1 = require("./Layout/Layout");
var JavascriptFishki_1 = require("../pages/JavascriptFishki");
var ReactRouter_1 = require("../pages/ReactRouter");
var TypescriptPage_1 = require("../pages/TypescriptPage");
var WebDevelopment_1 = require("../pages/WebDevelopment");
var BarMenu_1 = require("../pages/BarMenu");
var WebStorage_1 = require("../pages/WebStorage");
var NumberMethods_1 = require("../pages/NumberMethods");
var StringMethods_1 = require("../pages/StringMethods");
var FireBase_1 = require("../pages/FireBase");
var ReferenceBooks_1 = require("../pages/ReferenceBooks");
var FrameworksCSS_1 = require("../pages/FrameworksCSS");
var LinksNPM_1 = require("../pages/LinksNPM");
var IconsLoaders_1 = require("../pages/IconsLoaders");
var YouTubeTypescript_1 = require("../pages/YouTubeTypescript");
var YouTubeReact_1 = require("../pages/YouTubeReact");
var YouTubeInterview_1 = require("../pages/YouTubeInterview");
var YouTubeAuthor_1 = require("../pages/YouTubeAuthor");
var YouTube_1 = require("../pages/YouTube");
var YouTubeCSS_1 = require("../pages/YouTubeCSS");
var YouTubeJavascript_1 = require("../pages/YouTubeJavascript");
var CSSFishki_1 = require("../pages/CSSFishki");
var GeneralLinks_1 = require("../pages/GeneralLinks");
var YouTubeTasksJavascript_1 = require("../pages/YouTubeTasksJavascript");
var RegularExpression_1 = require("../pages/RegularExpression");
var AppRouter = function () {
    return (react_1["default"].createElement(react_router_dom_1.Routes, null,
        react_1["default"].createElement(react_router_dom_1.Route, { path: "/", element: react_1["default"].createElement(Layout_1["default"], null) },
            react_1["default"].createElement(react_router_dom_1.Route, { index: true, element: react_1["default"].createElement(GeneralIssues_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "generalLinks", element: react_1["default"].createElement(GeneralLinks_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "css", element: react_1["default"].createElement(CSS_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "dom", element: react_1["default"].createElement(DOM_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "github", element: react_1["default"].createElement(GitHub_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "http", element: react_1["default"].createElement(HTTP_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "javascript", element: react_1["default"].createElement(Javascript_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "javascriptFishki", element: react_1["default"].createElement(JavascriptFishki_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "react", element: react_1["default"].createElement(ReactPage_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "reactRouter", element: react_1["default"].createElement(ReactRouter_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "interviews", element: react_1["default"].createElement(Interviews_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "arrayMethods", element: react_1["default"].createElement(ArrayMethods_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "arraytasks", element: react_1["default"].createElement(ArrayTasks_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "links", element: react_1["default"].createElement(Links_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "destructuring", element: react_1["default"].createElement(Destructuring_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "error", element: react_1["default"].createElement(ErrorProcessing_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "json", element: react_1["default"].createElement(JSONPage_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "objectMethods", element: react_1["default"].createElement(ObjectMethods_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "vue", element: react_1["default"].createElement(VuePage_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "typescript", element: react_1["default"].createElement(TypescriptPage_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "webDevelopment", element: react_1["default"].createElement(WebDevelopment_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "barMenu", element: react_1["default"].createElement(BarMenu_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "webStorage", element: react_1["default"].createElement(WebStorage_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "numberMethods", element: react_1["default"].createElement(NumberMethods_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "stringMethods", element: react_1["default"].createElement(StringMethods_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "fireBase", element: react_1["default"].createElement(FireBase_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "referenceBooks", element: react_1["default"].createElement(ReferenceBooks_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "frameworksCSS", element: react_1["default"].createElement(FrameworksCSS_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "linksNPM", element: react_1["default"].createElement(LinksNPM_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "iconsLoaders", element: react_1["default"].createElement(IconsLoaders_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "cssFishki", element: react_1["default"].createElement(CSSFishki_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "youTubeTypescript", element: react_1["default"].createElement(YouTubeTypescript_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "youTubeReact", element: react_1["default"].createElement(YouTubeReact_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "youTubeInterview", element: react_1["default"].createElement(YouTubeInterview_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "youTubeAuthor", element: react_1["default"].createElement(YouTubeAuthor_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "youTube", element: react_1["default"].createElement(YouTube_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "youTubeCSS", element: react_1["default"].createElement(YouTubeCSS_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "youTubeJavascript", element: react_1["default"].createElement(YouTubeJavascript_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "youTubeTasksJavascript", element: react_1["default"].createElement(YouTubeTasksJavascript_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "regularExpression", element: react_1["default"].createElement(RegularExpression_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "*", element: react_1["default"].createElement(NotfoundPage_1["default"], null) }))));
};
exports["default"] = AppRouter;
