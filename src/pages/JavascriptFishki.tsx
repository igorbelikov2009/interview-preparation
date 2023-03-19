import React from "react";
import Page from "../components/general/Page/Page";
import PageLink from "../components/general/PageLink/PageLink";
import { arrayJavascriptFishki, linksJavascriptFishki } from "../data/javascriptFishkiData";

const JavascriptFishkiPage = () => {
  return (
    <div>
      <PageLink links={linksJavascriptFishki} title="Javascript фишки, ссылки" />
      <Page title="Вопросы по Javascript" ArrayHeadingAnswers={arrayJavascriptFishki} />
    </div>
  );
};

export default JavascriptFishkiPage;
