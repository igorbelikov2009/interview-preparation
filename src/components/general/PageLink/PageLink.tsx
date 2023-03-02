import React, { FC } from "react";
import { ILinkInfo } from "../../../models/types";
import LinkInfo from "../LinkInfo/LinkInfo";
import styles from "./PageLink.module.scss";

interface PageLinkProps {
  title: string;
  links: ILinkInfo[];
}

const PageLink: FC<PageLinkProps> = ({ title, links }) => {
  return (
    <section className={styles["page"]}>
      <div className={styles["page__container"]}>
        <div>
          <h1 className={styles["page__heading"]}>{title} </h1>

          {links.map((item, index) => (
            <LinkInfo key={index} href={item.href} title={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PageLink;
