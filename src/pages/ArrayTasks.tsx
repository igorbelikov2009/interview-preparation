import { motion } from "framer-motion"; // анимация
import ClearString from "../components/forInterview/ClearString";
import TaskModel from "../components/forInterview/TaskModel";
import "../styles/arrayMethods.scss";

const ArrayTasksPage = () => {
  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 }, opacity: 0 }}
    >
      <div className="array-methods__container">
        <h1 className="array-methods__heading"> Задачи по методам массивов </h1>
        {/* <h2 className="array-methods__subheading"> Регулярные выражения </h2> */}

        <ClearString />

        <TaskModel />
      </div>
    </motion.div>
  );
};

export default ArrayTasksPage;
