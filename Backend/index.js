const express = require('express');
const { createTodo } = require('./types');
const {updateTodo} = require('./types');
const { todo } = require('./db');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.post("/todo", async (req, res) => {
    const data = req.body;
    const parsedData = createTodo.safeParse(data);
    if (!parsedData.success) {
        return res.status(411).json({
            msg: "Wrong Input!"
        })
    }
    // put in db
    await todo.create({
        title: data.title,
        desc: data.desc,
    })
    return res.status(201).json({
        msg: "Todo created!"
    })
})

app.get("/todos", async (req, res) => {
    const todos = await todo.find({});
    res.json({todos});
})

app.put("/completed", async (req, res) => {
    const { id } = req.body;
  
    if (!id) {
      return res.status(400).json({ msg: "ID is required!" });
    }
  
    try {
      const updatedTodo = await todo.findByIdAndUpdate(
        id,
        { completed: true },
        { new: true }
      );
  
      if (!updatedTodo) {
        return res.status(404).json({ msg: "Todo not found!" });
      }
  
      res.json({ msg: "Todo marked as completed!", updatedTodo });
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: "Internal server error" });
    }
  });

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});