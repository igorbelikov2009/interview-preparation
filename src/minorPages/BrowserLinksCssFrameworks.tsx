import React from "react";
import PageLink from "../components/general/PageLink/PageLink";
import { ILinkInfo } from "../models/types";

const BrowserLinksCssFrameworks = () => {
  const links: ILinkInfo[] = [
    {
      href: "https://www.npmjs.com/package/node-sass",
      title: "npm i node-sass",
    },
    {
      href: "https://storybook.js.org/",
      title:
        "Storybook — это мастер-класс по внешнему интерфейсу для изолированного создания компонентов и страниц пользовательского интерфейса. Тысячи команд используют его для разработки пользовательского интерфейса, тестирования и документации. Это с открытым исходным кодом и бесплатно.",
    },
    {
      href: "https://habr.com/ru/post/340384/",
      title: "Создание библиотеки компонентов с использованием Storybook",
    },
    {
      href: "https://ant.design/docs/react/introduce",
      title:
        "Ant Design of React - библиотека пользовательского интерфейса React antd, которая содержит набор высококачественных компонентов и демонстраций для создания многофункциональных интерактивных пользовательских интерфейсов.",
    },
    {
      href: "https://loading.io/css",
      title: "Pure CSS Loaders",
    },
    {
      href: "https://tailwindcss.com/docs/guides/create-react-app",
      title: "Tailwind CSS - Утилитарный CSS-фреймворк для создания любого дизайна в вашей разметке.",
    },
    {
      href: "https://react-bootstrap.netlify.app/components/alerts/",
      title: "bootstrap components (компоненты)",
    },
    {
      href: "https://bootstrap-5.ru/",
      title: "Bootstrap",
    },
    {
      href: "https://react-bootstrap.github.io/getting-started/introduction/",
      title: "React-Bootstrap. npm install react-bootstrap bootstrap",
    },
    {
      href: "https://react-bootstrap-v4.netlify.app/getting-started/introduction/",
      title: "React-Bootstrap. npm install react-bootstrap bootstrap@4.6.0",
    },
    {
      href: "https://react.school/material-ui",
      title:
        "Material UI — библиотека пользовательского интерфейса React. Честно говоря, нет второй библиотеки пользовательского интерфейса для React, которую мы могли бы порекомендовать.",
    },
    {
      href: "https://v4.mui.com/ru/getting-started/installation/",
      title:
        "Инструкция по установке Material-UI, самый популярный в мире фреймворк для пользовательского интерфейса React.",
    },
    {
      href: "https://mui.com/material-ui/getting-started/overview/",
      title:
        "Material UI — это библиотека компонентов пользовательского интерфейса React, реализующая Material Design от Google.",
    },
    {
      href: "https://mui.com/material-ui/about-the-lab/",
      title:
        "О лаборатории. В этом пакете размещаются компоненты инкубатора, которые еще не готовы к перемещению в ядро.",
    },
    {
      href: "https://mui.com/",
      title: "Material UI. React. Typescript. CSS ",
    },
    {
      href: "https://github.com/mui/material-ui",
      title: "mui/material-ui",
    },
    {
      href: "https://mui.com/material-ui/react-rating/#main-content",
      title: "material-ui components (компоненты)",
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
      <PageLink links={links} title="Ссылки на фреймворки CSS" />
    </div>
  );
};

export default BrowserLinksCssFrameworks;
