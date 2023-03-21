import { motion } from "framer-motion"; // анимация
import React from "react";
import PageLink from "../components/general/PageLink/PageLink";
import { generalLinks } from "../data/generalLinksData";

const GeneralLinks = () => {
  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 }, opacity: 0 }}
    >
      <PageLink links={generalLinks} title="Все ссылки" />
    </motion.div>
  );
};

export default GeneralLinks;
