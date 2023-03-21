import { motion } from "framer-motion"; // анимация
import React from "react";
import Page from "../components/general/Page/Page";
import PageLink from "../components/general/PageLink/PageLink";
import ServerIsLoading from "../components/general/serverIsLoading/ServerIsLoading";
import ServerError from "../components/general/serverError/ServerError";
// import { arrayHTTP, linksHTTP } from "../data/httpData";
import { linksHTTPAPI } from "../services/linksHTTPAPI";
import { arrayHTTPAPI } from "../services/arrayHTTPAPI";

const HTTP = () => {
  const { data: linksHTTP, isLoading, isError } = linksHTTPAPI.useGetLinksHTTPQuery();
  const { data: arrayHTTP } = arrayHTTPAPI.useGetArrayHTTPQuery();

  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 }, opacity: 0 }}
    >
      {isLoading && <ServerIsLoading />}
      {isError && <ServerError />}

      {linksHTTP && <PageLink links={linksHTTP} title="HTTP ссылки" />}
      {arrayHTTP && <Page title="Вопросы по HTTP и клиент серверной архитектуре" ArrayHeadingAnswers={arrayHTTP} />}
    </motion.div>
  );
};

export default HTTP;
