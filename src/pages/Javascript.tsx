import { motion } from "framer-motion"; // анимация
import React from "react";
import Page from "../components/general/Page/Page";
import PageLink from "../components/general/PageLink/PageLink";
import { arrayJavascript, linksJavascript } from "../data/javascriptData";

const JavascriptPage = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <Page title="Вопросы по Javascript" ArrayHeadingAnswers={arrayJavascript} />
      <PageLink links={linksJavascript} title="Javascript ссылки" />
    </motion.div>
  );
};

export default JavascriptPage;
