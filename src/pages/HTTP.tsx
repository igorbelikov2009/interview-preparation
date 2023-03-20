import { motion } from "framer-motion"; // анимация
import React from "react";
import Page from "../components/general/Page/Page";
import PageLink from "../components/general/PageLink/PageLink";
import { arrayHTTP, linksHTTP } from "../data/httpData";

const HTTP = () => {
  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 }, opacity: 0 }}
    >
      <PageLink links={linksHTTP} title="HTTP ссылки" />
      <Page title="Вопросы по HTTP и клиент серверной архитектуре" ArrayHeadingAnswers={arrayHTTP} />
    </motion.div>
  );
};

export default HTTP;
