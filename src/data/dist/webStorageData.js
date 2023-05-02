"use strict";
exports.__esModule = true;
exports.arrayWebStorage = exports.linksWebStorage = void 0;
exports.linksWebStorage = [
    {
        href: "https://professorweb.ru/my/html/html5/level5/5_1.php",
        title: "HTML5 Web Storage - обзор веб-хранилища. Работа с localStorage, sessionStorage"
    },
    {
        href: "https://learn.javascript.ru/localstorage",
        title: "LocalStorage, sessionStorage"
    },
    {
        href: "https://learn.javascript.ru/cookie",
        title: "Куки, document.cookie"
    },
];
exports.arrayWebStorage = [
    {
        heading: "Интернет это ",
        answer: [
            "Интернет — информационно-коммуникационная сеть и всемирная система объединённых компьютерных сетей для хранения и передачи информации. ",
            "Интернет — это глобальная сеть взаимосвязанных компьютеров и устройств, которые общаются друг с другом с помощью стандартизированных протоколов. ",
            "Интернет позволяет людям обмениваться информацией, общаться друг с другом, вести бизнес и получать доступ к широкому спектру онлайн-услуг. ",
        ],
        isParagraphBefore: true
    },
    {
        heading: "HTML5 Web Storage - обзор веб-хранилища. ",
        answer: [
            "В интернете информацию можно сохранять в двух местах: на веб-сервере (удалённый компьютер) и на веб-клиенте (т.е. компьютере посетителя страницы). Одни типы данных лучше хранить на веб-сервере, а другие - на веб-клиенте. ",
            "Основной объём данных хранится на веб-сервере. На веб-клиенте хранится лишь небольшой объём данных, необходимых серверу для отслеживания информации о вас (или, вернее, о вашем компьютере), чтобы веб-сервер знал, какая из корзин ваша. ",
            "На веб-клиенте легче хранить второстепенную информацию. Например, пользовательские настройки (параметры, которые определяют способ отображения веб-страницы) и состояние приложения (снимок текущего состояния веб-приложения), чтобы посетитель мог продолжить его выполнение с того же самого места позже. ",
            " ",
            "До HTML5 использовали файлы cookies. Файлы cookies подходят идеально для хранения небольших объемов данных, но модель JavaScript для работы с ними несколько неуклюжа. Система файлов cookies также вынуждает разработчика возиться со сроками действия и бесполезно пересылать данные туда и обратно по интернету с каждым запросом страницы. ",
            " ",
            "В HTML5 вводится альтернатива файлам cookies - веб-хранилище. Веб-хранилище позволяет веб-странице сохранять данные на компьютере посетителя. Эта информация может быть кратковременной, которая удаляется после выключения браузера, или долговременной, которая остается доступной при последующих посещениях веб-страницы. ",
            "Информация сохраняемая в веб-хранилище хранится не на сервере, а на компьютере посетителя веб-страницы.",
            "Существуют два типа веб-хранилищ, которые так или иначе связаны с двумя объектами:",
            "1. Локальное хранилище.",
            " - Использует объект localStorage для хранения данных для всего веб-сайта на постоянной основе. Это означает, что если веб-страница сохранит данные в локальном хранилище, эти данные будут доступны для пользователя, когда он возвратится на эту веб-страницу на следующий день, на следующей неделе или в следующем году. ",
            " ",
            "2. Хранилище данных сеансов.",
            " - Использует объект sessionStorage для временного хранения данных для одного окна или вкладки браузера. Эти данные доступны лишь до тех пор, пока пользователь не закроет окно или вкладку, после чего сеанс заканчивается и данные удаляются. Но данные сеанса сохраняются, если пользователь переходит на другой веб-сайт, а потом возвращается обратно при условии, что это происходит в том же окне браузера. ",
            " ",
            "С точки зрения кода веб-страницы, как локальное хранилище, так и хранилище данных сеансов работают абсолютно одинаково. Разница состоит лишь в длительности хранения данных. ",
            "Использование локального хранилища предоставляет наилучшую возможность для сохранения требуемой информации для последующих посещений вебстраницы пользователем. А хранилище сеансов служит для хранения данных, которые нужно передавать от одной страницы другой. (В хранилище сеансов можно также хранить временные данные, используемые только на одной странице, но для этой цели прекрасно работают обычные переменные JavaScript.) ",
            " ",
            "Как локальное хранилище, так и хранилище сеансов связано с доменом веб-сайта. Таким образом, если сохранить в локальном хранилище данные для страницы www.professorweb.ru/index.html, эти данные будут доступны для страницы www.professorweb.ru/contact.html, т.к. обе эти страницы имеют один и тот же домен. Но эти данные не будут доступны для страниц других доменов. ",
            "Хотя спецификация HTML5 не устанавливает никаких жестких правил в отношении максимального объема хранилища, большинство браузеров ограничивают его 5 Мбайт. В этот объем можно упаковать много данных, но его будет недостаточно, если вы хотите использовать локальное хранилище для оптимизации производительности и кэшировать в нем изображения или видео большого объема (и, по правде говоря, локальное хранилище не предназначено для таких целей). ",
            "Для хранения большого объема данных все еще развивающийся стандарт базы данных IndexedDB допускает локальное хранение намного большего объема — обычно 50 Мбайт для начала и больше, по согласию пользователя. ",
            " ",
            "Правильным местом для хранения конфиденциальных и важных данных будет веб-сервер. Например, если вы положите какие-либо товары в свою корзину в онлайновом магазине, данные о вашей потенциальной покупке сохраняются на веб-сервере. На вашем компьютере сохраняется лишь несколько байтов данных для отслеживания, содержащих информацию о вас (или, вернее, о вашем компьютере), чтобы веб-сервер знал, какая из корзин ваша. Даже с новыми возможностями HTML5 изменять эту систему нет надобности — она надежная, безопасная и эффективная. ",
            "Но хранение данных на сервере не всегда является лучшим подходом, т.к. иногда легче хранить второстепенную информацию на компьютере пользователя. Например, имеет смысл хранить локально пользовательские настройки (скажем, параметры, которые определяют способ отображения веб-страницы) и состояние приложения (снимок текущего состояния веб-приложения), чтобы посетитель мог продолжить его выполнение с того же самого места позже. ",
        ],
        isParagraphBefore: true
    },
    {
        heading: "Что такое веб-сервер?",
        answer: [
            "Веб-сервер - это программа, которая обрабатывает сетевые запросы пользователей и обеспечивает их файлами для создания веб-страницы. ",
            "Этот обмен происходит с использованием протокола передачи гипертекста (HTTP).",
            "По сути, веб-серверы - это компьютеры, используемые для хранения HTTP-файлов, которые создают веб-сайт, и когда клиент запрашивает определенный веб-сайт, он доставляет запрошенный веб-сайт клиенту. ",
        ],
        isParagraphBefore: true
    },
    {
        heading: "Что такое веб-клиент, браузер?",
        answer: [
            "Это компьютер посетителя страницы или другой пользовательский интерфейс: мобильник, умная техника...",
            "Web-клиент (англ. Web client) как программа — браузер. ",
            "Браузер — это программа для просмотра веб-страниц. Она преобразует получаемый из сети код в понятные для человеческого восприятия элементы и позволяет управлять ими. Название происходит от английского слова browse — просматривать. Браузеры умеют открывать сайты — это их основная функция. Кроме того, они: позволяют скачивать на устройство пользователя файлы любого типа. ",
            " ",
        ],
        isParagraphBefore: true
    },
    {
        heading: "Чем отличаются куки-файлы, сессионное хранилище и локальное хранилище?",
        answer: [
            "Локальное хранилище, это место, которое браузеры могут использовать для локального хранения данных. В нём может храниться до 10 Мб данных. Сессионное хранилище — это разновидность локального хранилища, которое привязано к сессии и удаляется после её завершения. В сессионном хранилище может храниться до 5 Мб данных.",
            "Куки-файлы - это небольшие текстовые файлы, сгенерированные сайтами, весом до 4 Кб. Куки отправляются сервером на браузер пользователя, хранятся на жестком диске в папке Пользователи (Users). С каждым новым запросом к данному серверу, отсылаются обратно. ",
        ],
        isParagraph: true
    },
    {
        heading: "Что такое файл cookie?",
        answer: [
            "1. Сookie (куки) — это небольшие текстовые файлы, сгенерированные сайтами. Куки отправляются сервером на браузер пользователя в заголовке Set-Cookie HTTP- ответа. Браузер сохраняет эти файлы на жестком диске в папке Пользователи (Users). При каждом повторном посещении сайта, куки отсылаются веб-клиентом обратно на сервер в составе HTTP-запроса, а именно в заголовке Cookie.",
            "Cookies хранятся на устройстве пользователя, в них записана информация о посещении сайта. Cookie нужны, чтобы идентифицировать пользователя, использовать его учетные данные для входа в систему при следующем посещении страницы. Когда вы вернётесь на сайт, он узнает вас и автоматически подстроится. ",
            "Cookies — технология, которая позволяет интернет-ресурсам «узнавать» браузер пользователя. Когда вы вводите данные при авторизации, благодаря cookies сайт сам подтягивает логин и пароль. Это работает не только с личным кабинетом. С помощью cookies сайт может запомнить любую информацию о сеансе и использовать её при следующем визите пользователя. ",
            "  ",
            "2. Важная особенность у файлов cookie: файлы cookie имеют время жизни, которое мы сами можем устанавливать.",
            " ",
            "3. Файлы куки можно создавать через JavaScript при помощи свойства Document.cookie. Если флаг HttpOnly не установлен, то и доступ к существующим cookies можно получить через JavaScript. Файлы cookie представляют собой текстовые файлы с парами ключ-значение. ",
            "            document.cookie = 'yummy_cookie=choco';",
            "            document.cookie = 'tasty_cookie=strawberry';",
            " ",
            "4. Cookie используются, главным образом, для: ",
            "      - авторизации, аутентификации - хранения логинов пользователя; ",
            "      - запоминания информации о товаров в корзине; ",
            "      - хранения индивидуальных настроек для аудио и видеофайлов; ",
            "      - хранения информации о выбранном языке и шрифте; ",
            "      - хранения информации о выбранном регионе; ",
            "      - для сбора статистики и отслеживания активности пользователя; ",
            "      - мониторинга поведения пользователя; ",
            "      - для отслеживания пользовательских предпочтений, чтобы показать ему наиболее релевантную рекламу*. ",
            "* Релевантная реклама – это реклама, которая соответствует не только запросам, но также ожиданиям и потребностям пользователей. ",
            " ",
            "5. Есть четыре основных вида cookie-файлов:",
            "      5.1. Строго необходимые. Без них сайт будет некорректно отображаться в браузере. К ним относят файлы, которые используют для запоминания информации из форм ввода данных и товаров в корзине. Сюда же относятся файлы хранения технических данных для аудио и видеофайлов и информация о выбранном языке и шрифте.",
            "      5.2. Предпочтения — файлы, позволяющие сайту запоминать информацию, которая изменяет его вид: например, язык или регион пользователя.",
            "      5.3. Статистические — эти файлы помогают владельцу интернет-ресурсов понять, каким образом посетители взаимодействуют с веб-сайтом. Они позволяют собрать агрегированную обезличенную информацию по всем пользователям.",
            "      5.4. Маркетинговые — файлы, которые используют для отслеживания посетителей на веб-сайтах. С их помощью рекламодатель может узнать о предпочтениях пользователя и показать ему наиболее релевантную рекламу.",
            " ",
            "Почти любой браузер позволяет отключить передачу cookies. Однако это сделает невозможной работу с некоторыми сайтами. Например, с интернет-магазинами, где есть разграничение доступа.",
            "",
            "В России нет специальных требований к согласию на обработку cookie-файлов. Достаточно опубликовать на сайте дисклеймер, который информирует посетителей сайта об использовании cookies. Предупреждение следует прописать в футере сайта или оформить отдельным баннером.",
        ],
        isParagraph: true
    },
    {
        heading: "Что такое веб-хранилище?",
        answer: [
            "Веб-хранилище означает хранение данных не в интернете, а хранение данных из интернета на компьютере посетителя веб-страницы. ",
            "Веб-хранилище — это API , который позволяет браузерам локально хранить пары ключ-значение в браузере пользователя.",
            "Веб-хранилище предоставляет два способа хранения данных:",
            "-- ",
            "1. Локальное хранилище.",
            " - Использует объект localStorage для хранения данных для всего веб-сайта на постоянной основе. Это означает, что если веб-страница сохранит данные в локальном хранилище, эти данные будут доступны для пользователя, когда он возвратится на эту веб-страницу на следующий день, на следующей неделе или в следующем году. ",
            "--",
            "Вот пример того, как вы можете сохранить, получить доступ и удалить элемент из localStorage:",
            "localStorage.setItem( 'favoriteColor', 'gray' );",
            "let data = localStorage.getItem( 'favoriteColor' ); console.log( data );",
            "localStorage.removeItem( 'favoriteColor' );",
            "localStorage.clear()",
            "-- ",
            "2. Хранилище данных сеансов.",
            " - Использует объект sessionStorage для временного хранения данных для одного окна или вкладки браузера. Эти данные доступны лишь до тех пор, пока пользователь не закроет окно или вкладку, после чего сеанс заканчивается и данные удаляются. Но данные сеанса сохраняются, если пользователь переходит на другой веб-сайт, а потом возвращается обратно при условии, что это происходит в том же окне браузера. ",
            "--",
            "И вот как вы можете сделать то же самое, используя sessionStorage",
            "sessionStorage.setItem( 'favoriteColor', 'gray' );",
            "let data = sessionStorage.getItem( 'favoriteColor' ); console.log( data );",
            "sessionStorage.removeItem( 'favoriteColor' );",
            "sessionStorage.clear();",
        ],
        isParagraph: true
    },
    {
        heading: "Зачем вам веб-хранилище?",
        answer: [
            "Веб-хранилище позволяет хранить большие объемы данных локально и это не влияет на производительность сайта.",
            "При использовании веб-хранилища информация не хранится на сервере. Информация хранится на веб-клиенте (т.е. компьютере посетителя страницы или на его мобильном устройстве). Это делает его более предпочтительным подходом по сравнению с файлами cookie.",
        ],
        isParagraph: true
    },
    {
        heading: "Что такое CORS (Cross-Origin Resource Sharing, англ. «совместное использование ресурсов разных источников») ?",
        answer: [
            "CORS — это браузерный механизм, позволяющий предоставлять веб-страницам доступ к объектам сторонних интернет-ресурсов.",
            "Сторонним считается любой интернет-ресурс, который отличается от запрашиваемого протоколом, доменом или портом. ",
        ],
        isParagraph: true
    },
    {
        heading: "В чём отличия технологии Long Polling, протокола WebSocket и событий, генерируемых сервером?",
        answer: [
            "Технология Long Polling применяется при взаимодействии клиентских и серверных систем. Клиент отправляет серверу запрос, ответ на который поступает тогда, когда в распоряжении сервера оказываются данные, запрошенные клиентом. После этого клиент выполняет новый запрос.",
            "Протокол WebSocket позволяет устанавливать долгоживущие двусторонние соединения между клиентом и сервером.",
            "В основе событий, генерируемых сервером, лежит использование долгоживущего HTTP-соединения, которое используется для отправки клиенту новых данных по инициативе сервера.",
        ],
        isParagraph: true
    },
    {
        heading: "Что такое сторонние интернет-ресурсы?",
        answer: [
            "Сторонним считается любой интернет-ресурс, который отличается от запрашиваемого протоколом, доменом или портом.",
        ],
        isParagraphBefore: true
    },
    {
        heading: " ",
        answer: [" ", " ", " ", " ", " "],
        isParagraphBefore: true
    },
];
