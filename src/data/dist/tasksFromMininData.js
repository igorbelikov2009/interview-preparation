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
            "console.log(flatten([[1], [[2, 3]], [[[4]]]])); // [1, 2, 3, 4] ",
            "console.log(flatten([[[1]], [[[2, 3]]], [[[[[4]]]]]])); // [1, 2, 3, 4] ",
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
        heading: "Какая строка встречается чаще всего.",
        href: "https://www.youtube.com/watch?v=x-EZy6gu_38",
        taskCode: [
            "Напишите функцию, которая принимает массив строк и возвращает самую частовстречающуюся строку в этом массиве. Если таких строк несколько, то нужно вернуть первую, идя слева на право. 21.02 ",
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
        heading: "Повернута ли строка? ",
        href: "https://www.youtube.com/watch?v=x-EZy6gu_38",
        taskCode: [
            "Напишите функцию, которая принимает 2 строки. Верните true если строки являются перевернутым вариантом друг друга (см. пример). Иначе верните false. 25.34 ",
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
        heading: "Является ли массив подмножеством другого массива.",
        href: "https://www.youtube.com/watch?v=x-EZy6gu_38",
        taskCode: [
            "Напишите функцию, которая проверяет, является ли второй массив подмножеством первого. То есть, есть ли элементы второго массива в первом. Повторяющиеся элементы второго массива считать отдельным элементом массива. 32.45",
            " ",
            "      function arraySubset(source: number[], subset: number[]) { ",
            "            if (source.length < subset.length) return false; ",
            " ",
            "            for (let i = 0; i < subset.length; i++) { ",
            "                  // Если элемент не найден, то нам возвращается -1",
            "                  const index = source.indexOf(subset[i]);",
            " ",
            "                  if (index === -1) {",
            "                  return false; ",
            "                  } ",
            "                  // Удаляем найденный элемент, что бы исключить повторяющиеся элементы массива. ",
            "                  delete source[index]; ",
            "            } ",
            "            return true; ",
            "      } ",
            " ",
            "console.log(arraySubset([2, 1, 3], [1, 2, 3])); // -> true ",
            "console.log(arraySubset([2, 1, 1, 3], [1, 2, 3])); // -> true ",
            "console.log(arraySubset([1, 1, 1, 3], [1, 3, 3])); // -> false ",
            "console.log(arraySubset([1, 2], [1, 2, 3])); // -> false ",
        ]
    },
    {
        heading: "Анаграммы ",
        href: "https://www.youtube.com/watch?v=x-EZy6gu_38",
        taskCode: [
            "Напишите функцию, которая проверяет, являются ли все элементы в массиве анаграммами друг друга. 37.52",
            " ",
            "Анаграмма-это слово или фраза, образованные путем перестановки букв другого слова или фразы, как правило, используя все исходные буквы ровно один раз. Например, само слово анаграмма может быть преобразовано в nag a ram, а также слово binary в brainy и слово Adobe в abode. ",
            " ",
            "Алгоритм проверки массива ['abcd', 'bdac', 'cabd'] на анаграммы следущий:",
            "1. Каждую строку разбиваем посимвольно в массив:  str.split('') ",
            "      console.log('abcd'.split('')); // ['a', 'b', 'c', 'd'] ",
            "      console.log('bdac'.split('')); // ['b', 'd', 'a', 'c']",
            "      console.log('cabd'.split('')); // ['c', 'a', 'b', 'd']",
            " ",
            "2. Затем каждый массив символов сортируем:             str.split('').sort()",
            "      console.log('abcd'.split('').sort()); // ['a', 'b', 'c', 'd'] ",
            "      console.log('bdac'.split('').sort()); // ['a', 'b', 'c', 'd']",
            "      console.log('cabd'.split('').sort()); // ['a', 'b', 'c', 'd']",
            " ",
            "3. Отсортированный массив преобразуем в строку     str.split('').sort().join('') ",
            "      console.log('abcd'.split('').sort().join('')); // abcd ",
            "      console.log('bdac'.split('').sort().join('')); // abcd",
            "      console.log('cabd'.split('').sort().join('')); // abcd",
            " ",
            "4. Из полученных строк составляем массив:",
            "      console.log(['abcd', 'bdac', 'cabd'].map((str) => str.split('').sort().join(''))); ",
            "      // ['abcd', 'abcd', 'abcd']",
            " ",
            "5. Сравниваем элементы массива между собой: ",
            "      if (sorted[i] !== sorted[0]) {.... ",
            " ",
            "Наша функция: // ['abcd', 'bdac', 'cabd']:",
            " ",
            "      function allAnagrams(array: string[]) { ",
            "            const sorted = array.map((str) => str.split('').sort().join('')); ",
            "            // Получаем массив sorted = ['abcd', 'abcd', 'abcd'] ",
            " ",
            "            for (let i = 0; i < sorted.length; i++) { ",
            "                  // Сравниваем элементы массива между собой ",
            "                  if (sorted[i] !== sorted[0]) { ",
            "                        // Если какой-то элемент массива не равен другим ",
            "                        return false; ",
            "                  } ",
            "            } ",
            "            // Если все элементы массива равны друг другу ",
            "            return true; ",
            "      } ",
            " ",
            "      console.log(allAnagrams(['abcd', 'bdac', 'cabd'])); // true ",
            "      console.log(allAnagrams(['abcd', 'bdXc', 'cabd'])); // false ",
        ]
    },
    {
        heading: "Перевернуть матрицу 3х3",
        href: "https://www.youtube.com/watch?v=x-EZy6gu_38",
        taskCode: [
            "Напишите функцию, которая принимает матрицу 3х3 и переворачивает на 90 градусов по часовой стрелке. 43.20 мин ",
            "Поворот на 90 градусов: ",
            "      const matrix = [ ",
            "            [ 1, 2, 3 ],                [ 7, 4, 1 ]  ",
            "            [ 4, 5, 6 ],      ->      [ 8, 5, 2 ] ",
            "            [ 7, 8, 9 ],                [ 9, 6, 3 ] ",
            "      ]; ",
            " ",
            "/* ",
            "Единичка занимает исходную позицию - нулевой массив:нулевой индекс 0:0. ",
            "Единичка переходит на новую позицию - нулевой массив:второй индекс 0:2 и т.д. ",
            "            0:0 0:1 0:2 -> 0:2 1:2 2:2 ",
            "            1:0 1:1 1:2 -> 0:1 1:1 2:1 ",
            "            2:0 2:1 2:2 -> 0:0 1:0 2:0 ",
            " ",
            "Сначала в matrix итерация идёт по расположению индекса в масссиве: 0 -> 1 -> 2. ",
            "Нам нужно поменять колонки на строчки. ",
            "*/ ",
            " ",
            "      function rotate(source: number[][]) { ",
            "            // Создаём новую матрицу, равную по размерности с исходной:",
            "            const rotated: number[][] = source[0].map((_) => []); // [ [], [], [] ]",
            "            // i отвечает за порядок массивов в матрице",
            "            for (let i = 0; i < source.length; i++) {",
            "                  // j отвечает за порядок элементов в массиве",
            "                  for (let j = 0; j < source[i].length; j++) {",
            "                        rotated[j][source.length - 1 - i] = source[i][j];",
            "                  }",
            "            }",
            "            return rotated;",
            "      } ",
            "      console.log(rotate(matrix)); ",
            "      /* ",
            "      [ 7, 4, 1 ]  ",
            "      [ 8, 5, 2 ]  ",
            "      [ 9, 6, 3 ]  ",
            "      */ ",
            " ",
            "Дополнительно: Напишите еще 2 функции, которые переворачивают матрицу на 180 и 270 градусов. ",
            "Поворот на 180 градусов:  ",
            "      function rotate180(source: number[][]) { ",
            "            return rotate(rotate(source));",
            "      } ",
            "      console.log(rotate180(matrix)); ",
            "      /* ",
            "      [ 9, 8, 7 ] ",
            "      [ 6, 5, 4 ] ",
            "      [ 3, 2, 1 ] ",
            "      */ ",
            " ",
            "Поворот на 270 градусов:  ",
            "      function rotate270(source: number[][]) { ",
            "      return rotate(rotate(rotate(source)));",
            "      } ",
            "      console.log(rotate270(matrix)); ",
            "      /* ",
            "      [ 3, 6, 9 ] ",
            "      [ 2, 5, 8 ] ",
            "      [ 1, 4, 7 ] ",
            "      */ ",
            " ",
            "Функция print() более наглядно выводит матрицу в консоль, чем console.log(). ",
            "      function print(array: number[][]) { ",
            "            array.forEach((i) => console.log(i));",
            "      } ",
            "      print(rotate(matrix)); ",
        ]
    },
    {
        heading: "Алгоритмы. Простой поиск. ",
        href: "https://www.youtube.com/watch?v=x-EZy6gu_38",
        taskCode: [
            "Напишите функцию, которая принимает отсортированный массив с числами и число. Необходимо вернуть индекс числа, если оно есть в массиве. Иначе вернуть -1. 56.12 ",
            "1-ый вариант: ",
            " ",
            "      function search(array: Array<number>, target: number) { ",
            "            for (let i = 0; i < array.length; i++) {",
            "                  if (array[i] === target) {",
            "                        return i;",
            "                  }",
            "            }",
            "            return -1;",
            "      } ",
            "",
            "      console.log(search([1, 3, 6, 13, 17], 13)); // -> 3",
            "      console.log(search([1, 3, 6, 13, 17], 12)); // -> -1",
            " ",
            "2-ой оптимизированный вариант: ",
            " ",
            "      function search(array: Array<number>, target: number) { ",
            "            let start = 0;",
            "            let end = array.length - 1;",
            "",
            "            if (target < array[start] || target > array[end]) {",
            "                  return -1;",
            "            }",
            "",
            "            while (true) {",
            "                  if (target === array[start]) {",
            "                        return start;",
            "                  }",
            "",
            "                  if (target === array[end]) {",
            "                        return end;",
            "                  }",
            "",
            "                  if (end - start <= 1) {",
            "                        return -1;",
            "                  }",
            "",
            "                  const middle = Math.floor((start + end) / 2);",
            "",
            "                  if (target > array[middle]) {",
            "                        start = middle + 1;",
            "                  } else if (target < array[middle]) {",
            "                        end = middle - 1;",
            "                  } else if (target === array[middle]) {",
            "                        return middle;",
            "                  }",
            "            }",
            "      } ",
            "",
            "      console.log(search([1, 3, 6, 13, 17], 6)); // -> 2 ",
            "      console.log(search([1, 3, 6, 13, 17], 13)); // -> 3 ",
            "      console.log(search([1, 3, 6, 13, 17], 17)); // -> 4 ",
            "      console.log(search([1, 3, 6, 13, 17], 12)); // -> -1 ",
        ]
    },
    {
        heading: "Алгоритмы. Сбалансированные скобки.",
        href: "https://www.youtube.com/watch?v=x-EZy6gu_38",
        taskCode: [
            "Напишите функцию, которая проверит строку на сбалансированность скобок: {}, (), []. Вернуть true если они сбалансированы, иначе false.  1.06.44. ",
            " ",
            "      interface IMapIndex { ",
            "            [key: string]: any;",
            "      } ",
            " ",
            "      function isBalanced(string: string) { ",
            "            const start = '{[(';",
            "            const end = '}])';",
            "            const map: IMapIndex = {",
            "                  '}': '{,",
            "                  ']': '[,",
            "                  ')': '(),",
            "            }; ",
            "",
            "            const queue: Array<string> = []; // очередь ",
            "",
            "            for (let i = 0; i < string.length; i++) {",
            "                  const char = string[i];",
            "                  if (start.includes(char)) {",
            "                        queue.push(char);",
            "                  } else if (end.includes(char)) {",
            "                        const last = queue.pop();",
            "                        if (map[char] !== last) {",
            "                              return false;",
            "                        }",
            "                  }",
            "            }",
            "            return !queue.length;",
            "      } ",
            " ",
            "console.log(isBalanced('(x + y) - (4)')); // -> true ",
            "console.log(isBalanced('(((10 ) ()) ((?)(:)))')); // -> true ",
            "console.log(isBalanced('[{()}]')); // -> true ",
            "console.log(isBalanced('(50)(')); // -> false ",
            "console.log(isBalanced('[{]}')); // -> false ",
        ]
    },
    {
        heading: "Алгоритмы. Очередь с О(1) сложностью операций.",
        href: "https://www.youtube.com/watch?v=x-EZy6gu_38",
        taskCode: [
            "Создайте очередь, в которой буду реализованы операции на добавление элементов в конец очереди, удаление первого элемента и вычисление размера очереди с сложностью алгоритма О(1). 1.14.22",
            " ",
        ]
    },
    {
        heading: "  ",
        href: "https://www.youtube.com/watch?v=x-EZy6gu_38",
        taskCode: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
    },
    {
        heading: "  ",
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
