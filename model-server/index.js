import express from 'express';
import mongoose from 'mongoose'
import bodyparser from 'body-parser'
import routes from './routes/soccerRoutes'
import cors from 'cors';
import path from 'path';

const app = express();

app.use(express.static(path.join(__dirname, 'model-frontend/build')))

//cors setup
app.use(cors())
app.options('*', cors())
const PORT = 4002;

//mongo connection
mongoose.Promise = global.Promise; //allow us to connect mongo
mongoose.connect('mongodb://localhost:27017/modelsDB',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

//-------------------

// bodyparser setup
app.use(bodyparser.urlencoded({extended: true})) 
app.use(bodyparser.json());
//-------------


routes(app);

app.get('/',(req,res) =>{
    res.send(`our soccer application is running ${PORT}`)
})


app.listen(PORT,()=>{
    console.log(`Your soccer server is running on port ${PORT}`)
})










// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');

// // Connection URL
// const url = 'mongodb://localhost:27017';

// // Database Name
// const dbName = 'learning_mongo';

// // Create a new MongoClient
// const client = new MongoClient(url);

// const findDocuments = (db,callback) =>{
//     const collection = db.collection('tours');
//     collection.find({"tourPackage":"Snowboard Cali"}).toArray((err,docs)=>{
//         console.log(docs);
//         callback;
//   })
// }


// // Use connect method to connect to the Server
// client.connect(function(err) {
//   assert.equal(null, err);
//   console.log("Connected successfully to server");

//   const db = client.db(dbName);
//   findDocuments(db,() =>{
//       db.close(); //after retrive close the connection
//   })


//   client.close();
// });