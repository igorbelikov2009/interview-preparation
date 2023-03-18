import React from "react";
import PageLink from "../components/general/PageLink/PageLink";
import { ILinkInfo } from "../models/types";

const YouTubeReact = () => {
  const links: ILinkInfo[] = [
    {
      href: "https://www.youtube.com/watch?v=-cZOdWjFwXw&t=87s",
      title: "50 вопросов на React JS собеседование. Минин.",
    },
    {
      href: "https://www.youtube.com/watch?v=sjdMBJ72M4s&t=11s",
      title: "Тестирование React приложения. Михаил Непомнящий.",
    },
    {
      href: "https://www.youtube.com/watch?v=KWT8OKzrMZ4&list=PLiZoB8JBsdzkClMnvcedplvSF_JPhvopM&index=171",
      title: "Разделение логики и представления в React-приложении. Компоненты высшего порядка. Михаил Непомнящий.",
    },
    {
      href: "https://www.youtube.com/watch?v=MbehBXyQPQ8",
      title: "Компоненты высшего порядка ReactJS (Higher-order components). Веб-разработка - DevMagazine.",
    },
    {
      href: "https://www.youtube.com/watch?v=igmAJCCSILY&t=10s",
      title: "Кастомные React-Хуки, useToggle, useLocalStorage. Михаил Непомнящий.",
    },
    {
      href: "https://www.youtube.com/watch?v=DYtdo2DbIlE&t=16s",
      title: "Reselect для оптимизации Redux стора. Михаил Непомнящий.",
    },
    {
      href: "https://www.youtube.com/watch?v=Jxfun6Jnt5Q",
      title: "Валидация форм с react-hook-form в React-приложениях. Михаил Непомнящий. ",
    },
    {
      href: "https://www.youtube.com/watch?v=7G2JaMFDQZ0&t=14s",
      title: "Vite для быстрой разработки и сборки приложения. Михаил Непомнящий.",
    },
    {
      href: "https://www.youtube.com/watch?v=ic-P67jinhw",
      title: "Алиасы импортов для React приложений (Vite). Михаил Непомнящий.",
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
      title: "===============",
    },
    {
      href: "https://www.youtube.com/watch?v=-Xjwe4IwTMM",
      title: "Scroll to component in React",
    },
    {
      href: "https://www.youtube.com/watch?v=QzW03hyw_bU",
      title: "How To Smooth Scroll in React - Smooth Scrolling Tutorial. Code Commerce",
    },
    {
      href: "https://www.youtube.com/watch?v=FgvJH91a5K0&t=48s",
      title: "Drag and drop на REACT JS. Сортировка. Просто и быстро!  Ulbi TV.",
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
      <PageLink links={links} title="Ссылки на YouTube React" />
    </div>
  );
};

export default YouTubeReact;
