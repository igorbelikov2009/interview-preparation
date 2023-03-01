import React, { FC, useState } from "react";
import { ITripleIcon } from "../../../models/types";
import styles from "./TripleIcon.module.scss";

const TripleIcon: FC<ITripleIcon> = ({ icon, light, hovered }) => {
  const [isLocalHovered, setIsLocalHovered] = useState(false);

  let state = light ? "light" : "dark";

  if (isLocalHovered || hovered) state = "colored";

  return (
    <img
      onMouseOver={() => setIsLocalHovered(true)}
      onMouseOut={() => setIsLocalHovered(false)}
      src={`/icons/triple/${icon}/${state}.svg`}
      alt={icon}
      className={styles["triple-icon"]}
    />
  );
};

export default TripleIcon;
