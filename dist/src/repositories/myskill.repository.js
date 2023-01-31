import prisma from "../database.js";
export function insertMySkills(data) {
    return prisma.myskills.createMany({
        data: data,
        skipDuplicates: true
    });
}
export function dropMySkill(id) {
    return prisma.myskills["delete"]({
        where: { id: id }
    });
}
export function updateMySkill(id, level) {
    return prisma.myskills.update({
        where: { id: id },
        data: { level: level }
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
var mySkillRepository = {
    insertMySkills: insertMySkills,
    dropMySkill: dropMySkill,
    updateMySkill: updateMySkill,
    selectMySkills: selectMySkills
};
export default mySkillRepository;
