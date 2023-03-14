import React from "react";
import Page from "../components/general/Page/Page";
import PageLink from "../components/general/PageLink/PageLink";
import { ILinkInfo, IObjectHeadingAnswers } from "../models/types";

const GitHubPage = () => {
  const links: ILinkInfo[] = [
    {
      href: "https://github.com/igorbelikov2009?tab=repositories",
      title: "Мой репозиторий на гитхабе.",
    },
    {
      href: "https://htmlacademy.ru/blog/html_old",
      title: "Бесплатный учебник по Git и GitHub",
    },
    {
      href: "https://www.youtube.com/watch?v=9e5OSBCCvvU",
      title: "Основы командной разработки git в Visual Studio Code",
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
      href: "https://github.com/Shkulipa/online-store",
      title: "Shkulipa/online-storePublic. Онлайн-магазин, который я делал",
    },
    {
      href: "https://github.com/utimur/online-store-full-course",
      title: "utimur/online-store-full-coursePublic. Онлайн-магазин, который я делал",
    },
  ];

  const ArrayHeadingAnswers: IObjectHeadingAnswers[] = [
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

  return (
    <div>
      <PageLink links={links} title="GitHub, ссылки" />
      <Page title="Вопросы по GitHub" ArrayHeadingAnswers={ArrayHeadingAnswers} />
    </div>
  );
};

export default GitHubPage;
