const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true, unique: true },
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
//
// const userStored = await demo.findOne({ email });
// if (!userStored) {
//     console.log("User not found");
//     return null;
// }
// console.log("Found user:", userStored);
// return userStored;

  // Fetch all records
//   getUserStored()
//

module.exports = { demo, getUsers };
