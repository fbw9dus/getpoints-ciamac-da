
var Patients = require('../data/patients');

exports.getPatients =  (req, res, next) => {
  var patients =  Patients
  res.status(200).json(patients)
  
};

exports.getPatient =  (req, res, next) => {
  const  id  = req.params.id -1 ;
  var patients = Patients
  const patient = patients[id]
    
  res.status(200).json(patient)
};
