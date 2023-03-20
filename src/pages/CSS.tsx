import { motion } from "framer-motion"; // анимация
import React, { FC } from "react";
import Page from "../components/general/Page/Page";
import PageLink from "../components/general/PageLink/PageLink";
import ServerIsLoading from "../components/general/serverIsLoading/ServerIsLoading";
import ServerError from "../components/general/serverError/ServerError";
// import { arrayCSS, linksCSS } from "../data/cssData";
import { cssAPI } from "../services/cssAPI";
import { arrayCSSAPI } from "../services/arrayCSSAPI";

const CSS: FC = () => {
  const { data: linksCSS, isLoading, isError } = cssAPI.useGetLinksCSSQuery();
  const { data: arrayCSS } = arrayCSSAPI.useGetArrayCSSQuery();

  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 }, opacity: 0 }}
    >
      {isLoading && <ServerIsLoading />}
      {isError && <ServerError />}

      {linksCSS && <PageLink links={linksCSS} title="CSS ссылки" />}
      {arrayCSS && <Page title="Вопросы по CSS" ArrayHeadingAnswers={arrayCSS} />}
    </motion.div>
  );
};

export default CSS;
