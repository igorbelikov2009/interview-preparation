import React from "react";
import Page from "../components/general/Page/Page";
import PageLink from "../components/general/PageLink/PageLink";
import { ILinkInfo, IObjectHeadingAnswers } from "../models/types";

const VuePage = () => {
  const links: ILinkInfo[] = [
    {
      href: "https://www.youtube.com/watch?v=c2SK1IlmYL8&t=86s",
      title: "Сгенерировать новый проект во Vue. 1 минута 57 секунда",
    },
    {
      href: "",
      title: "",
    },
  ];

  const ArrayHeadingAnswers: IObjectHeadingAnswers[] = [
    {
      heading: " ",
      answer: [" ", " ", " ", " ", " ", " ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " ", " ", " ", " ", " ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " ", " ", " ", " ", " ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " ", " ", " ", " ", " ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " ", " ", " ", " ", " ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " ", " ", " ", " ", " ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " ", " ", " ", " ", " ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " ", " ", " ", " ", " ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " ", " ", " ", " ", " ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " ", " ", " ", " ", " ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " ", " ", " ", " ", " ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " ", " ", " ", " ", " ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " ", " ", " ", " ", " ", " "],
      isParagraph: true,
    },
  ];

  return (
    <div>
      <PageLink links={links} title="Vue, ссылки" />
      <Page title="Вопросы по Vue" ArrayHeadingAnswers={ArrayHeadingAnswers} />
    </div>
  );
};

export default VuePage;
