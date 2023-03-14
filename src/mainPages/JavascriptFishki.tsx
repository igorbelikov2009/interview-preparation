import React from "react";
import Page from "../components/general/Page/Page";
import PageLink from "../components/general/PageLink/PageLink";
import { ILinkInfo, IObjectHeadingAnswers } from "../models/types";

const JavascriptFishkiPage = () => {
  const links: ILinkInfo[] = [
    {
      href: "https://www.youtube.com/playlist?list=PLiZoB8JBsdzklPlprqQRwGQuyD92f-Wm8",
      title: "JavaScript фишки. Михаил Непомнящий.",
    },
    {
      href: "https://www.youtube.com/watch?v=ZYqBZmU-tA0&list=PLiZoB8JBsdzklPlprqQRwGQuyD92f-Wm8&index=1",
      title: "Простые решения для сложных задач с Intersection Observer API. Михаил Непомнящий. ",
    },
    {
      href: "https://www.youtube.com/watch?v=vvieEwYX02c&list=PLiZoB8JBsdzklPlprqQRwGQuyD92f-Wm8&index=2",
      title: "MatchMedia для определения типа устройства. Михаил Непомнящий. ",
    },
    {
      href: "https://www.youtube.com/watch?v=1vf7CuHRkX8&list=PLiZoB8JBsdzklPlprqQRwGQuyD92f-Wm8&index=3",
      title: "Форматирование чисел в JavaScript. (Валюта и т.д.). Михаил Непомнящий.",
    },
    {
      href: "https://www.youtube.com/watch?v=Wh2zd2oZOmo&list=PLiZoB8JBsdzklPlprqQRwGQuyD92f-Wm8&index=4",
      title: "Форматирование дат под локаль пользователя. Михаил Непомнящий.",
    },
    {
      href: "https://www.youtube.com/watch?v=e77Z5BLC3-c&list=PLiZoB8JBsdzklPlprqQRwGQuyD92f-Wm8&index=5",
      title: "Множественная форма существительных в JS. Михаил Непомнящий. ",
    },
    {
      href: "https://www.youtube.com/watch?v=ouuABmyc4PU&list=PLiZoB8JBsdzklPlprqQRwGQuyD92f-Wm8&index=7",
      title: "Работа со ссылками в JavaScript. Михаил Непомнящий. ",
    },
    {
      href: "https://www.youtube.com/watch?v=CeS6i2NlYbE&list=PLiZoB8JBsdzklPlprqQRwGQuyD92f-Wm8&index=7",
      title: "Расчет временной дистанции в JavaScript. Михаил Непомнящий.",
    },
    {
      href: "https://www.youtube.com/watch?v=LEGg1F9yErI&list=PLiZoB8JBsdzklPlprqQRwGQuyD92f-Wm8&index=8",
      title: "Глубокое копирование объекта в JavaScript. Михаил Непомнящий. ",
    },
    {
      href: "https://www.youtube.com/watch?v=H3Z-aD1BOhY",
      title: "LocalStorage или как сохранить и использовать данные в браузере пользователя. Михаил Непомнящий.",
    },
    {
      href: "https://medium.com/the-coders-guide-to-javascript/smooth-scrolling-anchor-menu-in-reactjs-175030d0bce2",
      title: "Якорное меню с плавной прокруткой в ReactJS",
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
    {
      href: " ",
      title: " ",
    },
    {
      href: " ",
      title: " ",
    },
  ];

  const ArrayHeadingAnswers: IObjectHeadingAnswers[] = [
    {
      heading: " ",
      answer: [" ", " ", " ", " ", " "],
      isParagraphBefore: true,
    },
    {
      heading: " ",
      answer: [" ", " ", " ", " ", " "],
      isParagraphBefore: true,
    },
    {
      heading: " ",
      answer: [" ", " ", " ", " ", " "],
      isParagraphBefore: true,
    },
    {
      heading: " ",
      answer: [" ", " ", " ", " ", " "],
      isParagraphBefore: true,
    },
    {
      heading: " ",
      answer: [" ", " ", " ", " ", " "],
      isParagraphBefore: true,
    },
    {
      heading: " ",
      answer: [" ", " ", " ", " ", " "],
      isParagraphBefore: true,
    },
    {
      heading: " ",
      answer: [" ", " ", " ", " ", " "],
      isParagraphBefore: true,
    },
    {
      heading: " ",
      answer: [" ", " ", " ", " ", " "],
      isParagraphBefore: true,
    },
    {
      heading: " ",
      answer: [" ", " ", " ", " ", " "],
      isParagraphBefore: true,
    },
    {
      heading: " ",
      answer: [" ", " ", " ", " ", " "],
      isParagraphBefore: true,
    },
    {
      heading: " ",
      answer: [" ", " ", " ", " ", " "],
      isParagraphBefore: true,
    },
  ];

  return (
    <div>
      <PageLink links={links} title="Javascript фишки, ссылки" />
      <Page title="Вопросы по Javascript" ArrayHeadingAnswers={ArrayHeadingAnswers} />
    </div>
  );
};

export default JavascriptFishkiPage;
