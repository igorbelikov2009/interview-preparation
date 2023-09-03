import React, { FC, useState, useMemo } from "react";
import { IObjectHeadingAnswers } from "../../../models/types";
import InputSearch from "../../ui/inputs/InputSearch";
import ExpandingAnswer from "../expanding/ExpandingAnswer/ExpandingAnswer";
import styles from "./Page.module.scss";

interface IPageProps {
  title: string;
  ArrayHeadingAnswers: IObjectHeadingAnswers[];
}

const Page: FC<IPageProps> = ({ title, ArrayHeadingAnswers }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArray = useMemo(() => {
    return ArrayHeadingAnswers.filter((question) => question.heading.toLowerCase().includes(searchQuery));
  }, [ArrayHeadingAnswers, searchQuery]);

  return (
    <section className={styles["page"]}>
      <div className={styles["page__container"]}>
        <h1 className={styles["page__heading"]}>{title} </h1>

        <div className={styles["page__container-search-query"]}>
          <InputSearch
            placeholder="Поиск по названию вопросов."
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div>

        {filteredArray.map((item, index) => (
          <ExpandingAnswer key={index} heading={item.heading} answer={item.answer} isParagraph={true} />
        ))}
      </div>
    </section>
  );
};

export default Page;
