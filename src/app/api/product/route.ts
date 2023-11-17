import dbConnect from '@/lib/dbConnect';
import Product from '@/models/Product';

export async function GET() {
  try {
    await dbConnect();
    const products = await Product.find({});
    return Response.json({ data: products, status: 200 });
  } catch (error) {
    return Response.json({ error });
  }
}
