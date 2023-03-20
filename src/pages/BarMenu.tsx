import { motion } from "framer-motion"; // анимация
import React from "react";
import PageBar from "../components/general/PageBar/PageBar";
import PageLink from "../components/general/PageLink/PageLink";
import { ILinkInfo, IObjectHeadingAnswers } from "../models/types";

const BarMenuPage = () => {
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
      <PageLink links={links} title="Бар меню" />
      <PageBar ArrayHeadingAnswers={ArrayHeadingAnswers} title="Бар меню" />
    </motion.div>
  );
};

export default BarMenuPage;
