// // api codes run on the server not client
// // functionts trigle when request send this URL

// // /api/new-meetup
// // POST /api/new-meetup

import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    // const { title, image, address, description } = data;

    const client = await MongoClient.connect(
      "mongodb+srv://mmdseq:f$0ciethY@cluster0.l7w3g.mongodb.net/meetups?retryWrites=true&w=majority"
    );

    //1
    //if db doesnt exist create
    const db = client.db(); //2 

    //if colection doesnt exist create
    const meetupsCollection = db.collection("meetups"); //3 

    // result automatic generate ID
    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler

//1
// get whole databse we connected if doesn't exsist it will create it

//2
// collections would be kindda tables in sql database, and documents would be your enteries in those tables so you have collections that  hold multipull documents

//3
// a single meetups would be single document, the overall collections then holds multiple meetups

//-----------------------------------------------------------------

// import {MongoClient} from 'mongodb'

// function handler(req,res){
//     if(req.method==='POST'){

//         const data = req.body

//       const client= await MongoClient.connect("mongodb+srv://mmdseq:f$0ciethY@cluster0.l7w3g.mongodb.net/meetups?retryWrites=true&w=majority")

//       const db= client.db()

//       const meetupsCollection = db.collection('meetups')

//      const result = await meetupsCollection.insertOne(data)

//      console.log(result)

//      client.close()

//      res.status(201).json({message:'Meetup inserted!'})

//     }
// }

// import { MongoClient } from "mongodb";

// // /api/new-meetup
// // POST /api/new-meetup

// async function handler(req, res) {
//   if (req.method === "POST") {
//     const data = req.body;

//     const client = await MongoClient.connect(
//       "mongodb+srv://mmdseq:f$0ciethY@cluster0.l7w3g.mongodb.net/meetups?retryWrites=true&w=majority"
//     );
//     const db = client.db();

//     const meetupsCollection = db.collection("meetups");

//     const result = await meetupsCollection.insertOne(data);

//     console.log(result);

//     client.close();

//     res.status(201).json({ message: "Meetup inserted!" });
//   }
// }

// export default handler;
