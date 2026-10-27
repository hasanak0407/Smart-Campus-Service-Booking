import mongoose from 'mongoose';
const bookingSchema = new mongoose.Schema({user:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true},service:{type:mongoose.Schema.Types.ObjectId,ref:'Service',required:true},date:{type:String,required:true},startTime:{type:String,required:true},endTime:{type:String,required:true},status:{type:String,enum:['pending','confirmed','rejected','cancelled','completed'],default:'pending'},paymentStatus:{type:String,enum:['unpaid','paid','refunded'],default:'unpaid'},transactionId:String,notes:String},{timestamps:true});
bookingSchema.index({service:1,date:1,startTime:1,endTime:1,status:1});
export default mongoose.model('Booking',bookingSchema);
