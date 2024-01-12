require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const ProductRouter = require('./router/router');
const UserRouter = require('./router/user');
const cors = require('cors');
const Server = express();

main().catch(err => console.log(err));
async function main() {
    const dbConnectionString = 'mongodb+srv://newfiverr1999:oLKClmAaMjSlb6uG@cluster0.hlz7qhv.mongodb.net/Ecommerce?retryWrites=true&w=majority';
    await mongoose.connect(dbConnectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log('db-Connected-Successfully');
}

const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoUri = 'mongodb+srv://newfiverr1999:oLKClmAaMjSlb6uG@cluster0.hlz7qhv.mongodb.net/Ecommerce?retryWrites=true&w=majority';

const client = new MongoClient(mongoUri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        await client.connect();
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        await client.close();
    }
}

run().catch(console.dir);

Server.use(cors());
Server.use(express.json());
Server.use(express.static('public'));
Server.use('/products', ProductRouter);
Server.use('/users', UserRouter);

const PORT = process.env.PORT_ADDRESS || 8080;

Server.listen(PORT, (err) => {
    if (err) {
        console.error('Error starting the server:', err);
    } else {
        console.log(`Server Started on Port ${PORT}`);
    }
});





// require('dotenv').config()
// const mongoose = require('mongoose');
// const express = require(`express`)
// const ProductRouter = require(`./router/router`)
// const UserRouter = require(`./router/user`)
// const cors = require('cors');
// const Server = express()

// main().catch(err => console.log(err));
// async function main() {
//     await mongoose.connect('mongodb+srv://newfiverr1999:oLKClmAaMjSlb6uG@cluster0.hlz7qhv.mongodb.net/Ecommerce?retryWrites=true&w=majority');
//     console.log(`db-Connected-Successfully`)
// }


// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://newfiverr1999:<password>@cluster0.hlz7qhv.mongodb.net/?retryWrites=true&w=majority";
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);



// //BodyParser
// Server.use(cors()); 
// Server.use(express.json())
// Server.use(express.static(`public`))
// Server.use(`/products`, ProductRouter)
// Server.use(`/users`, UserRouter)


// Server.listen(8080, (err) => {
//     if (err) {
//         console.error('Error starting the server:', err);
//     } else {
//         console.log('Server Started 123');
//     }
// });
