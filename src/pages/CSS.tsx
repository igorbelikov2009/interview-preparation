import { motion } from "framer-motion"; // анимация
import React, { FC } from "react";
import Page from "../components/general/Page/Page";
import PageLink from "../components/general/PageLink/PageLink";
import { arrayCSS, linksCSS } from "../data/cssData";

const CSS: FC = () => {
  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 }, opacity: 0 }}
    >
      <PageLink links={linksCSS} title="CSS ссылки" />
      <Page title="Вопросы по CSS" ArrayHeadingAnswers={arrayCSS} />
    </motion.div>
  );
};

export default CSS;
