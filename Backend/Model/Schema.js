const mongoose = require('mongoose');

const sample = new mongoose.Schema({
    title:{type:String, required:true},
    body:{type:String, required:true},
});

module.exports = mongoose.model('mirror', sample);