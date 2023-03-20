import { motion } from "framer-motion"; // анимация
import React from "react";
import Page from "../components/general/Page/Page";
import PageLink from "../components/general/PageLink/PageLink";
import { arrayJSON, linksJSON } from "../data/jsonData";

const JSONPage = () => {
  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 }, opacity: 0 }}
    >
      <PageLink links={linksJSON} title="JSON, ссылки" />
      <Page title="Вопросы по JSON" ArrayHeadingAnswers={arrayJSON} />
    </motion.div>
  );
};

export default JSONPage;
