import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ITopMenuLinks } from "../../models/types";
import MenuLink from "../ui/links/MenuLink/MenuLink";

import styles from "./TopMenu.module.scss";

const TopMenu = () => {
  const [isBackgroundWhite, setBackgroundWhite] = useState(true);
  const navigate = useNavigate();
  const pathname = useLocation().pathname;
  // console.log(pathname);

  const TopMenuLinks: ITopMenuLinks[] = [
    { to: "/", children: "Общие вопросы" },
    { to: "/axios", children: "Axios" },
    { to: "/css", children: "CSS" },
    { to: "/dom", children: "DOM" },
    { to: "/github", children: "GitHub" },
    { to: "/html", children: "HTML" },
    { to: "/http", children: "HTTP" },
    { to: "/javascript", children: "JavaScript" },
    { to: "/react", children: "React" },
  ];

  useEffect(() => {
    if (pathname === "*") {
      setBackgroundWhite(false);
    } else {
      setBackgroundWhite(true);
    }
  }, [pathname, setBackgroundWhite]);

  return (
    <header className={isBackgroundWhite ? styles["top-menu__with-border"] : styles["top-menu"]}>
      <div className={styles["top-menu__container"]}>
        <div className={styles["top-menu__nav"]}>
          {TopMenuLinks.map((link) => (
            <MenuLink key={link.to} to={link.to} isBackgroundWhite={isBackgroundWhite}>
              {link.children}
            </MenuLink>
          ))}
        </div>

        <div className={styles["top-menu__right-block"]}>
          {/* <div
            onMouseOver={() => setPrivateOfficeHovered(true)}
            onMouseOut={() => setPrivateOfficeHovered(false)}
            onClick={openLoginForm}
            className={styles["top-menu__private-office"]}
          >
            <TripleIcon icon="User" light={!isBackgroundWhite} hovered={isPrivateOfficeHovered} />

            <p className={isBackgroundWhite ? styles["top-menu__title_news"] : styles["top-menu__title"]}>
              Личный кабинет
            </p>
          </div> */}
        </div>
      </div>

      {/* 
      <AnimatePresence>
        {isAdminLoginVisible && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{ overflow: "hidden" }}
          >
            <AdminLogin closeAdminLogin={closeAdminLogin} />
          </motion.div>
        )}
      </AnimatePresence> */}
    </header>
  );
};

export default TopMenu;
