import { motion } from "framer-motion"; // анимация
import React from "react";
import Page from "../components/general/Page/Page";
import PageLink from "../components/general/PageLink/PageLink";
import { arrayLocalStorage, linksLocalStorage } from "../data/localStorageData";

const LocalStoragePage = () => {
  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 }, opacity: 0 }}
    >
      <PageLink links={linksLocalStorage} title="Куки-файлы, сессионное хранилище и локальное хранилище, ссылки" />
      <Page
        title="Чем отличаются куки-файлы, сессионное хранилище и локальное хранилище?"
        ArrayHeadingAnswers={arrayLocalStorage}
      />
    </motion.div>
  );
};

export default LocalStoragePage;
