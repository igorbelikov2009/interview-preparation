import React from "react";
import PageLink from "../components/general/PageLink/PageLink";
import { linkNPM } from "../data/npmData";

const LinksNPM = () => {
  return (
    <div>
      <PageLink links={linkNPM} title="Менеджер пакетов npm" />
    </div>
  );
};

export default LinksNPM;
