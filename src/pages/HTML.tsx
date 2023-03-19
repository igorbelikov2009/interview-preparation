import React from "react";
import Page from "../components/general/Page/Page";
import PageLink from "../components/general/PageLink/PageLink";
import { ILinkInfo, IObjectHeadingAnswers } from "../models/types";

const HTMLPage = () => {
  const links: ILinkInfo[] = [
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
      heading: "Какая разница между элементами span и div?",
      answer: [
        " - span — это строчный (inline) элемент",
        " - div — это блочный (block) элемент.",
        "Элементы div нужно использовать для оформления разделов документа. А элементы span — в роли контейнеров для небольших объёмов текста, для изображений и других подобных элементов страниц.",
        "Надо отметить, что нельзя помещать блочные элементы в строчные.",
      ],
      isParagraph: true,
    },
    {
      heading: "Что такое мета-теги?",
      answer: [
        "Мета-теги — это теги, находящиеся в теге <head> и описывающие содержимое страницы. Мета-теги не выводятся на странице. Они имеются лишь в её коде.",
      ],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
  ];

  return (
    <div>
      <PageLink links={links} title="HTML ссылки" />
      <Page title="Вопросы по HTML" ArrayHeadingAnswers={ArrayHeadingAnswers} />
    </div>
  );
};

export default HTMLPage;
