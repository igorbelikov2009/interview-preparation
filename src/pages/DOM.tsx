import { motion } from "framer-motion"; // анимация
import React from "react";
import Page from "../components/general/Page/Page";
import PageLink from "../components/general/PageLink/PageLink";
import ServerIsLoading from "../components/general/serverIsLoading/ServerIsLoading";
import ServerError from "../components/general/serverError/ServerError";
// import { arrayDOM, linksDOM } from "../data/domData";
import { linksDOMAPI } from "../services/linksDOMAPI";
import { arrayDOMAPI } from "../services/arrayDOMAPI";

const DOM = () => {
  const { data: linksDOM, isLoading, isError } = linksDOMAPI.useGetLinksDOMQuery();
  const { data: arrayDOM } = arrayDOMAPI.useGetArrayDOMQuery();

  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 }, opacity: 0 }}
    >
      {isLoading && <ServerIsLoading />}
      {isError && <ServerError />}

      {linksDOM && <PageLink links={linksDOM} title="DOM, ссылки" />}
      {arrayDOM && <Page title="Вопросы по DOM" ArrayHeadingAnswers={arrayDOM} />}
    </motion.div>
  );
};

export default DOM;
