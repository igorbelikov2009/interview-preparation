import React from "react";
import Page from "../components/general/Page/Page";
import PageLink from "../components/general/PageLink/PageLink";
import { arrayObjectMethods, linksObjectMethods } from "../data/objectMethodsData";

const ObjectMethodsPage = () => {
  return (
    <div>
      <PageLink links={linksObjectMethods} title="Методы объектов, ссылки" />
      <Page title="Вопросы по методам объектов" ArrayHeadingAnswers={arrayObjectMethods} />
    </div>
  );
};

export default ObjectMethodsPage;
