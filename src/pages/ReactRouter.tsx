import React from "react";
import Page from "../components/general/Page/Page";
import PageLink from "../components/general/PageLink/PageLink";
import { arrayReactRouter, linksReactRouter } from "../data/reactRouterData";

const ReactRouter = () => {
  return (
    <div>
      <PageLink links={linksReactRouter} title="React Router." />
      <Page title="Вопросы по React Router" ArrayHeadingAnswers={arrayReactRouter} />
    </div>
  );
};

export default ReactRouter;
