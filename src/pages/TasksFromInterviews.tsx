import { motion } from "framer-motion"; // анимация
import PageForTask from "../components/general/PageForTask/PageForTask";
import { arrayTasks } from "../data/tasksFromInterviewsData";

const TasksFromInterviews = () => {
  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 }, opacity: 0 }}
    >
      <PageForTask arrayTasks={arrayTasks} title="Задачи из собеседований" />
    </motion.div>
  );
};

export default TasksFromInterviews;
