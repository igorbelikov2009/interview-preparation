import React from "react";
import Page from "../components/general/Page/Page";
import PageLink from "../components/general/PageLink/PageLink";
import { arrayErrorProcessing, linksErrorProcessing } from "../data/errorProcessingData";

const ErrorProcessingPage = () => {
  return (
    <div>
      <PageLink links={linksErrorProcessing} title="Обработка ошибок, ссылки" />
      <Page title="Вопросы по обработке ошибок" ArrayHeadingAnswers={arrayErrorProcessing} />
    </div>
  );
};

export default ErrorProcessingPage;
