import { motion } from "framer-motion"; // анимация
import React from "react";
import Page from "../components/general/Page/Page";
import PageLink from "../components/general/PageLink/PageLink";
import { arrayGeneralIssues, linksGeneralIssues } from "../data/generalIssuesData";

const GeneralIssues = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <PageLink links={linksGeneralIssues} title="Общие вопросы, ссылки" />
      <Page title="Общие вопросы" ArrayHeadingAnswers={arrayGeneralIssues} />
    </motion.div>
  );
};

export default GeneralIssues;
