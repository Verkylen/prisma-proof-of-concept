import mySkillRepository from "../repositories/myskill.repository.js";

function postMySkills(data) {
    return mySkillRepository.insertMySkills(data);
}

function deleteMySkill(id) {
    return mySkillRepository.dropMySkill(id);
}

function patchMySkill(id, level) {
    return mySkillRepository.updateMySkill(id, level);

}

async function getMySkill() {
    const data = await mySkillRepository.selectMySkills();

    return data;
}

const mySkillService = {
    postMySkills,
    deleteMySkill,
    patchMySkill,
    getMySkill
};

export default mySkillService;