const Craft = require('../models/Craft'); //db model

exports.getAllCrafts= (req,res)=>{
    Craft.find({},(err,crafts)=>{
        if(err){
            res.send(err);
        }else if(!crafts){
            res.send('No Crafts');
        }else{
            res.send(crafts);
        }
    });
}

exports.newCraft=(req,res)=>{
    newCraft= new Craft(req.body);
    newCraft.save(err=>{
        if(!err){
            res.send('Succusfully Added');
        }
    });
}

exports.deleteAll=(req,res)=>{
    Craft.deleteMany({},err=>{
        if(!err){
            res.send('Deleted All')
        }
    });
}

exports.getCraft= (req,res)=>{
    Craft.findOne({_id:req.params.craftId},(err,craft)=>{
        if(err){
            res.send(err);
        }else if(!craft){
            res.send('No Craft on that ID')
        }else{
            res.send(craft)
        }
    });
}
exports.replaceCraft= (req,res)=>{
    Craft.updateOne({_id:req.params.craftId},{$set: req.body} ,{overwrite:true},err=>{
        if(!err){
            res.send(req.params.craftId+' Craft Replaced');
        }else{
            res.send(err);
        }
    });
}
exports.updateCraft= (req,res)=>{
    Craft.updateOne({_id:req.params.craftId},{$set: req.body}, err=>{
        if(!err){
            res.send(req.params.craftId+' Updated Succusfully');
        }else{
            res.send(err);
        }
    });
}
exports.deleteCraft= (req,res)=>{
    Craft.deleteOne({_id:req.params.craftId}, err=>{
        if(!err){
            res.send(req.params.craftId+" Carft Deleted")
        }
    });
}
