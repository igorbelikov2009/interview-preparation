import React from "react";
import Page from "../components/general/Page/Page";
import PageLink from "../components/general/PageLink/PageLink";
import { arrayHTTP, linksHTTP } from "../data/httpData";

const HTTP = () => {
  return (
    <div>
      <PageLink links={linksHTTP} title="HTTP ссылки" />
      <Page title="Вопросы по HTTP и клиент серверной архитектуре" ArrayHeadingAnswers={arrayHTTP} />
    </div>
  );
};

export default HTTP;
