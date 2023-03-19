import React from "react";
import PageLink from "../components/general/PageLink/PageLink";
import { ILinkInfo } from "../models/types";

const LinksToIconsLoaders = () => {
  const links: ILinkInfo[] = [
    {
      href: "https://active-vision.ru/icon/",
      title: "Скачайте иконки бесплатно",
    },
    {
      href: "https://atuin.ru/blog/loadery-i-spinnery-na-css/",
      title: "Сборник иконок лоадеров и спиннеров на CSS",
    },
    {
      href: "https://html5book.ru/specsimvoly-html/",
      title: "Спецсимволы HTML",
    },
    {
      href: "https://symbl.cc/ru/html-entities/",
      title: "Спецсимволы HTML-мнемоники",
    },
    {
      href: "https://getemoji.com/",
      title: "Copy and Paste Emoji. Скопируйте и вставьте эмодзи",
    },
    {
      href: "https://developers.google.com/fonts/docs/material_icons#icon_font_for_the_web",
      title: "Иконочный шрифт для Интернета. Установка, использование через Google Font",
    },
    {
      href: "https://fonts.google.com/icons?selected=Material+Icons",
      title:
        "Материальные иконки доступны в пяти стилях и различных загружаемых размерах и плотности. Иконки основаны на основных принципах и показателях Material Design.",
    },
    {
      href: "https://developers.google.com/fonts/docs/material_icons",
      title: "Material Icons Guide. Обзор иконок материалов — где их взять и как интегрировать в свои проекты",
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
    {
      href: "",
      title: "",
    },
  ];

  return (
    <div>
      <PageLink links={links} title="Ссылки на сайты с иконками, лоадерами" />
    </div>
  );
};

export default LinksToIconsLoaders;
