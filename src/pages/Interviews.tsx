import { motion } from "framer-motion"; // анимация
import React from "react";
import Page from "../components/general/Page/Page";
import PageLink from "../components/general/PageLink/PageLink";
import { arrayInterviews } from "../data/interviewsData";
import { ILinkInfo } from "../models/types";

const Interviews = () => {
  const links: ILinkInfo[] = [
    {
      href: "https://www.youtube.com/watch?v=bqQI9rFm1ro",
      title: "[Redux] Мой любимый вопрос на собеседовании",
    },
    {
      href: "https://www.youtube.com/watch?v=OtAlPwW8DNU",
      title: "Все ли вы знаете о React key?",
    },
    {
      href: "https://www.youtube.com/watch?v=2Wp7QPTkpms&t=43s",
      title: "Что вы знаете о useCallback?",
    },
    {
      href: "https://www.youtube.com/watch?v=n_OtFAsh6aU",
      title: "какая разница между useLayoutEffect, componentDidMount и useEffect?",
    },
    {
      href: "https://www.youtube.com/watch?v=-lHQ8b0GpEQ",
      title: "SENIOR пошел на JUNIOR Javascript Developer собеседование",
    },
    {
      href: "https://skillbox.ru/media/code/selektory-v-css-chto-eto-takoe-kak-oni-rabotayut-i-kakie-byvayut/",
      title: "Селекторы в CSS: что это такое, как они работают и какие бывают",
    },
    {
      href: " ",
      title: " ",
    },
  ];

  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 }, opacity: 0 }}
    >
      <PageLink links={links} title="Собеседования ссылки" />
      <Page ArrayHeadingAnswers={arrayInterviews} title="Вопросы по собеседованию." />
    </motion.div>
  );
};

export default Interviews;
