import { motion } from "framer-motion"; // анимация
import React from "react";

const NotfoundPage = () => {
  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 }, opacity: 0 }}
    >
      Страницу по этому адресу не существует
    </motion.div>
  );
};

export default NotfoundPage;
