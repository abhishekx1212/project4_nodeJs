const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/Books');

const db = mongoose.connection;

db.on('connected',(err)=>{
    if(!err){
        console.log('database connected sucessfully');
    }
})

// module.exports(db);