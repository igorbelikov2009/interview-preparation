import React from "react";
import Page from "../components/general/Page/Page";
import PageLink from "../components/general/PageLink/PageLink";
import { arrayStringMethods, linksStringMethods } from "../data/stringMethodsData";

const StringMethods = () => {
  return (
    <div>
      <PageLink links={linksStringMethods} title="Методы строк, ссылки" />
      <Page
        title="Методы строк в JavaScript: простая шпаргалка с примерами."
        ArrayHeadingAnswers={arrayStringMethods}
      />
    </div>
  );
};

export default StringMethods;
