import React from "react";
import PageLink from "../components/general/PageLink/PageLink";
import { ILinkInfo } from "../models/types";

const BrowserLinksNPM = () => {
  const links: ILinkInfo[] = [
    {
      href: "https://www.npmjs.com/package/dotenv/v/8.2.0?activeTab=versions",
      title: "npm i dotenv@8.2.0",
    },
    {
      href: "https://www.npmjs.com/package/cors",
      title: "npm i cors . CORS — это пакет node.js для предоставления промежуточного программного обеспечения.",
    },
    {
      href: "https://www.npmjs.com/package/express",
      title: "npm i express . Быстрый, бескомпромиссный, минималистичный веб-фреймворк для Node.js.",
    },
    {
      href: "https://www.npmjs.com/package/pg",
      title:
        "npm i pg . node-postgres. Неблокирующий клиент PostgreSQL для Node.js. Чистый JavaScript и необязательные нативные привязки libpq.",
    },
    {
      href: "https://www.npmjs.com/package/pg-hstore",
      title: "npm i pg-hstore . Пакет узлов для сериализации и десериализации данных JSON в формат hstore.",
    },
    {
      href: "https://www.npmjs.com/package/sequelize",
      title:
        "npm i sequelize . Sequelize — это простой в использовании ORM-инструмент Node.js на основе обещаний для Postgres , MySQL , MariaDB , SQLite , DB2 , Microsoft SQL Server и Snowflake . Он имеет надежную поддержку транзакций, отношения, нетерпеливую и ленивую загрузку, репликацию чтения и многое другое.",
    },
    {
      href: "https://www.npmjs.com/package/jwt-decode",
      title:
        "npm i jwt-decode . jwt-decode — это небольшая библиотека браузера, которая помогает декодировать токен JWT, закодированный Base64Url.",
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
      <PageLink links={links} title="Ссылки на установки программ в npm" />
    </div>
  );
};

export default BrowserLinksNPM;
