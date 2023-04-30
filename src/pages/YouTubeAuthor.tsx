import { motion } from "framer-motion"; // анимация
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
      href: "https://www.youtube.com/@northernlights1368",
      title: "Northern Lights. Генератор паролей, цветов, случайных чисел на JavaScript",
    },
    {
      href: "https://www.youtube.com/@bedeveloper",
      title: "Быть Программистом. 296 видео",
    },
    {
      href: "https://www.youtube.com/@ivashov",
      title: "Обучение HTML, CSS, JavaScript. Алгоритмы поиска, сортировка, логические задачи.",
    },
    {
      href: "https://www.youtube.com/@it-sin9k",
      title: "АйТи Синяк. 67 видео",
    },
    {
      href: "https://www.youtube.com/@dmitrii_gerasimov",
      title: "Дмитрий Герасимов. 232 видео",
    },
    {
      href: "https://www.youtube.com/@jstop",
      title: "JS top. Простые и элементарные задачи по JavaScript",
    },
    {
      href: "https://www.youtube.com/playlist?list=PLEhUqRdnYdykSMw9irD8yJ7q5GSVvQLL0",
      title: "Viktor Bogutskii.  Задачи JavaScript. Codewars.",
    },
    {
      href: "https://www.youtube.com/@frontendscience",
      title: "Front-end. Наука от Сергея Пузанкова. 142 видео",
    },
    {
      href: "https://www.youtube.com/@IvanPetrychenkoDev/videos",
      title: "Ivan Petrychenko. 47 видео о JavaScript.",
    },
    {
      href: "https://www.youtube.com/@wisejs/playlists",
      title: "wise.js. Mobx, Typescript.",
    },
    {
      href: "https://www.youtube.com/@skillblog-web",
      title: "Skill Blog: Веб-разработка",
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
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 }, opacity: 0 }}
    >
      <PageLink links={links} title="Гуру фронтенда на YouTube." />
    </motion.div>
  );
};

export default YouTubeAuthor;
