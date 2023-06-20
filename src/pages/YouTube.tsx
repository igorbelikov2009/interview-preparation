import { motion } from "framer-motion"; // анимация
import React from "react";
import PageLink from "../components/general/PageLink/PageLink";
import { linksYouTube } from "../data/youTubeData";

const YouTube = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <PageLink links={linksYouTube} title="Ссылки на YouTube" />
    </motion.div>
  );
};

export default YouTube;
