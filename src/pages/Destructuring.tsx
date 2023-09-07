import { motion } from "framer-motion"; // анимация
import React from "react";
import Page from "../components/general/Page/Page";
import PageLink from "../components/general/PageLink/PageLink";
import { arrayDestructuringArrays, arrayDestructuringObjects, linksDestructuring } from "../data/destructuringData";

const DestructuringPage = () => {
  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 }, opacity: 0 }}
    >
      <Page title="Деструктуризация массивов" ArrayHeadingAnswers={arrayDestructuringArrays} />

      <Page title="Деструктуризация объектов" ArrayHeadingAnswers={arrayDestructuringObjects} />

      <PageLink links={linksDestructuring} title="Деструктуризация, ссылки" />
    </motion.div>
  );
};

export default DestructuringPage;
