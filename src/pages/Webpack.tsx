import React from "react";
import PageLink from "../components/general/PageLink/PageLink";
import { ILinkInfo } from "../models/types";

const Webpack = () => {
  const links: ILinkInfo[] = [
    {
      href: "https://tokmakov.msk.ru/blog/item/708",
      title: "Webpack. Часть 1 из 2. Точки входа и выхода, плагины webpack, модули и загрузчики",
    },
    {
      href: "https://tokmakov.msk.ru/blog/item/709",
      title: "Webpack. Часть 2 из 2. Загрузка шрифтов, sass-loader, babel-loader и т.д.",
    },
    {
      href: "https://tokmakov.msk.ru/blog/item/712",
      title: "Расширение «Prettier — Code formatter» для VS Code",
    },
    {
      href: "https://tokmakov.msk.ru/blog/item/713",
      title: "Расширение «ESLint» для VS Code, часть 1 из 2",
    },
    {
      href: "https://tokmakov.msk.ru/blog/item/714",
      title: "Расширение «ESLint» для VS Code, часть 2 из 2",
    },
    {
      href: "https://tokmakov.msk.ru/blog/item/711",
      title: "Расширение «Remote — SSH» для VS Code",
    },
    {
      href: "https://tokmakov.msk.ru/github",
      title: "Узелки на память",
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
      <PageLink links={links} title="Webpack" />
    </div>
  );
};

export default Webpack;
