import dbConnect from '@/lib/dbConnect';
import Role from '@/models/Role';

export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();
    const roleToCreate = new Role(body);
    await roleToCreate.save();
    return Response.json({ messsage: 'created', status: 201 }, { status: 201 });
  } catch (error) {
    return Response.json({ error });
  }
}


