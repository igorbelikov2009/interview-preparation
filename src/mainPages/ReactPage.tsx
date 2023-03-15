import React from "react";
import Page from "../components/general/Page/Page";
import PageLink from "../components/general/PageLink/PageLink";
import { arrayReact, linksReactPage } from "../data/reactData";

const ReactPage = () => {
  return (
    <div>
      <PageLink links={linksReactPage} title="React ссылки" />
      <Page title="Вопросы по React" ArrayHeadingAnswers={arrayReact} />
    </div>
  );
};

export default ReactPage;
