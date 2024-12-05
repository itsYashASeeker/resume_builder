import prisma from '../../../prisma/client';

export default async function handler(req: any, res: any) {
    if (req.method === 'POST') {
        const { userId, templateId, data } = req.body;

        if (!userId || !templateId || !data) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        try {
            const resume = await prisma.resume.create({
                data: {
                    template: templateId,
                    data: data,
                    userId: userId,
                },
            });

            res.status(201).json({ message: 'Resume created successfully', resume });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Failed to create resume' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }

    if (req.method === 'PUT') {
        const { resumeId, data } = req.body;

        if (!resumeId || !data) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        try {
            const updatedResume = await prisma.resume.update({
                where: { id: resumeId },
                data: {
                    data,
                    updatedAt: new Date(),
                },
            });

            res.status(200).json({ message: 'Resume updated successfully', updatedResume });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Failed to update resume' });
        }
    } else {
        res.setHeader('Allow', ['PUT']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }

    if (req.method === 'DELETE') {
        const { resumeId } = req.body;

        if (!resumeId) {
            return res.status(400).json({ error: 'Missing resumeId' });
        }

        try {
            await prisma.resume.delete({
                where: { id: resumeId },
            });

            res.status(200).json({ message: 'Resume deleted successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Failed to delete resume' });
        }
    } else {
        res.setHeader('Allow', ['DELETE']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
