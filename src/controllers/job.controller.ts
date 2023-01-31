import { Request, Response } from "express";
import { Job, JobWithSkills, PartialJobEntity } from "../protocols/job.js";
import jobService from "../services/job.service.js";

export async function getJobs({}, res: Response) {
    try {
        const data: JobWithSkills[] = await jobService.getJobs();

        res.send(data);
    } catch {
        res.sendStatus(500);
    }
}

export async function postJob(req: Request, res: Response) {
    try {
        await jobService.postJob(req.body as Job);

        res.sendStatus(200);
    } catch {
        res.sendStatus(500);
    }
}

export async function patchJob(req: Request, res: Response) {
    try {
        await jobService.patchJob(Number(req.params.id));

        res.sendStatus(200);
    } catch {
        res.sendStatus(500);
    }
}