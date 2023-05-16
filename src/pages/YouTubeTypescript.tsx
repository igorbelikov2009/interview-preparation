import { motion } from "framer-motion"; // анимация
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
      href: "https://www.youtube.com/watch?v=ltn9QoBCJkU&t=9s",
      title: "Axios + TS. Axios от А до Я. Полный курс в React приложении. ",
    },
    {
      href: "https://www.youtube.com/watch?v=VBpmbqTi86Y",
      title: "Фишки TypeScript о которых ТЫ НЕ ЗНАЛ! Ulbi TV.",
    },
    {
      href: "https://www.youtube.com/playlist?list=PLCp7YGqt4kFrLLx2rrg5RXVELPIzCJAT0",
      title: "Краткий Обзор TypeScript",
    },
    {
      href: "https://www.youtube.com/playlist?list=PLdTPrJkdrLGGgSnXMsO-Rix3MTuySb_mF",
      title: "TypeScript. wise.js",
    },
    {
      href: "https://www.youtube.com/playlist?list=PL3kMIP8C86shhC2qYjVUXyuk6Mk87bBDw",
      title: "TypeScript Дмитрий Герасимов",
    },
    {
      href: "https://www.youtube.com/playlist?list=PLFe0raUk4QF5QqZ8PYuPcoInxAJ1gaHpj",
      title: "Уроки TypeScript Веб Программирование",
    },
    {
      href: "https://www.youtube.com/playlist?list=PLGS5TF12xmz81204LuIeraH9YFUEfFSgd",
      title: "Typescript с нуля, 10 видео. Лабіринт Знання",
    },
    {
      href: "https://www.youtube.com/playlist?list=PL_trBE0sVQmcmKtM0vcp17S6e9tZCTL7T",
      title: "TYPESCRIPT SIBERIA CAN CODE 🧊 - Frontend",
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
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 }, opacity: 0 }}
    >
      <PageLink links={links} title="Ссылки на YouTube typescript" />
    </motion.div>
  );
};

export default YouTubeTypescript;
