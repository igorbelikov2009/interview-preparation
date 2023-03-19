import React from "react";
import Page from "../components/general/Page/Page";
import PageLink from "../components/general/PageLink/PageLink";
import { arrayDestructuringArrays, arrayDestructuringObjects, linksDestructuring } from "../data/destructuringData";

const DestructuringPage = () => {
  return (
    <div>
      <PageLink links={linksDestructuring} title="Деструктуризация, ссылки" />
      <Page title="Вопросы по деструктуризации массивов" ArrayHeadingAnswers={arrayDestructuringArrays} />
      <Page title="Вопросы по деструктуризации объектов" ArrayHeadingAnswers={arrayDestructuringObjects} />
    </div>
  );
};

export default DestructuringPage;
