const express = require("express");
const router = express.Router();


const {
  getPatients,
  getPatient,
//   updatePatient,
//   deletePatient,
//   addPatient
} = require("../controllers/patientsController");

router
  .route("/")
  .get(getPatients)
//   .post(addPatient);

router
  .route("/:id")
  .get(getPatient)
//   .delete(deletePatient)
//   .put(updatePatient);

module.exports = router;
