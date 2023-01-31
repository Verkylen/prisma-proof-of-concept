import { Prisma, PrismaPromise, skills } from "@prisma/client";
import prisma from "../database.js";

export function insertSkill(data: {name: string;}[]): PrismaPromise<Prisma.BatchPayload> {
    return prisma.skills.createMany({
        data,
        skipDuplicates: true
    });
}

export function insertRequiredSkills(data: {jobId: number; skillId: number;}[]): PrismaPromise<Prisma.BatchPayload> {
    return prisma.jobs_skills.createMany({
        data,
        skipDuplicates: true
    });
}

export function selectSkills(): PrismaPromise<skills[]> {
    return prisma.skills.findMany();
}

const SkillRepository = {
    insertSkill,
    insertRequiredSkills,
    selectSkills
};

export default SkillRepository;