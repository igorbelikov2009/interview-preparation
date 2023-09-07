/* eslint-disable no-useless-escape */
/* eslint-disable no-template-curly-in-string */
import { ILinkInfo, IObjectHeadingAnswers } from "../models/types";

export const linksRegularExpression: ILinkInfo[] = [
  {
    href: "https://learn.javascript.ru/regular-expressions",
    title: "Регулярные выражения. Мощный учебник на JavaScript.",
  },
  {
    href: "https://www.youtube.com/watch?v=2CW1wVtnzi4",
    title: "Регулярные выражения в JavaScript за 1 час. Елена Литвинова.",
  },
  {
    href: "https://www.youtube.com/watch?v=_pLpx6btq6U",
    title: "Не бойтесь регулярных выражений. Regex за 20 минут! WebDev с нуля. Канал Алекса Лущенко.",
  },
  {
    href: "https://regexr.com",
    title: "Для тренировки",
  },
  {
    href: "http://website-lab.ru/article/regexp/shpargalka_po_regulyarnyim_vyirajeniyam/",
    title: "Шпаргалка по регулярным выражениям",
  },
  {
    href: "https://habr.com/ru/articles/545150/",
    title: "Регулярные выражения (regexp) — основы. Хабр.",
  },
  {
    href: "https://regex.sorokin.engineer/ru/latest/regular_expressions.html#regular-expressions-regex",
    title: "Регулярные выражения (RegEx)",
  },
];

export const arrayRegularExpression: IObjectHeadingAnswers[] = [
  {
    heading: "Регулярное выражение - это?",
    answer: [
      "Регулярное выражение — это способ поиска по строке, замене и тестированию строки на предмет каких-нибудь соответствий.",
    ],
    isParagraph: true,
  },
  {
    heading: "Объявление.",
    answer: [
      "1. new RegExp(`love${variable}`, 'flags') — можно сделать динамический паттерн.",
      "2. /pattern/gmi — статика.",
    ],
    isParagraph: true,
  },
  {
    heading: "Флаги.",
    answer: ["i — не чувствительный к регистру.", "g — возвращает все входящие буквы.", "m — поиск по всем строкам."],
    isParagraph: true,
  },
  {
    heading: "Методы.",
    answer: [
      "str.match(regex) — массив с найденным значением в 0 индексе и дополнительными свойствами. Если добавить флаг g, то будет массив из всех вхождений без свойств. Если ничего не найдено, то null.",
      "str.replace(regex, replacement) — если указан флаг g, то заменяет все найденный значения на replacement. Иначе заменяет только первое вхождение.",
      "regex.test(str) — тестирует строку по регулярному выражению.  Результат true или false.",
    ],
    isParagraph: true,
  },
  {
    heading: "Буквенные классы.",
    answer: [
      "d — любая одиночная цифра.  ",
      "s — пробел.  ",
      "w — символ латинской буквы, цифры или _ .",
      "D — любой символ кроме d. ",
      "S — любой символ кроме s. ",
      ". — это любой символ кроме начала строки. \n ",
      "  Пробел это тоже символ. ",
      " ",
    ],
    isParagraph: true,
  },
  {
    heading: "Якоря.",
    answer: ["^ — начало строки ё. ", "$ — конец строки. ", "\b — граница слова, смотрится именно символы букв. ", " "],
    isParagraph: true,
  },
  {
    heading: "Пропуск специальных символов.",
    answer: [
      "[  ^ $ . | ? * + ( ) /  ",
      "Пропуск через  экранирование.  ",
      "Если используется создание через выражение RegExp(str), то внутрь нужно два слеша, т.к. в строке есть собственный символ экранирования.",
    ],
    isParagraph: true,
  },
  {
    heading: "Наборы и диапазоны.",
    answer: [
      "[eao] — любой из символов, находят они только один символ. ",
      "[0-9a-zA-Z] — можно также передавать любые символы внутрь d, s.  ",
      "w = [a-zA-Z0-9_]  ",
      "[а-яё] ",
      "[^aeyo] — все символы кроме этих. ",
      "[^0-9] — не цифра . ",
      "[^/s] — не пробел.",
      "[.,] — это просто точка и запятая внутри скобок. ",
      "[-().^+] — поиск по этим символам.  ",
    ],
    isParagraph: true,
  },
  {
    heading: "Внутри квадратных скобок не обязательно добавлять экранирование для: ",
    answer: [
      "1.  ",
      "2. . + ()  ",
      "3. ",
      "4. -  не экранируется вначале.  ",
      "5.  ",
      "6. ^  требует экранирования только вначале.",
      "7.  ",
      "8. ] всегда требует экранирования . ",
      "Т.е. все специальные символы можно не экранировать, за исключением, когда они что-то значат для скобок.",
    ],
    isParagraph: true,
  },
  {
    heading: "Методы строки, которые позволяют проверить юникод.",
    answer: ["char.charCodeAt()  ", "String.fromCharCode() "],
    isParagraph: true,
  },
  {
    heading: "Квантификаторы. ",
    answer: ["{n} — точное количество n d{5} ", "{n1, n2} ", "{n, } "],
    isParagraph: true,
  },
  {
    heading: "Сокращения квантификаторов: ",
    answer: ["+ это {1, } ", "? это {0,1}  ", "* это {0,} "],
    isParagraph: true,
  },
  {
    heading: "Жадные и ленивые кванторы.",
    answer: [
      "Жадные кванторы идут по умолчанию, пока не дойдут до конца и потом возвращаются.",
      "Ленивые проверяют следующее условие сразу. Для включения лени нужно добавить ?.",
      "+? — ленивый квантификатор +.",
      "?? — ленивый квантификатор ?.",
      "*? — ленивый квантификатор *.",
    ],
    isParagraph: true,
  },
  {
    heading: "Группы захвата (Capturing groups)",
    answer: [
      "(..) — часть символов захваченные в скобки /(go)+/.test('gogogo') ",
      "Скобки для match: ",
      "Заключённый контент в скобках, также отображается str.match(/<(.*?)>/)  <h1> → <h1>, h1  ",
      "Скобки для replace:  ",
      "'Elena Litvinova'.replace(/(w+) (w+)/g, '$2, $1')  ",
      "Не захватывать в группу:  ",
      "Если в match и replace не хочется захватывать группу, то нужно добавить ?: ",
      "/(?:w+) (w+)/ ",
    ],
    isParagraph: true,
  },
  {
    heading: "Оператор ИЛИ ",
    answer: ["html | php | java  "],
    isParagraph: true,
  },
];
