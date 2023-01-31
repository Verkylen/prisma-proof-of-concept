import { Request, Response } from "express";
import skillService from "../services/skill.service.js";

export async function postSkills(req: Request, res: Response) {
    try {
        await skillService.postSkills(req.body);
        res.sendStatus(201);
    } catch {
        res.sendStatus(500);
    }
}

export async function postJobSkills(req: Request, res: Response) {
    try {
        await skillService.postJobSkills(req.body);
        res.sendStatus(201);
    } catch {
        res.sendStatus(500);
    }
}

export async function getSkills(req: Request, res: Response) {
    try {
        const data = await skillService.getSkills();
        res.send(data);
    } catch {
        res.sendStatus(500);
    }
}