import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import {
  getAllToDo,
  addToDo,
  updateToDo,
  deleteToDo,
  toggleCompleteStatus,
} from "./utils/HandleApi";

import { AnimatePresence } from "framer-motion";

function App() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState("");

  useEffect(() => {
    getAllToDo(setToDo);
  }, []);

  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setToDoId(_id);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Application de gestion des tâches</h1>
        <div className="top">
          <input
            type="text"
            className="addinput"
            placeholder="Ajouter une tâche"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div
            className="add"
            onClick={
              isUpdating
                ? () =>
                    updateToDo(toDoId, text, setToDo, setText, setIsUpdating)
                : () => addToDo(text, setText, setToDo)
            }
          >
            {isUpdating ? "Modifier" : "Ajouter"}
          </div>
        </div>
        <div className="list">
          <AnimatePresence>
            {toDo
              .sort((a, b) => a.completed - b.completed)
              .map((item) => (
                <ToDo
                  key={item._id}
                  text={item.text}
                  completed={item.completed}
                  updateMode={() => updateMode(item._id, item.text)}
                  deleteToDo={() => deleteToDo(item._id, setToDo)}
                  toggleComplete={() =>
                    toggleCompleteStatus(item._id, !item.completed, setToDo)
                  }
                />
              ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default App;
