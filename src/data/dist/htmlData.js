"use strict";
exports.__esModule = true;
exports.arrayHTML = exports.linksHTML = void 0;
exports.linksHTML = [
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
exports.arrayHTML = [
    {
        heading: "Что делает !DOCTYPE?",
        answer: [
            "<!DOCTYPE> — это сокращение от «document type» (тип документа). Он объявляется в HTML для того, чтобы различать стандартный режим или режим совместимости (quirks mode). Его наличие говорит браузеру работать со страницей в стандартном режиме. ",
            "Просто добавляй <!DOCTYPE html> в начало страницы. ",
            " ",
        ],
        isParagraph: true
    },
    {
        heading: "Как поддерживать страницу на нескольких языках?",
        answer: [
            "Когда к серверу делается HTTP-запрос, то браузер пользователя обычно отсылает информацию о предпочитаемом языке в заголовке Accept-Language. Сервер может использовать эту информацию, чтобы вернуть версию документа на подходящем языке, если такая возможность есть. В возвращенном HTML-документе обязательно должен быть указан атрибут lang у тега <html>, к примеру <html lang='en'>. ",
            "На бэкенде HTML-разметка будет содержать плейсхолдер i18n, а контент для конкретного языка будет хранится в YML- или JSON-формате. Сервер динамически формирует HTML-страницу с контентом на конкретном языке, чаще всего при помощи бэкенд-фреймворка. ",
            " ",
        ],
        isParagraph: true
    },
    {
        heading: "На что обратить внимание при разработке мультиязычных сайтов?",
        answer: [
            "    *   Используй атрибут lang в HTML. ",
            "    *   Перенаправляй пользователей на версию сайта на их языке. ",
            "    *   Текст на картинках не переводится. Не стоит помещать текст на картинки. ",
            "    *   Ограничение длины слов и предложений. Некоторый контент может быть длиннее при написании на другом языке. Будьте внимательны к макету и проверяйте поведение блоков при переполнении. Количество символов важно в таких элементах, как заголовки, лейблы и кнопки. Но не так важно в основном тексте или в блоке комментария. ",
            "    *   Помните о восприятии цветов. В разных языках и культурах цвета имеют разное значение. Дизайн должен учитывать эти особенности. ",
            "    *   Форматируете даты и валюты. Календарные даты иногда пишутся по-разному. Например, «Май 31, 2012» в Америке или «31 мая 2012» в большинстве стран Европы. ",
            "    *   Не склеивайте переведенные строки. Не пишите что-то вроде 'Сегодняшняя дата ' + date. Эта фраза будет выглядеть коряво на языках с другим порядком слов. Вместо этого используйте параметры шаблона. ",
            "    *   Разные направления чтения. В русском мы читаем слева направо, сверху вниз. В традиционном японском языке текст читается сверху вниз, справа налево. ",
            " ",
        ],
        isParagraph: true
    },
    {
        heading: "Из каких блоков состоит HTML5? ",
        answer: [
            "    *   Семантика. Позволяет более точно описать из чего состоит контент. ",
            "    *   Связанность. Позволяет общаться с сервером новыми и инновационными способами. ",
            "    *   Офлайн и хранилище. Позволяют страницам хранить данные локально на клиентской стороне и более эффективно работать в офлайне. ",
            "    *   Мультимедиа. Ставит создание видео и аудио на первое место в вебе. ",
            "    *   2D- и 3D-графика и эффекты. Позволяет расширить возможности презентации. ",
            "    *   Производительность и интеграция. Обеспечивает большую скорость оптимизации и лучшее использование аппаратных средств. ",
            "    *   Доступ к устройствам. Позволяет взаимодействовать с различными устройствами ввода и вывода. ",
            "    *   Стилизация. Позволяет создавать более сложные темы оформления. ",
            " ",
        ],
        isParagraph: true
    },
    {
        heading: "Объясните значение тегов <head> и <body> в HTML  ",
        answer: [
            "Теги HTML <head> и <body> являются двумя наиболее часто используемыми тегами в HTML. Очень редко можно найти веб-сайт отраслевого уровня, который не использует теги <head> и <body> на своих страницах. В этой статье мы собираемся изучить значение этих двух тегов в HTML-документе. ",
            " ",
            "Значение тега HTML <head>:  ",
            "Тег head в HTML используется для хранения метаданных или информации, относящейся к документу. Он содержит некоторые из наиболее важных тегов, таких как: ",
            "    *   <title>,",
            "    *   <meta>, ",
            "    *   <link>.",
            " ",
            "Значение тега HTML <body>: ",
            "Тег HTML body является последним дочерним элементом тега <html>. Он используется для размещения основного содержимого HTML-документа. Он содержит все, начиная с заголовка, абзацев и заканчивая уникальными контейнерами div , расположенными внутри тега <body> . ",
            " ",
        ],
        isParagraph: true
    },
    {
        heading: "  ",
        answer: [" ", " ", " ", " ", " ", " "],
        isParagraph: true
    },
];
