import { motion } from "framer-motion"; // анимация
import React from "react";
import Page from "../components/general/Page/Page";
import PageLink from "../components/general/PageLink/PageLink";
import { ILinkInfo, IObjectHeadingAnswers } from "../models/types";

const ArrayTasksPage = () => {
  const links: ILinkInfo[] = [
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
  ];

  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 }, opacity: 0 }}
    >
      <PageLink links={links} title="Задачи по методам массивов, ссылки" />
      <Page title="Задачи по методам массивов" ArrayHeadingAnswers={ArrayHeadingAnswers} />
    </motion.div>
  );
};

export default ArrayTasksPage;
