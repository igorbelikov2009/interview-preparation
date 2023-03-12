import React from "react";
import PageLink from "../components/general/PageLink/PageLink";
import { ILinkInfo } from "../models/types";

const BrowserLinksPage = () => {
  const links: ILinkInfo[] = [
    {
      href: "",
      title: "",
    },
    {
      href: "",
      title: "",
    },
  ];

  return (
    <div>
      <PageLink links={links} title="Браузерные ссылки" />
    </div>
  );
};

export default BrowserLinksPage;
