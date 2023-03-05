import { ILinkInfo, IObjectHeadingAnswers } from "../models/types";

export const linksDOM: ILinkInfo[] = [
  {
    href: "https://learn.javascript.ru/modifying-document#metody-vstavki",
    title: "Методы вставки и удаления node",
  },
  {
    href: " ",
    title: " ",
  },
  {
    href: " ",
    title: " ",
  },
  {
    href: " ",
    title: " ",
  },
];

export const arrayDOM: IObjectHeadingAnswers[] = [
  {
    heading: "Что такое DOM?",
    answer: [
      "DOM (Document Object Model, объектная модель документа) — это программный интерфейс к HTML-документам. Этот интерфейс позволяет воздействовать на документ из скриптов, меняя его оформление, стили, содержимое. В DOM документ представлен в виде дерева узлов.",
      "Объект document – основная «входная точка». С его помощью мы можем что-то создавать или менять на странице. ",
      " - заменим цвет фона на красный, document.body.style.background = ''red''",
      " - а через секунду вернём как было  setTimeout(() => document.body.style.background = '' '', 1000);",
    ],
    isParagraphBefore: true,
  },
  {
    heading: "Основой HTML-документа являются теги.",
    answer: [
      "В соответствии с DOM, каждый HTML-тег является объектом. Вложенные теги являются «детьми» родительского элемента. Текст, который находится внутри тега, также является объектом.",
      "Теги являются узлами-элементами (или просто элементами). Они образуют структуру дерева: html – это корневой узел, head и body его дочерние узлы и т.д.",
      "Текст внутри элементов образует текстовые узлы, обозначенные как #text. Текстовый узел содержит в себе только строку текста. У него не может быть потомков, т.е. он находится всегда на самом нижнем уровне.",
      " ",
    ],
    isParagraphBefore: true,
  },
  {
    heading: "Автоисправление",
    answer: [
      "Если браузер сталкивается с некорректно написанным HTML-кодом, он автоматически корректирует его при построении DOM.",
      "Например, в начале документа всегда должен быть тег html. Даже если его нет в документе – он будет в дереве DOM, браузер его создаст. То же самое касается и тега body.",
      "Например, если HTML-файл состоит из единственного слова ''Привет'', браузер обернёт его в теги html и body, добавит необходимый тег head. ",
      "При генерации DOM браузер самостоятельно обрабатывает ошибки в документе, закрывает теги и так далее. ",
    ],
    isParagraphBefore: true,
  },
  {
    heading: "Навигация по DOM-элементам",
    answer: [
      "Все операции с DOM начинаются с объекта document. Это главная «точка входа» в DOM. Из него мы можем получить доступ к любому узлу.",
      "Самые верхние элементы дерева доступны как свойства объекта document. Самый верхний узел документа (html):",
      " - document.documentElement. Далее:",
      " - document.body.",
      " - document.head.",
      "Дочерние узлы (или дети) – элементы, которые являются непосредственными детьми узла. Другими словами, элементы, которые лежат непосредственно внутри данного. Например, head и body являются детьми элемента html. ",
      "Потомки – все элементы, которые лежат внутри данного, включая детей, их детей и т.д.",
      "Получив DOM-узел, мы можем перейти к его ближайшим соседям используя навигационные ссылки.",
      "Есть два основных набора ссылок: ",
      " 1. Для всех узлов: ",
      " - parentNode,",
      " - childNodes,",
      " - firstChild,",
      " - lastChild,",
      " - previousSibling,",
      " - nextSibling.",
      " - elem.childNodes",
      " 2. Только для узлов-элементов:",
      " - parentElement,",
      " - children,",
      " - firstElementChild,",
      " - lastElementChild,",
      " - previousElementSibling,",
      " - nextElementSibling.",
      " - elem.children ",
      " Некоторые виды DOM-элементов, например таблицы, предоставляют дополнительные ссылки и коллекции для доступа к своему содержимому.",
    ],
    isParagraphBefore: true,
  },
  {
    heading: "Поиск элементов в DOM по id: document.getElementById ",
    answer: [
      "Если у элемента есть атрибут id, то мы можем получить его вызовом document.getElementById(id), где бы он ни находился.",
      " - получить элемент: let elem = document.getElementById('elem'); ",
      " - сделать его фон красным: elem.style.background = 'red'; ",
      "Значение id должно быть уникальным. В документе может быть только один элемент с данным id. ",
    ],
    isParagraphBefore: true,
  },
  {
    heading: "Поиск в DOM всех элементов по CSS-селектору: document.querySelectorAll(css)",
    answer: [
      "Метод возвращает все элементы внутри elem, удовлетворяющие данному CSS-селектору.",
      " let elements = document.querySelectorAll('ul > li:last-child'); ",
      " Псевдоклассы тоже работают. Псевдоклассы в CSS-селекторе, в частности :hover и :active, также поддерживаются. Например, document.querySelectorAll(':hover') вернёт коллекцию (в порядке вложенности: от внешнего к внутреннему) из текущих элементов под курсором мыши. ",
    ],
    isParagraphBefore: true,
  },
  {
    heading: "Поиск элементов в DOM. Метод elem.querySelector(css)",
    answer: [
      "Метод elem.querySelector(css) возвращает первый элемент, соответствующий данному CSS-селектору.",
      "Иначе говоря, результат такой же, как при вызове elem.querySelectorAll(css)[0], но он сначала найдёт все элементы, а потом возьмёт первый, в то время как elem.querySelector найдёт только первый и остановится. Это быстрее, кроме того, его короче писать.",
    ],
    isParagraphBefore: true,
  },
  {
    heading: "Поиск элементов в DOM. Метод closest(css) ",
    answer: [
      "closest(css) ищет ближайшего предка, который соответствует CSS-селектору. Сам элемент также включается в поиск.",
      "Другими словами, метод closest поднимается вверх от элемента и проверяет каждого из родителей. Если он соответствует селектору, поиск прекращается. Метод возвращает либо предка, либо null, если такой элемент не найден. ",
      " let chapter = document.querySelector('.chapter');  ",
      " alert(chapter.closest('.book'));",
    ],
    isParagraphBefore: true,
  },
  {
    heading: "Поиск элементов в DOM. Метод elem.getElementsByTagName(tag)",
    answer: [
      "elem.getElementsByTagName(tag) ищет элементы с данным тегом и возвращает их коллекцию. Передав ''*'' вместо тега, можно получить всех потомков.",
      " - получить все элементы div в документе: let divs = document.getElementsByTagName('div');",
    ],
    isParagraphBefore: true,
  },
  {
    heading: "Поиск элементов в DOM. Метод elem.getElementsByClassName(className)",
    answer: ["Метод elem.getElementsByClassName(className) возвращает элементы, которые имеют данный CSS-класс."],
    isParagraphBefore: true,
  },
  {
    heading: "Поиск элементов в DOM. Метод document.getElementsByName(name)",
    answer: [
      "Метод document.getElementsByName(name) возвращает элементы с заданным атрибутом name. Очень редко используется.",
    ],
    isParagraphBefore: true,
  },
  {
    heading: "Поиск элементов в DOM. Метод elemA.contains(elemB)",
    answer: [
      "Метод elemA.contains(elemB) метод, который проверяет наличие отношений между предком и потомком. Вернёт true, если elemB находится внутри elemA (elemB потомок elemA) или когда elemA==elemB.",
    ],
    isParagraphBefore: true,
  },
  {
    heading: "Не забываем про букву ''s''! в document.getElementsBy",
    answer: [" ", " ", " ", " ", " ", " ", " "],
    isParagraphBefore: true,
  },
  {
    heading: "HTML-атрибуты",
    answer: [
      "В HTML у тегов могут быть атрибуты. Когда браузер парсит HTML, чтобы создать DOM-объекты для тегов, он распознаёт стандартные атрибуты и создаёт DOM-свойства для них.",
      "Таким образом, когда у элемента есть id или другой стандартный атрибут, создаётся соответствующее свойство. Но этого не происходит, если атрибут нестандартный. ",
      " - elem.hasAttribute(name) – проверяет наличие атрибута.",
      " - elem.getAttribute(name) – получает значение атрибута.",
      " - elem.setAttribute(name, value) – устанавливает значение атрибута.",
      " - elem.removeAttribute(name) – удаляет атрибут.",
      " - elem.attributes – это коллекция всех атрибутов.",
    ],
    isParagraphBefore: true,
  },
  {
    heading: "Создание элемента",
    answer: [
      " DOM-узел можно создать двумя методами:",
      "1. document.createElement(tag), cоздаёт новый элемент с заданным тегом: let div = document.createElement('div');",
      "2. document.createTextNode(text), cоздаёт новый текстовый узел с заданным текстом: let textNode = document.createTextNode('А вот и я');",
    ],
    isParagraphBefore: true,
  },
  {
    heading: "Методы вставки и удаления node",
    answer: [
      "Чтобы наш div появился, нам нужно вставить его где-нибудь в document. Например, в document.body.",
      "Для этого есть метод append, в нашем случае: document.body.append(div).",
      " let div = document.createElement('div');",
      " div.className = ''alert''",
      " div.innerHTML = ''Всем привет! Вы прочитали важное сообщение.'' ",
      " document.body.append(div);",
      "Вот методы для различных вариантов вставки:",
      " node.append(...nodes or strings) – добавляет узлы или строки в конец node,",
      " node.prepend(...nodes or strings) – вставляет узлы или строки в начало node,",
      " node.before(...nodes or strings) –- вставляет узлы или строки до node,",
      " node.after(...nodes or strings) –- вставляет узлы или строки после node,",
      " node.replaceWith(...nodes or strings) -- заменяет node заданными узлами или строками.",
      " -- node.remove() – удаляет node.",
    ],
    isParagraphBefore: true,
  },
  {
    heading: "className, classList, Element style",
    answer: [
      " elem.className заменяет всю строку с классами.",
      " elem.classList – это специальный объект с методами для добавления/удаления одного класса.",
      " Методы classList:elem.classList.add(''class'') – добавить класс.",
      " elem.classList.remove(''class'') – удалить класс.",
      " elem.classList.toggle(''class'') – добавить класс, если его нет, иначе удалить (переключатель)",
      " elem.classList.contains(''class'') – проверка наличия класса, возвращает true/false. ",
      " Кроме того, classList является перебираемым, поэтому можно перечислить все классы при помощи for..of",
      " for (let name of document.body.classList) { alert(name); // main, затем page }",
      " Свойство elem.style – это объект, который соответствует тому, что написано в атрибуте ''style''",
      " Установка стиля elem.style.width=''100px''  работает так же, как наличие в атрибуте style строки width:100px.",
    ],
    isParagraphBefore: true,
  },
  {
    heading: "Сброс стилей",
    answer: [
      "Иногда нам нужно добавить свойство стиля, а потом, позже, убрать его.",
      "Например, чтобы скрыть элемент, мы можем задать elem.style.display = ''none''",
      "Затем мы можем удалить свойство style.display, чтобы вернуться к первоначальному состоянию. Вместо delete elem.style.display мы должны присвоить ему пустую строку: elem.style.display = '''' ",
    ],
    isParagraphBefore: true,
  },
  {
    heading: " ",
    answer: [" ", " ", " ", " "],
    isParagraphBefore: true,
  },
  {
    heading: " ",
    answer: [" ", " ", " ", " "],
    isParagraphBefore: true,
  },
];
