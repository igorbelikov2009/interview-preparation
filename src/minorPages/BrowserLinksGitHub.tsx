import React from "react";
import PageLink from "../components/general/PageLink/PageLink";
import { ILinkInfo } from "../models/types";

const BrowserLinksGitHub = () => {
  const links: ILinkInfo[] = [
    {
      href: "https://github.com/Shkulipa/online-store",
      title: "Shkulipa/online-storePublic. Онлайн-магазин, который я делал",
    },
    {
      href: "https://github.com/utimur/online-store-full-course",
      title: "utimur/online-store-full-coursePublic. Онлайн-магазин, который я делал",
    },
    {
      href: "https://github.com/igorbelikov2009?tab=repositories",
      title: "Мой репозиторий на гитхабе.",
    },
    {
      href: "",
      title: "",
    },
    {
      href: "",
      title: "",
    },
    {
      href: "",
      title: "",
    },
    {
      href: "",
      title: "",
    },
    {
      href: "",
      title: "",
    },
    {
      href: "",
      title: "",
    },
    {
      href: "",
      title: "",
    },
    {
      href: "",
      title: "",
    },
    {
      href: "",
      title: "",
    },
    {
      href: "",
      title: "",
    },
    {
      href: "",
      title: "",
    },
    {
      href: "",
      title: "",
    },
    {
      href: "",
      title: "",
    },
    {
      href: "",
      title: "",
    },
    {
      href: "",
      title: "",
    },
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
      <PageLink links={links} title="Ссылки на GitHub" />
    </div>
  );
};

export default BrowserLinksGitHub;
