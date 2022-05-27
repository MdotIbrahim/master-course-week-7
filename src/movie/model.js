const mongoose = require("mongoose") 

//schema are instrucions - define contraints
const movieSchema = new mongoose.Schema({
    title: {
        type: String, // only save string input,
        unique: true, // must be unique entry
        required: true,
    },
    actor: {
        type: String,
        default: "Not Specified",
    }
})

const Movie = mongoose.model("MovieCollectionInADatabase", movieSchema); //name of collection within database within the cluster

module.exports = Movie; //cant shorthand export classes
