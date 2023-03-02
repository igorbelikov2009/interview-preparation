import { motion, AnimatePresence } from "framer-motion"; // анимация
import React, { useState, useEffect, FC, useContext } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../../context";
import { ITopMenuLinks } from "../../../models/types";
import TripleIcon from "../../general/TripleIcon/TripleIcon";
import MenuLink from "../../ui/links/MenuLink/MenuLink";
import LoginForm from "../LoginForm/LoginForm";
import styles from "./TopMenu.module.scss";
import topImage from "../../../assets/images/aboutFundTop.jpg";

const TopMenu: FC = () => {
  const { isBackgroundWhite, setBackgroundWhite, isLoginFormVisible, setLoginFormVisible } = useContext(AuthContext);
  const [isPrivateOfficeHovered, setPrivateOfficeHovered] = useState(false);
  const pathname = useLocation().pathname;

  const TopMenuLinks: ITopMenuLinks[] = [
    { to: "/", children: "Общие вопросы" },
    { to: "/websiteLayout", children: "Вёрстка web-сайтов" },
    { to: "/css", children: "CSS" },
    { to: "/html", children: "HTML" },
    { to: "/javascript", children: "JavaScript" },
    { to: "/javascriptFishki", children: "JavaScript фишки" },
    { to: "/react", children: "React" },
    { to: "/reactFishki", children: "React фишки" },
    { to: "/typescript", children: "Typescript" },
    { to: "/typescriptFishki", children: "Typescript фишки" },
  ];

  useEffect(() => {
    if (
      pathname === "/" ||
      pathname === "/websiteLayout" ||
      pathname === "/css" ||
      pathname === "/html" ||
      pathname === "/javascript" ||
      pathname === "/javascriptFishki" ||
      pathname === "/react" ||
      pathname === "/reactFishki" ||
      pathname === "/typescript" ||
      pathname === "/typescriptFishki" ||
      pathname === "*"
    ) {
      setBackgroundWhite(false);
    } else {
      setBackgroundWhite(true);
    }
  }, [pathname, setBackgroundWhite]);

  const openLoginForm = () => {
    setLoginFormVisible((prev) => !prev);
    if (isLoginFormVisible) {
      document.body.style.overflow = "";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  const closeLoginForm = () => {
    setLoginFormVisible((prev) => !prev);
    if (isLoginFormVisible) {
      document.body.style.overflow = "";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  return (
    <header
      className={isBackgroundWhite ? styles["top-menu__with-border"] : styles["top-menu"]}
      style={{ backgroundImage: `url(${topImage})` }}
    >
      <div className={styles["top-menu__container"]}>
        <div className={styles["top-menu__nav"]}>
          {TopMenuLinks.map((link) => (
            <MenuLink key={link.to} to={link.to} isBackgroundWhite={isBackgroundWhite}>
              {link.children}
            </MenuLink>
          ))}
        </div>

        <div className={styles["top-menu__right-block"]}>
          <div
            onMouseOver={() => setPrivateOfficeHovered(true)}
            onMouseOut={() => setPrivateOfficeHovered(false)}
            onClick={openLoginForm}
            className={styles["top-menu__private-office"]}
          >
            <TripleIcon icon="User" light={!isBackgroundWhite} hovered={isPrivateOfficeHovered} />

            <p className={isBackgroundWhite ? styles["top-menu__title_news"] : styles["top-menu__title"]}>
              Личный кабинет
            </p>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isLoginFormVisible && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{ overflow: "hidden" }}
          >
            <LoginForm closeLoginForm={closeLoginForm} />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default TopMenu;
