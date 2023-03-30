import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { linksError } from "../services/linksErrorAPI";
import { arrayCSSAPI } from "../services/arrayCSSAPI";
import { arrayDOMAPI } from "../services/arrayDOMAPI";
import { arrayErrorAPI } from "../services/arrayErrorAPI";
import { arrayHTTPAPI } from "../services/arrayHTTPAPI";
import { arrayMethodsAPI } from "../services/arrayMethodsAPI";
import { cssAPI } from "../services/cssAPI";
import { cssFishkiAPI } from "../services/cssFishkiAPI";
import { linksDestructuringAPI } from "../services/destructuringAPI";
import { destructuringArraysAPI } from "../services/destructuringArraysAPI";
import { destructuringObjectsAPI } from "../services/destructuringObjectsAPI";
import { fireBaseAPI } from "../services/fireBaseAPI";
import { frameworksCSSAPI } from "../services/frameworksCSSAPI";
import { iconsLoadersAPI } from "../services/iconsLoadersAPI";
import { linksDOMAPI } from "../services/linksDOMAPI";
import { linksGitHubAPI } from "../services/linksGitHubAPI";
import { linksHTTPAPI } from "../services/linksHTTPAPI";

// Создаём корневой редюсер, состоящий из комбинации всех редюсеров
const rootReducer = combineReducers({
  [cssAPI.reducerPath]: cssAPI.reducer,
  [arrayCSSAPI.reducerPath]: arrayCSSAPI.reducer,
  [cssFishkiAPI.reducerPath]: cssFishkiAPI.reducer,
  [frameworksCSSAPI.reducerPath]: frameworksCSSAPI.reducer,
  [arrayMethodsAPI.reducerPath]: arrayMethodsAPI.reducer,
  [linksDestructuringAPI.reducerPath]: linksDestructuringAPI.reducer,
  [destructuringArraysAPI.reducerPath]: destructuringArraysAPI.reducer,
  [destructuringObjectsAPI.reducerPath]: destructuringObjectsAPI.reducer,
  [linksDOMAPI.reducerPath]: linksDOMAPI.reducer,
  [arrayDOMAPI.reducerPath]: arrayDOMAPI.reducer,
  [linksError.reducerPath]: linksError.reducer,
  [arrayErrorAPI.reducerPath]: arrayErrorAPI.reducer,
  [fireBaseAPI.reducerPath]: fireBaseAPI.reducer,
  [linksGitHubAPI.reducerPath]: linksGitHubAPI.reducer,
  [linksHTTPAPI.reducerPath]: linksHTTPAPI.reducer,
  [arrayHTTPAPI.reducerPath]: arrayHTTPAPI.reducer,
  [iconsLoadersAPI.reducerPath]: iconsLoadersAPI.reducer,
});

// Создаём функцию setupStore, с помощью её мы будем конфигурировать
// наше редакс-хранилище. Без использования toolkit мы использовали
// createReducer. Сейчас используем configureStore().
export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    // Добавляем к дефолтному мидлвееру, методом concat(), мидлвеер из нашего postAPI.
    // Затем, методом concat(), добавляем мидлвеер из нашего todoAPI
    // Затем, методом concat(), добавляем мидлвеер из нашего commentAPI
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(cssAPI.middleware)
        .concat(arrayCSSAPI.middleware)
        .concat(cssFishkiAPI.middleware)
        .concat(frameworksCSSAPI.middleware)
        .concat(arrayMethodsAPI.middleware)
        .concat(linksDestructuringAPI.middleware)
        .concat(destructuringArraysAPI.middleware)
        .concat(destructuringObjectsAPI.middleware)
        .concat(linksDOMAPI.middleware)
        .concat(arrayDOMAPI.middleware)
        .concat(linksError.middleware)
        .concat(arrayErrorAPI.middleware)
        .concat(fireBaseAPI.middleware)
        .concat(linksGitHubAPI.middleware)
        .concat(linksHTTPAPI.middleware)
        .concat(arrayHTTPAPI.middleware)
        .concat(iconsLoadersAPI.middleware),
  });
};

// Три базовых типа, которые нам в дальнейшей работе понадобятся
// Нам необходимо получить тип нашего состояния
export type RootState = ReturnType<typeof rootReducer>;
// Так же получим тип самого стора, с помощью ретюрнтайп
export type AppStore = ReturnType<typeof setupStore>;
// Так же получим тип dispatch нашего хранилища. Определив тип диспатча,
// мы не сможем задиспачить те экшены, которые мы не определили
export type AppDispacth = AppStore["dispatch"];