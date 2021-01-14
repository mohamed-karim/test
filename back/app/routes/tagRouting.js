const express = require("express");
const router = express.Router();
const tagsController = require("../controller/tagsController");

module.exports = router;

//create task
router.post("/newTag/:TaskId", tagsController.create);

//get tag by id task 
router.get("/tagsById/:id", tagsController.tagsById);

//get all tag 
router.get("/alltag", tagsController.allTag);