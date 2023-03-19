import React from "react";
import PageLink from "../components/general/PageLink/PageLink";
import { linksIconsLoaders } from "../data/iconsLoadersData";

const LinksToIconsLoaders = () => {
  return (
    <div>
      <PageLink links={linksIconsLoaders} title="Ссылки на сайты с иконками, лоадерами" />
    </div>
  );
};

export default LinksToIconsLoaders;
