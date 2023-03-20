import { motion } from "framer-motion"; // анимация
import React from "react";
import Page from "../components/general/Page/Page";
import PageLink from "../components/general/PageLink/PageLink";
import { arrayTypescript, linksTypescript } from "../data/typescriptData";

const TypescriptPage = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <PageLink links={linksTypescript} title="Typescript ссылки" />
      <Page title="Вопросы по Typescript" ArrayHeadingAnswers={arrayTypescript} />
    </motion.div>
  );
};

export default TypescriptPage;
