import React, { FC } from "react";
import { Link, useMatch } from "react-router-dom";
import { IFooterLinks } from "../../../../models/types";
import styles from "./FooterLink.module.scss";

const FooterLink: FC<IFooterLinks> = ({ children, to, ...props }) => {
  //параметром useMatch будет объект настройки
  const match = useMatch({
    path: to,
    // полностью ссылка включена или нет.
    // Если это главная страничка, то мы берём полный путь. Если не главная, то неполный путь.
    // to - это наша ссылка, если это главная страница, то to имеет длину единичку.
    end: to.length === 1,
  });
  //   console.log(match);

  return (
    <div>
      <Link to={to} className={match ? styles["link-active"] : styles["link"]}>
        {children}
      </Link>
    </div>
  );
};

export default FooterLink;
