import { ILinkInfo, IObjectHeadingAnswers } from "../models/types";

export const linksStringMethods: ILinkInfo[] = [
  {
    href: "https://tproger.ru/articles/metody-strok-v-javascript-shpargalka-dlja-nachinajushhih/",
    title: "Методы строк в JavaScript: простая шпаргалка с примерами",
  },
  {
    href: "https://basicweb.ru/javascript/js_string.php",
    title: "Методы строк",
  },
];

export const arrayStringMethods: IObjectHeadingAnswers[] = [
  {
    heading: "Строки ",
    answer: [
      "Любые текстовые данные в JavaScript считаются строками.  Это примитивный тип, но язык позволяет работать с ним так, будто он является объектом. В том числе — использовать  встроенные в JS методы строк, которые собраны в этой шпаргалке. ",
      "Важно:",
      "при использовании методов создаётся новая строка, которая записывается в ту же переменную вместо старой строки. ",
    ],
    isParagraph: true,
  },
  {
    heading: "Как изменить регистр: toLowerCase() и toUpperCase()",
    answer: [
      "toLowerCase(): преобразует символы в строке в нижний регистр.",
      "'Hello Tproger'.toLowerCase(); // 'hello tproger' ",
      " ----  ",
      "toUpperCase(): преобразует символы в строке в верхний регистр.",
      "'Hello Tproger'.toUpperCase(); // 'HELLO TPROGER' ",
    ],
    isParagraph: true,
  },
  {
    heading: "toLocaleLowerCase(). ",
    answer: [
      "toLocaleLowerCase(): 	Преобразует строку в строчные буквы (нижний регистр) с учетом текущего языкового стандарта.",
    ],
    isParagraph: true,
  },
  {
    heading: "toLocaleUpperCase(). ",
    answer: [
      "toLocaleUpperCase(): Преобразует строку в заглавные буквы (верхний регистр) с учетом текущего языкового стандарта.",
    ],
    isParagraph: true,
  },
  {
    heading: "Как объединить строки: concat().",
    answer: [
      "concat(): объединяет две или более строки и возвращает одну строку. ",
      "'Hello'.concat(' Tproger'); // 'Hello Tproger' ",
      " 'Hello'.concat(' T', 'p', 'r', 'o', 'g', 'e', 'r'); // 'Hello Tproger'",
    ],
    isParagraph: true,
  },
  {
    heading: "Как разделить строку на подстроки: split().",
    answer: [
      "split(): Разбивает строку в массив по указанному разделителю, которым может быть подстрока или регулярное выражение. Вторым параметром можно указать ограничитель.",
      "// Получаем каждый символ ",
      "'Hello Tproger'.split(''); // ['H', 'e', 'l', 'l', 'o', ' ', 'T', 'p', 'r', 'o', 'g', 'e', 'r'] ",
      "--- ",
      "// Получаем каждое слово из строки ",
      "'Hello Tproger'.split(' '); //['Hello', 'Tproger'] ",
      "--- ",
      "// Устанавливаем ограничитель ",
      "'Hello Tproger'.split(' ', 1); //['Hello'] ",
    ],
    isParagraph: true,
  },
  {
    heading: "Как повторить строку: repeat(). ",
    answer: [
      "repeat(): принимает в качестве параметра число и повторяет строку указанное количество раз. ",
      "'Tproger '.repeat(3); // 'Tproger Tproger Tproger ' ",
    ],
    isParagraph: true,
  },
  {
    heading: "Как найти подстроку: charAt(). ",
    answer: ["charAt(): Возвращает символ по указанному индексу.", "'Hello Tproger'.charAt(); // 'H' "],
    isParagraph: true,
  },
  {
    heading: "includes() ",
    answer: [
      "includes(): Проверяет, содержит ли строка указанную подстроку. Возвращает значение true или false. Вторым параметром можно указать позицию в строке, с которой следует начать поиск.",
      "'Hello Tproger'.includes('Tproger'); // true ",
      "'Hello Tproger'.includes('Hello', 1); // false ",
    ],
    isParagraph: true,
  },
  {
    heading: "indexOf() ",
    answer: [
      "indexOf(): Возвращает индекс первого найденного вхождения указанного значения. Поиск ведётся от начала до конца строки. Если совпадений нет, возвращает -1. Вторым параметром можно передать позицию, с которой следует начать поиск. ",
      "'Hello World'.indexOf('o'); // 4 ",
      "'Hello World'.indexOf('o', 5); // 7 ",
    ],
    isParagraph: true,
  },
  {
    heading: "lastIndexOf() ",
    answer: [
      "lastIndexOf(): ",
      "Возвращает индекс последнего найденного вхождения указанного значения. Поиск ведётся от конца к началу строки. Если совпадений нет, возвращает -1. Вторым параметром можно передать позицию, с которой следует начать поиск. ",
      "'Hello World'.lastIndexOf('o'); // 7 ",
      "'Hello World'.lastIndexOf('o', 5); // 4 ",
    ],
    isParagraph: true,
  },
  {
    heading: "endsWith() ",
    answer: [
      "endsWith(): Проверяет, заканчивается ли строка символами, заданными первым параметром. Возвращает true или false. Есть второй необязательный параметр — ограничитель по диапазону поиска. По умолчанию он равен длине строки.",
      "'Hello Tproger'.endsWith('Tproger'); // true ",
      "'Hello Tproger'.endsWith('Tproger', 12); // false ",
    ],
    isParagraph: true,
  },
  {
    heading: "startsWith() ",
    answer: [
      "startsWith(): Проверяет, начинается ли строка с указанных символов. Возвращает true или false. Вторым параметром можно указать индекс, с которого следует начать проверку.",
      "'Hello Tproger'.startsWith('Hello'); // true ",
      "'Hello Tproger'.startsWith('Hello', 1); // false ",
    ],
    isParagraph: true,
  },
  {
    heading: "search() ",
    answer: [
      "search(): Проверяет, есть ли в строке указанное значение или регулярное выражение и возвращает индекс начала совпадения.",
      "'hi, hello, hey'.search('hello'); // 4 ",
    ],
    isParagraph: true,
  },
  {
    heading: "Как извлечь подстроку, slice().",
    answer: [
      "slice(): Извлекает часть строки и возвращает новую строку. Обязательный параметр — начало извлечения. Вторым параметром можно установить границу (по умолчанию — до конца строки).",
      "'Методы строк на Tproger'.slice(16); // 'Tproger' ",
      "'Методы строк на Tproger'.slice(16, 21); // 'Tprog' ",
      "--- ",
      "// Отрицательные значения тоже работают ",
      "'Методы строк на Tproger'.slice(-7); // 'Tproger' ",
      "'Методы строк на Tproger'.slice(-7, -2); // 'Tprog' ",
    ],
    isParagraph: true,
  },
  {
    heading: "substring() ",
    answer: [
      "substring(): Извлекает символы из строки между двумя указанными индексами. Второй индекс указывать не обязательно. В таком случае будут извлечены все символы от начала до конца строки. В отличие от slice, можно задавать start больше, чем end. Отрицательные значения не поддерживаются, они интерпретируются как 0.",
      "'Методы строк на Tproger'.substring(5, 2); // 'тод' ",
    ],
    isParagraph: true,
  },
  {
    heading: "substr() ",
    answer: [
      "substr(): Извлекает часть строки указанной длины. Первым параметром принимает стартовую позицию, вторым — длину. Значение первого параметра может быть отрицательным, тогда позиция определяется с конца строки.",
      "'Методы строк на Tproger'.substr(7, 5); // 'строк' ",
      "'Методы строк на Tproger'.substr(-7, 5); // 'Tprog' ",
    ],
    isParagraph: true,
  },
  {
    heading: "Как заменить подстроку, replace().",
    answer: [
      "replace(): Ищет в строке указанное значение или регулярное выражение и возвращает новую строку, в которой выполнена замена на второй параметр. Можно заменить найденные значения другой строкой или передать функцию для работы над совпадениями.",
      "'hi, hello, hi'.replace('hi', 'hey'); // 'hey, hello, hi' ",
      "'hi, hello, hi'.replace(/hi/g, 'hey'); // 'hey, hello, hey' ",
    ],
    isParagraph: true,
  },
  {
    heading: "replaceAll() ",
    answer: [
      "replaceAll(): Даёт такой же результат, как метод replace() с глобальным флагом g. Заменяет все найденные совпадения другой строкой или переданной функцией.",
      "'hi, hello, hi'.replaceAll('hi', 'hey'); // 'hey, hello, hey' ",
    ],
    isParagraph: true,
  },
  {
    heading: "Как добавить в строку пробелы или другие символы, padEnd(). ",
    answer: [
      "padEnd(): Добавляет в конце отступы, пока строка не достигнет длины, заданной первым параметром. Вторым параметром можно указать другой символ вместо пробела.",
      "'Hello Tproger'.padEnd(20, '*'); // 'Hello Tproger*******' ",
    ],
    isParagraph: true,
  },
  {
    heading: "padStart(). ",
    answer: [
      "padStart(): Добавляет в начале отступы, пока строка не достигнет длины, заданной первым параметром. Вторым параметром можно указать другой символ вместо пробела.",
      "'Hello Tproger'.padStart(20, '*'); // '*******Hello Tproger' ",
    ],
    isParagraph: true,
  },
  {
    heading: "Как удалить пробелы в строке, trim(). ",
    answer: ["trim(): Обрезает пробелы с обоих концов строки.", "'   Hello Tproger '.trim(); // 'Hello Tproger' "],
    isParagraph: true,
  },
  {
    heading: "trimEnd(). ",
    answer: ["trimEnd(): Обрезает пробелы в конце строки", "'   Hello Tproger '.trimEnd(); // '   Hello Tproger' "],
    isParagraph: true,
  },
  {
    heading: "trimStart(). ",
    answer: ["trimStart(): Обрезает пробелы в начале строки", "'   Hello Tproger '.trimStart(); // 'Hello Tproger ' "],
    isParagraph: true,
  },
  {
    heading: "Как работать с Юникодом, charCodeAt().",
    answer: [
      "charCodeAt(): Возвращает числовое значение Юникода по указанному индексу. Обратите внимание: у букв в верхнем и нижнем регистрах разные коды.",
      "'T'.charCodeAt() // 84 ",
      "'t'.charCodeAt() // 116 ",
    ],
    isParagraph: true,
  },
  {
    heading: "fromCharCode(). ",
    answer: [
      "fromCharCode(): Преобразует числовые значения Юникода в читаемые символы.",
      "String.fromCharCode(72, 101, 108, 108, 111); // 'Hello' ",
    ],
    isParagraph: true,
  },
  {
    heading: "codePointAt() ",
    answer: [
      "Возвращает неотрицательное целое число, являющееся значением кодовой точки в стандарте кодирования символов Unicode (Юникод)",
    ],
    isParagraph: true,
  },
  {
    heading: "fromCodePoint()",
    answer: [
      "Преобразует значение или значения кодовых точек в стандарте кодирования символов Юникод в символы и возвращает строковое значение. Позволяет работать со значениями выше 65535.",
    ],
    isParagraph: true,
  },
  {
    heading: "normalize(). ",
    answer: [
      "normalize(): Возвращает форму нормализации в стандарте кодирования символов Unicode (Юникод) для указанной строки.",
    ],
    isParagraph: true,
  },
  {
    heading: "Сравнение строк, localeCompare().",
    answer: [
      "localeCompare(): Сравнивает две строки и определяет являются ли они эквивалентными в текущем языковом стандарте.",
    ],
    isParagraph: true,
  },
  {
    heading: "Поиск по заданной строке match()",
    answer: [
      "match(): Производит поиск по заданной строке с использованием регулярного выражения (глобальный объект RegExp) и возвращает массив, содержащий результаты этого поиска.",
    ],
    isParagraph: true,
  },
  {
    heading: "toString()",
    answer: ["toString(): Возвращает значение строкового объекта."],
    isParagraph: true,
  },
  {
    heading: "valueOf() ",
    answer: ["valueOf(): Возвращает примитивное значение строкового объекта в виде строкового типа данных."],
    isParagraph: true,
  },
];
