import { motion } from "framer-motion"; // анимация
import React from "react";
import PageLink from "../components/general/PageLink/PageLink";
import ServerIsLoading from "../components/general/serverIsLoading/ServerIsLoading";
import ServerError from "../components/general/serverError/ServerError";
// import { linksIconsLoaders } from "../data/iconsLoadersData";
import { iconsLoadersAPI } from "../services/iconsLoadersAPI";

const LinksToIconsLoaders = () => {
  const { data: linksIconsLoaders, isLoading, isError } = iconsLoadersAPI.useGetIconsLoadersQuery();

  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 }, opacity: 0 }}
    >
      {isLoading && <ServerIsLoading />}
      {isError && <ServerError />}

      {linksIconsLoaders && <PageLink links={linksIconsLoaders} title="Ссылки на сайты с иконками, лоадерами" />}
    </motion.div>
  );
};

export default LinksToIconsLoaders;
