import React from "react";
import Page from "../components/general/Page/Page";
import PageLink from "../components/general/PageLink/PageLink";
import { arrayPromise, linksPromise } from "../data/promiseData";

const PromisePage = () => {
  return (
    <div>
      <PageLink links={linksPromise} title="Promise, ссылки" />
      <Page title="Вопросы по Promise" ArrayHeadingAnswers={arrayPromise} />
    </div>
  );
};

export default PromisePage;
