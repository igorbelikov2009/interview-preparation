import { motion } from "framer-motion"; // анимация
import Page from "../components/general/Page/Page";
import PageLink from "../components/general/PageLink/PageLink";
import { arrayRegularExpression, linksRegularExpression } from "../data/regularExpressionData";

const RegularExpression = () => {
  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 }, opacity: 0 }}
    >
      <Page title="Регулярное выражение, шпаргалка Elena Litvinova." ArrayHeadingAnswers={arrayRegularExpression} />
      <PageLink links={linksRegularExpression} title="Регулярное выражение, ссылки" />
    </motion.div>
  );
};

export default RegularExpression;
