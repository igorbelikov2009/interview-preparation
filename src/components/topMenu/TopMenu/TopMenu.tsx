import React, { useEffect, FC, useContext } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../../context";
import { ITopMenuLinks } from "../../../models/types";
import MenuLink from "../../ui/links/MenuLink/MenuLink";
import styles from "./TopMenu.module.scss";
import topImage from "../../../assets/images/aboutFundTop.jpg";

const TopMenu: FC = () => {
  const { isBackgroundWhite, setBackgroundWhite } = useContext(AuthContext);
  const pathname = useLocation().pathname;

  const TopMenuLinks: ITopMenuLinks[] = [
    { to: "/", children: "Вопросы" },
    { to: "/generalLinks", children: "Ссылки" },
    { to: "/css", children: "CSS" },
    { to: "/javascript", children: "JS" },
    { to: "/javascriptFishki", children: "Фишки" },
    { to: "/react", children: "React" },
    { to: "/typescript", children: "TS" },
    // { to: "/youTube", children: "На YouTube" },
  ];

  useEffect(() => {
    if (
      pathname === "/" ||
      pathname === "/generalLinks" ||
      pathname === "/css" ||
      pathname === "/javascript" ||
      pathname === "/javascriptFishki" ||
      pathname === "/react" ||
      pathname === "/typescript" ||
      // pathname === "/youTube" ||
      pathname === "*"
    ) {
      setBackgroundWhite(false);
    } else {
      setBackgroundWhite(true);
    }
  }, [pathname, setBackgroundWhite]);

  return (
    <header
      className={isBackgroundWhite ? styles["top-menu__with-border"] : styles["top-menu"]}
      style={{ backgroundImage: `url(${topImage})` }}
    >
      <div className={styles["top-menu__nav"]}>
        {TopMenuLinks.map((link) => (
          <MenuLink key={link.to} to={link.to} isBackgroundWhite={isBackgroundWhite}>
            {link.children}
          </MenuLink>
        ))}
      </div>
    </header>
  );
};

export default TopMenu;
