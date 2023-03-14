import React from "react";
import PageLink from "../components/general/PageLink/PageLink";
import { ILinkInfo } from "../models/types";

const CSSFishki = () => {
  const links: ILinkInfo[] = [
    {
      href: "https://active-vision.ru/icon/box-shadow/",
      title: "BOX-SHADOW ГЕНЕРАТОР",
    },
    {
      href: "https://active-vision.ru/icon/gradient/",
      title: "GRADIENT ГЕНЕРАТОР",
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

export default CSSFishki;
