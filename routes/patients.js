var express = require('express')
var patients = require('../data/patients')
var patientController = express.Router()

var patientController = require ('../controllers/patientController')


patientRouter.get('/', patientController.patients)

patientRouter.get('/:patientId', patientController.patient)


module.exports = patientRouter
