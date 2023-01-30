import prisma from "../database.js";
export function selectJobs() {
    return prisma.jobs.findMany();
}
export function insertJob(job) {
    return prisma.jobs.create({ data: job });
}
export function upsertJob(job) {
    return prisma.jobs.upsert({
        where: {
            id: 'id' in job ? job.id : 0
        },
        create: job,
        update: job
    });
}
