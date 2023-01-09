const mongoose = require('mongoose');
require('../config/db');
const craftSchema= new mongoose.Schema({
    title:String,
    description:String,
    image:String,
});

const Craft = new mongoose.model('craft', craftSchema);


module.exports= Craft;