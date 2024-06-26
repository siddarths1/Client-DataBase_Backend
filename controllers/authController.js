const { loginService } = require("../services/authservice");

const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(email);
        const userData = { email, password };
        console.log("from contr "+userData);
        const token = await loginService(userData);
        if (token) {
            res.status(200).send("token is :"+token);
        } else {
            res.status(400).send("Password is incorrect");
        }
    } catch (error) {
        console.error("Error in loginController:", error);
        res.status(500).send("Unexpected error occurred : Email is incorrect");
    } 
};



module.exports = loginController