import { ILinkInfo, IObjectHeadingAnswers } from "../models/types";

export const linksWebStorage: ILinkInfo[] = [
  {
    href: "https://professorweb.ru/my/html/html5/level5/5_1.php",
    title: "HTML5 Web Storage - обзор веб-хранилища. Работа с localStorage, sessionStorage",
  },
  {
    href: "https://learn.javascript.ru/localstorage",
    title: "LocalStorage, sessionStorage",
  },
  {
    href: "https://learn.javascript.ru/cookie",
    title: "Куки, document.cookie",
  },
  {
    href: "https://translated.turbopages.org/proxy_u/en-ru.ru.408757d6-648d5bf6-2637689d-74722d776562/https/stackoverflow.com/questions/48712923/where-to-store-a-jwt-token-properly-and-safely-in-a-web-based-application",
    title: "Где правильно и безопасно хранить токен JWT в веб-приложении?",
  },
  {
    href: "https://snipp.ru/jquery/cookie-js",
    title: "Работа с cookie в JavaScript",
  },
  {
    href: "https://snipp.ru/jquery/localstorage-sessionstorage",
    title: "Работа с Local Storage и Session Storage в JavaScript",
  },
];

export const arrayWebStorage: IObjectHeadingAnswers[] = [
  {
    heading: "HTML5 Web Storage - обзор веб-хранилища: файлы cookies, localStorage и sessionStorage. ",
    answer: [
      "В интернете информацию можно сохранять в двух местах: на веб-сервере (удалённый компьютер) и на веб-клиенте (т.е. компьютере посетителя страницы). Одни типы данных лучше хранить на веб-сервере, а другие - на веб-клиенте. ",
      "Основной объём данных хранится на веб-сервере. На веб-клиенте хранится лишь небольшой объём данных, необходимых серверу для отслеживания информации о вас (или, вернее, о вашем компьютере), чтобы веб-сервер знал, какая из корзин ваша. ",
      " ",
      "До HTML5 использовали файлы cookies. Файлы cookies подходят идеально для хранения небольших объемов данных, но модель JavaScript для работы с ними несколько неуклюжа. Система файлов cookies также вынуждает разработчика возиться со сроками действия и бесполезно пересылать данные туда и обратно по интернету с каждым запросом страницы. ",
      " ",
      "В HTML5 вводится альтернатива файлам cookies - веб-хранилище. Веб-хранилище позволяет веб-странице сохранять данные на компьютере посетителя. Эта информация может быть кратковременной, которая удаляется после выключения браузера, или долговременной, которая остается доступной при последующих посещениях веб-страницы. ",
      "Информация сохраняемая в веб-хранилище хранится не на сервере, а на компьютере посетителя веб-страницы.",
      "Существуют два типа веб-хранилищ, которые так или иначе связаны с двумя объектами:",
      "1. Локальное хранилище.",
      "   Использует объект localStorage для хранения данных для всего веб-сайта на постоянной основе. Это означает, что если веб-страница сохранит данные в локальном хранилище, эти данные будут доступны для пользователя, когда он возвратится на эту веб-страницу на следующий день, на следующей неделе или в следующем году - данные сохраняются до явного удаления. ",
      " ",
      "2. Хранилище данных сеансов.",
      "   Использует объект sessionStorage для временного хранения данных для одного окна или вкладки браузера. Эти данные доступны лишь до тех пор, пока пользователь не закроет окно или вкладку, после чего сеанс заканчивается и данные удаляются. Как только окно закрывается, хранилище удаляется. Но данные сеанса сохраняются, если пользователь переходит на другой веб-сайт, а потом возвращается обратно при условии, что это происходит в том же окне браузера. ",
      " ",
      "3.  С точки зрения кода веб-страницы, как локальное хранилище, так и хранилище данных сеансов работают абсолютно одинаково. Разница состоит лишь в длительности хранения данных. ",
      " ",
      "      localStorage.setItem('favoriteColor', 'gray'); ",
      "      let data = localStorage.getItem('favoriteColor'); ",
      "      console.log(data); // gray ",
      "      localStorage.removeItem('favoriteColor'); ",
      "      localStorage.clear() ",
      " ",
      "Использование локального хранилища предоставляет наилучшую возможность для сохранения требуемой информации для последующих посещений вебстраницы пользователем. А хранилище сеансов служит для хранения данных, которые нужно передавать от одной страницы другой. (В хранилище сеансов можно также хранить временные данные, используемые только на одной странице, но для этой цели прекрасно работают обычные переменные JavaScript.) ",
    ],
    isParagraphBefore: true,
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
      "      - хранения JWT (токенов); ",
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
      "6. Недостатки файлов cookie: ",
      "    - Максимальный размер файла cookie составляет всего 4 кб, поэтому это может быть проблематично, если к токену прикреплено много утверждений.",
      "    - Файлы cookie могут быть уязвимы при атаках с использованием межсайтового подделывания запросов (CSRF или XSRF). Этот тип атаки возникает, когда вредоносный веб-сайт заставляет веб-браузер пользователя выполнять нежелательные действия на доверенном сайте, где пользователь в данный момент аутентифицирован. Это использование того, как браузер обрабатывает файлы cookie. Использование CSRF-защиты web app framework делает файлы cookie безопасным вариантом хранения JWT. CSRF также можно частично предотвратить, проверив HTTP Referer и Origin заголовок.",
      "    - Может быть сложно реализовать, если приложению требуется междоменный доступ. Файлы cookie имеют дополнительные свойства (домен / путь), которые могут быть изменены, чтобы вы могли указать, куда разрешено отправлять файлы cookie.",
      " ",
      "7. Почти любой браузер позволяет отключить передачу cookies. Однако это сделает невозможной работу с некоторыми сайтами. Например, с интернет-магазинами, где есть разграничение доступа.",
      "В России нет специальных требований к согласию на обработку cookie-файлов. Достаточно опубликовать на сайте дисклеймер, который информирует посетителей сайта об использовании cookies. Предупреждение следует прописать в футере сайта или оформить отдельным баннером.",
    ],
    isParagraph: true,
  },
  {
    heading: "Управление временем жизни файла cookie",
    answer: [
      "Важная особенность у файлов cookie: файлы cookie имеют время жизни, которое мы сами можем устанавливать. ",
      "    - Файлы cookie могут быть уничтожены после закрытия браузера (сессионные файлы cookie). ",
      "    - Реализуйте проверку на стороне сервера (обычно выполняемую за вас используемым веб-фреймворком), и вы могли бы реализовать истечение срока действия или раздвижное окно истечения срока действия. ",
      "    - Файлы cookie могут быть постоянными (не уничтожаться после закрытия браузера) по истечении срока действия. ",
      "    - Файлы cookie могут считываться как JavaScript, так и кодом на стороне сервера или только на стороне сервера, если httpOnly установлен флаг. ",
      " ",
    ],
    isParagraph: true,
  },
  {
    heading: "Работа с cookie в JavaScript",
    answer: [
      "1. Проверка включены ли cookies в браузере. ",
      "Чтобы узнать, включены ли cookies в браузере пользователя до их использования, можно проверить свойство navigator.cookieEnabled (содержит true или false):",
      "            if (navigator.cookieEnabled === false) { ",
      "                  alert('Cookies отключены!');",
      "            } else if (navigator.cookieEnabled === true) { ",
      "                  alert('Cookies включены!');",
      "            }",
      " ",
      "2. Запись cookies.",
      "Запись в document.cookie происходит особым образом, например следующий пример обновит только данные с ключом «name», но при этом не затронет все остальные. ",
      "      document.cookie = 'name=user'; ",
      " ",
      "Такая установка будет хранится до закрытия браузера. Чтобы продлить время жизни cookies есть два типа параметров: ",
    ],
    isParagraphBefore: true,
  },
  {
    heading: "Что такое токен? Что такое токен авторизации?",
    answer: [
      "Токен — средство идентификации пользователя или отдельного сеанса работы в компьютерных сетях и приложениях. Различают программные и аппаратные токены. ",
      "Программный токен обычно представляет собой зашифрованную последовательность символов, которая позволяет точно идентифицировать объект и определить уровень его привилегий. Он генерируется системой авторизации и привязывается к конкретному сеансу работы, клиенту сети или пакету данных. ",
      "Аппаратный токен — это устройство, способное генерировать уникальный пароль по определенным правилам и хранить его. ",
      "Используется в качестве еще одного метода идентификации клиента на сервере. После успешной идентификации сервер возвращает токен, уникальный для каждого конкретного клиента. В отличие от куки, данный токен хранится исключительно на стороне клиента и отправляется клиентом только по запросу сервера. ",
      " ",
      "Обычно JWT (токен) размещается в локальном хранилище браузера, и это хорошо работает в большинстве случаев использования. ",
      "Разработчик должен убедиться, что JWT всегда отправляется по протоколу HTTPS и никогда по HTTP. Это нужно для того, чтобы исключить уязвимость атак с использованием межсайтового скриптинга (XSS). ",
      " ",
      "Авторизационный токен, или OAuth-токен, ― это специальный код, разрешающий доступ к данным конкретного пользователя. Для каждого пользователя Директа, от имени которого осуществляются запросы к API, необходимо получить отдельный токен. ",
      "Токены позволяют не передавать по сети каждый раз логин и пароль для подтверждения авторизации. Пользователь вводит их один раз и получает токен, действующий ограниченное время.",
      "Если токен заполучит злоумышленник, худшее, что может случиться, это доступ к сервису на время жизни токена. Пароль похититель не получит. Если пользователь понимает, что кто-то получил доступ к сервису, он логинится заново и получает новый токен.",
    ],
    isParagraph: true,
  },
  {
    heading: "Где хранить ваши JWT (токены). Варианты управления временем жизни файла cookie",
    answer: [
      "Существует 2 распространённых способа хранения токенов на клиенте: в локальном хранилище / хранилище сеанса или в файле cookie. О том, какой способ лучше, много спорят. ... Главный недостаток локального хранилища — это его уязвимость к XSS-атакам. При выполнении XSS-атаки злоумышленник может запустить свой JavaScript-код на вашем сайте. Это означает, что атакующий может получить доступ к токену доступа, сохранённому в localStorage.  ",
      " ",
      "    1. Веб-хранилище (локальное хранилище / сессионное хранилище).",
      "Обычно JWT размещается в локальном хранилище браузера, и это хорошо работает в большинстве случаев использования. ",
      "При входе пользователя с именем пользователя и паролем тело ответа содержит access_token JWT. Затем вам нужно обработать этот ответ в коде на стороне клиента. Затем этот токен можно сохранить в localStorage или sessionStorage. ",
      "Оба localStorage и sessionStorage оба расширяются Storage. Единственное различие между ними заключается в сохранении данных: ",
      "    - localStorage - данные сохраняются до явного удаления. Внесенные изменения сохраняются и доступны для всех текущих и будущих посещений сайта. ",
      "    - sessionStorage - Внесенные изменения сохраняются и доступны для текущей страницы, а также для будущих посещений сайта в том же окне. Как только окно закрывается, хранилище удаляется.",
      " ",
      "Недостатки веб-хранилища: ",
      "    - В отличие от файлов cookie, локальное хранилище изолировано от конкретного домена, и к его данным не может быть получен доступ ни из какого другого домена, включая поддомены. ",
      "    - Веб-хранилище доступно через JavaScript в том же домене, поэтому любой JavaScript, запущенный на вашем сайте, будет иметь доступ к веб-хранилищу и из-за этого может быть уязвим для атак с использованием межсайтового скриптинга (XSS). ",
      "    - Разработчик должен убедиться, что JWT всегда отправляется по протоколу HTTPS и никогда по HTTP. ",
      " ",
      "    2. Использование файлов cookie ",
      "Для хранения JWT также можно использовать файлы cookie. Точный способ установки файла cookie зависит от используемого вами языка клиентской части. ",
      "Существуют различные варианты управления временем жизни файла cookie: ",
      "    - Файлы cookie могут быть уничтожены после закрытия браузера (сессионные файлы cookie). ",
      "    - Реализуйте проверку на стороне сервера (обычно выполняемую за вас используемым веб-фреймворком), и вы могли бы реализовать истечение срока действия или раздвижное окно истечения срока действия. ",
      "    - Файлы cookie могут быть постоянными (не уничтожаться после закрытия браузера) по истечении срока действия. ",
      "    - Файлы cookie могут считываться как JavaScript, так и кодом на стороне сервера или только на стороне сервера, если httpOnly установлен флаг. ",
      " ",
      "Недостатки файлов cookie: ",
      "    - Максимальный размер файла cookie составляет всего 4 кб, поэтому это может быть проблематично, если к токену прикреплено много утверждений.",
      "    - Файлы cookie могут быть уязвимы при атаках с использованием межсайтового подделывания запросов (CSRF или XSRF). Этот тип атаки возникает, когда вредоносный веб-сайт заставляет веб-браузер пользователя выполнять нежелательные действия на доверенном сайте, где пользователь в данный момент аутентифицирован. Это использование того, как браузер обрабатывает файлы cookie. Использование CSRF-защиты web app framework делает файлы cookie безопасным вариантом хранения JWT. CSRF также можно частично предотвратить, проверив HTTP Referer и Origin заголовок.",
      "    - Может быть сложно реализовать, если приложению требуется междоменный доступ. Файлы cookie имеют дополнительные свойства (домен / путь), которые могут быть изменены, чтобы вы могли указать, куда разрешено отправлять файлы cookie.",
      " ",
    ],
    isParagraph: true,
  },
  {
    heading: "Чем отличаются куки-файлы, сессионное хранилище и локальное хранилище?",
    answer: [
      "Локальное хранилище, это место, которое браузеры могут использовать для локального хранения данных. В нём может храниться до 10 Мб данных. Сессионное хранилище — это разновидность локального хранилища, которое привязано к сессии и удаляется после её завершения. В сессионном хранилище может храниться до 5 Мб данных.",
      "Куки-файлы - это небольшие текстовые файлы, сгенерированные сайтами, весом до 4 Кб. Куки отправляются сервером на браузер пользователя, хранятся на жестком диске в папке Пользователи (Users). С каждым новым запросом к данному серверу, отсылаются обратно. ",
      "Все вышеупомянутые технологии являются механизмами хранения типа ключ-значение на клиентской стороне. Они могут хранить данные только как строки.",
      " ",
      "Cookie ",
      " ",
      "    *   Инициатор: клиент или сервер. Сервер может использовать заголовок Set-Cookie.",
      "    *   Срок хранения: устанавливается вручную.",
      "    *   Хранение между сессиями: зависит от установки срока хранения.",
      "    *   Связь с доменом: да.",
      "    *   Отправка на сервер с каждым HTTP-запросом: автоматически, с помощью заголовка Cookie.",
      "    *   Емкость, на один домен: 4 КБ",
      "    *   Доступность: в любом окне.",
      " ",
      "Local Storage ",
      " ",
      "    *   Инициатор: клиент.",
      "    *   Срок хранения: всегда.",
      "    *   Хранение между сессиями: да.",
      "    *   Связь с доменом: нет.",
      "    *   Отправка на сервер с каждым HTTP-запросом: нет.",
      "    *   Емкость, на один домен: 5 МБ.",
      "    *   Доступность: в любом окне.",
      " ",
      "Session Storage ",
      " ",
      "    *   Инициатор: клиент.",
      "    *   Срок хранения: до закрытия вкладки.",
      "    *   Хранение между сессиями: нет.",
      "    *   Связь с доменом: нет.",
      "    *   Отправка на сервер с каждым HTTP-запросом: нет.",
      "    *   Емкость, на один домен: 5 МБ.",
      "    *   Доступность: в той же вкладке.",
      " ",
    ],
    isParagraph: true,
  },

  {
    heading: "Зачем вам веб-хранилище?",
    answer: [
      "Веб-хранилище позволяет хранить большие объемы данных локально и это не влияет на производительность сайта.",
      "При использовании веб-хранилища информация не хранится на сервере. Информация хранится на веб-клиенте (т.е. компьютере посетителя страницы или на его мобильном устройстве). Это делает его более предпочтительным подходом по сравнению с файлами cookie.",
    ],
    isParagraph: true,
  },
  {
    heading: " ",
    answer: [" ", " ", " ", " ", " "],
    isParagraphBefore: true,
  },
];
