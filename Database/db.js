const mongoose = require('mongoose');
const dbUrl = "mongodb+srv://smmunna:munna12345@cluster0.u1yp6sl.mongodb.net/iubat-bus-services?retryWrites=true&w=majority"
mongoose.connect(dbUrl)
.then(()=>console.log('MongoDB Connected Successfully'))
.catch((err)=>console.log(err.message+"MongoDB Doesnot Connect Properly"))