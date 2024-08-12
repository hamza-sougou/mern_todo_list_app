import React from "react";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

const ToDo = ({ text, completed, updateMode, deleteToDo, toggleComplete }) => {
  return (
    <div className={`todo ${completed ? "completed" : ""}`}>
      <div className="checklist">
        <div className="text">{text}</div>
      </div>
      <div className="icons">
        <p>Complétée</p>
        <input type="checkbox" checked={completed} onChange={toggleComplete} />
        <BiEdit className="icon update" onClick={updateMode} />
        <AiFillDelete className="icon delete" onClick={deleteToDo} />
      </div>
    </div>
  );
};

export default ToDo;
