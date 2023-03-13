import React from "react";
import PageLink from "../components/general/PageLink/PageLink";
import { ILinkInfo } from "../models/types";

const YouTube = () => {
  const links: ILinkInfo[] = [
    {
      href: "https://www.youtube.com/watch?v=pGkQ5ApKIUY",
      title: "MongoDB. Основные понятия. webDev",
    },
    {
      href: "https://www.youtube.com/watch?v=LNvmI8a9jwY&t=46s",
      title: "Mongo DB ПОЛНЫЙ КУРС. Ulbi TV ",
    },
    {
      href: "https://www.youtube.com/watch?v=sdlYNKjCGU0&t=104s",
      title: "Синхронизация Redux и localStorage с redux-persist. Михаил Непомнящий.",
    },
    {
      href: "https://www.youtube.com/playlist?list=PLiZoB8JBsdzklPlprqQRwGQuyD92f-Wm8",
      title: "JavaScript фишки. Михаил Непомнящий",
    },
    {
      href: "https://www.youtube.com/watch?v=AhYsLa9YaeY&t=17s",
      title: "Авторизация на JWT токенах. Чеботарёв Роман. ",
    },
    {
      href: "https://www.youtube.com/watch?v=d_aJdcDq6AY",
      title: "Простая авторизация на NODE JS. Роли пользователя. Express и MongoDB. JWT Access Token, bcrypt. Ulbi TV.",
    },
    {
      href: "https://www.youtube.com/watch?v=fN25fMQZ2v0&list=PL6DxKON1uLOEbfFpZQA9aztkj-guW52jn",
      title: "Продвинутая JWT авторизация на React и Node js. Access, refresh, активация по почте. Ulbi TV.",
    },
    {
      href: "https://www.youtube.com/watch?v=sdlYNKjCGU0&t=6s",
      title: "Синхронизация Redux и localStorage с redux-persist. Михаил Непомнящий.",
    },
    {
      href: "https://www.youtube.com/watch?v=OZ_FUaV_xbg&t=6s",
      title: "Библиотека компонентов Material UI. Быстрый старт. Михаил Непомнящий.",
    },
    {
      href: "https://www.youtube.com/watch?v=Nicadhseqos&t=82s",
      title: "Zod для валидации API и форм. Михаил Непомнящий.",
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
      <PageLink links={links} title="Ссылки на YouTube" />
    </div>
  );
};

export default YouTube;
