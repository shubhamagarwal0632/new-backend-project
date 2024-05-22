import mongoose from "mongoose";

mongoose.connect('mongodb+srv://allinone1creater:yZcMFEN7xScca50R@webdevmastry.qdmg1eg.mongodb.net/').then(()=>{
    console.log('mongodb is connected successfully')
})

const userschema = mongoose.Schema({
    name:String,
    email:String,
    imageurl:String
})

export default mongoose.model('newuser', userschema);