const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/Samsung';
const addRouter = require('./Route/router');
const cors = require('cors')
const port = process.env.express||4500;
var lte = express();

mongoose.connect(url).then((res)=>{
    try{
        console.log('connected to databsae');

    }catch(err){
        console.log(err)
    }
})

lte.use(cors())
lte.use(express.json());
lte.use('/api', addRouter);


lte.listen(port,()=>{
    try{
           console.log('server is listening on port', port);

    }catch(e){
        console.log(e)
    }
})