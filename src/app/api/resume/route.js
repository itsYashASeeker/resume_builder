import prisma from '../../../../prisma/client';

export async function GET(request) {
    let users = await prisma.user.findMany();
    var userId;

    if (!users || users.length == 0) {
        const newuser = await prisma.user.create({
            data: {
                username: `test`,
                password: '123456',
            },
        });
        userId = newuser.id;
    }
    else {
        userId = users[0].id;
    }

    try {
        const resume = await prisma.user.findFirst({ where: { id: userId } });
        return Response.json({ resume, status: 200 });
    } catch (error) {
        console.error(error);
        return Response.json({ error: 'Failed to fetch resume', status: 500 });
    }
}

export async function PUT(req, res) {
    try {
        const { data } = await req.json();
        let users = await prisma.user.findMany();

        if (!users || users.length == 0) {
            const payload = {
                data: {
                    username: `test`,
                    password: '123456',
                    data: data
                }
            }
            const newuser = await prisma.user.create(payload);
        }
        else {
            const payload = {
                data: {
                    data: data,
                    updatedAt: new Date(),
                }
            }
            console.log(payload);
            await prisma.user.update({ where: { id: users[0].id }, ...payload })
        }
        return Response.json({ message: 'Resume updated successfully', status: 200 });
    }
    catch (error) {
        console.error(error);
        return Response.json({ error: 'Failed to update resume', status: 500 });
    }
}
