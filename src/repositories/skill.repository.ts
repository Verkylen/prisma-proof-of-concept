import prisma from "../database.js";

export function insertSkill(data) {
    return prisma.skills.createMany({
        data,
        skipDuplicates: true
    });
}

export function insertRequiredSkills(data: {jobId: number; skillId: number;}[]) {
    return prisma.jobs_skills.createMany({
        data,
        skipDuplicates: true
    });
}

export function selectSkills() {
    return prisma.skills.findMany();
}

const SkillRepository = {
    insertSkill,
    insertRequiredSkills,
    selectSkills
};

export default SkillRepository;