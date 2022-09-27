const add= require('../Model/Schema');

const addData = async(req,res)=>{
    try{
        let data = new add(req.body);
        let storeData = await data.save();
        res.status(201).json({
            success:'true',
            data:{storeData}
        })

    }catch(e){
        res.status(500).send(e)
    }
}

module.exports ={addData}