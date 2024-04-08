const express = require('express')
const router = express.Router();
const loginController = require('../controllers/authController')
const trail = require('../models/clientmodel')
// post method for storing login credentials
router.post('/login',loginController)

// to create new users list we 
// router.post('/login/createclient',clientController)

// to get client's list 
router.post('/login/viewClients',trail)


module.exports = router;
