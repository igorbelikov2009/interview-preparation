import React from "react";
import { motion } from "framer-motion"; // анимация
import Page from "../components/general/Page/Page";
import PageLink from "../components/general/PageLink/PageLink";
import { arrayObjectMethods, linksObjectMethods } from "../data/objectMethodsData";

const ObjectMethodsPage = () => {
  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 }, opacity: 0 }}
    >
      <PageLink links={linksObjectMethods} title="Методы объектов, ссылки" />
      <Page title="Вопросы по методам объектов" ArrayHeadingAnswers={arrayObjectMethods} />
    </motion.div>
  );
};

export default ObjectMethodsPage;
