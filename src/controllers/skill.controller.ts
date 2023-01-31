import { skills } from "@prisma/client";
import { Request, Response } from "express";
import skillService from "../services/skill.service.js";

export async function postSkills(req: Request, res: Response) {
    try {
        await skillService.postSkills(req.body as {name: string;}[]);
        res.sendStatus(201);
    } catch {
        res.sendStatus(500);
    }
}

export async function postJobSkills(req: Request, res: Response) {
    try {
        await skillService.postJobSkills(req.body as {jobId: number; skills: number[];});
        res.sendStatus(201);
    } catch {
        res.sendStatus(500);
    }
}

export async function getSkills({}, res: Response) {
    try {
        const data: skills[] = await skillService.getSkills();
        res.send(data);
    } catch {
        res.sendStatus(500);
    }
}