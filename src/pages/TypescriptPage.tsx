import { motion } from "framer-motion"; // анимация
import Page from "../components/general/Page/Page";
import { arrayTypescript } from "../data/typescriptData";

const TypescriptPage = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <Page title="Вопросы по Typescript" ArrayHeadingAnswers={arrayTypescript} />
    </motion.div>
  );
};

export default TypescriptPage;
