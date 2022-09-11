"use strict"

const express = require('express');
// const {MongoClient, ObjectId} = require('mongodb');
const headPhonerouter =  require('./routers/headphones.router');
const userRouter = require('./routers/user.router');
const resturentRouter = require('./routers/resturent.router');
const CommentsRouter = require('./routers/comments.router');

require('./db/mongoose');

const app = express();
app.use(express.json());
app.use(userRouter);
app.use(headPhonerouter);
app.use(resturentRouter);
app.use(CommentsRouter);


module.exports = app;