import { ILinkInfo, IObjectHeadingAnswers } from "../models/types";

export const linksJSON: ILinkInfo[] = [
  {
    href: "https://learn.javascript.ru/json",
    title: "Формат JSON, метод toJSON",
  },
  {
    href: "https://itchief.ru/javascript/json",
    title: "JavaScript – формат JSON и примеры работы с ним",
  },
  {
    href: "https://learn.javascript.ru/json#json-stringify",
    title: "JSON.stringify",
  },
  {
    href: "https://learn.javascript.ru/json#json-parse",
    title: "JSON.parse",
  },
];

export const arrayJSON: IObjectHeadingAnswers[] = [
  {
    heading: "Что такое JSON",
    answer: [
      "JSON (JavaScriptObjectNotation) - способ записи объектов в JavaScript, строковое представление объекта.",
      "JSON  используется (в основном) для передачи (обмена) данных между сервером и клиентом. При отправке данных на сервер и наоборот данные должны быть в текстовом формате.",
      "JSON — это  текстовый формат, который позволяет отправлять данные на сервер и данные с сервера в браузер. JSON поддерживается почти всеми языками программирования, поэтому его можно использовать и с другими языками.",
    ],
    isParagraph: true,
  },
  {
    heading: "JSON имеет структуру",
    answer: [
      "JSON имеет структуру ключ-значение:",
      "{ 'ключ1': 'значение1', ",
      "'ключ2': 'значение2'",
      "'ключ3': 'значение3'} ",
      " ключи должны быть строками, в ковычках ' ' ",
    ],
    isParagraph: true,
  },
  {
    heading: "Например, вот объект JSON:",
    answer: [
      " { 'name': 'Matt', ",
      "'address': 'Imaginary Road 22',",
      "'age': 32,",
      "'married': false,",
      "'hobbies': ['Jogging', 'Tennis', 'Padel'] } ",
    ],
    isParagraph: true,
  },
  {
    heading: "Доступные типы для значений:",
    answer: [
      "- массив простых или не простых значений",
      "- объект",
      "- число",
      "- строка",
      "- логическое значение",
      "- null",
    ],
    isParagraph: true,
  },
  {
    heading: "Правила синтаксиса для JSON:",
    answer: [
      " - Данные находятся в парах ключ-значение.",
      " - Данные разделяются запятыми.",
      " - Фигурные скобки определяют объект.",
      " - Квадратные скобки определяют массив.",
      " - Объект JSON заключён в фигурные скобки  {}",
    ],
    isParagraph: true,
  },
  {
    heading: "Преобразование объектов JavaScript в JSON-строку. Метод JSON.stringify()",
    answer: [
      "Когда вы отправляете данные на сервер, это должна быть строка. Метод JSON.stringify() преобразует переданный объект или значение JavaScript в строку JSON.",
      "let student = {name: 'Matt', age: 21};",
      "let stringJSON = JSON.stringify(student)",
      "console.log(stringJSON) // '{'name':'Matt','age': 21}'",
    ],
    isParagraph: true,
  },
  {
    heading: "Чтобы преобразовать JSON-строку в объект JavaScript, нам нужен другой метод JSON.parse().",
    answer: [
      "Когда вы получаете данные с сервера, они всегда имеют строковый формат. Чтобы преобразовать строку JSON в объект JavaScript, используйте метод JSON.parse(). Метод JSON.parse() разбирает строку JSON, возможно с преобразованием получаемого значения и его свойств и возвращает разобранное значение.",
      "let stringJSON = '{'name' : 'Matt', 'age' : 21}' ",
      "let student = JSON.parse(stringJSON)",
      "console.log(student) // {name: 'Matt', age: 21} ",
    ],
    isParagraph: true,
  },
  {
    heading: "Ограничения метода: ",
    answer: [
      " - свойства должны быть обёрнуты в ковычки",
      " - запрещено использование одинарных ковычек",
      " - запрещено использование ключевого слова New",
      " - в JSON не может быть комментариев",
    ],
    isParagraph: true,
  },
];
