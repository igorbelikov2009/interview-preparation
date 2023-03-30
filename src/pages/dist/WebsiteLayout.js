"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Page_1 = require("../components/general/Page/Page");
var PageLink_1 = require("../components/general/PageLink/PageLink");
var WebsiteLayout = function () {
    var links = [
        {
            href: "https://htmlacademy.ru/blog/boost/frontend/semantics",
            title: "Семантическая вёрстка"
        },
        {
            href: "https://imajor.ru/glossary/terms/krossbrauzernost.18/",
            title: "Кроссбраузерность"
        },
        {
            href: "https://jazzteam.org/ru/technical-articles/overview-of-approaches-and-css-frameworks-for-adaptive-web-page-layout/",
            title: "Адаптивная верстка сайтов: обзор подходов и CSS фреймворков"
        },
        {
            href: " ",
            title: " "
        },
        {
            href: "https://tokmakov.msk.ru/blog/item/708",
            title: "Webpack. Часть 1 из 2. Точки входа и выхода, плагины webpack, модули и загрузчики"
        },
        {
            href: "https://tokmakov.msk.ru/blog/item/709",
            title: "Webpack. Часть 2 из 2. Загрузка шрифтов, sass-loader, babel-loader и т.д."
        },
        {
            href: "https://tokmakov.msk.ru/blog/item/712",
            title: "Расширение «Prettier — Code formatter» для VS Code"
        },
        {
            href: "https://tokmakov.msk.ru/blog/item/713",
            title: "Расширение «ESLint» для VS Code, часть 1 из 2"
        },
        {
            href: "https://tokmakov.msk.ru/blog/item/714",
            title: "Расширение «ESLint» для VS Code, часть 2 из 2"
        },
        {
            href: "https://tokmakov.msk.ru/blog/item/711",
            title: "Расширение «Remote — SSH» для VS Code"
        },
        {
            href: "https://tokmakov.msk.ru/github",
            title: "Узелки на память"
        },
        {
            href: "https://atuin.ru/",
            title: "СОЗДАНИЕ И ДОРАБОТКА САЙТОВ БЛОГ И ИНСТРУМЕНТЫ ДЛЯ ВЕБМАСТЕРОВ"
        },
        {
            href: "https://webformyself.com/category/javascriptajax-2/javascriptajax/",
            title: "Статьи по сайтостроению(много)"
        },
        {
            href: "https://developer.mozilla.org/ru/",
            title: "Веб-технологии для разработчиков"
        },
        {
            href: "https://www.figma.com/file/E1ctRoFLkYECcIDJgWDXK8Sv/Web-%E2%80%A2-Alpha?node-id=0%3A1",
            title: "figma.com Alpha"
        },
        {
            href: "https://www.figma.com/file/1ROI5eUMFVLsyKHxRUCwE5/NPF-%E2%80%A2-Renpensions-site?node-id=0%3A1634",
            title: "figma.com NPF"
        },
        {
            href: "https://www.figma.com/file/R82Jy7NiMWrP7VHVn8Paqp/%D0%A6%D0%B0%D1%80%D1%8C-%D0%BB%D0%B5%D0%BD%D0%B4%D0%BE%D1%81-1.1?node-id=216%3A468",
            title: "figma.com Царь-лендос"
        },
        {
            href: "https://www.figma.com/file/8JLUz1mZDIMkE8BvTumzdd/Untitled?node-id=0%3A1",
            title: "figma.com Южный банк"
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
            heading: "БЭМ-методология",
            answer: [
                "БЭМ (Блок, Элемент, Модификатор) — компонентный подход к веб-разработке. В его основе лежит принцип разделения интерфейса на независимые блоки. Он позволяет легко и быстро разрабатывать интерфейсы любой сложности и повторно использовать существующий код, избегая «Copy-Paste».",
                "Блок - функционально независимый компонент страницы, который может быть повторно использован. Блоки можно вкладывать друг в друга. Допустима любая вложенность блоков.",
                "Элемент - Составная часть блока, которая не может использоваться в отрыве от него. Элементы можно вкладывать друг в друга. Допустима любая вложенность элементов. Элемент — всегда часть блока, а не другого элемента.",
                "Структура полного имени элемента соответствует схеме: имя-блока__имя-элемента. Имя элемента отделяется от имени блока двумя подчеркиваниями (__).",
                "Модификатор - Cущность, определяющая внешний вид, состояние или поведение блока либо элемента.",
                "Какие требования мы сформулировали:",
                " - Разработчик должен понимать свой код (даже вернувшись к нему через год) и код любого программиста в команде БЭМ-проекта.",
                " - Любой блок кода может быть использован повторно: необходимо создать общую базу знаний и не писать каждый раз всё с нуля, а использовать готовые наработки.",
                " - Работая в одной команде, разработчики, менеджеры, дизайнеры и верстальщики должны называть одни и те же вещи одинаково. То есть говорить на одном языке.",
                " - Команды могут обмениваться специалистами для реализации какой-то конкретной функциональности.",
                " - Порог входа при переходе на новый проект должен быть снижен за счет одинаковой структуры организации всех БЭМ-проектов и одинаковых правил именования всех сущностей.",
                " ",
            ],
            isParagraph: true
        },
        {
            heading: "Семантическая вёрстка",
            answer: [
                "Семантическая вёрстка - создание веб-страниц при использовании HTML-тегов в соответствии с их семантикой (предназначением), предполагающее иерархию страницы. Для оформления веб-страниц, написанных в соответствии с семантикой, используются каскадные таблицы стилей (CSS). Стандарт HTML с самого начала включал в себя ряд семантических тегов, но большую популярность семантическая вёрстка получила после начала работ над HTML5.",
                "Семантическая вёрстка — это разметка, которая опирается на смысловое предназначение каждого блока и логическую структуру документа.  ",
            ],
            isParagraph: true
        },
        {
            heading: "Кроссбраузерность",
            answer: [
                "Кроссбраузерность – это способность веб-ресурса отображаться одинаково и работать во всех популярных браузерах, без перебоев в функционировании и ошибок в верстке, а также с одинаково корректной читабельностью контента. Из-за стремительного развития технологий, сайт рекомендуется делать кроссбраузерным только по отношению к новейшим версиям браузеров:",
                " - Google Chrome. ",
                " - Mozilla Firefox.",
                " - Opera.",
                " - Internet Explorer.",
                " - Netscape.",
                " - Safari.",
                " Стоит отметить, что элементы веб-ресурса не должны быть абсолютно идентичны во всех браузерах, которые существуют на сегодняшний день. Соответствующим можно считать сайт, если:",
                " - информация на странице читабельная;",
                " - сохранена структура;",
                " - нет ошибок в верстке; ",
                " - текст не «накладывается» поверх другого текста и изображений, если только это не предусмотрено автором контента.",
            ],
            isParagraph: true
        },
        {
            heading: "Фиксированная верстка",
            answer: [
                "Фиксированная верстка (Fixed Layout) — подход создания страниц сайта, которые имеют заданную ширину. Ширина компонентов на странице не изменяется. На мониторах с маленьким разрешением появляется горизонтальная полоса прокрутки. Данный тип верстки не подходит для удобного отображения информации на мобильных устройствах.",
                "Пример ниже демонстрирует строгое задание ширины для тега body:",
                "body { width: 1200px }",
            ],
            isParagraph: true
        },
        {
            heading: "Резиновая верстка",
            answer: [
                "Резиновая верстка (Elastic layout) подразумевает возможность компонентов сайта менять свои размеры в зависимости от размера окна браузера, растягиваться от и до указанных минимальных и максимальных размеров. Это достигается благодаря использованию относительных значений, max-width / min-width (максимальная / минимальная ширина), max-height / min-height (максимальная / минимальная высота).",
                "Примеры использования техник резиновой верстки:",
                " -  body { width: 90% }",
                " -  div { min-width: 320px; max-width: 1200px }",
            ],
            isParagraph: true
        },
        {
            heading: "Адаптивная верстка",
            answer: [
                "Адаптивная верстка (Adaptive Layout) позволяет подстраиваться основному контейнеру и любому другому элементу сайта под разрешение экрана, делая возможным менять размер шрифта, расположение объектов, цвет и т. д. Происходит это динамически, например, с использованием медиа-запросов (@media), позволяющих автоматически определять разрешение монитора, тип устройства и подставлять указанные значения в автоматическом режиме. В примере ниже задается ширина div равная 960px для всех устройств, ширина которых меньше 1200px и 320px для всех устройств, ширина которых меньше 480px.",
                " - @media all and (max-width: 1200px) { div { width: 960px } } ",
                " - @media all and (max-width: 480px) {  div { width: 320px } }",
            ],
            isParagraph: true
        },
        {
            heading: "Отзывчивая верстка",
            answer: [
                "Отзывчивая верстка (Responsive Layout) — это объединение резиновой и адаптивной вёрстки. При данном подходе используются как медиа-запросы, так и процентное задание ширины компонентов. Используя данный вид верстки можно с уверенностью сказать, что сайт приспособится к любому устройству.",
                "Ниже задается ширина div равная 50% от размера родительского компонента для всех устройств, ширина которых меньше 1200px и 100% для всех устройств, ширина которых меньше 480px.",
            ],
            isParagraph: true
        },
        {
            heading: "Можете ли вы объяснить разницу между отзывчивым (responsive) сайтом и сайтом, сделанным по принципу mobile-first?",
            answer: [
                "Отзывчивая и mobile-first верстки служат для того, чтобы пользователь мог пользоваться сайтом с разных устройств. Верстка подстраивается под различные размеры экрана, разрешения, контекст использования, механизмы контроля и т.д.",
                "Отзывчивая верстка начинается с верстки десктопной версии сайта. Затем она адаптируется для меньших экранов.",
                "Mobile-first начинается с верстки версии сайта для мобильных устройств.",
            ],
            isParagraph: true
        },
        {
            heading: "Основные техники реализации сайтов под любое разрешение. Относительные значения",
            answer: [
                "Использование относительных значений позволяет отобразить информацию и компоненты на странице без потери читабельности и удобства просмотра.",
                "Относительные значения для размеров и отступов",
                " Относительные значения можно задавать для width, height, margin, padding и т. д. Самый известный способ задания относительного размера — указание в процентах (%).",
                " Ниже приводится пример задания ширины равной 90% от размера родительского компонента.",
                " body { width: 90% }",
                " При этом значение высчитывается относительно родительского компонента.",
                " Также существуют значения относительно размера экрана:",
                " - vw — 1% ширины окна. При уменьшении ширины окна, уменьшается ширина, высота, шрифт элемента; ",
                " - vh — 1% высоты окна. При уменьшении высоты окна, уменьшается ширина, высота, шрифт элемента;",
                " - vmin — выбирается наименьшее из vw и vh;",
                " - vmax — выбирается наибольшее из vw и vh.",
                " - Ниже рассмотрен пример использования vw и vh. В данном случае ширина и высота тега div будут равны 50% от ширины и высоты экрана соответственно.",
                " div { width: 50vw; height: 50vh }",
            ],
            isParagraph: true
        },
        {
            heading: "Основные техники реализации сайтов под любое разрешение. Относительные значения для размера шрифта",
            answer: [
                "Существуют следующие относительные значения для шрифтов:",
                " - em — задаёт размер относительно шрифта родителя;",
                " - rem — задаёт размер относительно шрифта html.",
                "Рассмотрим пример: html { font-size: 20px } body { font-size: 1.5em }",
                "Вычислим размер шрифта для тега body. В данном примере размер шрифта для body задается относительно размера html. Таким образом, размер шрифта для body будет равен 30px (20px * 1.5 = 30px).",
                "Также относительные размеры шрифта можно задавать с помощью %, vw, vh и т. д. В следующем примере размер шрифта для body равен 80% от размера шрифта html — 16px.",
                " html {font-size: 20px } ",
                " body { font-size: 80%  } ",
            ],
            isParagraph: true
        },
        {
            heading: "Основные техники реализации сайтов под любое разрешение. Максимальные и минимальные размеры компонентов",
            answer: [
                "Для задания максимальных и минимальных значений ширины и высоты компонента используются свойства max-width / min-width и max-height / min-height соответственно.",
                "Рассмотрим пример: div { width: 60%; max-width: 500px }",
                "Допустим, что родительским компонентом данного div является body. Тогда, при изменении ширины экрана, ширина данного компонента будет составлять 60% от ширины body. Однако он будет увеличиваться только до величины, определенной в max-width, это 500px. Как только контейнер достигнет этой ширины — он перестанет увеличиваться.",
                "Использование медиа-запросов",
            ],
            isParagraph: true
        },
        {
            heading: " ",
            answer: [" ", " ", " ", " "],
            isParagraphBefore: true
        },
    ];
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(PageLink_1["default"], { links: links, title: "\u0412\u0435\u0431-\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430, \u0441\u0441\u044B\u043B\u043A\u0438" }),
        react_1["default"].createElement(Page_1["default"], { title: "\u0412\u043E\u043F\u0440\u043E\u0441\u044B \u043F\u043E \u0432\u0435\u0431-\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0435.", ArrayHeadingAnswers: ArrayHeadingAnswers })));
};
exports["default"] = WebsiteLayout;