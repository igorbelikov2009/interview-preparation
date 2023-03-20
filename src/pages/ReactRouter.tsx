import { motion } from "framer-motion"; // анимация
import React from "react";
import Page from "../components/general/Page/Page";
import PageLink from "../components/general/PageLink/PageLink";
import { arrayReactRouter, linksReactRouter } from "../data/reactRouterData";

const ReactRouter = () => {
  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 }, opacity: 0 }}
    >
      <PageLink links={linksReactRouter} title="React Router." />
      <Page title="Вопросы по React Router" ArrayHeadingAnswers={arrayReactRouter} />
    </motion.div>
  );
};

export default ReactRouter;
