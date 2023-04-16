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
