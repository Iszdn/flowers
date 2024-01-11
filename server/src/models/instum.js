import mongoose from 'mongoose';
const { Schema } = mongoose;

const productSchema = new Schema({
    image:String,
  title: String, 
  price: Number,

});
const Flowers = mongoose.model('flower', productSchema);

export default Flowers