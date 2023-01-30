import prisma from "../database.js";
import { Job, PartialJobEntity } from "../protocols/job.js";

export function selectJobs() {
    return prisma.jobs.findMany();
}

export function insertJob(job: Job) {
    return prisma.jobs.create({data: job});
}

export function upsertJob(job: PartialJobEntity) {    
    return prisma.jobs.upsert({
        where: {
            id: 'id' in job ? job.id : 0
        },
        create: job as Job,
        update: job
    });
}

export function insertRequiredSkill(jobId: number, skillId: number) {
    return prisma.jobs_skills.createMany({
        data:{
            jobId,
            skillId
        }
    });
}