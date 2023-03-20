import { motion } from "framer-motion"; // анимация
import React from "react";
import Page from "../components/general/Page/Page";
import PageLink from "../components/general/PageLink/PageLink";
import { arrayStringMethods, linksStringMethods } from "../data/stringMethodsData";

const StringMethods = () => {
  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 }, opacity: 0 }}
    >
      <PageLink links={linksStringMethods} title="Методы строк, ссылки" />
      <Page
        title="Методы строк в JavaScript: простая шпаргалка с примерами."
        ArrayHeadingAnswers={arrayStringMethods}
      />
    </motion.div>
  );
};

export default StringMethods;
