import { motion } from "framer-motion"; // анимация
import React from "react";
import PageLink from "../components/general/PageLink/PageLink";
import ServerIsLoading from "../components/general/serverIsLoading/ServerIsLoading";
import ServerError from "../components/general/serverError/ServerError";
// import { linksFireBase } from "../data/fireBaseData";
import { fireBaseAPI } from "../services/fireBaseAPI";

const FireBase = () => {
  const { data: linksFireBase, isLoading, isError } = fireBaseAPI.useGetFireBaseQuery();

  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 }, opacity: 0 }}
    >
      {isLoading && <ServerIsLoading />}
      {isError && <ServerError />}

      {linksFireBase && <PageLink links={linksFireBase} title="Ссылки на FireBase" />}
    </motion.div>
  );
};

export default FireBase;
