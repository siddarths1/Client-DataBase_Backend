const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true, unique: true },
    token: {type: String, required: true},
    status: { type: String, enum: ['active', 'inactive'], default: 'active' }
});

const demo = mongoose.model('users', UserSchema); 

// Function to find a user by email

const getUsers = async (email) => {
    try {
        const users = await demo.findOne({email:email})
       // console.log('All users:', users);
        console.log(typeof(users));
        return users;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};

// to store and update token in db periodically

const storeToken = async (email, token) => {
    console.log("new token "+ token)
    console.log("new email"+email);
    try {
        // Update the token in the database for the user with the specified email
        await demo.updateOne({ email: email }, { token: token });
        console.log("Token updated");
        return token;
    }catch (error) {
        console.error("Error updating token:", error);
        throw error;
    }
};

module.exports = { demo, getUsers,storeToken };
