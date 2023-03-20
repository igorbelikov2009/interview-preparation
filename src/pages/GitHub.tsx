import { motion } from "framer-motion"; // анимация
import React from "react";
import Page from "../components/general/Page/Page";
import PageLink from "../components/general/PageLink/PageLink";
import { arrayGitHub, linksGitHub } from "../data/gitHubData";

const GitHubPage = () => {
  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 }, opacity: 0 }}
    >
      <PageLink links={linksGitHub} title="GitHub, ссылки" />
      <Page title="Вопросы по GitHub" ArrayHeadingAnswers={arrayGitHub} />
    </motion.div>
  );
};

export default GitHubPage;
