import React from "react";
import { IFooterLinks } from "../../models/types";
import FooterLink from "../ui/links/FooterLink/FooterLink";
import styles from "./Footer.module.scss";

const Footer = () => {
  const FirstBlock: IFooterLinks[] = [
    { to: "/", children: "Общие вопросы" },
    { to: "/generalLinks", children: "Общие ссылки" },
    { to: "/referenceBooks", children: "Справочная литература" },
    { to: "/iconsLoaders", children: "Ссылки на иконки, спинеры" },
    { to: "/webDevelopment", children: "Веб-разработка" },
    { to: "/linksNPM", children: "npm менеджер пакетов" },
    { to: "/github", children: "GitHub" },
    { to: "/http", children: "Web-архитектура, HTTP" },
    { to: "/webStorage", children: "Web Storage - веб хранилище" },
    { to: "/fireBase", children: "FireBase" },
    { to: "/destructuring", children: "Деструктуризация" },
  ];

  const SecondBlock: IFooterLinks[] = [
    { to: "/css", children: "CSS" },
    { to: "/html", children: "HTML" },
    { to: "/frameworksCSS", children: "Фреймворки CSS" },
    { to: "/javascript", children: "JavaScript" },
    { to: "/javascriptFishki", children: "JavaScript фишки" },
    { to: "/react", children: "React" },
    { to: "/reactRouter", children: "React Router" },
    { to: "/typescript", children: "Typescript" },
    { to: "/linksTypescript", children: "Ссылки на Typescript" },
    { to: "/vue", children: "Vue" },
    { to: "/dom", children: "DOM" },
  ];

  const ThirdBlock: IFooterLinks[] = [
    { to: "/arraymethods", children: "Методы массивов" },
    { to: "/numberMethods", children: "Методы чисел" },
    { to: "/stringMethods", children: "Методы строк" },
    { to: "/json", children: "Методы JSON" },
    { to: "/regularExpression", children: "Регулярное выражение" },
    { to: "/interviews", children: "Собеседования" },
    { to: "/tasksFromInterviews", children: "Задачи из собеседований" },
    { to: "/tasksFromMinin", children: "Задачи от Минина" },
    { to: "/tasksForTypescript", children: "Задачи по Typescript" },
  ];

  const FourthBlock: IFooterLinks[] = [
    { to: "/error", children: "Обработка ошибок" },
    { to: "/youTube", children: "На YouTube" },
    { to: "/youTubeAuthor", children: "На YouTube авторы" },
    { to: "/youTubeReact", children: "На YouTube React" },
    { to: "/youTubeJavascript", children: "На YouTube Javascript " },
    { to: "/youTubeTasksJavascript", children: "На YouTube задачи по Javascript " },
    { to: "/youTubeTypescript", children: "На YouTube Typescript" },
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
