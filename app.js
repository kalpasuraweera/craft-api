const express = require('express');
const app= express();
const bodyParser=require('body-parser');
const CraftController= require('./controllers/craftController');


app.use(bodyParser.urlencoded({extended:true}));

//CRUD operations for all crafts
app.route('/crafts')
.get(CraftController.getAllCrafts)
.post(CraftController.newCraft)
.delete(CraftController.deleteAll);

//CRUD operations for a specific post
app.route('/crafts/:craftId')
.get(CraftController.getCraft)
.put(CraftController.replaceCraft)
.patch(CraftController.updateCraft)
.delete(CraftController.deleteCraft);

//start the server
app.listen(3000, (req,res)=>{console.log('server started');})