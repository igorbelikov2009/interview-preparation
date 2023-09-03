import { motion } from "framer-motion"; // анимация
import Page from "../components/general/Page/Page";
import { arrayHTML } from "../data/htmlData";

const HTML = () => {
  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 }, opacity: 0 }}
    >
      <Page title="Вопросы по HTML" ArrayHeadingAnswers={arrayHTML} />
    </motion.div>
  );
};

export default HTML;
