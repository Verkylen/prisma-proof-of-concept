import { jobs, Prisma, skills } from "@prisma/client";
import { Job, PartialJobEntity, JobWithSkills } from "../protocols/job.js";
import jobRepository from "../repositories/job.repository.js";

async function getJobs(): Promise<JobWithSkills[]> {
    const data: JobWithSkills[] = await jobRepository.selectJobs();

    return data;
}

function postJob(job: Job): Prisma.Prisma__jobsClient<jobs, never> {
    return jobRepository.insertJob(job);
}

function patchJob(id: number): Prisma.Prisma__jobsClient<jobs, never> {
    return jobRepository.updateJob(id);
}

const jobService = {
    getJobs,
    postJob,
    patchJob
};

export default jobService;