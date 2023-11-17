import mongoose from 'mongoose';

export interface Product extends mongoose.Document {
  name: string,
  description: string,
  price: number,
  img: string,
  category: mongoose.Types.ObjectId
}

const ProductShema = new mongoose.Schema<Product>({
  name: String,
  description: String,
  price: Number,
  img: String,
  category: { ref: 'ProductCategory', type: mongoose.Schema.Types.ObjectId, default: null }
});

export default mongoose.models.Product || mongoose.model<Product>('Product', ProductShema);

