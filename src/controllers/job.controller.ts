import { Request, Response } from "express";
import { Job, PartialJobEntity } from "../protocols/job.js";
import { insertJob, selectJobs, upsertJob } from "../repositories/job.repository.js";

export async function getJobs({}, res: Response) {
    try {
        const data = await selectJobs();

        res.send(data);
    } catch {
        res.sendStatus(500);
    }
}

export async function postJob(req: Request, res: Response) {
    const {body}: {body: Job} = req;

    try {
        await insertJob(body);

        res.sendStatus(200);
    } catch {
        res.sendStatus(500);
    }
}

export async function patchJob(req: Request, res: Response) {
    const {body}: {body: PartialJobEntity} = req;

    try {
        await upsertJob(body);

        res.sendStatus(200);
    } catch {
        res.sendStatus(500);
    }
}