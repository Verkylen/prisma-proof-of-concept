import { myskills, Prisma, PrismaPromise, skills } from "@prisma/client";
import prisma from "../database.js";

export function insertMySkills(data: {skillId: number; level: string;}[]): PrismaPromise<Prisma.BatchPayload> {
    return prisma.myskills.createMany({
        data,
        skipDuplicates: true
    });
}

export function dropMySkill(id: number): Prisma.Prisma__myskillsClient<myskills, never> {
    return prisma.myskills.delete({
        where: {id},
    });
}

export function updateMySkill(id: number, level: string): Prisma.Prisma__myskillsClient<myskills, never> {    
    return prisma.myskills.update({
        where: {id},
        data: {level}
    });
}

export function selectMySkills(): PrismaPromise<{id: number; skills: skills; level: string;}[]> {
    return prisma.myskills.findMany({
        select: {
            id: true,
            level: true,
            skills: true
        }
    });
}

const mySkillRepository = {
    insertMySkills,
    dropMySkill,
    updateMySkill,
    selectMySkills
};

export default mySkillRepository;