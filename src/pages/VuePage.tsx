import { motion } from "framer-motion"; // анимация
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
      href: "https://www.youtube.com/watch?v=S8AiEvuXcAg",
      title: "Vue 3 + Firebase + TypeScript - строим приложение музыкальной коллекции",
    },
    {
      href: "https://www.youtube.com/watch?v=6wYu4_6hcDY",
      title: "Vue.js. Полный курс. webDev от 02.05.2023г",
    },
  ];

  const ArrayHeadingAnswers: IObjectHeadingAnswers[] = [
    {
      heading: " ",
      answer: [" ", " ", " ", " ", " ", " ", " "],
      isParagraph: true,
    },
  ];

  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 }, opacity: 0 }}
    >
      <PageLink links={links} title="Vue, ссылки" />
      <Page title="Вопросы по Vue" ArrayHeadingAnswers={ArrayHeadingAnswers} />
    </motion.div>
  );
};

export default VuePage;
