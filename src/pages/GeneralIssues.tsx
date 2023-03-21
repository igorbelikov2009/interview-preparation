import { motion } from "framer-motion"; // анимация
import React from "react";
import Page from "../components/general/Page/Page";
import { generalIssues } from "../data/generalIssuesData";

const GeneralIssues = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <Page title="Общие вопросы" ArrayHeadingAnswers={generalIssues} />
    </motion.div>
  );
};

export default GeneralIssues;
