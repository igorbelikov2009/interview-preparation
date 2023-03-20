import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { arrayCSSAPI } from "../services/arrayCSSAPI";
import { cssAPI } from "../services/cssAPI";
import { cssFishkiAPI } from "../services/cssFishkiAPI";

// Создаём корневой редюсер, состоящий из комбинации всех редюсеров
const rootReducer = combineReducers({
  [cssAPI.reducerPath]: cssAPI.reducer,
  [arrayCSSAPI.reducerPath]: arrayCSSAPI.reducer,
  [cssFishkiAPI.reducerPath]: cssFishkiAPI.reducer,
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
      getDefaultMiddleware().concat(cssAPI.middleware).concat(arrayCSSAPI.middleware).concat(cssFishkiAPI.middleware),
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
