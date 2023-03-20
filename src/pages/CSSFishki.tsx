import { motion } from "framer-motion"; // анимация
import React from "react";
import PageLink from "../components/general/PageLink/PageLink";
import ServerIsLoading from "../components/general/serverIsLoading/ServerIsLoading";
import ServerError from "../components/general/serverError/ServerError";
import { cssFishkiAPI } from "../services/cssFishkiAPI";
// import { linksCSSFishki } from "../data/cssData";

const CSSFishki = () => {
  const { data: linksCSSFishki, isLoading, isError } = cssFishkiAPI.useGetCssFishkiQuery();

  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 }, opacity: 0 }}
    >
      {isLoading && <ServerIsLoading />}
      {isError && <ServerError />}

      {linksCSSFishki && <PageLink links={linksCSSFishki} title="Фишки CSS, ссылки" />}
    </motion.div>
  );
};

export default CSSFishki;
