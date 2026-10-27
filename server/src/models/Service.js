import mongoose from 'mongoose';
const serviceSchema = new mongoose.Schema({name:{type:String,required:true},category:{type:String,default:'General'},description:String,location:String,price:{type:Number,default:0,min:0},capacity:{type:Number,default:1,min:1},active:{type:Boolean,default:true}},{timestamps:true});
export default mongoose.model('Service',serviceSchema);
