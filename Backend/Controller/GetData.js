const receive= require('../Model/Schema');

const getData = (req,res)=>{
    receive.findOne({},(err,result)=>{
        if(err){
            res.send(err);
        }
        else{
            res.send(result)
        }
    })
}
module.exports = {getData};