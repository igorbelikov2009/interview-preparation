"use strict";
/* eslint-disable no-useless-escape */
/* eslint-disable no-template-curly-in-string */
exports.__esModule = true;
exports.arrayTasks = void 0;
exports.arrayTasks = [
    {
        heading: "Удалить пробелы из строки. Метод string.replace() с регулярным выражением внутри.",
        href: "https://www.youtube.com/watch?v=awtOmYDEMY8&list=PLPiq_hi6UrQo3ornWsqYnivc77kPn3Gwi&index=4",
        taskCode: [
            "const [ str, setStr ] = useState(' ftu ft ggwr '); ",
            "const [ strNoSpace, setStrNoSpace ] = useState(''); ",
            "- ",
            "function noSpace(x: string) { ",
            "         return x.replace(/s/g, ''''); ",
            "} ",
            "useEffect(() => {",
            "         setStrNoSpace(noSpace(str)); ",
            "}, [ str ]); ",
            "- ",
            "   console.log(str); // ' ftu ft ggwr ' ",
            "   console.log(strNoSpace); // ftuftggwr ",
            "-*- ",
        ]
    },
    {
        heading: "Очистить строку от числовых символов. Метод string.replaceAll() с регулярным выражением внутри. ",
        href: "https://www.youtube.com/watch?v=oQ-0bm9-_yA&list=PLPiq_hi6UrQo3ornWsqYnivc77kPn3Gwi&index=6",
        taskCode: [
            "const [ elem ] = useState( 'This looks5 grea8te' ); ",
            "const [ elemClear, setElemClear ] = useState( '' );",
            "- ",
            "function stringCleaner( s: string ) { ",
            "      return s.replaceAll( /d/g, '''' );",
            "} ",
            "useEffect(() => { ",
            "      setElemClear( stringCleaner( elem )); ",
            "}, [ elem ]); ",
            "- ",
            "   console.log( elem ); // 'This looks5 grea8te' ",
            "   console.log( elemClear ); // This looks greate ",
            "-*- ",
        ]
    },
    {
        heading: "Чётное или нечётное? ",
        href: "https://www.youtube.com/watch?v=KwU3wq5DT90&t=77s",
        taskCode: [
            "const number = 1263; ",
            "const number2 = 1264; ",
            "- ",
            "function even_or_odd(number: number) { ",
            "      return number % 2 === 0 ? 'чётное' : 'нечётное'; ",
            "}",
            "- ",
            "   console.log(even_or_odd(number)); // нечётное ",
            "   console.log(even_or_odd(number2)); // чётное ",
            "-*- ",
        ]
    },
    {
        heading: "Вывод пользователей, которые лайкнули публикацию. Используем switch. ",
        href: "https://www.youtube.com/watch?v=XoKmzVPoQ_0&list=PLPiq_hi6UrQqH0oQGGP3jbrTrwXmkIqPS&index=1&t=20s",
        taskCode: [
            "Дан массив пользователей, которые лайкнули публикацию. Необходимо вывести имена этих пользователей строкой. Используем конструкцию switch.",
            "const printPeopleLiked = (names: string[]) => { ",
            "  switch (names.length) { ",
            "     case 0:",
            "       return 'Нет лайков';",
            "     case 1:",
            "       return `${names[0]} поставил лайк`;",
            "     case 2:",
            "       return `${names[0]} и ${names[1]} поставили лайк`;",
            "     case 3:",
            "       return `${names[0]}, ${names[1]} и ${names[2]} поставили лайк`;",
            "     default:",
            "       return `${names[0]}, ${names[1]} и ещё ${names.length - 2} поставили лайк`;",
            "  } ",
            "}; ",
            "console.log(printPeopleLiked([])); // Нет лайков ",
            "console.log(printPeopleLiked(['Max'])); // Max поставил лайк ",
            "console.log(printPeopleLiked(['Max', 'Asy'])); // Max и Asy поставили лайк ",
            "console.log(printPeopleLiked(['Max', 'Asy', 'Gleb'])); // Max, Asy и Gleb поставили лайк ",
            "console.log(printPeopleLiked(['Max', 'Asy', 'Gleb', 'Vika'])); // Max, Asy и ещё 2 поставили лайк ",
            "console.log(printPeopleLiked(['Max', 'Asy', 'Gleb', 'Vika', 'Boris', 'Andrey'])); // Max, Asy и ещё 4 поставили лайк ",
        ]
    },
    {
        heading: "Нужно найти сумму всех чисел, кратных 3 или 5.",
        href: "https://www.youtube.com/watch?v=WCIpXcwvXpw&list=PLPiq_hi6UrQqH0oQGGP3jbrTrwXmkIqPS&index=2",
        taskCode: [
            "Нужно найти сумму всех чисел, кратных 3 или 5, меньше переданного числа. Например, переданное число 16. Находим все числа, кратные 3 или 5, суммируем их и получаем результат.  ",
            "",
            "16 => 3 + 5 + 6 + 9 + 10 + 12 + 15 => 60. ",
            "- ",
            "const sum35 = ( n: number ) => { ",
            "    let sum = 0; ",
            "    for ( let i = 3; i < n; i++ ) { ",
            "        if ( i % 3 === 0 || i % 5 === 0 ) { ",
            "          sum += i; ",
            "        } ",
            "    } ",
            "    return sum;",
            "}; ",
            "- ",
            "console.log( sum35( 16 )); // 60 ",
            "console.log( sum35( 25 )); // 143 ",
            "-*- ",
        ]
    },
    {
        heading: "Разность массивов. Исключить из массива группу элементов другого массива. ",
        href: "https://www.youtube.com/watch?v=qSCy7RaJ6bg&list=PLPiq_hi6UrQqH0oQGGP3jbrTrwXmkIqPS&index=3",
        taskCode: [
            "Как исключить из массива группу элементов из другого массива, например: ",
            "arrayDiff = ( [ 1, 2, 8, 2, 7, 3 ], [ 7, 2 ] ) => [ 1, 8, 3 ] ",
            "const arrayDiff = (source: number[], diff: number[]) => { ",
            "    // Метод filter отсечёт ненужные элементы по условию. Оставим в ",
            "    // результате только такие элементы, которые не входят в массив diff. ",
            "    return source.filter((item) => !diff.includes(item)); ",
            " }; ",
            "- ",
            "useEffect(() => { ",
            "    console.log(arrayDiff([2, 3, 4, 5, 6, 7, 8], [7, 2])); // (5) [3, 4, 5, 6, 8]",
            "  }, []); ",
            "-*- ",
        ]
    },
    {
        heading: "Как отформатировать строку и превратить её в телефонный номер. ",
        href: "https://www.youtube.com/watch?v=JbaVl29kVbI&list=PLPiq_hi6UrQqH0oQGGP3jbrTrwXmkIqPS&index=4",
        taskCode: [
            "Дана строка '1234567890'. Нужно первые три символа обернуть в скобки, потом пробел, потом три символа, дефис и ещё четыре символа: (123) 456-7890.",
            "Для подобных задач пригодятся регулярные выражения, а точнее, скобочные выражения для нахождения подстрок и метод replace().  ",
            "    // Первым аргументом в методе: поиск совпадений в строке. В нашем случае нужно запомнить первые три числовые символа (/d{3}).  (Здесь должен быть обратный слэш.) ",
            "    // Подобным образом запомним следующие 3 числа (/d{3}) и 4 после (/d{4}). (Здесь должен быть обратный слэш.) ",
            "    // Для замены текста используем обозначение '($1) $2-$3': ($1 оборачиваем в скобки - пробел, $2 - дефис, $3)",
            "- ",
            "const createPhoneNumber = (str: string) => { ",
            "    return str.replace(/(/d{3})(/d{3})(/d{4})/, '($1) $2-$3'); // (Здесь должен быть обратный слэш.)  ",
            "}; ",
            "- ",
            "useEffect(() => { ",
            "    console.log(createPhoneNumber('1234567890')); // (123) 456-7890 ",
            "}, []); ",
            "-*-",
        ]
    },
    {
        heading: "Перевести буквы в числа по их позиции в алфавите. ",
        href: "https://www.youtube.com/watch?v=_HmpuK3ori0&list=PLPiq_hi6UrQqH0oQGGP3jbrTrwXmkIqPS&index=5",
        taskCode: [
            "Как перевести слово в группу чисел, где каждое число - позиция буквы в алфавите. Если слово 'Азбука', то нужно превратить его в '1 8 2 20 11 1' .",
            "Для начала стандартной операции для преобразования строки, приведём её к нижнему регистру (toLowerCase()), разделим посимвольно (split('')) и будем использовать метод map(), который будет трансформировать каждый элемент массива в коллбэк внутри с одним аргументом (char => charCodeAt()). Метод charCodeAt() возвращает числовое значение юниткода для символа по указанному индексу.",
            "'Азбука'.charCodAt(0) // 1040. То есть заглавная русская буква А хранится в юникод под номером 1040. ",
            "'азбука'.charCodAt(0) // 1072. Маленькая русская буква 'а' хранится в юникод под номером 1072.",
            "  Значит, вычитая из результата число 1071, мы будем получать позицию каждой буквы в алфавите.",
            "console.log('азбука'.charCodeAt(0) - 1071); // 1 ",
            "console.log('азбука'.charCodeAt(1) - 1071); // 8 ",
            "console.log('азбука'.charCodeAt(2) - 1071); // 2 ",
            "console.log('азбука'.charCodeAt(3) - 1071); // 20 ",
            "console.log('азбука'.charCodeAt(4) - 1071); // 11 ",
            "console.log('азбука'.charCodeAt(5) - 1071); // 1 ",
            "-",
            "Наша общая функция будет выглядеть так: ",
            "const alphabetPosition = (str: string) => { ",
            "    return str ",
            "        .toLowerCase() ",
            "        .split('') // по пустому разделителю",
            "        .map((char) => char.charCodeAt(0) - 1071)",
            "        .join(' '); // по пробелу",
            "}; ",
            "console.log(alphabetPosition('Азбука')); // 1 8 2 20 11 1 ",
            "-*-",
        ]
    },
    {
        heading: "Схлопнуть соседние элементы. ",
        href: "https://www.youtube.com/watch?v=hnmmm9iOAUo&list=PLPiq_hi6UrQqH0oQGGP3jbrTrwXmkIqPS&index=6",
        taskCode: [
            "Напишите функцию, которая принимает последовательность (это может быть массив или строка) и возвращает массив, где повторяющиеся сосоедние элементы схлопнулись до одного. Исходный порядок элементов нужно сохранить. ",
            "Решим эту задачу через фильтр. Для этого развернём нашу последовательность на входе ( iterable ) => [ ...iterable ]. Мы получим массив, даже если заспредим строку. Затем отфильтруем элементы этого массива таким образом, чтобы в новый массив попали только те элементы, которые не равны элементу из последовательности по индексу и -1",
            "Наша функция будет выглядеть так:",
            "function uniqueInOrder(iterable: string | string[] | number[]) { ",
            "    return [...iterable].filter((el, index) => el !== iterable[index - 1]); ",
            "} ",
            "- ",
            "console.log(uniqueInOrder('AAAABBBCCDAABBB')); // ['A', 'B', 'C', 'D', 'A', 'B'] ",
            "console.log(uniqueInOrder('ABBCcAD')); // ['A', 'B', 'C', 'c', 'A', 'D'] ",
            "console.log(uniqueInOrder(['A', 'A', 'A', 'B', 'B', 'C', 'C', 'D', 'A', 'A', 'B', 'B', 'B'])); // ['A', 'B', 'C', 'D', 'A', 'B'] ",
            "console.log(uniqueInOrder([1, 1, 2, 2, 2, 3, 3, 4, 4])); // [1, 2, 3, 4] ",
            "-*-",
        ]
    },
    {
        heading: " ",
        href: "",
        taskCode: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
    },
    {
        heading: " ",
        href: "",
        taskCode: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
    },
    {
        heading: " ",
        href: "",
        taskCode: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
    },
    {
        heading: " ",
        href: "",
        taskCode: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
    },
    {
        heading: " ",
        href: "",
        taskCode: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
    },
    {
        heading: " ",
        href: "",
        taskCode: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
    },
    {
        heading: " ",
        href: "",
        taskCode: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
    },
    {
        heading: " ",
        href: "",
        taskCode: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
    },
    {
        heading: " ",
        href: "",
        taskCode: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
    },
    {
        heading: " ",
        href: "",
        taskCode: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
    },
    {
        heading: " ",
        href: "",
        taskCode: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
    },
    {
        heading: " ",
        href: "",
        taskCode: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
    },
    {
        heading: " ",
        href: "",
        taskCode: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
    },
    {
        heading: " ",
        href: "",
        taskCode: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
    },
    {
        heading: " ",
        href: "",
        taskCode: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
    },
    {
        heading: " ",
        href: "",
        taskCode: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
    },
    {
        heading: " ",
        href: "",
        taskCode: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
    },
    {
        heading: " ",
        href: "",
        taskCode: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
    },
    {
        heading: " ",
        href: "",
        taskCode: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
    },
    {
        heading: " ",
        href: "",
        taskCode: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
    },
    {
        heading: " ",
        href: "",
        taskCode: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
    },
    {
        heading: " ",
        href: "",
        taskCode: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
    },
    {
        heading: " ",
        href: "",
        taskCode: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
    },
    {
        heading: " ",
        href: "",
        taskCode: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
    },
    {
        heading: " ",
        href: "",
        taskCode: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
    },
    {
        heading: " ",
        href: "",
        taskCode: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
    },
    {
        heading: " ",
        href: "",
        taskCode: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
    },
    {
        heading: " ",
        href: "",
        taskCode: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
    },
    {
        heading: " ",
        href: "",
        taskCode: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
    },
    {
        heading: " ",
        href: "",
        taskCode: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
    },
    {
        heading: " ",
        href: "",
        taskCode: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
    },
    {
        heading: " ",
        href: "",
        taskCode: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
    },
    {
        heading: " ",
        href: "",
        taskCode: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
    },
    {
        heading: " ",
        href: "",
        taskCode: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
    },
    {
        heading: " ",
        href: "",
        taskCode: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
    },
    {
        heading: " ",
        href: "",
        taskCode: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
    },
    {
        heading: " ",
        href: "",
        taskCode: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
    },
    {
        heading: " ",
        href: "",
        taskCode: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
    },
    {
        heading: " ",
        href: "",
        taskCode: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
    },
    {
        heading: " ",
        href: "",
        taskCode: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
    },
    {
        heading: " ",
        href: "",
        taskCode: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
    },
    {
        heading: " ",
        href: "",
        taskCode: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
    },
    {
        heading: " ",
        href: "",
        taskCode: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
    },
    {
        heading: " ",
        href: "",
        taskCode: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
    },
    {
        heading: " ",
        href: "",
        taskCode: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
    },
    {
        heading: " ",
        href: "",
        taskCode: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
    },
    {
        heading: " ",
        href: "",
        taskCode: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
    },
    {
        heading: " ",
        href: "",
        taskCode: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
    },
    {
        heading: " ",
        href: "",
        taskCode: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
    },
    {
        heading: " ",
        href: "",
        taskCode: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
    },
    {
        heading: " ",
        href: "",
        taskCode: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
    },
    {
        heading: " ",
        href: "",
        taskCode: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
    },
    {
        heading: " ",
        href: "",
        taskCode: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
    },
    {
        heading: " ",
        href: "",
        taskCode: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
    },
    {
        heading: " ",
        href: "",
        taskCode: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
    },
    {
        heading: " ",
        href: "",
        taskCode: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
    },
    {
        heading: " ",
        href: "",
        taskCode: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
    },
    {
        heading: " ",
        href: "",
        taskCode: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
    },
    {
        heading: " ",
        href: "",
        taskCode: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
    },
    {
        heading: " ",
        href: "",
        taskCode: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
    },
    {
        heading: " ",
        href: "",
        taskCode: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
    },
    {
        heading: " ",
        href: "",
        taskCode: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
    },
    {
        heading: " ",
        href: "",
        taskCode: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
    },
    {
        heading: " ",
        href: "",
        taskCode: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
    },
    {
        heading: " ",
        href: "",
        taskCode: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
    },
];
