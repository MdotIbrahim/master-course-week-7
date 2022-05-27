const Movie = require("./model"); 

exports.addMovie = async (movieObj) => { //interacting wiht something outside the application, so must await
    try {
        const response = await Movie.create(movieObj) //use model defined...make sure it is follwing schema and only then added to database. two steps in one (add and save)
        // console.log(response)
        console.log("Sucessfully added movie")
    } catch (error) {
        console.log(error)
    }
};

exports.listMovies = async (movieObj) => {
    const moviesList = await Movie.find(movieObj, {title: 1, actor: 1, _id: 0});
    console.log(moviesList);
}

exports.updateMovie = async (movieObj, newObj) => {
    try {
        const response = await Movie.updateOne(
            {title: movieObj.title},
            {$set: newObj} //dont need to access key value pairs if you have the entire object from parameter and want all to be udpated..
            );
        // console.log(response);
        if (response.acknowledged){
            console.log("Sucessfully updated movie")
        }else{
            console.log("Something went wrong")
        }
    } catch (error) {
        console.log(error)
    }
};

exports.deleteMovie = async (movieObj) => {
    const response = await Movie.deleteOne({title: movieObj.title});
    console.log(response);
    if (response.deletedCount === 1){ 
        console.log("Sucessfully deleted movie")
    }else{
        console.log("Something went wrong")
    }
};

exports.findMovie = async (movieObj) => {
    const response = await Movie.find(movieObj);
    console.log(response);
};

exports.findActor = async (movieObj) => {
    const response = await Movie.find({actor: movieObj.actor});
    console.log(response);
};

exports.filterMovieByNoActor = async () => {
    const response = await Movie.find({title: { $exists: true}, actor: { $eq: "Not Specified"}}); //ne for not equal - title exists: true not needed here
    console.log(response);
};