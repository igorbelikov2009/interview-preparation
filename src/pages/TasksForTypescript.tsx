import { motion } from "framer-motion"; // анимация
import PageForTask from "../components/general/PageForTask/PageForTask";
import { arrayTasksForTypescript } from "../data/tasksForTypescriptData";

const TasksForTypescript = () => {
  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 }, opacity: 0 }}
    >
      <PageForTask arrayTasks={arrayTasksForTypescript} title="Задачи по Typescript." />
    </motion.div>
  );
};
export default TasksForTypescript;
