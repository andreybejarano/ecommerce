import dbConnect from '@/lib/dbConnect';
import ProductCategory from '@/models/ProductCategory';

export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();
    const categoryToCreate = new ProductCategory(body);
    await categoryToCreate.save();
    return Response.json({ messsage: 'created', status: 201 }, { status: 201 });
  } catch (error) {
    return Response.json({ error });
  }
}


