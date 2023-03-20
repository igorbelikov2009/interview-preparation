import { motion } from "framer-motion"; // анимация
import React from "react";
import PageLink from "../components/general/PageLink/PageLink";
import ServerIsLoading from "../components/general/serverIsLoading/ServerIsLoading";
import ServerError from "../components/general/serverError/ServerError";
// import { linksFrameworksCSS } from "../data/cssData";
import { frameworksCSSAPI } from "../services/frameworksCSSAPI";

const FrameworksCSS = () => {
  const { data: linksFrameworksCSS, isLoading, isError } = frameworksCSSAPI.useGetFrameworksCSSQuery();

  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 }, opacity: 0 }}
    >
      {isLoading && <ServerIsLoading />}
      {isError && <ServerError />}

      {linksFrameworksCSS && <PageLink links={linksFrameworksCSS} title="Ссылки на фреймворки CSS" />}
    </motion.div>
  );
};

export default FrameworksCSS;
