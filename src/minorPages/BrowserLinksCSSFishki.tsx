import React from "react";
import PageLink from "../components/general/PageLink/PageLink";
import { ILinkInfo } from "../models/types";

const BrowserLinksCSSFishki = () => {
  const links: ILinkInfo[] = [
    {
      href: "https://active-vision.ru/blog/polosa-prokrutki-css/",
      title: "Как стилизовать или убрать полосу прокрутки — CSS скроллбар?",
    },
    {
      href: "https://active-vision.ru/blog/youtube-video-na-sayt/",
      title: "Добавляем YouTube видео на сайт",
    },
    {
      href: "https://active-vision.ru/icon/box-shadow/",
      title: "BOX-SHADOW ГЕНЕРАТОР",
    },
    {
      href: "https://active-vision.ru/icon/gradient/",
      title: "GRADIENT ГЕНЕРАТОР",
    },
    {
      href: "https://meyerweb.com/eric/tools/css/reset/",
      title: "Сброс - reset CSS.",
    },
    {
      href: "https://bobbyhadz.com/",
      title: "Блог боббихадз, статьи о веб-разработке и облачных вычислениях.",
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
    {
      href: "",
      title: "",
    },
  ];

  return (
    <div>
      <PageLink links={links} title="Фишки CSS, ссылки" />
    </div>
  );
};

export default BrowserLinksCSSFishki;
