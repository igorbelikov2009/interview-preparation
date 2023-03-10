import React from "react";
import Page from "../components/general/Page/Page";
import PageLink from "../components/general/PageLink/PageLink";
import { ILinkInfo, IObjectHeadingAnswers } from "../models/types";

const ReactFishkiPage = () => {
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
      <PageLink links={links} title="React ??????????." />
      <Page title="?????????????? ???? React" ArrayHeadingAnswers={ArrayHeadingAnswers} />
    </div>
  );
};

export default ReactFishkiPage;
