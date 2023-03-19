import React from "react";
import Page from "../components/general/Page/Page";
import PageLink from "../components/general/PageLink/PageLink";
import { arrayDOM, linksDOM } from "../data/domData";

const DOM = () => {
  return (
    <div>
      <PageLink links={linksDOM} title="DOM, ссылки" />
      <Page title="Вопросы по DOM" ArrayHeadingAnswers={arrayDOM} />
    </div>
  );
};

export default DOM;
