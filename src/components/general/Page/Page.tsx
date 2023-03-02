import React, { FC } from "react";
import { IObjectHeadingAnswers } from "../../../models/types";
import ExpandingAnswer from "../expanding/ExpandingAnswer/ExpandingAnswer";
import styles from "./Page.module.scss";

interface PageProps {
  title: string;
  ArrayHeadingAnswers: IObjectHeadingAnswers[];
}

const Page: FC<PageProps> = ({ title, ArrayHeadingAnswers }) => {
  return (
    <section className={styles["page"]}>
      <div className={styles["page__container"]}>
        <div>
          <h1 className={styles["page__heading"]}>{title} </h1>

          {ArrayHeadingAnswers.map((item, index) => (
            <ExpandingAnswer key={index} heading={item.heading} answer={item.answer} isParagraph={true} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page;
