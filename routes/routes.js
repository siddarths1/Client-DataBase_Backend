const express = require('express')
const router = express.Router();
const loginController = require('../controllers/authController')
const clientController = require('../controllers/clientController')

const democall = require('../demo')
// post method for storing login credentials
router.post('/login',loginController)

// to create new users list we 
router.post('/login/createClients',clientController.createClient)

// to get client's list , search , pagination , filter 
router.get('/login/viewClients', clientController.viewClient)

// get specific clients data
router.get('/login/getSpecificClients', clientController.getClient)

//to add new remarks for the client
router.post('/login/viewClients/addRemark', clientController.addRemark)

//to view remarks from the client in db
router.get('/login/viewClients/viewRemark', clientController.viewRemark)

// dashboard 
// number of clients API with filters
router.get('/login/dashboard/counts', clientController.dashboardCount)


module.exports = router;
