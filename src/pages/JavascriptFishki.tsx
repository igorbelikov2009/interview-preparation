import { motion } from "framer-motion"; // анимация
import React from "react";
import Page from "../components/general/Page/Page";
import PageLink from "../components/general/PageLink/PageLink";
import { arrayJavascriptFishki, linksJavascriptFishki } from "../data/javascriptFishkiData";

const JavascriptFishkiPage = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <PageLink links={linksJavascriptFishki} title="Javascript фишки, ссылки" />
      <Page title="Вопросы по Javascript" ArrayHeadingAnswers={arrayJavascriptFishki} />
    </motion.div>
  );
};

export default JavascriptFishkiPage;
