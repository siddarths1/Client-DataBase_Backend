// jwt and redis setup
const jwt = require('jsonwebtoken') 


// for jwt 
const secretKey = process.env.JWT_SECRET_KEY;
// payload consists of structure for jwt claim
const JwtLogic = async (payload)=>{
    const token = jwt.sign(payload, secretKey,{expiresIn:'1h'})
    console.log("jwt token" + token)
    return token;
}
// validity of tokens 

const verifyToken = (token) => {
    return jwt.verify(token, jwtSecret);
  };

// redis setup
const redis = require('redis')

const client = redis.createClient();

client.on('error', (error)=>{
    console.error("redis connection error"+ error);
})

module.exports = {JwtLogic, verifyToken , client}