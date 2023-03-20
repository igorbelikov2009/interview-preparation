import { motion } from "framer-motion"; // анимация
import React from "react";
import Page from "../components/general/Page/Page";
import PageLink from "../components/general/PageLink/PageLink";
import { arrayReact, linksReactPage } from "../data/reactData";

const ReactPage = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <PageLink links={linksReactPage} title="React ссылки" />
      <Page title="Вопросы по React" ArrayHeadingAnswers={arrayReact} />
    </motion.div>
  );
};

export default ReactPage;
