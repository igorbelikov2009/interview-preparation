"use strict";
var _a;
exports.__esModule = true;
exports.setupStore = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var linksErrorAPI_1 = require("../data/linksErrorAPI");
var arrayCSSAPI_1 = require("../services/arrayCSSAPI");
var arrayDOMAPI_1 = require("../services/arrayDOMAPI");
var arrayErrorAPI_1 = require("../services/arrayErrorAPI");
var arrayHTTPAPI_1 = require("../services/arrayHTTPAPI");
var arrayMethodsAPI_1 = require("../services/arrayMethodsAPI");
var cssAPI_1 = require("../services/cssAPI");
var cssFishkiAPI_1 = require("../services/cssFishkiAPI");
var destructuringAPI_1 = require("../services/destructuringAPI");
var destructuringArraysAPI_1 = require("../services/destructuringArraysAPI");
var destructuringObjectsAPI_1 = require("../services/destructuringObjectsAPI");
var fireBaseAPI_1 = require("../services/fireBaseAPI");
var frameworksCSSAPI_1 = require("../services/frameworksCSSAPI");
var iconsLoadersAPI_1 = require("../services/iconsLoadersAPI");
var linksDOMAPI_1 = require("../services/linksDOMAPI");
var linksGitHubAPI_1 = require("../services/linksGitHubAPI");
var linksHTTPAPI_1 = require("../services/linksHTTPAPI");
// Создаём корневой редюсер, состоящий из комбинации всех редюсеров
var rootReducer = toolkit_1.combineReducers((_a = {},
    _a[cssAPI_1.cssAPI.reducerPath] = cssAPI_1.cssAPI.reducer,
    _a[arrayCSSAPI_1.arrayCSSAPI.reducerPath] = arrayCSSAPI_1.arrayCSSAPI.reducer,
    _a[cssFishkiAPI_1.cssFishkiAPI.reducerPath] = cssFishkiAPI_1.cssFishkiAPI.reducer,
    _a[frameworksCSSAPI_1.frameworksCSSAPI.reducerPath] = frameworksCSSAPI_1.frameworksCSSAPI.reducer,
    _a[arrayMethodsAPI_1.arrayMethodsAPI.reducerPath] = arrayMethodsAPI_1.arrayMethodsAPI.reducer,
    _a[destructuringAPI_1.linksDestructuringAPI.reducerPath] = destructuringAPI_1.linksDestructuringAPI.reducer,
    _a[destructuringArraysAPI_1.destructuringArraysAPI.reducerPath] = destructuringArraysAPI_1.destructuringArraysAPI.reducer,
    _a[destructuringObjectsAPI_1.destructuringObjectsAPI.reducerPath] = destructuringObjectsAPI_1.destructuringObjectsAPI.reducer,
    _a[linksDOMAPI_1.linksDOMAPI.reducerPath] = linksDOMAPI_1.linksDOMAPI.reducer,
    _a[arrayDOMAPI_1.arrayDOMAPI.reducerPath] = arrayDOMAPI_1.arrayDOMAPI.reducer,
    _a[linksErrorAPI_1.linksError.reducerPath] = linksErrorAPI_1.linksError.reducer,
    _a[arrayErrorAPI_1.arrayErrorAPI.reducerPath] = arrayErrorAPI_1.arrayErrorAPI.reducer,
    _a[fireBaseAPI_1.fireBaseAPI.reducerPath] = fireBaseAPI_1.fireBaseAPI.reducer,
    _a[linksGitHubAPI_1.linksGitHubAPI.reducerPath] = linksGitHubAPI_1.linksGitHubAPI.reducer,
    _a[linksHTTPAPI_1.linksHTTPAPI.reducerPath] = linksHTTPAPI_1.linksHTTPAPI.reducer,
    _a[arrayHTTPAPI_1.arrayHTTPAPI.reducerPath] = arrayHTTPAPI_1.arrayHTTPAPI.reducer,
    _a[iconsLoadersAPI_1.iconsLoadersAPI.reducerPath] = iconsLoadersAPI_1.iconsLoadersAPI.reducer,
    _a));
// Создаём функцию setupStore, с помощью её мы будем конфигурировать
// наше редакс-хранилище. Без использования toolkit мы использовали
// createReducer. Сейчас используем configureStore().
exports.setupStore = function () {
    return toolkit_1.configureStore({
        reducer: rootReducer,
        // Добавляем к дефолтному мидлвееру, методом concat(), мидлвеер из нашего postAPI.
        // Затем, методом concat(), добавляем мидлвеер из нашего todoAPI
        // Затем, методом concat(), добавляем мидлвеер из нашего commentAPI
        middleware: function (getDefaultMiddleware) {
            return getDefaultMiddleware()
                .concat(cssAPI_1.cssAPI.middleware)
                .concat(arrayCSSAPI_1.arrayCSSAPI.middleware)
                .concat(cssFishkiAPI_1.cssFishkiAPI.middleware)
                .concat(frameworksCSSAPI_1.frameworksCSSAPI.middleware)
                .concat(arrayMethodsAPI_1.arrayMethodsAPI.middleware)
                .concat(destructuringAPI_1.linksDestructuringAPI.middleware)
                .concat(destructuringArraysAPI_1.destructuringArraysAPI.middleware)
                .concat(destructuringObjectsAPI_1.destructuringObjectsAPI.middleware)
                .concat(linksDOMAPI_1.linksDOMAPI.middleware)
                .concat(arrayDOMAPI_1.arrayDOMAPI.middleware)
                .concat(linksErrorAPI_1.linksError.middleware)
                .concat(arrayErrorAPI_1.arrayErrorAPI.middleware)
                .concat(fireBaseAPI_1.fireBaseAPI.middleware)
                .concat(linksGitHubAPI_1.linksGitHubAPI.middleware)
                .concat(linksHTTPAPI_1.linksHTTPAPI.middleware)
                .concat(arrayHTTPAPI_1.arrayHTTPAPI.middleware)
                .concat(iconsLoadersAPI_1.iconsLoadersAPI.middleware);
        }
    });
};
