import React, { FC, useState } from "react";
import { ILinkInfo } from "../../../models/types";
import TripleIcon from "../TripleIcon/TripleIcon";
import styles from "./LinkInfo.module.scss";

const LinkInfo: FC<ILinkInfo> = ({ href, title }) => {
  const [isHovered, setHovered] = useState(false);

  return (
    <a
      target="_blank"
      className={styles["link-info"]}
      href={href}
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
      rel="noreferrer"
    >
      <div className={styles["link-info__icon"]}>
        <TripleIcon hovered={isHovered} light={false} icon="Pdf" />
      </div>

      <div className={styles["link-info__row"]}>
        <p className={styles["link-info__title"]}>{title}</p>
      </div>
    </a>
  );
};

export default LinkInfo;
