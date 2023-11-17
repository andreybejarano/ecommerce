import mongoose from 'mongoose';

export interface ProductCategory extends mongoose.Document {
  name: string
}

const ProductCategoryShema = new mongoose.Schema<ProductCategory>({
  name: String
});

export default mongoose.models.ProductCategory || mongoose.model<ProductCategory>('ProductCategory', ProductCategoryShema);

