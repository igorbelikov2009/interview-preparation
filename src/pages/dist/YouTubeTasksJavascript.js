"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion"); // анимация
var react_1 = require("react");
var PageLink_1 = require("../components/general/PageLink/PageLink");
var YouTubeTasksJavascript = function () {
    var links = [
        {
            href: "https://www.youtube.com/watch?v=APuD-xNMBGc",
            title: "Пересечения массивов — Задачи с собеседований"
        },
        {
            href: "https://www.youtube.com/watch?v=xa0Pv74CxlM&list=PLPiq_hi6UrQoIZVVTsHsadUmdMCve5Qdx&index=2",
            title: "JS Задачи: Каждую цифру в числе возвести в квадрат"
        },
        {
            href: "https://www.youtube.com/watch?v=qwJKLSTyZPk&list=PLPiq_hi6UrQoIZVVTsHsadUmdMCve5Qdx&index=2",
            title: "JS Задачи: Посчитать количество гласных в строке. .reduce() .filter() .includes()"
        },
        {
            href: "https://www.youtube.com/watch?v=jE4sn7hUkX4&list=PLPiq_hi6UrQoIZVVTsHsadUmdMCve5Qdx&index=4",
            title: "JS Задачи: Фабрика ботов. Удаляем гласные в строке .replace(/[euioa]/gi, '')"
        },
        {
            href: "https://www.youtube.com/watch?v=cJIr_zUElMc&list=PLPiq_hi6UrQoIZVVTsHsadUmdMCve5Qdx&index=4",
            title: "Найти наименьшее и наибольшее число в строке — JS Задачи"
        },
        {
            href: "https://www.youtube.com/watch?v=PYWkB2tOX6w&list=PLPiq_hi6UrQoIZVVTsHsadUmdMCve5Qdx&index=5",
            title: "Отсортировать цифры — JS Задачи"
        },
        {
            href: "https://www.youtube.com/watch?v=_9OOYBVfXjQ&list=PLPiq_hi6UrQoIZVVTsHsadUmdMCve5Qdx&index=6",
            title: "Мамблинг? — JS Задачи"
        },
        {
            href: "https://www.youtube.com/watch?v=IVZIuWgSP6s&list=PLPiq_hi6UrQoIZVVTsHsadUmdMCve5Qdx&index=7",
            title: "Оставить в массиве только числа — JS Задачи"
        },
        {
            href: "https://www.youtube.com/watch?v=6cKGc9LBdsQ&list=PLPiq_hi6UrQoIZVVTsHsadUmdMCve5Qdx&index=8",
            title: "Является ли число идеальным квадратом (имеет ли квадратный корень)? — JS Задачи"
        },
        {
            href: "https://www.youtube.com/watch?v=yzMejGUiStY&list=PLPiq_hi6UrQoIZVVTsHsadUmdMCve5Qdx&index=9",
            title: "Изограмма. Не повторяются ли буквы в строке? — JS Задачи"
        },
        {
            href: "https://www.youtube.com/watch?v=EeTa8TEnfgQ&list=PLPiq_hi6UrQoIZVVTsHsadUmdMCve5Qdx&index=10",
            title: "ЛУЧШИЙ СПОСОБ посчитать количество использования определенной буквы в строке? — JS Задачи"
        },
        {
            href: "https://www.youtube.com/watch?v=4nPeoE38HTQ&list=PLPiq_hi6UrQoIZVVTsHsadUmdMCve5Qdx&index=11",
            title: "Найти длину самого короткого слова — JS Задачи"
        },
        {
            href: "https://www.youtube.com/watch?v=rHRIXkV9HQ0&list=PLPiq_hi6UrQoIZVVTsHsadUmdMCve5Qdx&index=12",
            title: "Каждое слово с заглавной — JS Задачи"
        },
        {
            href: "https://www.youtube.com/watch?v=BZTPGEZqYuo&list=PLPiq_hi6UrQoIZVVTsHsadUmdMCve5Qdx&index=13",
            title: "Найти сумму чисел между А и В — Задачи с собеседований"
        },
        {
            href: "https://www.youtube.com/watch?v=0ow2FySJIfA&list=PLPiq_hi6UrQoIZVVTsHsadUmdMCve5Qdx&index=14",
            title: "XO + LOL = LOX — JS Задачи"
        },
        {
            href: "https://www.youtube.com/watch?v=jCrtqV0A7Mo&list=PLPiq_hi6UrQoIZVVTsHsadUmdMCve5Qdx&index=15",
            title: "Получить имена, состоящие из четырёх букв — JS Задачи"
        },
        {
            href: "https://www.youtube.com/watch?v=y7FsXcbxOv8&list=PLPiq_hi6UrQoIZVVTsHsadUmdMCve5Qdx&index=16",
            title: "Найти следующий идеальный квадрат — JS Задачи"
        },
        {
            href: "https://www.youtube.com/watch?v=7YcBiMC7XJ8&list=PLPiq_hi6UrQoIZVVTsHsadUmdMCve5Qdx&index=17",
            title: "Посчитать количество букв, не входящих в промежуток от А до М — JS Задачи"
        },
        {
            href: "https://www.youtube.com/watch?v=TXo6ocN1FZs&list=PLPiq_hi6UrQoIZVVTsHsadUmdMCve5Qdx&index=18",
            title: "Валидация PIN кода — JS Задачи"
        },
        {
            href: "https://www.youtube.com/watch?v=yjpRP-Q_B_4&list=PLPiq_hi6UrQoIZVVTsHsadUmdMCve5Qdx&index=19",
            title: "Сумма в двоичном представлении — JS Задачи"
        },
        {
            href: "https://www.youtube.com/watch?v=gC136VplPvc&list=PLPiq_hi6UrQoIZVVTsHsadUmdMCve5Qdx&index=20",
            title: "Можно ли построить треугольник? — JS Задачи"
        },
        {
            href: "https://www.youtube.com/watch?v=3HHx6t5NqtU&list=PLPiq_hi6UrQoIZVVTsHsadUmdMCve5Qdx&index=21",
            title: "Нечётная пирамида. Сумма чисел в строке N — Задачи с собеседований"
        },
        {
            href: "https://www.youtube.com/watch?v=veppXajCRYg&list=PLPiq_hi6UrQoIZVVTsHsadUmdMCve5Qdx&index=22",
            title: "Из двоичной системы счисления в десятичную — JS Задачи"
        },
        {
            href: "https://www.youtube.com/watch?v=2kMdSVov3sA&list=PLPiq_hi6UrQoIZVVTsHsadUmdMCve5Qdx&index=23",
            title: "Заканчивается ли строка определёнными символами? — JS Задачи"
        },
        {
            href: "https://www.youtube.com/watch?v=2W5oPNaIZtc&list=PLPiq_hi6UrQoIZVVTsHsadUmdMCve5Qdx&index=24",
            title: "Посчитать пассажиров в автобусе — Задачи с собеседований"
        },
        {
            href: "https://www.youtube.com/watch?v=5f-6MqSnk-I&list=PLPiq_hi6UrQoIZVVTsHsadUmdMCve5Qdx&index=25",
            title: "Чётная или нечётная сумма чисел в массиве — JS Задачи"
        },
        {
            href: "https://www.youtube.com/watch?v=84uzDcf2OIo&list=PLPiq_hi6UrQoIZVVTsHsadUmdMCve5Qdx&index=26",
            title: "Все элементы массива подходят под условие? — JS Задачи"
        },
        {
            href: "https://www.youtube.com/watch?v=ZZXjyTcSnkA&list=PLPiq_hi6UrQoIZVVTsHsadUmdMCve5Qdx&index=27",
            title: "Возвратить индекс среднего числа в массиве из трёх элементов — JS Задачи"
        },
        {
            href: "https://www.youtube.com/watch?v=Y1WzcRO9fNg&list=PLPiq_hi6UrQoIZVVTsHsadUmdMCve5Qdx&index=28",
            title: "Анаграмма — JS Задачи"
        },
        {
            href: "https://www.youtube.com/watch?v=VEw4H581h5c&list=PLPiq_hi6UrQoIZVVTsHsadUmdMCve5Qdx&index=29",
            title: "Факториал. Рекурсия. Обработка допустимых значений — JS Задачи"
        },
        {
            href: "https://www.youtube.com/watch?v=fr2JaGzLpek&list=PLPiq_hi6UrQoIZVVTsHsadUmdMCve5Qdx&index=30",
            title: "Найти индексы заглавных букв — JS Задачи"
        },
        {
            href: "https://www.youtube.com/watch?v=3QZFHgCiX70&list=PLPiq_hi6UrQoIZVVTsHsadUmdMCve5Qdx&index=31",
            title: "Избавится от подмассивов — JS Задачи"
        },
        {
            href: "https://www.youtube.com/watch?v=1h5Hi677bFE&list=PLPiq_hi6UrQoIZVVTsHsadUmdMCve5Qdx&index=32",
            title: "Найти лишнее число в массиве одинаковых элементов — JS Задачи"
        },
        {
            href: "https://www.youtube.com/watch?v=yQmomPZgYeM&list=PLPiq_hi6UrQoIZVVTsHsadUmdMCve5Qdx&index=33",
            title: "Отсортировать массив объектов — JS Задачи"
        },
        {
            href: "https://www.youtube.com/watch?v=qqCz0-7yxgc&list=PLPiq_hi6UrQoIZVVTsHsadUmdMCve5Qdx&index=34",
            title: "Сколько раз нужно сломать шоколадную плитку N x M? — Задачи с собеседований"
        },
        {
            href: "https://www.youtube.com/watch?v=onczhNMhM6E&list=PLPiq_hi6UrQoIZVVTsHsadUmdMCve5Qdx&index=35",
            title: "Каждому элементу массива задать порядковый префикс — JS Задачи"
        },
        {
            href: "https://www.youtube.com/watch?v=Fg6V6W9jGQs&list=PLPiq_hi6UrQoIZVVTsHsadUmdMCve5Qdx&index=36",
            title: "Удалить элемент из массива, не мутируя массив — JS Задачи"
        },
        {
            href: "https://www.youtube.com/watch?v=yvs43H1mc70&list=PLPiq_hi6UrQoIZVVTsHsadUmdMCve5Qdx&index=37",
            title: "Удалить 'якорь' из ссылки — JS Задачи"
        },
        {
            href: "https://www.youtube.com/watch?v=_pvEu0d5ncw&list=PLPiq_hi6UrQoIZVVTsHsadUmdMCve5Qdx&index=38",
            title: "Округлить число до следующего, кратного пяти — JS Задачи"
        },
        {
            href: "https://www.youtube.com/watch?v=936_xj4eZcM&list=PLPiq_hi6UrQoIZVVTsHsadUmdMCve5Qdx&index=39",
            title: "Возвратить все делители числа в виде отсортированного массива — JS Задачи"
        },
        {
            href: "https://www.youtube.com/watch?v=x6bwhwY4WUk&list=PLPiq_hi6UrQoIZVVTsHsadUmdMCve5Qdx&index=41",
            title: "Найти сумму внутренних углов n-стороннего многоугольника — JS Задачи"
        },
        {
            href: "tps://www.youtube.com/watch?v=Audug9Yyv2A&list=PLPiq_hi6UrQoIZVVTsHsadUmdMCve5Qdx&index=42",
            title: "Максимальное произведение двух соседних чисел в массиве — JS Задачи"
        },
        {
            href: "https://www.youtube.com/watch?v=LnuUKNSpf4A&list=PLPiq_hi6UrQoIZVVTsHsadUmdMCve5Qdx&index=43",
            title: "Длина цепи палиндрома — JS Задачи"
        },
        {
            href: "https://www.youtube.com/watch?v=XoKmzVPoQ_0&list=PLPiq_hi6UrQqH0oQGGP3jbrTrwXmkIqPS&index=2",
            title: "Кто лайкнул? — JS Задачи"
        },
        {
            href: "https://www.youtube.com/watch?v=WCIpXcwvXpw&list=PLPiq_hi6UrQqH0oQGGP3jbrTrwXmkIqPS&index=3",
            title: "Самая простая задача из ЕГЭ по информатике — JS Задачи"
        },
        {
            href: "https://www.youtube.com/watch?v=qSCy7RaJ6bg&list=PLPiq_hi6UrQqH0oQGGP3jbrTrwXmkIqPS&index=3",
            title: "Разность массивов — Задачи с собеседований"
        },
        {
            href: "https://www.youtube.com/watch?v=cNPsxKh4s5U",
            title: "Валидация строк со скобками — Задачи с собеседований"
        },
        {
            href: "https://www.youtube.com/watch?v=_HmpuK3ori0",
            title: "Перевести буквы в числа по их позиции в алфавите — Задачи с собеседований"
        },
        {
            href: "https://www.youtube.com/watch?v=hnmmm9iOAUo",
            title: "Схлопнуть соседние элементы — Задачи с собеседований"
        },
        {
            href: "https://www.youtube.com/watch?v=wE3YcgtTZlo",
            title: "Съешь ещё этих мягких французских булок, да выпей же чаю — Задачи с собеседований"
        },
        {
            href: "https://www.youtube.com/watch?v=DZ4oAPBmvDI",
            title: "Нарисовать ёлку из звёзд — Задачи с собеседований"
        },
        {
            href: "https://www.youtube.com/watch?v=JbaVl29kVbI",
            title: "Маска для телефонного номера — Задачи с собеседований"
        },
        {
            href: "https://www.youtube.com/watch?v=_HmpuK3ori0",
            title: "Перевести буквы в числа по их позиции в алфавите — Задачи с собеседований"
        },
        {
            href: "https://www.youtube.com/watch?v=_sGHC3PeBAc&list=PLPiq_hi6UrQo3ornWsqYnivc77kPn3Gwi&index=1",
            title: "JS Задачи: Элементарный калькулятор. Опасный eval() и старый добрый switch case"
        },
        {
            href: "https://www.youtube.com/watch?v=08BbEju_Lls&list=PLPiq_hi6UrQo3ornWsqYnivc77kPn3Gwi&index=2",
            title: "JS Задачи: Удвоить каждый элемент массива. .map()"
        },
        {
            href: "https://www.youtube.com/watch?v=awtOmYDEMY8&list=PLPiq_hi6UrQo3ornWsqYnivc77kPn3Gwi&index=3",
            title: "JS Задачи: Удалить пробелы из строки. Метод .replace() с регулярным выражением внутри"
        },
        {
            href: "https://www.youtube.com/watch?v=YOtvUrjpgq8&list=PLPiq_hi6UrQo3ornWsqYnivc77kPn3Gwi&index=4",
            title: "JS Задачи: Преобразовать число в перевернутый массив из чисел"
        },
        {
            href: "https://www.youtube.com/watch?v=oQ-0bm9-_yA&list=PLPiq_hi6UrQo3ornWsqYnivc77kPn3Gwi&index=5",
            title: "JS Задачи: Очистить строку от числовых символов"
        },
        {
            href: "https://www.youtube.com/watch?v=yzUEDvcvdZ4&list=PLPiq_hi6UrQo3ornWsqYnivc77kPn3Gwi&index=6",
            title: "JS Задачи: Перевести число из двоичной в десятичную систему счисления"
        },
        {
            href: "https://www.youtube.com/watch?v=mIYymAuA7AI",
            title: "Как удалить дубликаты из массива? 3 способа. (JavaScript)"
        },
        {
            href: "https://www.youtube.com/watch?v=ukx4y4HjhtI&list=PLPiq_hi6UrQqH0oQGGP3jbrTrwXmkIqPS&index=13",
            title: "Представление числа в расширенной нотации — Задачи с собеседований"
        },
        {
            href: "https://www.youtube.com/watch?v=F2eYgsFuuJ0&list=PLPiq_hi6UrQqH0oQGGP3jbrTrwXmkIqPS&index=13",
            title: "Получить из массива строк те, которые являются подстроками второго массива — Задачи с собеседований"
        },
        {
            href: "https://www.youtube.com/watch?v=rJw30E-9kC4&list=PLPiq_hi6UrQqH0oQGGP3jbrTrwXmkIqPS&index=14",
            title: "Представить прямоугольник в виде группы квадратов — Задачи с собеседований"
        },
        {
            href: "https://www.youtube.com/watch?v=_d3Q2xStf8E&list=PLPiq_hi6UrQqH0oQGGP3jbrTrwXmkIqPS&index=16",
            title: "Валидация IP-адреса — Задачи с собеседований"
        },
        {
            href: "https://www.youtube.com/watch?v=YLc1G12T_jY&list=PLPiq_hi6UrQqH0oQGGP3jbrTrwXmkIqPS&index=16",
            title: "Сколько ещё в очереди стоять? — Задачи с собеседований"
        },
        {
            href: "https://www.youtube.com/watch?v=Hnlf8W04vfk&list=PLPiq_hi6UrQqH0oQGGP3jbrTrwXmkIqPS&index=17",
            title: "Нарисовать таблицу умножения — Задачи с собеседований"
        },
        {
            href: "https://www.youtube.com/watch?v=c1GnHM2cHjo&list=PLPiq_hi6UrQqH0oQGGP3jbrTrwXmkIqPS&index=18",
            title: "Пропущенное число в прогрессии / Выводим формулу разности прогрессии? — Задачи с собеседований"
        },
        {
            href: "https://www.youtube.com/watch?v=dT7hc6lqyn0&list=PLPiq_hi6UrQqH0oQGGP3jbrTrwXmkIqPS&index=19",
            title: "Решётка заменила Backspace — Задачи с собеседований"
        },
        {
            href: "https://www.youtube.com/watch?v=0XwAo_P49V8&list=PLPiq_hi6UrQqH0oQGGP3jbrTrwXmkIqPS&index=21",
            title: "Свернуть массив N раз — Задачи с собеседований"
        },
        {
            href: "https://www.youtube.com/watch?v=sB4CA7tyRJI&list=PLPiq_hi6UrQqH0oQGGP3jbrTrwXmkIqPS&index=20",
            title: "Вывести большее из самых повторяющихся чисел в массиве — Задачи с собеседований"
        },
        {
            href: "https://www.youtube.com/watch?v=e9MvJCkhBjk&list=PLPiq_hi6UrQqH0oQGGP3jbrTrwXmkIqPS&index=21",
            title: "Сложение матриц — Задачи с собеседований"
        },
        {
            href: "",
            title: ""
        },
        // JS top
        {
            href: "",
            title: ""
        },
        {
            href: "",
            title: ""
        },
        {
            href: "",
            title: ""
        },
        {
            href: "",
            title: ""
        },
        {
            href: "",
            title: ""
        },
        {
            href: "",
            title: ""
        },
        {
            href: "",
            title: ""
        },
        {
            href: "",
            title: ""
        },
        {
            href: "",
            title: ""
        },
        {
            href: "",
            title: ""
        },
        {
            href: "",
            title: ""
        },
        {
            href: "",
            title: ""
        },
        {
            href: "",
            title: ""
        },
        {
            href: "",
            title: ""
        },
        {
            href: "",
            title: ""
        },
        {
            href: "",
            title: ""
        },
        {
            href: "",
            title: ""
        },
        {
            href: "",
            title: ""
        },
        {
            href: "",
            title: ""
        },
        {
            href: "",
            title: ""
        },
        {
            href: "",
            title: ""
        },
        {
            href: "",
            title: ""
        },
        {
            href: "",
            title: ""
        },
        {
            href: "",
            title: ""
        },
        {
            href: "",
            title: ""
        },
        {
            href: "",
            title: ""
        },
        {
            href: "",
            title: ""
        },
        {
            href: "",
            title: ""
        },
        {
            href: "",
            title: ""
        },
        {
            href: "",
            title: ""
        },
        {
            href: "",
            title: ""
        },
        {
            href: "",
            title: ""
        },
        {
            href: "",
            title: ""
        },
        {
            href: "",
            title: ""
        },
        {
            href: "",
            title: ""
        },
        {
            href: "",
            title: ""
        },
        {
            href: "",
            title: ""
        },
        {
            href: "",
            title: ""
        },
        {
            href: "",
            title: ""
        },
        {
            href: "",
            title: ""
        },
        {
            href: "",
            title: ""
        },
        {
            href: "",
            title: ""
        },
        {
            href: "",
            title: ""
        },
        {
            href: "",
            title: ""
        },
        {
            href: "",
            title: ""
        },
        {
            href: "",
            title: ""
        },
        {
            href: "",
            title: ""
        },
        {
            href: "",
            title: ""
        },
        {
            href: "",
            title: ""
        },
        {
            href: "",
            title: ""
        },
        {
            href: "",
            title: ""
        },
        {
            href: "",
            title: ""
        },
        {
            href: "",
            title: ""
        },
    ];
    return (react_1["default"].createElement(framer_motion_1.motion.div, { initial: { width: 0, opacity: 0 }, animate: { width: "100%", opacity: 1 }, exit: { x: window.innerWidth, transition: { duration: 0.1 }, opacity: 0 } },
        react_1["default"].createElement(PageLink_1["default"], { links: links, title: "\u0417\u0430\u0434\u0430\u0447\u0438 \u043F\u043E Javascript \u043D\u0430 Yuotube" })));
};
exports["default"] = YouTubeTasksJavascript;
