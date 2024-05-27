const express = require('express')
const router = express.Router();
const loginController = require('../controllers/authController')
const clientController = require('../controllers/clientController')

// post method for storing login credentials
router.post('/login',loginController)

// to create new users list we 
router.post('/login/createClients',clientController.createClient)

// to get client's list , search , pagination , filter 
router.post('/login/viewClients', clientController.viewClient)

// get specific clients data
router.get('/login/getSpecificClients', clientController.getClient)

//to edit client's list ( pavithra ) 
router.patch('/login/editClients',clientController.edit)

//to add new remarks for the client
router.post('/login/viewClients/addRemark', clientController.addRemark)

//to view remarks from the client in db
router.get('/login/viewClients/viewRemark', clientController.viewRemark)

// dashboard 
// number of clients API with filters
router.get('/login/dashboard/counts', clientController.dashboardCount)

router.post('/login/dashboard/enquiryGraph', clientController.enquiryGraph)

//proposal dashboard (pavithra)
router.post('/login/dashboard/proposalGraph', clientController.proposalGraph)
// Bar chart API
router.get('/login/dashboard/barChart', clientController.barChart);


module.exports = router;
