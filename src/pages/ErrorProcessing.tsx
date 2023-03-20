import { motion } from "framer-motion"; // анимация
import React from "react";
import Page from "../components/general/Page/Page";
import PageLink from "../components/general/PageLink/PageLink";
import ServerIsLoading from "../components/general/serverIsLoading/ServerIsLoading";
import ServerError from "../components/general/serverError/ServerError";
// import { arrayErrorProcessing, linksErrorProcessing } from "../data/errorProcessingData";
import { linksError } from "../data/linksErrorAPI";
import { arrayErrorAPI } from "../services/arrayErrorAPI";

const ErrorProcessingPage = () => {
  const { data: linksErrorProcessing, isLoading, isError } = linksError.useGetLinksErrorQuery();
  const { data: arrayErrorProcessing } = arrayErrorAPI.useGetArrayErrorQuery();

  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 }, opacity: 0 }}
    >
      {isLoading && <ServerIsLoading />}
      {isError && <ServerError />}

      {linksErrorProcessing && <PageLink links={linksErrorProcessing} title="Обработка ошибок, ссылки" />}
      {arrayErrorProcessing && <Page title="Вопросы по обработке ошибок" ArrayHeadingAnswers={arrayErrorProcessing} />}
    </motion.div>
  );
};

export default ErrorProcessingPage;
