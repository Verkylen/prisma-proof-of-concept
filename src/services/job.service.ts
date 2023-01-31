import { jobs, skills } from "@prisma/client";
import { Job, PartialJobEntity } from "../protocols/job.js";
import jobRepository from "../repositories/job.repository.js";

async function getJobs() {
    const data = await jobRepository.selectJobs();

    return data;
}

function postJob(job: Job) {
    return jobRepository.insertJob(job);
}

function patchJob(id: number) {
    return jobRepository.updateJob(id);
}

const jobService = {
    getJobs,
    postJob,
    patchJob
};

export default jobService;