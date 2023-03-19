import React from "react";
import PageLink from "../components/general/PageLink/PageLink";
import { linksFireBase } from "../data/fireBaseData";

const FireBase = () => {
  return (
    <div>
      <PageLink links={linksFireBase} title="Ссылки на FireBase" />
    </div>
  );
};

export default FireBase;
