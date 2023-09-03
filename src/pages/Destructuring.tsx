import { motion } from "framer-motion"; // анимация
import React from "react";
import Page from "../components/general/Page/Page";
import PageLink from "../components/general/PageLink/PageLink";
import {
  arrayDestructuringArrays,
  arrayDestructuringObjects,
  linksDestructuring,
} from "../dataArchive.ts/destructuringData";

const DestructuringPage = () => {
  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 }, opacity: 0 }}
    >
      <PageLink links={linksDestructuring} title="Деструктуризация, ссылки" />

      <Page title="Вопросы по деструктуризации массивов" ArrayHeadingAnswers={arrayDestructuringArrays} />

      <Page title="Вопросы по деструктуризации объектов" ArrayHeadingAnswers={arrayDestructuringObjects} />
    </motion.div>
  );
};

export default DestructuringPage;
