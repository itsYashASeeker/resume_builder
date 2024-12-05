import prisma from '../../../../prisma/client';

export async function GET(request) {
    const url = new URL(request.url);
    const resumeId = url.searchParams.get('id');

    if (!resumeId) {
        return Response.json({ error: 'Missing required fields', status: 400 });
    }

    try {
        const resume = await prisma.resume.findFirst({ where: { id: Number(resumeId) } });

        return Response.json({ resume, status: 200 });
    } catch (error) {
        console.error(error);
        return Response.json({ error: 'Failed to fetch resume', status: 500 });
    }
}

export async function POST(req, res) {
    var { templateId, data } = await req.json();

    if (!templateId || !data) {
        return Response.json({ error: 'Missing required fields', status: 400 });
    }

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

    const payload = {
        template: Number(templateId),
        data: data,
        userId: userId,
    }

    try {
        const resume = await prisma.resume.create({
            data: payload,
        });

        return Response.json({ message: 'Resume created successfully', id: resume.id, status: 201 });
    } catch (error) {
        console.log(error);
        return Response.json({ error: 'Failed to create resume', status: 500 });
    }
}


export async function PUT(req, res) {

    const { resumeId, data } = await req.json();

    if (!resumeId || !data) {
        return Response.json({ error: 'Missing required fields', status: 400 });
    }

    const payload = {
        data,
        updatedAt: new Date(),
    }

    try {
        const updatedResume = await prisma.resume.update({
            where: { id: Number(resumeId) },
            data: payload,
        });

        return Response.json({ message: 'Resume updated successfully', updatedResume, status: 200 });
    } catch (error) {
        console.error(error);
        return Response.json({ error: 'Failed to update resume', status: 500 });
    }
}

export async function DELETE(req, res) {
    const { resumeId } = req.body;

    if (!resumeId) {
        return Response.json({ error: 'Missing required fields', status: 400 });
    }

    try {
        await prisma.resume.delete({
            where: { id: resumeId },
        });

        return Response.json({ message: 'Resume deleted successfully', status: 200 });
    } catch (error) {
        console.error(error);
        return Response.json({ error: 'Failed to delete resume', status: 500 });
    }

}