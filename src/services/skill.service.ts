import SkillRepository from "../repositories/skill.repository.js";

function postSkills(data) {
    return SkillRepository.insertSkill(data);
}

function postJobSkills(data) {
    return SkillRepository.insertRequiredSkills(data);
}

async function getSkills() {
    const data = await SkillRepository.selectSkills();

    return data;
}

const skillService = {
    postSkills,
    postJobSkills,
    getSkills
};

export default skillService;