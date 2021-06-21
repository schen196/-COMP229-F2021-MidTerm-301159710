const mongoose = require("mongoose");

const connectToMongoDB = () => {
    const URI = "mongodb+srv://schen196:Jcz4VhzPGXyLSW9n@cluster0.bu4ge.mongodb.net/midtermDB?retryWrites=true&w=majority";
    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    };
    mongoose.connect(URI, options)
        .then(() => console.log("Connected to MongoDB"))
        .catch(error => console.log("Connection Error:", error));
};

module.exports = connectToMongoDB;