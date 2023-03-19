import React from "react";
import Page from "../components/general/Page/Page";
import PageLink from "../components/general/PageLink/PageLink";
import { arrayNumberMethods, linksNumberMethods } from "../data/numberMethodsData";

const NumberMethods = () => {
  return (
    <div>
      <PageLink links={linksNumberMethods} title="Работа с числами, ссылки" />
      <Page title="Работа с числами в JavaScript" ArrayHeadingAnswers={arrayNumberMethods} />
    </div>
  );
};

export default NumberMethods;
