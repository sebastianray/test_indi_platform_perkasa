const { Router } = require("express");
const router = Router();

const studentController = require('../controllers/student');

router.get("/:id", studentController.getStudentById);
router.post("/search", studentController.searchStudent);

module.exports = router;