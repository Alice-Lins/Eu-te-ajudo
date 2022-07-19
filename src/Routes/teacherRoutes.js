const express = require("express");
const router = express.Router();

const Controller = require("../Controller/teacherController");

router.get("/all", Controller.getAll);

router.post("/create", Controller.createTeacher);

 router.put("/update/:id", Controller.updateTeacher);

 router.delete("/delete/:id", Controller.deleteTeacher);

module.exports = router;