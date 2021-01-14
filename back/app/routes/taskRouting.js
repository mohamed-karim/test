const express = require("express");
const router = express.Router();
const taskController = require("../controller/taskController");

module.exports = router;

//create task
router.post("/newTask", taskController.create);

//all task
router.get("/allTask", taskController.findAll);

//update task
router.put("/update/:id", taskController.update);

//delete task
router.delete("/deleteTask/:id", taskController.updateTask);

//get task By id
router.get("/getTaskById/:id",taskController.getTaskById);
