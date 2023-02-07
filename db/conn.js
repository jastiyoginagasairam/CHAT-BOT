const mongoose = require("mongoose");
require("dotenv").config();
const DB = process.env.dburl;

mongoose.connect(DB,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>console.log("Database Connected"))
.catch((error)=>{
    console.log("error",error);
})