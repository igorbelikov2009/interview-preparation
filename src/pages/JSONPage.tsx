import React from "react";
import Page from "../components/general/Page/Page";
import PageLink from "../components/general/PageLink/PageLink";
import { arrayJSON, linksJSON } from "../data/jsonData";

const JSONPage = () => {
  return (
    <div>
      <PageLink links={linksJSON} title="JSON, ссылки" />
      <Page title="Вопросы по JSON" ArrayHeadingAnswers={arrayJSON} />
    </div>
  );
};

export default JSONPage;
