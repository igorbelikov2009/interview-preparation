import { ILinkInfo, IObjectHeadingAnswers } from "../models/types";

export const linksJavascript: ILinkInfo[] = [
  {
    href: "https://medium.com/nuances-of-programming/var-let-const-%D0%B2-%D1%87%D0%B5%D0%BC-%D1%80%D0%B0%D0%B7%D0%BD%D0%B8%D1%86%D0%B0-dc6c3beb0b12#:~:text=var%20%2D%D0%BF%D0%B5%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D1%8B%D0%B5%20%D0%BC%D0%BE%D0%B3%D1%83%D1%82%20%D0%B1%D1%8B%D1%82%D1%8C%20%D0%BA%D0%B0%D0%BA,%D0%BE%D1%81%D1%83%D1%89%D0%B5%D1%81%D1%82%D0%B2%D0%BB%D1%8F%D0%B5%D1%82%D1%81%D1%8F%20%D0%BF%D0%BE%D0%B4%D0%BD%D1%8F%D1%82%D0%B8%D0%B5%20%D0%BD%D0%B0%D0%B2%D0%B5%D1%80%D1%85%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D0%B8%20%D0%B2%D0%B8%D0%B4%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D0%B8.",
    title: "Var, Let, Const — в чем разница? (Подробная статья )",
  },
  {
    href: "https://learn.javascript.ru/bubbling-and-capturing#vsplytie",
    title: "Всплытие и погружение событий",
  },
  {
    href: "https://learn.javascript.ru/bubbling-and-capturing#prekraschenie-vsplytiya",
    title: "Прекращение всплытия события",
  },
  {
    href: "https://learn.javascript.ru/bubbling-and-capturing#event-target",
    title: "event.target",
  },
  {
    href: "https://learn.javascript.ru/prototype-inheritance",
    title: "Прототипное наследование",
  },
  {
    href: "https://developer.mozilla.org/ru/docs/Glossary/Falsy",
    title: "Ложноподобное (falsy) значение",
  },
  {
    href: "https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent",
    title: "Событие Клавиатуры",
  },
  {
    href: "https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code",
    title: "KeyboardEvent.code",
  },
  {
    href: "https://www.codingem.com/regex/",
    title: "Регулярное выражение",
  },
  {
    href: " ",
    title: " ",
  },
];

export const arrayJavascript: IObjectHeadingAnswers[] = [
  {
    heading: "Что такое JavaScript?",
    answer: [
      "JavaScript — это язык программирования на стороне клиента/сервера.",
      "JavaScript можно вставить в HTML, чтобы сделать веб-страницу интерактивной и обеспечить взаимодействие с пользователем.",
      "JavaScript имеет динамическую типизацию. Это означает, что тип объектов проверяется во время выполнения . (В статически типизированном языке тип проверяется во время компиляции.) Другими словами, переменные JavaScript не связаны с типом. Это означает, что вы можете без проблем изменить тип данных.",
      "JavaScript — это интерпретируемый язык. Интерпретатор в браузере читает код JavaScript, интерпретирует каждую строку и запускает ее.",
      "JavaScript — это язык, чувствительный к регистру.",
      "JavaScript работает с одним потоком. Это означает, что он выполняет код по порядку и должен завершить выполнение фрагмента кода, прежде чем перейти к следующему.",
      "Это не позволяет писать код, который интерпретатор мог бы выполнять параллельно в нескольких потоках или процессах.",
    ],
    isParagraph: true,
  },
  {
    heading: "Область видимости.",
    answer: [
      "Область видимости — это зона доступности переменных (другого ресурса) в области твоего кода.",
      "Глобальной областью видимости считается область за пределами всех функций. Она доступна для любой внутренней или локальной области видимости. Переменные, определенные в глобальной области, могут быть доступны и изменены в любых других областях.",
      "Лексическая область видимости означает, что дочерняя область имеет доступ к переменным, определенным в родительской области.",
      "Локальная область видимости. Переменные, объявленные внутри функций, становятся локальными для функции и рассматриваются в соответствующей локальной области. Каждая функция имеет свою область видимости. Одна и та же переменная может использоваться в разных функциях, поскольку они связаны с соответствующими функциями и не являются взаимно видимыми.",
      "Блочная область видимости. Это означает, что переменные объявленные с помощью let и const доступны только внутри блока ({ }).",
      "Динамическая область. Определяется во время выполнения, заботится о том, откуда была вызвана функция.",
    ],
    isParagraph: true,
  },
  {
    heading: "Var, Let, Const — в чем разница?",
    answer: [
      "Переменные, объявленные с помощью ключевых слов «let» и «const» имеют блочную область видимости. Это означает, что они доступны только внутри блока ({ }).",
      "Если не планируется изменять значение переменной, то объявлять её лучше через «const». Это позволит избежать объявление переменной дважды, случайно изменив её. Переменные, объявленные при помощи «const» , нельзя обновить или объявить заново. То есть, значение переменной, объявленной при помощи «const» , остается неизменным внутри ее области видимости. Эту переменную нельзя объявить заново или обновить. ",
      "Переменные, объявленные при помощи let, могут обновляться, но не объявляться повторно.",
      "Переменные, объявленные с помощью ключевого слова «var», НЕ имеют блочную область видимости. Переменные, объявленные при помощи «var», могут как объявляться заново, так и обновляться.",
    ],
    isParagraph: true,
  },
  {
    heading: "Поднятие переменных и функций (hoisting) var",
    answer: [
      "В JavaScript поднятие - это механизм, обеспечивающий перемещение объявлений переменных и функций в верх их области видимости до запуска кода.",
      "Для функций это означает, что вы можете вызывать их из любой точки области видимости, даже до того, как они будут определены.",
      "Переменные, объявленные при помощи var, поднимаются в верх своей области видимости и инициализируются присвоением какого-нибудь значения или undefined.",
      " 1. Поднятие — подъем переменной или функции в глобальную или функциональную области видимости.",
      " 2. В фазе компиляции функциональные выражения и переменные, объявленные с помощью ключевого слова «var», со значением undefined поднимаются в самый верх глобальной (или функциональной) области видимости (как бы перемещаются в начало нашего кода. Это объясняет, почему мы можем вызывать функции до их объявления).",
      " 3. В фазе выполнения переменным присваиваются значения, а функции (или методы объектов) вызываются или выполняются.",
      " 4. Запомнить! Поднимаются только функциональные выражения и переменные, объявленные с помощью ключевого слова «var». Обычные функции и стрелочные функции, а также переменные, объявленные с помощью ключевых слов «let» и «const» не поднимаются.",
    ],
    isParagraph: true,
  },
  {
    heading: "Что такое замыкание и как/для чего его используют?",
    answer: [
      "Если одна функция определена внутри другой, то внутренняя функция имеет доступ к области видимости внешней функции. Это называется замыканием (также лексической ОВ или статической).",
      "Замыкание в JavaScript означает, что внутренняя функция имеет доступ к переменным внешней функции — даже после возврата внешней функции. Это возможно из-за замыкающей природы JavaScript: внутренняя функция имеет доступ к переменным внешней функции даже после возврата внешней функции.",
      "Например, чтобы создать счетчик, который увеличивается на 1, вы можете использовать замыкание:",
      " function createCounter() { let counter = 0; function increment() { counter++; console.log(counter); } return increment; }",
    ],
    isParagraph: true,
  },
  {
    heading: "Что такое всплытие событий?",
    answer: [
      "При всплытии событий, событие начинается с запуска обработчиков событий на самом внутреннем элементе. Затем он запускает обработчики событий родителей, пока не достигнет самого внешнего элемента.",
      "Другими словами: когда на элементе происходит событие, обработчики (например: onclick ) сначала срабатывают на нём, потом на его родителе, затем выше и так далее, вверх по цепочке предков до самого document.",
      "Этот процесс называется «всплытием», потому что события «всплывают» от внутреннего элемента вверх через родителей подобно тому, как всплывает пузырёк воздуха в воде.",
      "Например, если стоит только один обработчик form.onclick, то он «поймает» все клики внутри формы. Где бы ни был клик внутри – он всплывёт до элемента <form>, на котором сработает обработчик.",
      "Почти все события всплывают. Ключевое слово в этой фразе – «почти». Например, событие focus не всплывает. Однако, стоит понимать, что это скорее исключение, чем правило, всё-таки большинство событий всплывают.",
    ],
    isParagraph: true,
  },
  {
    heading: "event.target",
    answer: [
      "Всегда можно узнать, на каком конкретно элементе произошло событие.",
      "Самый глубокий элемент, который вызывает событие, называется целевым элементом, и он доступен через event.target.",
      "event.target – это «целевой» элемент, на котором произошло событие, в процессе всплытия он неизменен.",
      "event.target будет содержать ссылку на конкретный элемент внутри формы, на котором произошёл клик.",
    ],
    isParagraph: true,
  },
  {
    heading: "Методы event.stopPropagation() и event.stopImmediatePropagation()",
    answer: [
      "Всплытие идёт с «целевого» элемента прямо наверх. По умолчанию, событие будет всплывать до элемента <html>, а затем до объекта document, а иногда даже до window, вызывая все обработчики на своём пути.",
      "Но любой промежуточный обработчик может решить, что событие полностью обработано, и остановить всплытие.",
      "Для этого нужно вызвать метод event.stopPropagation().",
      "Если у элемента есть несколько обработчиков на одно событие, то даже при прекращении всплытия все они будут выполнены.",
      "То есть, event.stopPropagation() препятствует продвижению события дальше, но на текущем элементе все обработчики будут вызваны.",
      "Для того, чтобы полностью остановить обработку, существует метод event.stopImmediatePropagation(). Он не только предотвращает всплытие, но и останавливает обработку событий на текущем элементе.",
      " ",
      "Не прекращайте всплытие без необходимости!",
      "Всплытие – это удобно. Не прекращайте его без явной нужды, очевидной и архитектурно прозрачной.",
      "Зачастую прекращение всплытия через event.stopPropagation() имеет свои подводные камни, которые со временем могут стать проблемами.",
    ],
    isParagraph: true,
  },
  {
    heading: "Делегирование событий.",
    answer: [
      "Всплытие событий позволяет реализовать один из самых важных приёмов разработки - делегирование.",
      "Делегирование заключается в том, что если у нас есть много элементов, события на которых нужно обрабатывать похожим образом, то вместо того, чтобы назначать обработчик каждому - мы ставим один обработчик на их общего предка. Из него можно получить целевой элемент event.target, понять на каком потомке произошло событие и обаботать его.",
      "Алгоритм: вешаем обработчик на контейнер. В обработчике получаем event.target. В обработчике, если event.target или один из его родителей в контейнере (this) – интересующий нас элемент – обрабатываем его.",
      "Зачем использовать: упрощает инициализацию и экономит память: не нужно вешать много обработчиков. Меньше кода: при добавлении и удалении элементов не нужно ставить или снимать обработчики. Удобство изменений: можно массово добавлять или удалять элементы путём изменения innerHTML.",
    ],
    isParagraph: true,
  },
  {
    heading: "Как this работает в JavaScript.",
    answer: [
      "Ключевое слово this относится к текущему объекту, внутри которого пишется код.",
      "Использование this гарантирует, что функция работает именно с тем объектом, в контексте которого вызвана, если это не стрелочная функция. У стрелочных функций контекст this определяется в момент создания функции.",
      "Значение this называется контекстом вызова и будет определено в момент вызова функции. Значением this является объект перед точкой, в контексте которого вызван метод.",
    ],
    isParagraph: true,
  },
  {
    heading: "Как работает прототипное наследование",
    answer: [
      "Прототипом объекта А называется объект B, свойства и методы которого доступны для объекта A как собственные.",
      "У любого объекта есть прототип, на который указывает его свойство __proto__ и который также является объектом.",
      "У любой функции есть ассоциированный с ней объект, на который в контексте функции указывает свойство prototype. В него, как в контейнер обычно складывают свойства и методы для работы с определенным классом объектов.",
      "Такой контейнер автоматически становится прототипом объектов, создаваемых функциями-конструкторами Для редактирования прототипной ссылки объекта используют метод Object.create() - он перезаписывает объект заново и выставляет в нем ссылку на нужный прототип.",
      "Ссылки, связанных друг с другом объектов, образуют прототипную цепочку, которая лежит в основе прототипного наследования. Ярким примером такого наследования является цепочка узлов DOM модели.",
    ],
    isParagraph: true,
  },
  {
    heading: "Типы данных в JavaScript",
    answer: [
      " - string для строк. Строка может содержать ноль или больше символов, нет отдельного символьного типа.",
      " - number для любых чисел: целочисленных или чисел с плавающей точкой; целочисленные значения ограничены диапазоном ±(253-1).",
      " - bigint для целых чисел произвольной длины.",
      " - boolean представляет логическое значение true или false",
      " - null для неизвестных значений – отдельный тип, имеющий одно значение null.",
      " - undefined для неприсвоенных значений – отдельный тип, имеющий одно значение undefined.",
      " - object для более сложных структур данных.",
      " - symbol для уникальных идентификаторов.",
      "Оператор typeof позволяет нам увидеть, какой тип данных сохранён в переменной.",
      "Имеет две формы: typeof x или typeof(x).",
      "Возвращает строку с именем типа. Например, 'string'",
      "Для null возвращается object – это ошибка в языке, на самом деле это не объект.",
    ],
    isParagraph: true,
  },
  {
    heading: "Как проверить тип переменной (данных) в JavaScript?",
    answer: [
      "Воспользуйтесь typeof оператором.",
      " - typeof John Abraham возвращает string",
      " - typeof 100 возвращает number ",
    ],
    isParagraph: true,
  },
  {
    heading: "Typeof оператор",
    answer: ["Оператор typeof используется, в основном, для того, чтобы узнать тип примитивного значения"],
    isParagraph: true,
  },
  {
    heading: "В чём различие между переменными, значение которых: null, undefined и не объявлено?",
    answer: [
      " - undefined - это переменная, которая была объявлена, но у нее нет значения.",
      " - null - отсутствие какого-либо объектного значения переменной.  null - означает отсутствие ценности. Он подчеркивает, что переменная не указывает ни на какой объект. Имеет тип object.",
      " - undeclared - переменная, объявленная без ключевого слова 'var'.",
      "Для проверки можно использовать console.log() и typeof.",
    ],
    isParagraph: true,
  },
  {
    heading: "В чем разница между NULL и undefined?",
    answer: [
      " - null — это «значение отсутствия значения». null — это значение, которое присваивается переменной явно. Его можно присвоить переменной как представление без значения. Значение, указывающее, что переменная не указывает на объект. Имеет тип object.  Представляет нулевую, пустую или несуществующую ссылку. Представляет отсутствие значения переменной. Преобразуется в 0 с помощью примитивных операций.",
      " - undefined («неопределенный») представляет собой значение по умолчанию для переменной, которой не было присвоено значения, т.е. объявленной, но не инициализированной переменной; функции, которая ничего не возвращает явно, например, console.log(1); несуществующего свойства объекта undefined означает, что переменная была объявлена, но ей еще не присвоено значение. Значение, представляющее переменную, которая была объявлена, но не имеет значения. Имеет тип undefined. Представляет отсутствие переменной. Преобразуется в NaN с помощью примитивных операций.",
    ],
    isParagraph: true,
  },
  {
    heading: "Какие значения в JavaScript являются ложными (falsy)?",
    answer: [
      "Ложное (falsy) значение — значение, которое становится false в булевом контексте. JavaScript использует преобразование типов, чтобы привести значение к булевому типу, там, где это требуется (например, в условных конструкциях и циклах).",
      "0. Ноль Number (к нему также относятся 0.0, 0x0 и т.д.).",
      "-0. Отрицательный ноль типа Number (к нему также относятся -0.0, -0x0 и т.д.).",
      "0n. Ноль типа BigInt (также 0x0n). Обратите внимание, что не может быть негативного нуля типа BigInt — отрицательный 0n равняется 0n.",
      "Значения, содержащие пустую строку. (Пустые кавычки: двойные, одинарные, косые)",
      "null — отсутствие какого-либо значения.",
      "undefined — примитивное значение, переменная, не имеющая присвоенного значения.",
      "NaN - (en-US) NaN — значение, не являющиеся числом.",
      "document.all Объекты считаются ложноподобными тогда и только тогда, когда у них есть внутренний слот [[IsHTMLDDA]]. Этот слот есть только в объекте document.all, и его задать через JavaScript. ",
    ],
    isParagraph: true,
  },
  {
    heading: "Основное различие между циклом forEach и циклом .map()? И в каких случаях каждый из них используется?",
    answer: ["forEach перебирает массив и изменяет его.", ".map() создает копию массива и изменяет копию."],
    isParagraph: true,
  },
  {
    heading: "Назовите различные циклы в JavaScript",
    answer: [
      "for- перебирает блок кода несколько раз",
      "for/in- перебирает свойства объекта",
      "for/of- перебирает значения итерируемого объекта",
      "while- перебирает блок кода, пока заданное условие истинно",
      "do/while- также перебирает блок кода, пока заданное условие выполняется",
    ],
    isParagraph: true,
  },
  {
    heading: "Что делает оператор «break»?",
    answer: [
      "Оператор break выводит из цикла и продолжает выполнение кода вне цикла.",
      "for (var i = 0; i < 100; i++) {  ",
      " if (i === 5)  ",
      " { break; } ",
      " console.log('Number is ', i); } console.log('Yay');",
    ],
    isParagraph: true,
  },
  {
    heading: "Что делает оператор continue?",
    answer: [
      "Оператор continue перескакивает через один раунд цикла.",
      "for (var i = 0; i < 5; i++) { ",
      " if (i === 2 || i === 3) ",
      " { continue; } ",
      " console.log('Number is ', i); }",
    ],
    isParagraph: true,
  },
  {
    heading: "Что такое анонимная функция?",
    answer: [
      "Анонимная функция — это функция, не имеющая имени. Анонимные функции часто используются для выполнения какого-то кода в коллбэках, где не нужно создавать отдельную именную функцию под это действие.",
    ],
    isParagraph: true,
  },
  {
    heading: "В чём разница между host-объектами и нативными объектами?",
    answer: [
      "Собственные объекты: Object (конструктор), Date, Math, parseInt, eval, строковые методы, такие как indexOf и replace, методы массивов и т.д. - основные предопределённые объекты, всегда доступные в JavaScript.",
      "Объекты хоста (при условии среды браузера): window, document, location, history, XMLHttpRequest, setTimeout, getElementsByTagName, querySelectorAll и т.д. - Они отличаются от встроенных объектов, потому что не все окружения будут иметь одни и те же объекты хоста.",
    ],
    isParagraph: true,
  },
  {
    heading: "В чем разница между: function Person(){}, var person = Person(), и var person = new Person()?",
    answer: [
      "function Person(){} - Мы создаем функцию с именем Person.",
      "var person = Person() - Мы вызываем функцию Person и результат сохраняем в переменную person.",
      "var person = new Person() - Мы создаем новый объект, используя функцию-конструктор Person.",
    ],
    isParagraph: true,
  },
  {
    heading: "Оператор new",
    answer: [
      "Оператор new используется для создания объектов. Операндом этого оператора должна быть функция. Функция, которая создаётся специально для работы с оператором new, называется конструктором. Конструктор используется для инициализации нового созданного объекта:",
      "Работает это всё (оператор new с конструктором) следующим образом: встречая оператор new интерпретатор создаёт новый пустой объект, затем он вызывает конструктор, и передаёт ему новый созданный объект в качестве значения ключевого слова this. Внутри конструктора происходит инициализация свойств вновь созданного объекта. После того, как объект создан и инициализарован, оператор new возвращает созданный объект. Создаём новый экземпляр какого-то класса. ",
    ],
    isParagraph: true,
  },
  {
    heading: "Что такое колбэк-функция - функция",
    answer: [
      " Коллбэк — это функция, которая должна быть выполнена после того, как другая функция завершит работу.",
      " Функция обратного вызова — это функция, которая передается в качестве аргумента другой функции.",
      " Коллбэки нужны по одной очень важной причине: JavaScript — это язык, в котором огромную роль играют события. Это означает, что вместо того, чтобы ожидать, скажем, результата выполнения некоей функции, остановив при этом все остальные операции, JavaScript-программа работает, наблюдая за событиями и реагируя на них.",
    ],
    isParagraph: true,
  },
  {
    heading: "Объясните разницу между «==» и «===».",
    answer: [
      " «==» используется для сравнения двух значений независимо от типа данных переменной. (сравнивает значения)",
      "«===» используется для сравнения двух значений, но это будет строгая проверка, поэтому будет проверяться соответствие значения и типа данных. (сравнивает как значение, так и тип)",
    ],
    isParagraph: true,
  },
  {
    heading: "Как проверить, является ли значение не числом?",
    answer: [
      "Функция isNaN() определяет, является ли значение не числом.",
      " isNaN(48) //false ",
      " isNaN('123') //false ",
      " isNaN('Привет, я настоящая строка') //true ",
    ],
    isParagraph: true,
  },
  {
    heading: "Как преобразовать строку в число?",
    answer: [
      "parseInt() преобразует строку в целое число: ",
      " parseInt('30', 10) // 30 ",
      " parseInt('55px', 10) // 50  ",
      " parseInt(2.55, 10) // 2",
      " - ",
      " parseFloat()  преобразует строку в число точек (с десятичным числом)",
      " parseFloat('30') // 30 ",
      " parseFloat('55px') // 50 ",
      " Number() преобразует строку в число. Это может быть целое число или десятичное число. Они часто могут быть менее безопасными, чем использование parseInt или parseFloat",
    ],
    isParagraph: true,
  },
  {
    heading: "Как проверить, является ли объект массивом?",
    answer: ["Функция isArray() определяет, является ли объект массивом.", " "],
    isParagraph: true,
  },
  {
    heading: "Что такое параметры функции по умолчанию.",
    answer: [
      "Они позволяют инициализировать именованные параметры со значениями по умолчанию, если значение не передается или undefined не передается.",
    ],
    isParagraph: true,
  },
  {
    heading: "Что такое модули ES6?",
    answer: [
      "Модуль – это просто файл. Один скрипт – это один модуль.",
      "Модули могут загружать друг друга и использовать директивы export и import, чтобы обмениваться функциональностью, вызывать функции одного модуля из другого:",
      " - export отмечает переменные и функции, которые должны быть доступны вне текущего модуля.",
      " - import позволяет импортировать функциональность из других модулей.",
      " - export default (по умолчанию) используется, когда модулю нужно экспортировать только одно значение.",
      "Именованные экспорты отличаются своими именами. В модуле может быть несколько именованных экспортов.",
      "Модуль может содержать переменные и функции. Модуль — это не что иное, как фрагмент кода JavaScript, записанный в файле.",
      " - Своя область видимости переменных",
      "Каждый модуль имеет свою собственную область видимости. Другими словами, переменные и функции, объявленные в модуле, не видны в других скриптах.",
    ],
    isParagraph: true,
  },
  {
    heading: "Что такое async/await?",
    answer: [
      "async перед функцией означает одну простую вещь: функция всегда возвращает промис (обещание). Другие значения автоматически оборачиваются в разрешенное обещание.",
      "await заставляет JavaScript ждать, пока это обещание не выполнится, и после этого возвращает результат.",
    ],
    isParagraph: true,
  },
  {
    heading: "Как вы делаете вызов API в JavaScript?",
    answer: [" 1. XMLHttpRequest", " 2. fetch", " 3. Axios", " 4. jQuery"],
    isParagraph: true,
  },
  {
    heading: " Назовите методы запросов API, которые вы бы использовали в JavaScript.",
    answer: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    isParagraph: true,
  },
  {
    heading: "Назовите различные селекторы DOM",
    answer: [
      " - getElementsByTagName()",
      " - getElementsByClassName()",
      " - getElementById()",
      " - querySelector()",
      " - querySelectorAll()",
    ],
    isParagraph: true,
  },
  {
    heading: "Какие типы всплывающих окон есть в JavaScript?",
    answer: ["Alert", "Confirm", "Prompt"],
    isParagraph: true,
  },
  {
    heading: "Что такое оператор расширения в JavaScript?",
    answer: [
      "Оператор Spread позволяет расширять итерируемые объекты (массивы/объекты/строки) до отдельных аргументов/элементов.",
    ],
    isParagraph: true,
  },
  {
    heading: "Что такое функции высшего порядка в JavaScript?",
    answer: [
      "Функция более высокого порядка воздействует на другую функцию. Она либо принимает функцию в качестве аргумента, либо возвращает другую функцию.",
    ],
    isParagraph: true,
  },
  {
    heading: "Что такое Строгий режим в JavaScript?",
    answer: [
      "Строгий режим позволяет настроить программу для работы в строгом контексте. Это предотвращает выполнение определенных действий. Кроме того, возникает больше исключений.",
      "Выражение 'use strict' указывает браузеру включить строгий режим.",
      "Например: строгий режим не позволяет вам присвоить значение необъявленной переменной.",
    ],
    isParagraph: true,
  },
  {
    heading: "Зачем использовать строгий режим в JavaScript?",
    answer: [
      "Строгий режим помогает писать «безопасный» код JavaScript. Это означает, что плохие синтаксические практики превращаются в настоящие ошибки. Например, строгий режим запрещает создание глобальных переменных. ",
    ],
    isParagraph: true,
  },
  {
    heading: "Что такое немедленно вызываемая функция?",
    answer: [
      "Немедленно вызываемая функция (IIFE) запускается сразу после определения.",
      "(function() { ... action here })()",
      "Чтобы понять, как работает IIFE, посмотрите на круглые скобки вокруг него:",
      " - Когда JavaScript видит ключевое слово function, он предполагает, что идет объявление функции.",
      " - Но объявление выше неверно, потому что у функции нет имени.",
      " - Чтобы исправить это, используется первый набор скобок вокруг объявления. Это сообщает интерпретатору, что это выражение функции, а не объявление.",
      "Затем, чтобы вызвать функцию, необходимо добавить еще один набор скобок в конце объявления функции. Это похоже на вызов любой другой функции",
    ],
    isParagraph: true,
  },
  {
    heading: "Что делает двойной восклицательный знак?",
    answer: [
      "1. !Оператор отрицает, а вторичный !отрицает результат начального отрицания. Это в основном преобразует все, что находится с правой стороны, в логическое значение (true или false).",
      "!false // true",
      "!!false // false",
      "Итак, если метод определен, то тот function, который является правдивым, будет преобразован в true.",
      "Тут всё довольно просто. Допустим у вас есть функция, которая возвращает какой-то результат: строку, число, объект и т.д. А вам необходимо получить от этой функции true или false. Вот два записанных подряд оператора ! и делают именно это. Если функция вернёт строку, отличное от 0 число, объект, массив — в общем любое правдивое значение, то выражение !! превратит его в true, в противном случае вы получите false.",

      "2.  Двойной восклицательный знак преобразует любое значение в логическое значение в JavaScript.",
      "!!true // true",
      "!!2 // true ",
      "!![] // true",
      "!!'Test' // true",
      "!!false // false",
      "!!0 // false",
      "!! '' // false",
    ],
    isParagraph: true,
  },
  {
    heading: "Как можно удалить свойство и его значение из объекта?",
    answer: [
      "Вы можете использовать ключевое слово delete для удаления свойства и его значения из объекта.",
      "let student = {name: 'John', age: 20};",
      "delete student.age;",
      "console.log(student) // {name: 'John'};",
    ],
    isParagraph: true,
  },
  {
    heading: "Что такое глобальная переменная?",
    answer: ["Глобальная переменная доступна везде в коде."],
    isParagraph: true,
  },
  {
    heading: "Что такое события JavaScript?",
    answer: [
      "События — это то, что происходит с элементами HTML. Когда JavaScript используется на HTML-странице, он может реагировать на события, такие как нажатие кнопки.",
    ],
    isParagraph: true,
  },
  {
    heading: "Что делает метод preventDefault()?",
    answer: [
      "Название preventDefault 'предотвратить дефолт' хорошо описывает поведение. Это предотвращает поведение события по умолчанию.",
      "Например, вы можете запретить отправку формы при нажатии кнопки отправки:",
      " const handleForm = (event) => {",
      " event.preventDefault()",
      " });",
    ],
    isParagraph: true,
  },
  {
    heading: "Что такое метод setTimeout()?",
    answer: [
      "Метод setTimeout() вызывает функцию (один раз) через указанное количество миллисекунд. Например, давайте зарегистрируем сообщение через одну секунду ( 1000ms ):",
      "setTimeout(function() { ",
      " console.log('Good day');",
      " }, 1000);",
    ],
    isParagraph: true,
  },
  {
    heading: "Что такое метод setInterval()?",
    answer: [
      "Метод setInterval() периодически вызывает функцию с заданным интервалом.",
      "Например, давайте периодически логировать сообщение каждую секунду:",
      " setInterval(function() {",
      " console.log('Добрый день');",
      " }, 1000);",
    ],
    isParagraph: true,
  },
  {
    heading: "Что такое ECMAScript?",
    answer: [
      "ECMAScript — это язык сценариев, лежащий в основе JavaScript. ECMAScript стандартизирован Международной организацией по стандартизации ECMA.",
    ],
    isParagraph: true,
  },
  {
    heading: "Как можно присвоить переменной значение по умолчанию?",
    answer: [
      "Используйте логический оператор || в назначении, чтобы указать значение по умолчанию:",
      "const a = b || c;",
      "Это работает так: если b ложно, то значение c будет присвоено значению a.",
      "(Falsy означает: null, false, undefined, 0, пустую строку, NaN.)",
    ],
    isParagraph: true,
  },
  {
    heading: "Что такое функция eval()?",
    answer: [
      "Не используйте eval без необходимости!",
      "Warning: Выполнение кода JavaScript с текстовой строки - это невероятный риск для безопасности. Злоумышленнику слишком легко запустить какой угодно код, когда вы используете eval(). Смотрите Никогда не используйте eval()!, ниже.",
      "eval() - функция глобального объекта, оценивает код внутри строки. Возвращает значение выполнения кода, переданного в функцию в виде строки. Если код не возвращает ничего - будет возвращено значение undefined.",
      "Аргумент функции eval() - строка. Строка для оценки может быть выражением, переменной, оператором или последовательностью операторов. eval() исполняет содержащееся в строке выражение, один или несколько операторов JavaScript. Не стоит вызывать eval() для определения значения арифметического выражения; JavaScript вычисляет их автоматически.",
      "eval() можно использовать для вычисления значения арифметического выражения, записанного в строковом виде, на более поздней стадии исполнения. Предположим, существует переменная x. Можно отложить вычисление выражения, в котором содержится х, если присвоить переменной это выражение в виде строки (допустим, '3 * x + 2'), а затем вызвать eval() в более поздней точке кода.",
      "Если аргумент, переданный eval(), не является строкой, eval() возвращает его неизменным. В следующем примере определён конструктор String, и eval() не вычисляет значение выражения, записанного в строковом виде, а возвращает объект типа String.",
      " console.log(eval('2 + 2')); // 4",
      " console.log(eval(new String('2 + 2'))); // 2 + 2",
      " console.log(eval('2 + 2') === eval('4')); // true",
      " console.log(eval('2 + 2') === eval(new String('2 + 2'))); // false",
    ],
    isParagraph: true,
  },
  {
    heading: "Что такое регулярное выражение?",
    answer: [
      "Регулярное выражение представляет собой группу символов, образующих шаблон поиска. Это инструмент сопоставления с образцом, который обычно используется в JavaScript и других языках программирования.",
      "Регулярное выражение можно использовать для поиска адресов электронной почты или телефонных номеров в большом текстовом файле.",
    ],
    isParagraph: true,
  },
  {
    heading: "Что такое условный оператор?",
    answer: [
      "Условный оператор — это сокращение для написания операторов if-else. Условный оператор иногда называют тернарным оператором.",
      "{age < 18 ? console.log('Незначительный' : console.log('Взрослый') }",
      " Условные операторы можно связать в цепочку. Иногда это может быть полезно, так как делает код более понятным.",
      " function example() {",
      " return condition1 ? value1",
      " : condition2 ? value2",
      " : condition3 ? value3",
      " : value4;",
      " }",
    ],
    isParagraph: true,
  },
  {
    heading: "Что делает метод Object.freeze()?",
    answer: [
      "Метод Object.freeze() замораживает объект, делает его неизменным. Замороженный объект больше нельзя изменить; замораживание объекта предотвращает добавление к нему новых свойств, удаление существующих свойств, предотвращает изменение перечислимости, конфигурируемости или возможности записи существующих свойств, а также предотвращает изменение значений существующих свойств. Кроме того, замораживание объекта также предотвращает изменение его прототипа. freeze() возвращает тот же объект, который был передан.",
      "const obj = { prop: 42 };",
      "Object.freeze(obj);",
      "obj.prop = 33; // Выдает ошибку в строгом режиме",
      "console.log(obj.prop); // результат: 42",
    ],
    isParagraph: true,
  },
  {
    heading: "Как получить список ключей объекта?",
    answer: [
      "Используйте Object.keys()метод.",
      "const student = { name: 'Mike', gender: 'male', age: 23 };",
      "console.log(Object.keys(student)); // ['name', 'gender', 'age']",
    ],
    isParagraph: true,
  },
  {
    heading: "Какие примитивные типы данных есть в JavaScript?",
    answer: [
      "Примитивный тип данных имеет примитивное значение. В JavaScript существует семь различных примитивных типов данных:",
      "1. string— строковые значения. Например “John”.",
      "2. number— числовые значения. Например 12.",
      "3. boolean- правда или ложь. Например true.",
      "4. null- отсутствие значения. Например let x = null;",
      "5. undefined— тип, в котором переменная объявлена, но не имеет значения. Например, при создании переменной x таким let x;образом x становится undefined.",
      "6. bigint— Объект, предназначенный для представления целых чисел, превышающих 2^53–1. НапримерBigInt(121031393454720292)",
      "7. symbol— Встроенный объект для создания уникальных символов. Например let sym1 = Symbol(‘test’)",
    ],
    isParagraph: true,
  },
  {
    heading: "Какие существуют способы доступа к свойствам объекта?",
    answer: [
      "Точечное обозначение: obj.property",
      "Обозначение квадратных скобок: obj['property']",
      "Обозначение выражения: obj[expression]",
    ],
    isParagraph: true,
  },
  {
    heading: " ",
    answer: [" ", " "],
    isParagraph: true,
  },
  {
    heading: " ",
    answer: [" ", " "],
    isParagraph: true,
  },
  {
    heading: " ",
    answer: [" ", " "],
    isParagraph: true,
  },
  {
    heading: " ",
    answer: [" ", " "],
    isParagraph: true,
  },
  {
    heading: " ",
    answer: [" ", " "],
    isParagraph: true,
  },
  {
    heading: " ",
    answer: [" ", " "],
    isParagraph: true,
  },
  {
    heading: " ",
    answer: [" ", " "],
    isParagraph: true,
  },
  {
    heading: " ",
    answer: [" ", " "],
    isParagraph: true,
  },
  {
    heading: " ",
    answer: [" ", " "],
    isParagraph: true,
  },
  {
    heading: " ",
    answer: [" ", " "],
    isParagraph: true,
  },
  {
    heading: " ",
    answer: [" ", " "],
    isParagraph: true,
  },
  {
    heading: " ",
    answer: [" ", " "],
    isParagraph: true,
  },
  {
    heading: " ",
    answer: [" ", " "],
    isParagraph: true,
  },
  {
    heading: " ",
    answer: [" ", " "],
    isParagraph: true,
  },
  {
    heading: " ",
    answer: [" ", " "],
    isParagraph: true,
  },
  {
    heading: " ",
    answer: [" ", " "],
    isParagraph: true,
  },
  {
    heading: " ",
    answer: [" ", " "],
    isParagraph: true,
  },
  {
    heading: " ",
    answer: [" ", " "],
    isParagraph: true,
  },
  {
    heading: " ",
    answer: [" ", " "],
    isParagraph: true,
  },
  {
    heading: " ",
    answer: [" ", " "],
    isParagraph: true,
  },
  {
    heading: " ",
    answer: [" ", " "],
    isParagraph: true,
  },
  {
    heading: " ",
    answer: [" ", " "],
    isParagraph: true,
  },
  {
    heading: " ",
    answer: [" ", " "],
    isParagraph: true,
  },
  {
    heading: " ",
    answer: [" ", " "],
    isParagraph: true,
  },
];
