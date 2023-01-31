import { skills } from "@prisma/client";
import { Request, Response } from "express";
import mySkillService from "../services/myskill.service.js";

export async function postMySkills(req: Request, res: Response) {
    try {
        await mySkillService.postMySkills(req.body);
        
        res.sendStatus(201);
    } catch {
        res.sendStatus(500);
    }
}

export async function deleteMySkill(req: Request, res: Response) {
    try {
        await mySkillService.deleteMySkill(Number(req.params.id));

        res.sendStatus(200);
    } catch {
        res.sendStatus(500);
    }
}

export async function patchMySkill(req: Request, res: Response) {
    const {params, query} = req;

    try {
        await mySkillService.patchMySkill(Number(params.id), query.level as string);

        res.sendStatus(200);
    } catch {
        res.sendStatus(500);
    }
}

export async function getMySkill({}, res: Response) {
    try {
        const data: {
            id: number;
            skills: skills;
            level: string;
        }[] = await mySkillService.getMySkill();
        res.send(data);
    } catch {
        res.sendStatus(500);
    }
}