import React from "react";
import PageLink from "../components/general/PageLink/PageLink";
import { linksCSSFishki } from "../data/cssData";

const CSSFishki = () => {
  return (
    <div>
      <PageLink links={linksCSSFishki} title="Фишки CSS, ссылки" />
    </div>
  );
};

export default CSSFishki;
