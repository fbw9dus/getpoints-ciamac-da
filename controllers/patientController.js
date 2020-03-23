var patients = require("../data/patients")

function patientsController (req,res){
      res.json(patients)
}

function patientController (req,res){
      var PatientId = req.params.id
      var patient = patients[PatientId]
      res.json(patient)
}

exports.patients = patientsController
exports.patient = patientController
