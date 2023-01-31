import { myskills, Prisma, PrismaPromise } from "@prisma/client";
import prisma from "../database.js";

export function insertMySkills(data) {
    return prisma.myskills.createMany({
        data,
        skipDuplicates: true
    });
}

export function dropMySkill(id: number) {
    return prisma.myskills.delete({
        where: {id},
    });
}

export function updateMySkill(id: number, level: string) {    
    return prisma.myskills.update({
        where: {id},
        data: {level}
    });
}

export function selectMySkills() {
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