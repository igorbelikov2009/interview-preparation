import React from "react";
import Page from "../components/general/Page/Page";
import PageLink from "../components/general/PageLink/PageLink";
import { arrayTypescript, linksTypescript } from "../data/typescriptData";

const TypescriptPage = () => {
  return (
    <div>
      <PageLink links={linksTypescript} title="Typescript ссылки" />
      <Page title="Вопросы по Typescript" ArrayHeadingAnswers={arrayTypescript} />
    </div>
  );
};

export default TypescriptPage;
