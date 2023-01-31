import prisma from "../database.js";
import { Job, PartialJobEntity } from "../protocols/job.js";

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

export function insertJob(job: Job) {
    return prisma.jobs.create({data: job});
}

export function updateJob(id: number) {      
    return prisma.jobs.update({
        where: {id},
        data: {
            summoned: true
        }
    });
}

const jobRepository = {
    selectJobs,
    insertJob,
    updateJob
};

export default jobRepository;