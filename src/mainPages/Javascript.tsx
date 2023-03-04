import React from "react";
import Page from "../components/general/Page/Page";
import PageLink from "../components/general/PageLink/PageLink";
import { arrayJavascript, linksJavascript } from "../data/javascriptData";

const JavascriptPage = () => {
  return (
    <div>
      <PageLink links={linksJavascript} title="Javascript ссылки" />
      <Page title="Вопросы по Javascript" ArrayHeadingAnswers={arrayJavascript} />
    </div>
  );
};

export default JavascriptPage;
