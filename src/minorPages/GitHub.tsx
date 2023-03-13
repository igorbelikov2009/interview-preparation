import React from "react";
import Page from "../components/general/Page/Page";
import PageLink from "../components/general/PageLink/PageLink";
import { ILinkInfo, IObjectHeadingAnswers } from "../models/types";

const GitHubPage = () => {
  const links: ILinkInfo[] = [
    {
      href: "https://htmlacademy.ru/blog/html_old",
      title: "Бесплатный учебник по Git и GitHub",
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
