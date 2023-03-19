import React from "react";
import PageLink from "../components/general/PageLink/PageLink";
import { linksFrameworksCSS } from "../data/cssData";

const FrameworksCSS = () => {
  return (
    <div>
      <PageLink links={linksFrameworksCSS} title="Ссылки на фреймворки CSS" />
    </div>
  );
};

export default FrameworksCSS;
