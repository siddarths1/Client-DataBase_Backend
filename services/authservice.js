const bcrypt = require('bcryptjs');
const usermodel = require('../models/usermodel');
const {JwtLogic, verifyToken }= require('../middleware/authMiddleware'); 
const { User, getUsers } = require("../models/usermodel");


const loginService = async (getData) => {
    const { email, password } = getData;
    console.log("get data"+getData);
    try {
        // Finding user by email in the database
        console.log("eami"+email)
        console.log(typeof email)
        

        const findUser = await usermodel.getUsers(email);
        console.log(findUser);
        console.log(typeof findUser);
        console.log(typeof findUser.password);

        if (!findUser) {
            console.log("No user found");
            return null; // Return null or throw an error to indicate no user found
        }

         // Decrypting and checking password
         let isPasswordMatch =  await bcrypt.compare(password, findUser.password);
        if (isPasswordMatch) {
            console.log("Password matches");
            // Generate JWT token if password matches
            const createJwt = await JwtLogic({email:email});
            console.log("u r token is "+createJwt);
            // verifies token 
            const tokenStatus = verifyToken(createJwt);
            console.log("token status "+tokenStatus);
            //for token updation
            const updatedToken = await usermodel.storeToken(email, createJwt);
            console.log("Token updated");
            return updatedToken;
        
        } else {
            console.log("Password does not match");
            return null; // Return null or throw an error to indicate password mismatch
        }

    } catch (error) {
        console.error("Error on login Service", error);
        throw error; // Throw error for better error handling
    }
};

module.exports = { loginService };
