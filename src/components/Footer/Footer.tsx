import React from "react";
import { IFooterLinks } from "../../models/types";
import FooterLink from "../ui/links/FooterLink/FooterLink";
import styles from "./Footer.module.scss";

const Footer = () => {
  const FirstBlock: IFooterLinks[] = [
    { to: "/", children: "Общие вопросы" },
    { to: "/referenceBooks", children: "Справочная литература" },
    { to: "/linksIconsLoaders", children: "Ссылки на иконки, спинеры" },
    { to: "/websiteLayout", children: "Вёрстка web-сайтов" },
    { to: "/linksNPM", children: "npm менеджер пакетов" },
    { to: "/github", children: "GitHub" },
    { to: "/http", children: "HTTP" },
    { to: "/axios", children: "Axios" },
    { to: "/mobx", children: "Mobx" },
    { to: "/fireBase", children: "FireBase" },
    { to: "/dom", children: "DOM" },
  ];

  const SecondBlock: IFooterLinks[] = [
    { to: "/html", children: "HTML" },
    { to: "/css", children: "CSS" },
    { to: "/cssFishki", children: "CSS фишки" },
    { to: "/frameworksCSS", children: "Фреймворки CSS" },
    { to: "/javascript", children: "JavaScript" },
    { to: "/javascriptFishki", children: "JavaScript фишки" },
    { to: "/react", children: "React" },
    { to: "/reactRouter", children: "React Router" },
    { to: "/typescript", children: "Typescript" },
    { to: "/typescriptFishki", children: "Typescript фишки" },
    { to: "/vue", children: "Vue" },
  ];

  const ThirdBlock: IFooterLinks[] = [
    { to: "/arraymethods", children: "Методы массивов" },
    { to: "/arraytasks", children: "Задачи методов массивов" },
    { to: "/objectmethods", children: "Методы объектов" },
    { to: "/numberMethods", children: "Методы чисел" },
    { to: "/stringMethods", children: "Методы строк" },
    { to: "/destructuring", children: "Деструктуризация" },
    { to: "/promise", children: "Промисы" },
    { to: "/error", children: "Обработка ошибок" },
    { to: "/json", children: "Методы JSON" },
    { to: "/localStorage", children: "LocalStorage" },
  ];

  const FourthBlock: IFooterLinks[] = [
    { to: "/youTube", children: "На YouTube" },
    { to: "/youTubeAuthor", children: "На YouTube авторы" },
    { to: "/youTubeReact", children: "На YouTube React" },
    { to: "/youTubeJavascript", children: "На YouTube Javascript " },
    { to: "/youTubeTypescript", children: "На YouTube Typescript" },
    { to: "/youTubeCSS", children: "На YouTube CSS" },
    { to: "/youTubeInterview", children: "На YouTube собеседования" },
    { to: "/links", children: "Ссылки" },
    { to: "/barMenu", children: "Бар меню" },
  ];

  return (
    <footer className={styles["footer"]}>
      <div className={styles["footer__nav"]}>
        <div className={styles["footer__column"]}>
          {FirstBlock.map((link) => (
            <FooterLink key={link.children} to={link.to}>
              {link.children}
            </FooterLink>
          ))}
        </div>

        <div className={styles["footer__column"]}>
          {SecondBlock.map((link) => (
            <FooterLink key={link.to} to={link.to}>
              {link.children}
            </FooterLink>
          ))}
        </div>

        <div className={styles["footer__column"]}>
          {ThirdBlock.map((link) => (
            <FooterLink key={link.to} to={link.to}>
              {link.children}
            </FooterLink>
          ))}
        </div>

        <div className={styles["footer__column"]}>
          {FourthBlock.map((link) => (
            <FooterLink key={link.to} to={link.to}>
              {link.children}
            </FooterLink>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
