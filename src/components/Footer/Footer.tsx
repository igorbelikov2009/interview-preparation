import React from "react";
import { IFooterLinks } from "../../models/types";
import FooterLink from "../ui/links/FooterLink/FooterLink";
import styles from "./Footer.module.scss";

const Footer = () => {
  const FirstBlock: IFooterLinks[] = [
    { to: "/", children: "Общие вопросы" },
    { to: "/css", children: "CSS" },
    { to: "/html", children: "HTML" },
    { to: "/http", children: "HTTP" },
    { to: "/javascript", children: "JavaScript" },
    { to: "/javascriptFishki", children: "JavaScript фишки" },
    { to: "/linksjavascript", children: "Ссылки JavaScript" },
    { to: "/react", children: "React" },
    { to: "/reactFishki", children: "React фишки" },
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
    { to: "/axios", children: "Axios" },
    { to: "/linksvue", children: "Ссылки Vue" },
    { to: "/vue", children: "Vue" },
    { to: "/dom", children: "DOM" },
    { to: "/github", children: "GitHub" },
  ];

  const FourthBlock: IFooterLinks[] = [
    { to: "/arraymethods", children: "Методы массивов" },
    { to: "/arraytasks", children: "Задачи методов массивов" },
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
