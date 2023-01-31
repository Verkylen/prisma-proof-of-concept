import { myskills, Prisma, PrismaPromise, skills } from "@prisma/client";
import mySkillRepository from "../repositories/myskill.repository.js";

function postMySkills(data: {skillId: number; level: string;}[]): PrismaPromise<Prisma.BatchPayload> {
    return mySkillRepository.insertMySkills(data);
}

function deleteMySkill(id: number): Prisma.Prisma__myskillsClient<myskills, never> {
    return mySkillRepository.dropMySkill(id);
}

function patchMySkill(id: number, level: string): Prisma.Prisma__myskillsClient<myskills, never> {
    return mySkillRepository.updateMySkill(id, level);

}

async function getMySkill(): Promise<{id: number; skills: skills; level: string;}[]> {
    const data: {
        id: number;
        skills: skills;
        level: string;
    }[] = await mySkillRepository.selectMySkills();

    return data;
}

const mySkillService = {
    postMySkills,
    deleteMySkill,
    patchMySkill,
    getMySkill
};

export default mySkillService;