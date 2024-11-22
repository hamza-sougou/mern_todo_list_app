import React from "react";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { motion } from "framer-motion";

const ToDo = ({ text, completed, updateMode, deleteToDo, toggleComplete }) => {
  return (
    <motion.div
      className={`todo ${completed ? "completed" : ""}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      layout
    >
      <div className="checklist">
        <div className="text">{text}</div>
      </div>
      <div className="icons">
        <p>Complétée</p>
        <input type="checkbox" checked={completed} onChange={toggleComplete} />
        <BiEdit className="icon update" onClick={updateMode} />
        <AiFillDelete className="icon delete trash" onClick={deleteToDo} />
      </div>
    </motion.div>
  );
};

export default ToDo;
