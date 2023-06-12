const express = require('express');
const app = express();
const cors = require("cors");
const {MongoClient} = require("mongodb");

const uri = 'mongodb://127.0.0.1:27017/';
MongoClient.connect(uri)
  .then((client) => {
    console.log("connected database");
    const db = client.db("MyOwnProject");

    app.use(cors({origin:"*"}));
    app.use(express.json());

    app.post('/api/register',(req, res) => {
      const { name, email, password } = req.body;
      db.collection("users").insertOne({name,email,password});
      res.status(200).send();
    });

    app.get('/api/flights', async (req,res) =>{
      const a = await db.collection("flights").find().toArray();
      console.log(a);
      res.status(200).json({result: a});
    })
  
    app.listen(3000, () => {
      console.log('Сервер запущен на порту 3000');
    });
  }
);

// async function main(){
//   try{
//     await client.connect();
//     const data = await client.db().admin().listDatabases();
//     console.log(data.databases);

//   }
//   catch(err){
//     console.log("your are dumb");
//     console.log(err.message);
//   }
//   finally{
//     await client.close();
//   }
// }


//main();



