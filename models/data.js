var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var Notes = new Schema({
    title: String,
    note: String 
});




var Note = mongoose.model('Note',Notes);



module.exports = Note;