"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Page_1 = require("../components/general/Page/Page");
var PageLink_1 = require("../components/general/PageLink/PageLink");
var JavascriptFishkiPage = function () {
    var links = [
        {
            href: "https://www.youtube.com/playlist?list=PLiZoB8JBsdzklPlprqQRwGQuyD92f-Wm8",
            title: "JavaScript фишки. Михаил Непомнящий."
        },
        {
            href: "https://www.youtube.com/watch?v=ZYqBZmU-tA0&list=PLiZoB8JBsdzklPlprqQRwGQuyD92f-Wm8&index=1",
            title: "Простые решения для сложных задач с Intersection Observer API. Михаил Непомнящий. "
        },
        {
            href: "https://www.youtube.com/watch?v=vvieEwYX02c&list=PLiZoB8JBsdzklPlprqQRwGQuyD92f-Wm8&index=2",
            title: "MatchMedia для определения типа устройства. Михаил Непомнящий. "
        },
        {
            href: "https://www.youtube.com/watch?v=1vf7CuHRkX8&list=PLiZoB8JBsdzklPlprqQRwGQuyD92f-Wm8&index=3",
            title: "Форматирование чисел в JavaScript. (Валюта и т.д.). Михаил Непомнящий."
        },
        {
            href: "https://www.youtube.com/watch?v=Wh2zd2oZOmo&list=PLiZoB8JBsdzklPlprqQRwGQuyD92f-Wm8&index=4",
            title: "Форматирование дат под локаль пользователя. Михаил Непомнящий."
        },
        {
            href: "https://www.youtube.com/watch?v=e77Z5BLC3-c&list=PLiZoB8JBsdzklPlprqQRwGQuyD92f-Wm8&index=5",
            title: "Множественная форма существительных в JS. Михаил Непомнящий. "
        },
        {
            href: "https://www.youtube.com/watch?v=ouuABmyc4PU&list=PLiZoB8JBsdzklPlprqQRwGQuyD92f-Wm8&index=7",
            title: "Работа со ссылками в JavaScript. Михаил Непомнящий. "
        },
        {
            href: "https://www.youtube.com/watch?v=CeS6i2NlYbE&list=PLiZoB8JBsdzklPlprqQRwGQuyD92f-Wm8&index=7",
            title: "Расчет временной дистанции в JavaScript. Михаил Непомнящий."
        },
        {
            href: "https://www.youtube.com/watch?v=LEGg1F9yErI&list=PLiZoB8JBsdzklPlprqQRwGQuyD92f-Wm8&index=8",
            title: "Глубокое копирование объекта в JavaScript. Михаил Непомнящий. "
        },
        {
            href: "https://www.youtube.com/watch?v=H3Z-aD1BOhY",
            title: "LocalStorage или как сохранить и использовать данные в браузере пользователя. Михаил Непомнящий."
        },
        {
            href: "https://medium.com/the-coders-guide-to-javascript/smooth-scrolling-anchor-menu-in-reactjs-175030d0bce2",
            title: "Якорное меню с плавной прокруткой в ReactJS"
        },
        {
            href: "https://tokmakov.msk.ru/blog/item/699",
            title: "Плавная прокрутка, библиотека hsnaydd/moveTo"
        },
        {
            href: "https://tokmakov.msk.ru/files/blog/664/shop.gif",
            title: "Магазин на JavaScript: его внешний вид."
        },
        {
            href: "https://tokmakov.msk.ru/blog/item/664",
            title: "Магазин на JavaScript, часть 1 из 19. Серверное приложение, база данных, ORM Sequelize."
        },
        {
            href: "https://tokmakov.msk.ru/blog/item/665",
            title: "Магазин на JavaScript, часть 2 из 19. Обрабатываем HTTP запросы, добавляем маршруты."
        },
        {
            href: "https://tokmakov.msk.ru/blog/item/666",
            title: "Магазин на JavaScript, часть 3 из 19. Добавляем классы контроллеров, обработка ошибок"
        },
        {
            href: "https://tokmakov.msk.ru/blog/item/667",
            title: "Магазин на JavaScript, часть 4 из 19. CRUD для категорий и товаров, загрузка изображений"
        },
        {
            href: "https://tokmakov.msk.ru/blog/item/668",
            title: "Магазин на JavaScript, часть 5 из 19. Создание моделей, фильтрация по категрии и бренду"
        },
        {
            href: "https://tokmakov.msk.ru/blog/item/669",
            title: "Магазин на JavaScript, часть 6 из 19. Пагинация, свойства товара, JWT (JSON Web Token)"
        },
        {
            href: "https://tokmakov.msk.ru/blog/item/670",
            title: "Магазин на JavaScript, часть 7 из 19. Регистрация и авторизация, права пользователей, тесты"
        },
        {
            href: "https://tokmakov.msk.ru/blog/item/671",
            title: "Магазин на JavaScript, часть 8 из 19. Работа со свойствами товара и корзиной покупателя"
        },
        {
            href: "https://tokmakov.msk.ru/blog/item/672",
            title: "Магазин на JavaScript, часть 9 из 19. Рейтинг товара, приложение клиента, структура проекта"
        },
        {
            href: "https://tokmakov.msk.ru/blog/item/673",
            title: "Магазин на JavaScript, часть 10 из 19. Маршруты, панель навигации, контекст приложения"
        },
        {
            href: "https://tokmakov.msk.ru/blog/item/674",
            title: "MobX — управление состоянием приложения"
        },
        {
            href: "https://tokmakov.msk.ru/blog/item/679",
            title: "Магазин на JavaScript, часть 11 из 19. Компоненты Signup и Login, компоненты Shop и Basket"
        },
        {
            href: "https://tokmakov.msk.ru/blog/item/680",
            title: "Магазин на JavaScript, часть 12 из 19. Запросы на сервер, состояние приложения, Signup и Login"
        },
        {
            href: "https://tokmakov.msk.ru/blog/item/681",
            title: "Магазин на JavaScript, часть 13 из 19. Хранилище каталога, компонент витрины, кнопка «Назад»"
        },
        {
            href: "https://tokmakov.msk.ru/blog/item/682",
            title: "Магазин на JavaScript, часть 14 из 19. Кнопка «Назад», страница товара, корзина покупателя"
        },
        {
            href: "https://tokmakov.msk.ru/blog/item/683",
            title: "Магазин на JavaScript, часть 15 из 19. Работа с заказами на сервере, оформление заказа"
        },
        {
            href: "https://tokmakov.msk.ru/blog/item/684",
            title: "Магазин на JavaScript, часть 16 из 19. Личный кабинет, список заказов и отдельный заказ"
        },
        {
            href: "https://tokmakov.msk.ru/blog/item/685",
            title: "Магазин на JavaScript, часть 17 из 19. Панель управления: список заказов, категорий и брендов"
        },
        {
            href: "https://tokmakov.msk.ru/blog/item/686",
            title: "Магазин на JavaScript, часть 18 из 19. Панель управления: редактирование категорий и брендов"
        },
        {
            href: "https://tokmakov.msk.ru/blog/item/687",
            title: "Магазин на JavaScript, часть 19 из 19. Редактирование характеристик и рефакторинг приложения"
        },
        {
            href: " ",
            title: " "
        },
        {
            href: " ",
            title: " "
        },
        {
            href: " ",
            title: " "
        },
        {
            href: " ",
            title: " "
        },
        {
            href: " ",
            title: " "
        },
        {
            href: " ",
            title: " "
        },
        {
            href: " ",
            title: " "
        },
        {
            href: " ",
            title: " "
        },
        {
            href: " ",
            title: " "
        },
        {
            href: " ",
            title: " "
        },
        {
            href: " ",
            title: " "
        },
        {
            href: " ",
            title: " "
        },
        {
            href: " ",
            title: " "
        },
        {
            href: " ",
            title: " "
        },
    ];
    var ArrayHeadingAnswers = [
        {
            heading: " ",
            answer: [" ", " ", " ", " ", " "],
            isParagraphBefore: true
        },
        {
            heading: " ",
            answer: [" ", " ", " ", " ", " "],
            isParagraphBefore: true
        },
        {
            heading: " ",
            answer: [" ", " ", " ", " ", " "],
            isParagraphBefore: true
        },
        {
            heading: " ",
            answer: [" ", " ", " ", " ", " "],
            isParagraphBefore: true
        },
        {
            heading: " ",
            answer: [" ", " ", " ", " ", " "],
            isParagraphBefore: true
        },
        {
            heading: " ",
            answer: [" ", " ", " ", " ", " "],
            isParagraphBefore: true
        },
        {
            heading: " ",
            answer: [" ", " ", " ", " ", " "],
            isParagraphBefore: true
        },
        {
            heading: " ",
            answer: [" ", " ", " ", " ", " "],
            isParagraphBefore: true
        },
        {
            heading: " ",
            answer: [" ", " ", " ", " ", " "],
            isParagraphBefore: true
        },
        {
            heading: " ",
            answer: [" ", " ", " ", " ", " "],
            isParagraphBefore: true
        },
        {
            heading: " ",
            answer: [" ", " ", " ", " ", " "],
            isParagraphBefore: true
        },
    ];
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(PageLink_1["default"], { links: links, title: "Javascript \u0444\u0438\u0448\u043A\u0438, \u0441\u0441\u044B\u043B\u043A\u0438" }),
        react_1["default"].createElement(Page_1["default"], { title: "\u0412\u043E\u043F\u0440\u043E\u0441\u044B \u043F\u043E Javascript", ArrayHeadingAnswers: ArrayHeadingAnswers })));
};
exports["default"] = JavascriptFishkiPage;
