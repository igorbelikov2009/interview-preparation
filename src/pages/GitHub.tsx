import { motion } from "framer-motion"; // анимация
import React from "react";
import Page from "../components/general/Page/Page";
import PageLink from "../components/general/PageLink/PageLink";
import ServerIsLoading from "../components/general/serverIsLoading/ServerIsLoading";
import ServerError from "../components/general/serverError/ServerError";
import { linksGitHubAPI } from "../services/linksGitHubAPI";
import { arrayGitHub } from "../dataArchive.ts/gitHubData";

const GitHubPage = () => {
  const { data: linksGitHub, isLoading, isError } = linksGitHubAPI.useGetLinksGitHubQuery();

  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 }, opacity: 0 }}
    >
      {isLoading && <ServerIsLoading />}
      {isError && <ServerError />}

      {linksGitHub && <PageLink links={linksGitHub} title="GitHub, ссылки" />}
      <Page title="Вопросы по GitHub" ArrayHeadingAnswers={arrayGitHub} />
    </motion.div>
  );
};

export default GitHubPage;
