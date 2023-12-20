import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';

export async function GET() {
  try {
    await dbConnect();
    const users = await User.find({}).select(['-password', '-__v']).populate('role', ['-__v']);
    return Response.json({ data: users, status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();
    const userToCreate = new User(body);
    await userToCreate.save();
    return Response.json({ messsage: 'created', status: 201 }, { status: 201 });
  } catch (error) {
    return Response.json({ error });
  }
}
