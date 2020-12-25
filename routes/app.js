const express = require('express');
const router = express.Router();
var Note = require('../models/data');
const app = express();
var bodyParser = require('body-parser')
var details = Note.find({});
var path = require('path');



app.use(bodyParser.json());
var urlEncodedParser = bodyParser.urlencoded({ extended: false });
 
var Path = path.join(__dirname, '../');



// route for homepage
router.get('/',function(req,res){
    res.sendFile(Path + '/views/Public/home.html');
     });
    
        
// route for my notes which I've submitted before     
router.get('/my_notes',function(req,res){
    details.exec(function(err,data){
        if (err) throw err;
        res.render('my_notes',{data: data});
    });  
    });
    

// route for editing particular note on clicking on the title 
 router.get('/edit:_id',function(req,res){
Note.findById(req.params._id,function(err,data){
    res.render('edit',{data: data});
});
 });
        
// route for updating data which is being sent in the above route 
router.post('/update:_id',urlEncodedParser,async function(req,res){
  
  await Note.findByIdAndUpdate({_id: req.params._id},req.body);

  await function(){
    res.redirect('/app/my_notes');
    }; 
}); 

// route for deleting particular note and redirecting the my note page 
router.get('/delete:_id',async function(req,res){
await Note.findByIdAndRemove({_id: req.params._id}, )
await function(){
    details.exec(function(err,data){
        if (err) throw err;
        res.render('my_notes',{data: data});
    })
     
}

});

// route for redirecting new page for  writing new note
router.get('/notewrite',function(req,res){
    res.sendFile(Path + '/views/Public/notewrite.html');
    });
    





//route for sending & saving data  it into database and redirecting my note page
router.post('/submit',urlEncodedParser,async function(req,res){
    var note = new Note({
        title : req.body.title,
        note : req.body.note
    });
    await note.save();
    await res.redirect('/app/my_notes');
});



module.exports = router;