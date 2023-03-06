import React, { FC, useState, useMemo } from "react";
import { ILinkInfo } from "../../../models/types";
import InputSearch from "../../ui/inputs/InputSearch";
import LinkInfo from "../LinkInfo/LinkInfo";
import styles from "./PageLink.module.scss";

interface PageLinkProps {
  title: string;
  links: ILinkInfo[];
}

const PageLink: FC<PageLinkProps> = ({ title, links }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredLinks = useMemo(() => {
    return links.filter((link) => link.title.toLowerCase().includes(searchQuery));
  }, [links, searchQuery]);

  return (
    <section className={styles["page"]}>
      <div className={styles["page__container"]}>
        <div>
          <h1 className={styles["page__heading"]}>{title} </h1>

          <div className={styles["page__container-search-query"]}>
            <InputSearch
              placeholder="Поиск по названию ссылок"
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </div>

          {filteredLinks.map((item, index) => (
            <LinkInfo key={index} href={item.href} title={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PageLink;
