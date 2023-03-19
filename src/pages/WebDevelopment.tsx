import React from "react";
import Page from "../components/general/Page/Page";
import PageLink from "../components/general/PageLink/PageLink";
import { arrayWebDevelopment, linksWebDevelopment } from "../data/webDevelopmentData";

const WebDevelopment = () => {
  return (
    <div>
      <PageLink links={linksWebDevelopment} title="Веб-разработка, ссылки" />
      <Page title="Вопросы по веб-разработке." ArrayHeadingAnswers={arrayWebDevelopment} />
    </div>
  );
};

export default WebDevelopment;
