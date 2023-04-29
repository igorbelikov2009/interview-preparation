"use strict";
/* eslint-disable no-useless-escape */
/* eslint-disable no-template-curly-in-string */
exports.__esModule = true;
exports.arrayTasksFromMinin = void 0;
exports.arrayTasksFromMinin = [
    {
        heading: "Уникальность всех символов в строке.",
        href: "https://www.youtube.com/watch?v=x-EZy6gu_38",
        taskCode: [
            "Необходимо написать функцию, которая определяет уникальны ли все символы в строке. Регистр должен учитываться: 'a' и 'A' это разные символы. ",
            " ",
            "1. Используем lastIndexOf(char) в цикле for().",
            "Учитывая то, что строка является итерируемым элементом, мы можем использовать цикл for(). Алгоритм этой задачи будет заключаться в том, что мы возьмём нулевой символ строки и будем сравнивать его со всеми оставшимися символами в строке. Если он повторяется, то мы сразу вернём false. Если повторений не будет найдено, тогда мы вернём true.   ",
            " ",
            "function isUnique(str: string) { ",
            "    for (let i = 0; i < str.length; i++) { ",
            "        const char = str[i]; ",
            "        if (str.lastIndexOf(char) !== i) {",
            "            return false;",
            "        }",
            "    }",
            "    return true; // return default",
            "} ",
            "console.log(isUnique('abcdef')); // true ",
            "console.log(isUnique('1234567')); // true ",
            "console.log(isUnique('abcABC')); // true ",
            "console.log(isUnique('abcade'));  // false ",
            "-*-",
            "2. Используем new Set(). ",
            "function isUnique(str: string) { ",
            "    const set = new Set(); ",
            "    for (let i = 0; i < str.length; i++) { ",
            "        const char = str[i]; ",
            "        // Если в нашем сэте присутствует символ чар, то мы выйдем из функции. ",
            "        if (set.has(char)) { ",
            "            return false; ",
            "        } ",
            "        // Если if не выполнился, то мы заносим в сэт этот символ ",
            "        set.add(char); ",
            "    } ",
            "    // Если в цикле мы не выполнили возврат из функции, значит все символы строки уникальны.",
            "    return true;",
            "} ",
            "console.log(isUnique('abcdef')); // true ",
            "console.log(isUnique('1234567')); // true ",
            "console.log(isUnique('abcABC')); // true ",
            "console.log(isUnique('abcade'));  // false ",
            "-*-",
            "3. Используем new Set(str).size ",
            "Когда мы передаём в сэт строчку, то сэт делает каждый символ уникальным, это его особенность. Далее, сравниваем длины этого сэта и строчки. Если они совпадают, то все символы в строке были уникальными. Но если, не совпадает, значит сэт что-то обрезал и были повторяющиеся символы. Используем свойство size для проверки длины: ",
            " ",
            "function isUnique(str: string) { ",
            "    return new Set(str).size === str.length; ",
            "} ",
            "console.log(isUnique('abcdef')); // true ",
            "console.log(isUnique('1234567')); // true ",
            "console.log(isUnique('abcABC')); // true ",
            "console.log(isUnique('abcade'));  // false ",
            "-*-",
        ]
    },
    {
        heading: "Плоский массив.",
        href: "https://www.youtube.com/watch?v=x-EZy6gu_38",
        taskCode: [
            "Напишите функцию, которая принимает массив с вложенными массивами и распакуйте в результирующий плоский массив. В результате мы должны получить новый одномерный массив.",
            "function flatten(array: any) { ",
            "    const res = []; ",
            "    for (let i = 0; i < array.length; i++) {",
            " // Дальше нам нужно проверить: является ли array[i] массивом? ",
            "        if (Array.isArray(array[i])) {",
            " // Ниже делаем рекурсию, она позволяет нам работать независимо от количества вложенностей. ",
            "             const flat: any = flatten(array[i]);",
            " ",
            "// Если array[i] является массивом, то нам снова нужно сделать по нему итерацию",
            "             for (let j = 0; j < flat.length; j++) {  ",
            "                 res.push(flat[j]);",
            "             }",
            "        } else {",
            "// Если нет, тогда",
            "            res.push(array[i]);",
            "        } ",
            "    } ",
            "    return res; ",
            "} ",
            " ",
            "// Используя рекурсию: const flat = flatten(array[i]), функция работает независимо от количества вложенностей: ",
            "console.log(flatten([[1], [[2, 3]], [[[4]]]])); //  [1, 2, 3, 4] ",
            "console.log(flatten([[[1]], [[[2, 3]]], [[[[[4]]]]]])); //  [1, 2, 3, 4] ",
            "-*-",
        ]
    },
    {
        heading: "Удаление всех повторяющихся значений в строке.",
        href: "https://www.youtube.com/watch?v=x-EZy6gu_38",
        taskCode: [
            "Напишите функцию, которая принимает строку и возвращает новую, в которой все дублирующие символы будут удалены. ",
            " ",
            "1. Вариант: ",
            "function removeDupes(str: string) { ",
            "    const res: string[] = []; ",
            "    const map: any = {}; ",
            " ",
            "    for (let i = 0; i < str.length; i++) { ",
            "        const char = str[i]; ",
            " ",
            "        // Если ещё нет такого символа, то мы его сюда занесём. ",
            "        if (!map[char]) { ",
            "            // Мэп по ключу чар будет равнятся тру. Это будет означать, что в объекте уже ",
            "            // присутствует ключ, например 'а', который будет равнятся тру.",
            "            map[char] = true;",
            " ",
            "            // Добавим наш символ в результирующий массив. ",
            "            res.push(char); ",
            " ",
            "// В следующий раз, если это будет дублирующие символы, if не сработает и добавления символов в res не произойдёт.",
            "        } ",
            "    } ",
            "    return res.join(''); ",
            "} ",
            "console.log(removeDupes('abcd')); // abcd ",
            "console.log(removeDupes('aabbccdd')); // abcd ",
            "console.log(removeDupes('abcdabcd')); // abcd ",
            "console.log(removeDupes('abacadacd')); // abcd ",
            "-*-",
            "2. Оптимизированный вариант с использованием Array.from() и new Set(). Функция Array.from() создаёт новый массив на основе переданного объекта. Объект должен быть либо массивоподобным (как строка или объект arguments), либо итерируемым (как Set или Map).",
            "function removeDupes(str: string) { ",
            "    return Array.from(new Set(str)).join(''); ",
            "} ",
            "console.log(removeDupes('abcd')); // abcd ",
            "console.log(removeDupes('aabbccdd')); // abcd ",
            "console.log(removeDupes('abcdabcd')); // abcd ",
            "console.log(removeDupes('abacadacd')); // abcd ",
            "-*-",
        ]
    },
    {
        heading: "Какая строка встречается чаще всего. 21.02",
        href: "https://www.youtube.com/watch?v=x-EZy6gu_38",
        taskCode: [
            "Напишите функцию, которая принимает массив строк и возвращает самую частовстречающуюся строку в этом массиве. Если таких строк несколько, то нужно вернуть первую, идя слева на право. ",
            " ",
            "Построим объект map, в котором ключом будет являться строка - элемент исходного массива, а значением будет количество повторений этосй строки в исходном массиве.",
            " ",
            "function highestFrequency(array: string[]) {",
            "        const map: { [index: string]: number } = {};",
            "        let maxFreq = 0; // максимальная частота повторений, по умолчанию 0.",
            "        let maxFreqStr = array[0]; // строчка, которая встречается чаще всего, по умолчанию нулевой элемент массива.",
            " ",
            "        for (let i = 0; i < array.length; i++) {",
            "                // если текущий элемент массива уже присутствует в объекте map,",
            "                if (map[array[i]]) {",
            "                        // то в этом случае мы будем увеличивать количество его повторений:",
            "                        map[array[i]]++;",
            " ",
            "                        // Если до этого нам не встречался такой элемент, то есть нет такого ключа в объекте,",
            "                } else {",
            "                        // тогда нам необходимо сказать, что эта строчка встретилась нам один раз",
            "                        map[array[i]] = 1;",
            "                }",
            " ",
            "                if (map[array[i]] > maxFreq) {",
            "                        maxFreq = map[array[i]];",
            "                        maxFreqStr = array[i];",
            "                }",
            "       }",
            "       return maxFreqStr;",
            "}",
            " ",
            "console.log(highestFrequency(['a', 'b', 'c', 'c', 'd', 'e'])); // -> c",
            "console.log(highestFrequency(['abc', 'def', 'abc', 'def', 'abc'])); // -> abc",
            "console.log(highestFrequency(['abc', 'def'])); // -> abc",
            "console.log(highestFrequency(['abc', 'abc', 'def', 'def', 'def', 'ghi', 'ghi', 'ghi', 'ghi'])); // -> ghi",
        ]
    },
    {
        heading: "Повернута ли строка? 25.34 ",
        href: "https://www.youtube.com/watch?v=x-EZy6gu_38",
        taskCode: [
            "Напишите функцию, которая принимает 2 строки. Верните true если строки являются перевернутым вариантом друг друга (см. пример). Иначе верните false. ",
            " ",
            "1-ый вариант решения. ",
            "                source - исходная строка. ",
            "                test - стока, которая даётся для сравнения с исходной. ",
            " ",
            "function isStringRotated(source: string, test: string) { ",
            "       if (source.length !== test.length) return false; ",
            " ",
            "       for (let i = 0; i < source.length; i++) {",
            "              // rotate - временный вариант для тестирования",
            "              const rotate = source.slice(i, source.length) + source.slice(0, i);",
            " ",
            "              if (rotate === test) {",
            "                     return true;",
            "              }",
            "       }",
            "       return false;",
            "}",
            " ",
            "console.log(isStringRotated('javascript', 'scriptjava')); // -> true",
            "console.log(isStringRotated('javascript', 'iptjavascr')); // -> true",
            "console.log(isStringRotated('javascript', 'java')); // -> false",
            " ",
            "2-ой вариант решения.",
            "                source - исходная строка. ",
            "                test - стока, которая даётся для сравнения с исходной. ",
            " ",
            "function isStringRotated(source: string, test: string) {",
            "       return (source + source).includes(test) && source.length === test.length;",
            "}",
            " ",
            "console.log(isStringRotated('javascript', 'scriptjava')); // -> true",
            "console.log(isStringRotated('javascript', 'iptjavascr')); // -> true",
            "console.log(isStringRotated('javascript', 'java')); // -> false",
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
];
