var express = require('express')
var patients = require('../data/patients')
var patientController = express.Router()

var patientController = require ('../controllers/patientController')


patientRouter.get('/', patientController.patients)

patientRouter.get('/:patientID', patientController.patient)

patientRouter.post('/patients')

module.exports = patientRouter
