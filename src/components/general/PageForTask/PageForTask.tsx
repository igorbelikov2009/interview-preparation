import React, { FC, useState, useMemo } from "react";
import { IObjectTasks } from "../../../models/types";
import InputSearch from "../../ui/inputs/InputSearch";
import ExpandingForTask from "../expanding/ExpandingForTask/ExpandingForTask";

import styles from "./PageForTask.module.scss";

interface IPageForTaskProps {
  title: string;
  arrayTasks: IObjectTasks[];
}

const PageForTask: FC<IPageForTaskProps> = ({ title, arrayTasks }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArray = useMemo(() => {
    return arrayTasks.filter((task) => task.heading.toLowerCase().includes(searchQuery));
  }, [arrayTasks, searchQuery]);

  return (
    <section className={styles["page"]}>
      <div className={styles["page__container"]}>
        <div>
          <h1 className={styles["page__heading"]}>{title} </h1>

          <div className={styles["page__container-search-query"]}>
            <InputSearch
              placeholder="Поиск по условию задач."
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </div>

          {filteredArray.map((item, index) => (
            <ExpandingForTask key={index} heading={item.heading} href={item.href} taskCode={item.taskCode} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PageForTask;
