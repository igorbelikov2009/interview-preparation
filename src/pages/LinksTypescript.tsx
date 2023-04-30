import { motion } from "framer-motion"; // анимация
import PageLink from "../components/general/PageLink/PageLink";
import { linksTypescript } from "../data/typescriptLinksData";

const LinksTypescript = () => {
  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 }, opacity: 0 }}
    >
      <PageLink links={linksTypescript} title="Ссылки на Typescript" />
    </motion.div>
  );
};

export default LinksTypescript;
