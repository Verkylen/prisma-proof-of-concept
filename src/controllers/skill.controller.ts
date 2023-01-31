import { Request, Response } from "express";
import skillService from "../services/skill.service";

export async function postSkills(req: Request, res: Response) {
    try {
        await skillService.postSkills(req.body.name);
    } catch {
        res.sendStatus(500);
    }
}

export async function postJobSkills(req: Request, res: Response) {
    try {
        await skillService.postJobSkills(req.body);
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