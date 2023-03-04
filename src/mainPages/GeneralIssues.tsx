import React from "react";
import Page from "../components/general/Page/Page";
import PageLink from "../components/general/PageLink/PageLink";
import { arrayGeneralIssues, linksGeneralIssues } from "../data/generalIssuesData";

const GeneralIssues = () => {
  return (
    <div>
      <PageLink links={linksGeneralIssues} title="Общие вопросы, ссылки" />
      <Page title="Общие вопросы" ArrayHeadingAnswers={arrayGeneralIssues} />
    </div>
  );
};

export default GeneralIssues;
