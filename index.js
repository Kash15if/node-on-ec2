const express = require('express');
const app = express();
const routes = require('./routes/app');
const mongoose = require('mongoose');


//6ljHNG50o0GcSn3Y

mongoose.connect("mongodb+srv://6ljHNG50o0GcSn3Y:Kash15if@cluster0.7obwo.mongodb.net/firstDb?retryWrites=true&w=majority",{
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=>{
  console.log("mongodb connected")
});



app.set('view engine','ejs');


app.use('/app',routes);
app.use('/styles', express.static('styles'));






app.listen(3000);