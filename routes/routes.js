const express = require('express')
const router = express.Router();
const loginController = require('../controllers/authController')
const clientController = require('../controllers/clientController')

const democall = require('../demo')
// post method for storing login credentials
router.post('/login',loginController)

// to create new users list we 
router.post('/login/createClients',clientController.createClient)

// to get client's list 
router.get('/login/viewClients', clientController.viewClient)

//to filter and search client's list
router.get('/login/')


// router.post('/demo',democall.call)

module.exports = router;
