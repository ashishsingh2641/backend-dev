"use strict"
require('dotenv').config();
const app = require('./app');
console.log(process.env.PORT)
const PORT = process.env.PORT;



app.listen(PORT, () => {
    console.log('Server is running at: http://localhost:' + PORT);
});


// const multer = require('multer');

// const upload = multer({
//     dest: 'images',
//     limits: {
//         fileSize: 1000000,
        
//     },
//     fileFilter(req, file, cb){
//         console.log(req);
//         console.log(file)
//         console.log(file.originalname.endsWith('.jpeg'))
//         if(!file.originalname.endsWith('.jpeg') || !file.originalname.endsWith('.png')) {
//             return cb(new Error('File must be png'));
//         } 
//          cb(undefined, true);
//     }
// });

// //console.log(upload, "upload")

// app.post('/v1/upload', upload.single('upload'), (req, res) => {
//         res.send(200)
// }, (error, req, res, next) => {
//     res.status(400).send({error: error.message})

// })



// //console.log(process.env.DB)
// //const id = new ObjectId;
// //console.log(id.getTimestamp());

// // MongoClient.connect(connectionUrl, { useNewUrlParser: true}, (err, client) => {
// //     if(err) {
// //         console.log(err);
// //         throw new Error();
// //     }
// //     const db = client.db(dbName);
// //     // console.log(db.collection('users'));
// //     // db.collection("users").insertOne({
// //     //     name: 'test',
// //     //     age: 29
// //     // }, function(err, result) {
// //     //     if(err) {
// //     //         console.dir(err)
// //     //     } 
// //     //     console.log(result);
// //     // });
// //     // db.collection("users").findOne({'age': 29}, (err, results) => {
// //     //     //console.dir(results);
// //     // })
// //     // db.collection("users").find({'age': 29}).toArray((err, user) => {
// //     //    // console.log(user)
// //     // });
// //     // const updateUser = db.collection("users").updateOne({
// //     //     _id: new ObjectId("6255acfd9371059a8a9a7075")
// //     // }, {
// //     //     $set: {
// //     //         name: 'Test User1',
// //     //         age: 31
// //     //     }
// //     // });
// //     // updateUser.then((result) => {
// //     //     console.log(result)
// //     // }).catch((e) => console.log(e))
// // })

// // async function main() {
    
// //     const connectionUrl = 'mongodb://127.0.0.1:27017';
// //     //const dbName = 'HeadphoneDB';
// //     const client = new MongoClient(connectionUrl);
// //     try {
// //         await client.connect();
// //         await listDatabases(client);
// //     } catch(e) {
// //         console.error(e);
// //     } finally {
// //         await client.close()
// //     }
// // }

// // main().catch(console.error);

// // async function listDatabases(client) {
// //     const dbList = await client.db().admin().listDatabases();
// //     console.log(dbList)
// //     dbList.databases.forEach(db => {
// //         console.log(`- ${db.name}`);
// //     });
// // }
// // mongoose.connect(url, {useNewUrlParser: true});
// // const connection = mongoose.connection;
// // connection.on('open', () => {
// //     console.log('Connected....');
// // })

// const app = express();
// app.use(express.json());
// app.use(userRouter);
// app.use(headPhonerouter);
// app.use(resturentRouter);
// app.use(CommentsRouter);

// const Resturents = require('./models/resturent.model');
// const User = require('./models/user.model');
// const jwt = require('jsonwebtoken');

// const resturent = async (req) => {
    
//     const rest = await Resturents.findById('626f89b7f1526f184fa019eb');
//     const user = await rest.populate('owner')

       
//    // console.log(rest);

//     // const user = await User.findById('626d510157aa6b0fd5bb12be');
//     // const data1 = await user.populate('resturents')
//     // console.log(data1.resturents, "user")
// }

// resturent();
