"use strict";
var _a;
exports.__esModule = true;
exports.setupStore = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var arrayCSSAPI_1 = require("../services/arrayCSSAPI");
var cssAPI_1 = require("../services/cssAPI");
var cssFishkiAPI_1 = require("../services/cssFishkiAPI");
// Создаём корневой редюсер, состоящий из комбинации всех редюсеров
var rootReducer = toolkit_1.combineReducers((_a = {},
    _a[cssAPI_1.cssAPI.reducerPath] = cssAPI_1.cssAPI.reducer,
    _a[arrayCSSAPI_1.arrayCSSAPI.reducerPath] = arrayCSSAPI_1.arrayCSSAPI.reducer,
    _a[cssFishkiAPI_1.cssFishkiAPI.reducerPath] = cssFishkiAPI_1.cssFishkiAPI.reducer,
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
            return getDefaultMiddleware().concat(cssAPI_1.cssAPI.middleware).concat(arrayCSSAPI_1.arrayCSSAPI.middleware).concat(cssFishkiAPI_1.cssFishkiAPI.middleware);
        }
    });
};
