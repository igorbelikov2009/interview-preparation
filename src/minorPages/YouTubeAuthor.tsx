import React from "react";
import PageLink from "../components/general/PageLink/PageLink";
import { ILinkInfo } from "../models/types";

const YouTubeAuthor = () => {
  const links: ILinkInfo[] = [
    {
      href: "https://www.youtube.com/@mishanep/videos",
      title: "Михаил Непомнящий",
    },
    {
      href: "https://www.youtube.com/@annblok_webdev/videos",
      title: "Анна Блок",
    },
    {
      href: "https://www.youtube.com/@user-kd6bu2qj1v",
      title: "Школа разработки интерфейсов 2019-2020 Фронтенд",
    },
    {
      href: "https://www.youtube.com/@itgid",
      title: "WebDev с нуля. Канал Алекса Лущенко",
    },
    {
      href: "https://www.youtube.com/c/REDGroup",
      title: "RED Group",
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
      <PageLink links={links} title="Гуру фронтенда на YouTube." />
    </div>
  );
};

export default YouTubeAuthor;
