import { motion } from "framer-motion"; // анимация
import React from "react";
import PageLink from "../components/general/PageLink/PageLink";
import { linksCSSFishki } from "../data/cssData";

const CSSFishki = () => {
  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 }, opacity: 0 }}
    >
      <PageLink links={linksCSSFishki} title="Фишки CSS, ссылки" />
    </motion.div>
  );
};

export default CSSFishki;
