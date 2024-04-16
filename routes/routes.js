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

//to add new remarks for the client
router.post('/login/viewClients/addRemark', clientController.addRemark)

//to view remarks from the client in db
router.get('/login/viewClients/viewRemark', clientController.viewRemark)

// router.post('/demo',democall.call)

module.exports = router;
