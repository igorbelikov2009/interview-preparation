import React from "react";
import PageLink from "../components/general/PageLink/PageLink";
import { ILinkInfo } from "../models/types";

const YouTubeTypescript = () => {
  const links: ILinkInfo[] = [
    {
      href: "https://www.youtube.com/playlist?list=PLo0i68fkgCJ261LA9eiDIPACsEri2x8Mm",
      title: "React TypeScript Library UI. Public Code 33 видео",
    },
    {
      href: "https://www.youtube.com/playlist?list=PLNkWIWHIRwMFQBDhZ6HfwO9NL09X3N3Gq",
      title: "TypeScript + React. webDev 13 видео",
    },
    {
      href: "https://www.youtube.com/watch?v=hpPkwsRaWcA",
      title: "Особенности типизации children в React компонентах. Михаил Непомнящий.",
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
      <PageLink links={links} title="Ссылки на YouTube typescript" />
    </div>
  );
};

export default YouTubeTypescript;
