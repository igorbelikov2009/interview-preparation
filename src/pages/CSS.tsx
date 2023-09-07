import { motion } from "framer-motion"; // анимация
import React, { FC } from "react";
import Page from "../components/general/Page/Page";
import PageLink from "../components/general/PageLink/PageLink";

import { linksCSSFishki } from "../data/cssData";
import { arrayCSS, linksCSS } from "../data/cssData";

const CSS: FC = () => {
  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 }, opacity: 0 }}
    >
      <Page title="Вопросы по CSS" ArrayHeadingAnswers={arrayCSS} />
      <PageLink links={linksCSSFishki} title="CSS - фишки ссылки" />
      <PageLink links={linksCSS} title="CSS ссылки" />
    </motion.div>
  );
};

export default CSS;
