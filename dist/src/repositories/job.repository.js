import prisma from "../database.js";
export function selectJobs() {
    return prisma.jobs.findMany({
        include: {
            jobs_skills: {
                select: {
                    id: true,
                    skills: true
                }
            }
        }
    });
}
export function insertJob(job) {
    return prisma.jobs.create({ data: job });
}
export function updateJob(id) {
    return prisma.jobs.update({
        where: { id: id },
        data: {
            summoned: true
        }
    });
}
var jobRepository = {
    selectJobs: selectJobs,
    insertJob: insertJob,
    updateJob: updateJob
};
export default jobRepository;
