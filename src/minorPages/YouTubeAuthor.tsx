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
      href: "https://www.youtube.com/@UlbiTV",
      title: "Ulbi TV. Ульби Тимур fullstack разработчик.",
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
      href: "https://www.youtube.com/@YauhenKavalchuk",
      title: "webDev. Евгений Ковальчук.",
    },
    {
      href: "https://www.youtube.com/@VladilenMinin",
      title: "Владилен Минин",
    },
    {
      href: "https://www.youtube.com/@public_code_/videos",
      title: "Public Code. 139 видео про React. Много typescript: работы и элементы. ",
    },
    {
      href: "https://www.youtube.com/@romanchebotaev/videos",
      title: "Чеботаев Роман. Frontend Blog. 27 видео",
    },
    {
      href: "https://www.youtube.com/c/DevMagazineChannel",
      title: "Веб-разработка - DevMagazine. 130 видео",
    },
    {
      href: "https://www.youtube.com/@maximroslow/videos",
      title: "Max Roslow. 28 видео. Магазин самолётов.",
    },
    {
      href: "https://www.youtube.com/@ITKAMASUTRA/videos",
      title: "IT-KAMASUTRA. 486 видео ",
    },
    {
      href: "https://www.youtube.com/@webstack-frontend1697",
      title: "WebStack - Frontend. Артем Карпухов. 22 видео. ",
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
