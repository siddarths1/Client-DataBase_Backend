const bcrypt = require('bcryptjs');

const hashPassword = async (newPassword) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const getEncryptPass = await bcrypt.hash(newPassword, salt);
        console.log("bcrypt function pass " + getEncryptPass );
        return getEncryptPass;
        
    } catch (error) {
        console.error('Error encrypting passwords:', error);
        return false;
    }
}

hashPassword("ats@2024").then( 
  (encryptedPassword)=>{console.log(encryptedPassword + "  finallyyy")
  module.exports = { encryptedPassword }
}

)
