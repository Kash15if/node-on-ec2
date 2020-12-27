const express = require('express');
const app = express();
const routes = require('./routes/app');
const mongoose = require('mongoose');


//6ljHNG50o0GcSn3Y

mongoose.connect("mongodb url",{
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=>{
  console.log("mongodb connected")
});



app.set('view engine','ejs');


app.use('/app',routes);
app.use('/styles', express.static('styles'));






app.listen(3000);