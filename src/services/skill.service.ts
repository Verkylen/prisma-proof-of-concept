import { Prisma, PrismaPromise, skills } from "@prisma/client";
import SkillRepository from "../repositories/skill.repository.js";

function postSkills(data: {name: string;}[]): PrismaPromise<Prisma.BatchPayload> {
    return SkillRepository.insertSkill(data);
}

function postJobSkills(data: {jobId: number; skillId: number;}[]): PrismaPromise<Prisma.BatchPayload> {
    return SkillRepository.insertRequiredSkills(data);
}

async function getSkills(): Promise<skills[]> {
    const data: skills[] = await SkillRepository.selectSkills();

    return data;
}

const skillService = {
    postSkills,
    postJobSkills,
    getSkills
};

export default skillService;