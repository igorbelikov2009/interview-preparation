import React from "react";
import Page from "../components/general/Page/Page";
import PageLink from "../components/general/PageLink/PageLink";
import { ILinkInfo, IObjectHeadingAnswers } from "../models/types";

const TypescriptPage = () => {
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
      heading: "",
      answer: ["", "", "", ""],
      isParagraphBefore: true,
    },
    {
      heading: "",
      answer: ["", "", "", ""],
      isParagraphBefore: true,
    },
    {
      heading: "",
      answer: ["", "", "", ""],
      isParagraphBefore: true,
    },
    {
      heading: "",
      answer: ["", "", "", ""],
      isParagraphBefore: true,
    },
    {
      heading: "",
      answer: ["", "", "", ""],
      isParagraphBefore: true,
    },
    {
      heading: "",
      answer: ["", "", "", ""],
      isParagraphBefore: true,
    },
    {
      heading: "",
      answer: ["", "", "", ""],
      isParagraphBefore: true,
    },
    {
      heading: "",
      answer: ["", "", "", ""],
      isParagraphBefore: true,
    },
    {
      heading: "",
      answer: ["", "", "", ""],
      isParagraphBefore: true,
    },
    {
      heading: "",
      answer: ["", "", "", ""],
      isParagraphBefore: true,
    },
    {
      heading: "",
      answer: ["", "", "", ""],
      isParagraphBefore: true,
    },
    {
      heading: "",
      answer: ["", "", "", ""],
      isParagraphBefore: true,
    },
    {
      heading: "",
      answer: ["", "", "", ""],
      isParagraphBefore: true,
    },
    {
      heading: "",
      answer: ["", "", "", ""],
      isParagraphBefore: true,
    },
    {
      heading: "",
      answer: ["", "", "", ""],
      isParagraphBefore: true,
    },
    {
      heading: "",
      answer: ["", "", "", ""],
      isParagraphBefore: true,
    },
    {
      heading: "",
      answer: ["", "", "", ""],
      isParagraphBefore: true,
    },
    {
      heading: "",
      answer: ["", "", "", ""],
      isParagraphBefore: true,
    },
    {
      heading: "",
      answer: ["", "", "", ""],
      isParagraphBefore: true,
    },
    {
      heading: "",
      answer: ["", "", "", ""],
      isParagraphBefore: true,
    },
    {
      heading: "",
      answer: ["", "", "", ""],
      isParagraphBefore: true,
    },
    {
      heading: "",
      answer: ["", "", "", ""],
      isParagraphBefore: true,
    },
  ];

  return (
    <div>
      <PageLink links={links} title="Typescript ссылки" />
      <Page title="Вопросы по Typescript" ArrayHeadingAnswers={ArrayHeadingAnswers} />
    </div>
  );
};

export default TypescriptPage;
