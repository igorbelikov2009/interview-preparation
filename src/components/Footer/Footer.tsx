import React from "react";
import { IFooterLinks } from "../../models/types";
import FooterLink from "../ui/links/FooterLink/FooterLink";
import styles from "./Footer.module.scss";

const Footer = () => {
  const FirstBlock: IFooterLinks[] = [
    { to: "/", children: "Общие вопросы" },
    { to: "/websiteLayout", children: "Вёрстка web-сайтов" },
    { to: "/javascript", children: "JavaScript" },
    { to: "/javascriptFishki", children: "JavaScript фишки" },
    { to: "/linksjavascript", children: "Ссылки JavaScript" },
    { to: "/react", children: "React" },
    { to: "/reactFishki", children: "React фишки" },
    { to: "/http", children: "HTTP" },
    { to: "/axios", children: "Axios" },
    { to: "/mobx", children: "Mobx" },
    { to: "/linksvue", children: "Ссылки Vue" },
  ];

  const SecondBlock: IFooterLinks[] = [
    { to: "/typescript", children: "Typescript" },
    { to: "/typescriptFishki", children: "Typescript фишки" },
    { to: "/destructuring", children: "Деструктуризация" },
    { to: "/error", children: "Обработка ошибок" },
    { to: "/json", children: "Методы JSON" },
    { to: "/browserlinks", children: "Браузерные ссылки" },
    { to: "/objectmethods", children: "Методы объектов" },
    { to: "/promise", children: "Промисы" },
  ];

  const ThirdBlock: IFooterLinks[] = [
    { to: "/vue", children: "Vue" },
    { to: "/dom", children: "DOM" },
    { to: "/github", children: "GitHub" },
    { to: "/arraymethods", children: "Методы массивов" },
    { to: "/arraytasks", children: "Задачи методов массивов" },
    { to: "/numberMethods", children: "Работа с числами" },
    { to: "/stringMethods", children: "Методы строк" },
    { to: "/css", children: "CSS" },
    { to: "/html", children: "HTML" },
    { to: "/barMenu", children: "Бар меню" },
    { to: "/localStorage", children: "LocalStorage" },
  ];

  const FourthBlock: IFooterLinks[] = [
    { to: "/browserLinksCSSFishki", children: "Ссылки на фишки CSS" },
    { to: "/browserLinksGitHub", children: "Ссылки на GitHub" },
    { to: "/browserLinksFireBase", children: "Ссылки на FireBase" },
    { to: "/browserLinksDirectory", children: "Ссылки на справочники" },
    { to: "/browserLinksCssFrameworks", children: "Ссылки на фреймворки CSS" },
    { to: "/browserLinksTypescript", children: "Ссылки на Typescript" },
    { to: "/browserLinksReact", children: "Ссылки на React" },
    { to: "/browserLinksNPM", children: "Ссылки на npm" },
    { to: "/browserLinksIconsLoaders", children: "Ссылки на иконки, спинеры" },

    { to: "/youTube", children: "На YouTube" },
    { to: "/youTubeAuthor", children: "На YouTube авторы" },
    { to: "/youTubeCSS", children: "На YouTube CSS-фишки" },
    { to: "/youTubeJavascript", children: "На YouTube Javascript" },
    { to: "/youTubeJavascriptFishki", children: "На YouTube Javascript-фишки" },
    { to: "/youTubeReact", children: "На YouTube React" },
    { to: "/youTubeTypescript", children: "На YouTube Typescript" },
    { to: "/youTubeInterview", children: "На YouTube собеседования" },
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
