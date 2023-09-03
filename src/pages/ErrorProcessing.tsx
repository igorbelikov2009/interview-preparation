import { motion } from "framer-motion"; // анимация
import React from "react";
import Page from "../components/general/Page/Page";
import PageLink from "../components/general/PageLink/PageLink";
import { arrayErrorProcessing, linksErrorProcessing } from "../dataArchive.ts/errorProcessingData";

const ErrorProcessingPage = () => {
  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 }, opacity: 0 }}
    >
      <PageLink links={linksErrorProcessing} title="Обработка ошибок, ссылки" />
      <Page title="Вопросы по обработке ошибок" ArrayHeadingAnswers={arrayErrorProcessing} />
    </motion.div>
  );
};

export default ErrorProcessingPage;
