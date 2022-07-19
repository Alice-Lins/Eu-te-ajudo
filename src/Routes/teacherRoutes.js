const express = require("express");
const router = express.Router();

const controller = require("../Controller/teacherController");

router.get("/all", controller.getAll);

// router.get("/with-tags", controller.getNotesWithTags);
// router.get("/with-study-tags", controller.getNotesWithStudyTag);

router.post("/create", controller.createTeacher);

// router.put("/update/:id", controller.updateNote);

// router.delete("/delete/:id", controller.deleteNote);

module.exports = router;