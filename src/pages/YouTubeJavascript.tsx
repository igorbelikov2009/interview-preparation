import { motion } from "framer-motion"; // анимация
import React from "react";
import PageLink from "../components/general/PageLink/PageLink";
import { ILinkInfo } from "../models/types";

const YouTubeJavascript = () => {
  const linksYouTubeJavascript: ILinkInfo[] = [
    {
      href: "https://www.youtube.com/watch?v=GsYiq4Ic384&list=PLM7wFzahDYnGF4WqYaSuwnItYDEBakTDS",
      title: "30 вопросов JavaScript собеседования - бесплатный курс",
    },
    {
      href: "https://www.youtube.com/watch?v=2dPEFTpzTgE",
      title: "Простой способ обойти защиту копирования контента! Пишем script защиты контента. JS, keydown, copy.",
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
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 }, opacity: 0 }}
    >
      <PageLink links={linksYouTubeJavascript} title="Javascript на YouTube." />
    </motion.div>
  );
};

export default YouTubeJavascript;
