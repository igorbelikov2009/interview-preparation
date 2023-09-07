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
  {
    href: "https://habr.com/ru/articles/554274/",
    title: "Что такое JSON",
  },
  {
    href: "https://my-js.org/docs/cheatsheet/json-server/ ",
    title: "Шпаргалка по JSON Server ",
  },
];

export const arrayJSON: IObjectHeadingAnswers[] = [
  {
    heading: "Что такое JSON",
    answer: [
      "      JSON (англ. JavaScript Object Notation) — текстовый формат обмена данными, основанный на JavaScript. Это общий формат для представления значений и объектов.",
      "      JSON  используется для обмена данными в современных веб - и мобильных приложениях, между сервером и клиентом. При отправке данных на сервер и наоборот данные должны быть в текстовом формате.",
      "      Кроме того, JSON используется для хранения неструктурированных данных в файлах журналов или базах данных. Многие веб-службы REST возвращают результаты в формате текста JSON или принимают данные в формате JSON.",
      "      JSON позволяет отправлять данные на сервер и данные с сервера в браузер. JSON поддерживается почти всеми языками программирования, поэтому его можно использовать и с другими языками.",
    ],
    isParagraph: true,
  },
  {
    heading: "JSON имеет структуру",
    answer: [
      "JSON имеет структуру ключ-значение:",
      "      { ",
      "            'ключ1': 'значение1', ",
      "            'ключ2': 'значение2'",
      "            'ключ3': 'значение3' ",
      "      }",
      "Ключи должны быть строками, в двойных ковычках. ",
      " ",
      "Например, вот объект JSON:",
      "      { ",
      "             'brand': 'Apple',",
      "             'model': 'iPhone 11 Pro',",
      "             'isAvailable': true,",
      "             'display': 5.8,",
      "             'memories': [64, 256, 512],",
      "             'features': {",
      "                    'tripleCamera': true,",
      "                    'faceId': true,",
      "                    'touchId': false,",
      "                    'eSIM': true",
      "                  }",
      "      }",
    ],
    isParagraph: true,
  },
  {
    heading: "Доступные типы для значений:",
    answer: [
      "     - массив простых или не простых значений",
      "     - объект",
      "     - число",
      "     - строка",
      "     - логическое значение",
      "     - null",
    ],
    isParagraph: true,
  },
  {
    heading: "Правила синтаксиса для JSON:",
    answer: [
      "JSON состоит из пар ключ-значение. Пары разделяются между собой запятыми, а ключ отделяется от значения через двоеточие. Ключом может быть только строка, обёрнутая в двойные кавычки. А вот значением — почти всё что угодно: ",
      "      - Строка в двойных кавычках — ''I love JSON!'' ",
      "      - Число — 21;",
      "      - Логическое значение — true;",
      "      - Массив — [18, true, ''lost'', [4, 8, 15, 16, 23, 42]];",
      "      - Объект — {''isValid'': true, ''isPayed'': false}.",
      " ",
      "      - Данные находятся в парах ключ-значение.",
      "      - Данные разделяются запятыми.",
      "      - Фигурные скобки определяют объект.",
      "      - Квадратные скобки определяют массив.",
      "      - Объект JSON заключён в фигурные скобки  {}",
    ],
    isParagraph: true,
  },
  {
    heading: "Преобразование объектов JavaScript в JSON-строку. Метод JSON.stringify()",
    answer: [
      "Когда вы отправляете данные на сервер, это должна быть строка. Метод JSON.stringify() преобразует переданный объект или значение JavaScript в строку JSON.",
      "      let student = { ",
      "            name: 'Matt',",
      "            age: 21,",
      "      }; ",
      " ",
      "      let stringJSON = JSON.stringify(student)",
      "      console.log(stringJSON) // '{''name'':'Matt'', ''age'': 21}'",
    ],
    isParagraph: true,
  },
  {
    heading: "Чтобы преобразовать JSON-строку в объект JavaScript, нам нужен другой метод JSON.parse().",
    answer: [
      "Когда вы получаете данные с сервера, они всегда имеют строковый формат. Чтобы преобразовать строку JSON в объект JavaScript, используйте метод JSON.parse(). Метод JSON.parse() разбирает строку JSON, возможно с преобразованием получаемого значения и его свойств и возвращает разобранное значение.",
      "      let stringJSON = '{'name' : 'Matt', 'age' : 21}' ",
      "      let student = JSON.parse(stringJSON)",
      "      console.log(student) // {name: 'Matt', age: 21} ",
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
