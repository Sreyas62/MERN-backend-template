const mongoose = require('mongoose');
const config = require('./config');

let isConnected;

const connectToDatabase = async () => {
    if (isConnected) {
        console.log('using existing database connection');
        return Promise.resolve();
    }
    
    console.log('using new database connection');
    const db = await mongoose.connect(config.mongodb_uri,);
    
    isConnected = db.connections[0].readyState;
    }

module.exports = connectToDatabase;
