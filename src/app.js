const yargs = require("yargs");
const mongoose = require("mongoose");
const { addMovie, listMovies, updateMovie, deleteMovie, findMovie, findActor, filterMovieByNoActor } = require("./movie/functions"); 

require("./db/connection"); //runs first

const app = async (yargsObj) => {
    if (yargsObj.add){
        // add movie to database from yargs input
        await addMovie({title: yargsObj.title, actor: yargsObj.actor})
    } else if (yargsObj.list){
        // find all movies
        await listMovies(yargsObj)
    } else if (yargsObj.update) {
        // update movie
        await updateMovie(yargsObj, {title: yargsObj.newT, actor: yargsObj.newA})
    } else if (yargsObj.delete) {
        // delete movie
        await deleteMovie({title: yargsObj.title, actor: yargsObj.actor})
    } else if (yargsObj.findT) {
        // find a movie
        await findMovie({title: yargsObj.title})
    } else if (yargsObj.findA) {
        // find an actor
        await findActor({actor: yargsObj.actor})
    }else if (yargsObj.filterNoActor) {
        // find a movie with no actor
        await filterMovieByNoActor({yargsObj})
    } else {
        console.log("Incorrect Command")
    }
    await mongoose.disconnect()
}

app(yargs.argv)