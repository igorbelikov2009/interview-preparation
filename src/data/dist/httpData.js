"use strict";
exports.__esModule = true;
exports.arrayHTTP = exports.linksHTTP = void 0;
exports.linksHTTP = [
    {
        href: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers",
        title: "Заголовки HTTP"
    },
    {
        href: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods",
        title: "Методы запроса"
    },
    {
        href: "https://developer.mozilla.org/en-US/docs/Glossary/Safe/HTTP",
        title: "Безопасный метод HTTP"
    },
    {
        href: "https://developer.mozilla.org/en-US/docs/Glossary/Idempotent",
        title: "ИдемпотентныЙ метод HTTP"
    },
    {
        href: "https://developer.mozilla.org/en-US/docs/Glossary/cacheable",
        title: "Кэшируемый ответ HTTP"
    },
];
exports.arrayHTTP = [
    {
        heading: "Как работает WWW (всемирная паутина, веб) в двух словах.",
        answer: [
            "Браузер пользователя (клиент) отправляет на сервер запрос с адресом сайта (URL), сервер получает этот запрос и отдаёт клиенту требуемый тому контент. Иными словами, весь современный веб построен на модели клиент-серверного взаимодействия. И чтобы весь этот процесс оказался возможным, необходим универсальный язык-протокол, который будет понимать и сервер, и браузер. Такой протокол есть, а называется он HTTP.",
        ],
        isParagraph: true
    },
    {
        heading: "HTTP и клиент серверная архитектура.",
        answer: [
            "В клиент-серверной архитектуре клиентом может быть всё, что угодно, что имеет доступ в сеть и может отсылать сформированные HTTP- запросы, либо XML- запросы на сервер и получать от него ответы: браузер (сайт, например, фейсбук, инстаграмм), мобильное приложение, умная бытовая техника, имеющая доступ к сети, серверное приложение, настольное приложение (например, клиент компьютерной игры).",
            "Вся информация хранится на сервере, и читается - меняется клиентом по запросу. Клиентское приложение формирует запросы и отправляет на сервер. После чего програмное обеспечение сервера формирует ответ и отправляет его клиенту. После этого клиентское приложение может отправлять другие запросы, которые будут обработаны аналогичным образом.",
        ],
        isParagraph: true
    },
    {
        heading: "Для чего нужен HTTP.",
        answer: [
            "HTTP - протокол передачи гипертекста. Он разработан для передачи HTML- документов, для связи между браузерами и серверами, но может использоваться и для других целей. HTTP следует модели клиент-сервер, когда клиент делает запрос на сервер и ждёт от него ответа. HTTP — это протокол без сохранения состояния, что означает, что сервер не сохраняет никаких данных (состояния) между двумя запросами. Есть версии HTTP/1.1 и HTTP/2.",
        ],
        isParagraph: true
    },
    {
        heading: "Что означает s в HTTPs.",
        answer: [
            "Фактически, это тот же самый протокол HTTP, только с дополнительным уровнем шифрования. HTTPS расшифровывается как «защита протокола передачи гипертекста». Таким образом, HTTP — самостоятельный протокол, а HTTPS — расширение для его защиты. По HTTP информация передается незащищенной, а HTTPS обеспечивает криптографическую защиту. Особенно актуально это для ресурсов с ответственной авторизацией. Это могут быть социальные сети или сайты платежных систем.",
            "Таким образом, HTTP применяется для передачи данных, а HTTPS позволяет осуществлять защищенную передачу данных с помощью шифрования и выполнять авторизацию на ресурсах с высоким уровнем безопасности.",
        ],
        isParagraph: true
    },
    {
        heading: "HTTP - сообщения.",
        answer: [
            "HTTP - сообщения подразделяются на 2 типа: HTTP - запросы, которые отправляет клиент, например браузер на сервер. HTTP - ответы, сообщения, которые отправляет сервер.",
            "У каждого HTTP - сообщения есть свои заголовки, строка состояния и, по возможности, тело.",
        ],
        isParagraph: true
    },
    {
        heading: "HTTP - заголовки.",
        answer: [
            "HTTP - заголовки позволяют клиенту и серверу передавать дополнительную информацию с HTTP-запросом или ответом. Заголовки можно сгруппировать в соответствии с их контекстом: ",
            " - заголовки запроса содержат дополнительную информацию о ресурсе, который необходимо получить, или о клиенте, запрашивающем ресурс.",
            " - заголовки ответов содержат дополнительную информацию об ответе, например, о его местонахождении или о сервере, который его предоставил.",
            " - заголовки представления содержат информацию о теле ресурса, например о его MIME-типе или применяемом кодировании/сжатии.",
            " - заголовки полезной нагрузки содержат независимую от представления информацию о полезных данных, включая длину содержимого и кодировку, используемую для транспортировки.",
        ],
        isParagraph: true
    },
    {
        heading: "Запросы - первый тип HTTP сообщений.",
        answer: [
            "Запросы содержат следующее: ",
            " - HTTP-метод. Обычно GET, POST. Или OPTIONS и HEAD, определяющее операцию, которую клиент хочет выполнить. Обычно, клиент хочет получить ресурс (используя GET) или передать значения HTML-формы (используя POST), хотя другие операция могут быть необходимы в других случаях.",
            " - Путь к ресурсу: URL (http://)",
            " - Версию HTTP-протокола. Заголовки, предоставляющие дополнительную информацию для сервера.",
            " - Тело, для некоторых методов, таких как POST, которые отправляют ресурс.",
            " - Строка состояния: [метод][URI][HTTP/версия], пример: GET/hello.html HTTP/1.1 Заголовки:",
        ],
        isParagraph: true
    },
    {
        heading: "Методы HTTP-запроса (Request Methods).",
        answer: [
            "HTTP определяет набор методов запроса, чтобы указать желаемое действие, которое должно быть выполнено для данного ресурса. Метод запроса может быть безопасным, идемпотентным или кэшируемым.",
        ],
        isParagraph: true
    },
    {
        heading: "Чем отличаются HTTP-методы GET и POST.",
        answer: [
            "HTTP-методы GET и POST — самые распространённые способы отправить или получить данные с сервера. Но в разных случаях оба метода могут быть небезопасными или неудобными в использовании. В этой заметке рассмотрим, какой метод когда использовать.",
            "GET — метод для чтения данных с сайта. Например, для доступа к указанной странице. Он говорит серверу, что клиент хочет прочитать указанный документ. На практике этот метод используется чаще всего, например, в интернет-магазинах на странице каталога. Фильтры, которые выбирает пользователь, передаются через метод GET.",
            "POST — метод для отправки данных на сайт (сервер). Чаще всего с помощью метода POST передаются формы.",
            "GET для безопасных действий, POST для опасных",
            "Говоря совсем просто, GET-запросы лучше не использовать с приватной информацией. Вот почему: они кэшируются. Это значит, что логин и пароль, переданные через GET - запрос, могут остаться в интернете навсегда, например, в веб-архиве или кэше Гугла. Остаются в истории браузера. Чтобы узнать, какие данные отправлялись, достаточно нажать Ctrl+H.",
            "Сохраняются в закладках и пересылаются. Можно не обратить внимания и опубликовать в соцсетях или отправить ссылку с приватной информацией в GET-запросе. Сохраняются в логах сервера. Например, нельзя отправлять данные банковских карт через GET-запрос, так как это создаёт риски для пользователей. Таким образом, любые важные данные — логины, пароли, данные карты, персональные данные — лучше передавать с помощью метода POST. Также метод POST поддерживает тип кодирования данных multipart/form-data, что позволяет передавать файлы.",
            "Ещё раз коротко",
            "GET: фильтры в интернет-магазинах, передача параметров через ссылку, другие безопасные запросы.",
            "POST: любые формы с паролями или банковскими картами, формы заявок с персональными данными, отправка файлов.",
        ],
        isParagraph: true
    },
    {
        heading: "Чем отличаются PUT- и POST-запросы?",
        answer: [
            "PUT - запросы приводят к замене целевого ресурса на данные, передаваемые в запросе. Его можно использовать для обновления содержимого существующего ресурса или для создания нового ресурса.",
            "POST - запросы приводят к специфической для ресурса обработке данных, передаваемых в запросе. Их можно использовать для выполнения различных действий. В том числе — для создания новых ресурсов, для выгрузки файлов на сервер, для отправки форм.",
            "Ещё одно отличие между PUT и POST запросами заключается в том, что PUT-запросы являются идемпотентными, а POST-запросы — нет. То есть — если запрос, в котором передаются одни и те же данные, и который выполняется по одному и тому же URL, будет выполнен несколько раз, это равносильно однократному выполнению этого запроса. Многократное выполнение POST-запроса не эквивалентно его однократному выполнению. То есть — несколько таких запросов, например, могут привести к созданию нескольких объектов на сервере.",
        ],
        isParagraph: true
    },
    {
        heading: "Ответы - второй тип HTTP сообщений.",
        answer: [
            "Ответы содержат следующие элементы:",
            "- Версию HTTP-протокола.",
            "- HTTP код состояния, сообщающий об успешности запроса или причине неудачи.",
            "- Сообщение состояния — краткое описание кода состояния.",
            "- HTTP заголовки, подобно заголовкам в запросах.",
            "- Опционально: тело, содержащее пересылаемый ресурс.",
            "- Строка состояния: [HTTP/версия][статус код], пример: HTTP/1.1 200 OK ",
            "- Заголовки. ",
        ],
        isParagraph: true
    },
    {
        heading: "HTTP, коды ответов.",
        answer: [
            "1хх. Информационный",
            "--- 100 Continue (продолжай)",
            "2хх. Успех",
            "--- 200 Ok (Успех)",
            "--- 201 Created (Создано)",
            "--- 204 No content (Нет содержимого)",
            "3хх. Перенаправление",
            "--- 300 Moved permanently (перемещено навсегда)",
            "--- 301 Moved temporarily (перемещено временно)",
            "4хх. Ошибка клиента",
            "--- 400 Bad request (некорректный запрос)",
            "--- 401 Unauthorized (не авторизован)",
            "--- 404 Not found (не найден)",
            "5хх. Ошибка сервера",
            "--- 500 Internal server error (Внутренняя ошибка сервера)",
            "--- 502 Bad gateway (Ошибка проксирования)",
        ],
        isParagraph: true
    },
    {
        heading: "Безопасный метод HTTP.",
        answer: [
            "Метод HTTP безопасен , если он не изменяет состояние сервера. Другими словами, метод безопасен, если он приводит к операции только для чтения. Несколько распространенных HTTP-методов безопасны: GET, HEAD, или OPTIONS. Все безопасные методы также идемпотентны, но не все идемпотентные методы безопасны. Например, PUT и DELETE оба являются идемпотентными, но небезопасными. Все безопасные методы также идемпотентны: HEAD PUT DELETE POST.",
        ],
        isParagraph: true
    },
    {
        heading: "ИдемпотентныЙ метод HTTP.",
        answer: [
            "Метод HTTP является идемпотентным , если идентичный запрос может быть выполнен один или несколько раз подряд с одинаковым эффектом, оставляя сервер в одном и том же состоянии. Вызванный несколько раз подряд, клиент получает одинаковые результаты. Все безопасные методы также идемпотентны: HEAD PUT DELETE POST.",
        ],
        isParagraph: true
    },
    {
        heading: "Кэшируемый ответ HTTP",
        answer: [
            "Кэшируемый ответ — это HTTP-ответ, который можно кэшировать, который сохраняется для извлечения и использования позже, сохраняя новый запрос на сервер. Не все HTTP-ответы могут быть кэшированы.",
            " - Кэшируемые методы: GET, HEAD.",
            " - Некэшируемые методы: PUT, DELETE, часто POST",
        ],
        isParagraph: true
    },
    {
        heading: "URI URL URN",
        answer: [
            "URI - Uniform Resource Identifier. Унифицированный идентификатор ресурса. Включает в себя: URL и URN.",
            "URI: https://github.com/pulls/mentioned ",
            "URL - Uniform Resource Locator. Унифицированный определитель местонахождения ресурса.",
            "URL: https://github.com/",
            "URN - Uniform Resource Name. Унифицированное имя ресурса.",
            "URN: /pulls/mentioned",
        ],
        isParagraph: true
    },
    {
        heading: "Тело HTTP - сообщения.",
        answer: [
            "Тело HTTP - сообщения используется для передачи тела объекта запроса или тела объекта ответа. Тело сообщения может отсутствовать, но стартовая строка и заголовок являются обязательными элементами. Самым популярным типом тела сообщения является либо HTML, либо JSON.",
        ],
        isParagraph: true
    },
];
