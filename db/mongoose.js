
"use strict"
const mongoose = require('mongoose');
const connectionUrl = 'mongodb://127.0.0.1:27017';
const dbName = process.env.NODE_ENV !== 'test' ? 'headphone-db' : 'test-headphone-db';

mongoose.connect(connectionUrl + '/' + dbName, {
    useNewUrlParser: true,
}).then(() => console.log('MongoDB connection established.'))
.catch((error) => console.error("MongoDB connection failed:", error.message));
