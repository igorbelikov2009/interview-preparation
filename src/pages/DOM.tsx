import { motion } from "framer-motion"; // анимация
import React from "react";
import Page from "../components/general/Page/Page";
import PageLink from "../components/general/PageLink/PageLink";
import { arrayDOM, linksDOM } from "../data/domData";

const DOM = () => {
  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 }, opacity: 0 }}
    >
      <PageLink links={linksDOM} title="DOM, ссылки" />
      <Page title="Вопросы по DOM" ArrayHeadingAnswers={arrayDOM} />
    </motion.div>
  );
};

export default DOM;
