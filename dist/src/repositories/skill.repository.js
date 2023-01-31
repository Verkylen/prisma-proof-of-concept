import prisma from "../database.js";
export function insertSkill(data) {
    return prisma.skills.createMany({
        data: data,
        skipDuplicates: true
    });
}
export function insertRequiredSkills(data) {
    return prisma.jobs_skills.createMany({
        data: data,
        skipDuplicates: true
    });
}
export function selectSkills() {
    return prisma.skills.findMany();
}
var SkillRepository = {
    insertSkill: insertSkill,
    insertRequiredSkills: insertRequiredSkills,
    selectSkills: selectSkills
};
export default SkillRepository;
