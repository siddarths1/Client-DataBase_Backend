const mongoose = require('mongoose');

// Define your schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

// Create a model
const User = mongoose.model('User', userSchema);

// Connect to MongoDB
mongoose.connect('mongodb+srv://siddarths:UiIop3W9EZJLYEs8@cluster0.cbfaj.mongodb.net/demo?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB");
    
    // Insert some data
    const user1 = new User({ name: 'Alice', email: 'alice@example.com', age: 30 });
    const user2 = new User({ name: 'Bob', email: 'bob@example.com', age: 35 });
    
    User.insertMany([user1, user2])
        .then(() => {
            console.log("Data inserted successfully");
            
            // Fetch all records
            // Fetch all records
            // Fetch all records
    User.find({})
    .exec()
    .then(users => {
        console.log("All records:", users);
    })
    .catch(err => {
        console.error("Error fetching data:", err);
    }); 
    })
        .catch((err) => {
            console.error("Error inserting data:", err);
            mongoose.connection.close();
        });
}).catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});
