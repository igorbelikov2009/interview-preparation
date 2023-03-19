import React from "react";
import Page from "../components/general/Page/Page";
import PageLink from "../components/general/PageLink/PageLink";
import { arrayLocalStorage, linksLocalStorage } from "../data/localStorageData";

const LocalStoragePage = () => {
  return (
    <div>
      <PageLink links={linksLocalStorage} title="Куки-файлы, сессионное хранилище и локальное хранилище, ссылки" />
      <Page
        title="Чем отличаются куки-файлы, сессионное хранилище и локальное хранилище?"
        ArrayHeadingAnswers={arrayLocalStorage}
      />
    </div>
  );
};

export default LocalStoragePage;
