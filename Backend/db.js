const mongoose = require('mongoose');
const connectTOMongo = async() =>{
    
    try{

        await   mongoose.connect('mongodb+srv://chiteshvarunvarun:eTqBava8qySnlOui@dogcat.azmxtj4.mongodb.net/animal');
      
        console.log("Connected to mongoose successfully");
    }catch(error){
       

        console.log(error.message);
    }

}       
module.exports = connectTOMongo;
