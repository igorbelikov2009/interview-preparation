import { motion } from "framer-motion"; // анимация
import React from "react";
import Page from "../components/general/Page/Page";
import PageLink from "../components/general/PageLink/PageLink";
// import { arrayDestructuringObjects } from "../data/destructuringData";
import ServerIsLoading from "../components/general/serverIsLoading/ServerIsLoading";
import ServerError from "../components/general/serverError/ServerError";
import { linksDestructuringAPI } from "../services/destructuringAPI";
import { destructuringArraysAPI } from "../services/destructuringArraysAPI";
import { destructuringObjectsAPI } from "../services/destructuringObjectsAPI";

const DestructuringPage = () => {
  const { data: linksDestructuring, isLoading, isError } = linksDestructuringAPI.useGetLinksDestructuringQuery();
  const { data: arrayDestructuringArrays } = destructuringArraysAPI.useGetDestructuringArrayQuery();
  const { data: arrayDestructuringObjects } = destructuringObjectsAPI.useGetDestructuringObjectsQuery();

  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 }, opacity: 0 }}
    >
      {isLoading && <ServerIsLoading />}
      {isError && <ServerError />}

      {linksDestructuring && <PageLink links={linksDestructuring} title="Деструктуризация, ссылки" />}
      {arrayDestructuringArrays && (
        <Page title="Вопросы по деструктуризации массивов" ArrayHeadingAnswers={arrayDestructuringArrays} />
      )}
      {arrayDestructuringObjects && (
        <Page title="Вопросы по деструктуризации объектов" ArrayHeadingAnswers={arrayDestructuringObjects} />
      )}
    </motion.div>
  );
};

export default DestructuringPage;
