"use strict";
exports.__esModule = true;
exports.generalIssues = void 0;
var cssData_1 = require("../dataArchive.ts/cssData");
var destructuringData_1 = require("../dataArchive.ts/destructuringData");
var domData_1 = require("../dataArchive.ts/domData");
var errorProcessingData_1 = require("../dataArchive.ts/errorProcessingData");
var gitHubData_1 = require("../dataArchive.ts/gitHubData");
var httpData_1 = require("../dataArchive.ts/httpData");
var javascriptData_1 = require("./javascriptData");
var javascriptFishkiData_1 = require("./javascriptFishkiData");
var jsonData_1 = require("./jsonData");
var webStorageData_1 = require("./webStorageData");
var numberMethodsData_1 = require("./numberMethodsData");
var objectMethodsData_1 = require("./objectMethodsData");
var reactData_1 = require("./reactData");
var reactRouterData_1 = require("./reactRouterData");
var stringMethodsData_1 = require("./stringMethodsData");
var typescriptData_1 = require("./typescriptData");
var webDevelopmentData_1 = require("./webDevelopmentData");
var interviewsData_1 = require("./interviewsData");
var htmlData_1 = require("./htmlData");
var generalIssues = javascriptData_1.arrayJavascript
    .concat(javascriptFishkiData_1.arrayJavascriptFishki)
    .concat(jsonData_1.arrayJSON)
    .concat(webStorageData_1.arrayWebStorage)
    .concat(numberMethodsData_1.arrayNumberMethods)
    .concat(stringMethodsData_1.arrayStringMethods)
    .concat(reactData_1.arrayReact)
    .concat(reactRouterData_1.arrayReactRouter)
    .concat(objectMethodsData_1.arrayObjectMethods)
    .concat(typescriptData_1.arrayTypescript)
    .concat(webDevelopmentData_1.arrayWebDevelopment)
    .concat(cssData_1.arrayCSS)
    .concat(domData_1.arrayDOM)
    .concat(destructuringData_1.arrayDestructuringArrays)
    .concat(destructuringData_1.arrayDestructuringObjects)
    .concat(httpData_1.arrayHTTP)
    .concat(gitHubData_1.arrayGitHub)
    .concat(errorProcessingData_1.arrayErrorProcessing)
    .concat(interviewsData_1.arrayInterviews)
    .concat(htmlData_1.arrayHTML);
exports.generalIssues = generalIssues;
