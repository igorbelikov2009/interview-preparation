import { motion } from "framer-motion"; // анимация
import React from "react";
import Page from "../components/general/Page/Page";
import PageLink from "../components/general/PageLink/PageLink";
import { arrayNumberMethods, linksNumberMethods } from "../data/numberMethodsData";

const NumberMethods = () => {
  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 }, opacity: 0 }}
    >
      <PageLink links={linksNumberMethods} title="Работа с числами, ссылки" />
      <Page title="Работа с числами в JavaScript" ArrayHeadingAnswers={arrayNumberMethods} />
    </motion.div>
  );
};

export default NumberMethods;
