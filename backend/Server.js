const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const ToDo = require("./models/ToDoModel");

const routes = require("./routes/ToDoRoute");

require("dotenv").config();

const app = express();
const PORT = process.env.port || 5000;

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log(`Connecte a MongoDB...`))
  .catch((err) => console.log(err));

app.use(routes);

app.post("/toggleComplete", async (req, res) => {
  const { _id, completed } = req.body;
  try {
    const updatedToDo = await ToDo.findByIdAndUpdate(
      _id,
      { completed },
      { new: true }
    );
    res.json(updatedToDo);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Erreur lors de la mise à jour du statut de la tâche" });
  }
});

app.listen(PORT, () => console.log(`Listening on: ${PORT}`));
