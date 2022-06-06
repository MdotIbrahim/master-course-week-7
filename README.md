# mongooseCLI

## Description

Using MongoDB (DBMS) + Mongoose library (ODM) + Yargs for input to create a basic database system that has CRUD operations as well as filtering.

## Commands

You will need to add your own MONGO_URI to the dotenv file in order to create an instance in a databse for the commands to work.

### Add a title
 
 ```bash
 node src/app.js --add --title "Movie/Tv Show" --actor "Actor (optional parameter)"
 ```

  ### List all titles
 
 ```bash
 node src/app.js --list
 ```

 ### Update a title by name or actor
 
 ```bash
 node src/app.js --update --title "Movie/Tv Show" --actor "actor" --newT "New Movie/Tv Show (optional parameter)" --NewA "New Actor (optional parameter)"
 ```

  ### Delete a title
 
 ```bash
 node src/app.js --delete --title "Movie/Tv Show"
 ```

 ### Find a specific title
 
 ```bash
 node src/app.js --findT --title "Movie/Tv Show"
 ```
 
 ### Find a specific actor
 
 ```bash
 node src/app.js --findA --actor "actor"
 ```
 ### Find titles with no actor
 
 ```bash
 node src/app.js --filterNoActor
 ```