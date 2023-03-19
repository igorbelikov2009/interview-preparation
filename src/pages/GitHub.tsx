import React from "react";
import Page from "../components/general/Page/Page";
import PageLink from "../components/general/PageLink/PageLink";
import { arrayGitHub, linksGitHub } from "../data/gitHubData";

const GitHubPage = () => {
  return (
    <div>
      <PageLink links={linksGitHub} title="GitHub, ссылки" />
      <Page title="Вопросы по GitHub" ArrayHeadingAnswers={arrayGitHub} />
    </div>
  );
};

export default GitHubPage;
