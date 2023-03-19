import React, { FC } from "react";
import Page from "../components/general/Page/Page";
import PageLink from "../components/general/PageLink/PageLink";
import { arrayCSS, linksCSS } from "../data/cssData";

const CSS: FC = () => {
  return (
    <div>
      <PageLink links={linksCSS} title="CSS ссылки" />
      <Page title="Вопросы по CSS" ArrayHeadingAnswers={arrayCSS} />
    </div>
  );
};

export default CSS;
