import { Outlet } from "react-router-dom";
import React, { FC } from "react";
import styles from "./Layout.module.scss";
import Footer from "../Footer/Footer";
import TopMenu from "../topMenu/TopMenu/TopMenu";

const Layout: FC = () => {
  return (
    <>
      <main className={styles["layuot"]}>
        <Outlet />
      </main>
      <TopMenu />

      <Footer />
    </>
  );
};

export default Layout;
