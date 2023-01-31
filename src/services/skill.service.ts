import { Prisma, PrismaPromise, skills } from "@prisma/client";
import SkillRepository from "../repositories/skill.repository.js";

function postSkills(data: {name: string;}[]): PrismaPromise<Prisma.BatchPayload> {
    return SkillRepository.insertSkill(data);
}

async function postJobSkills(data: {jobId: number; skills: number[];}): Promise<void> {
    const {jobId, skills} = data;

    const jobsSkillsList: {
        jobId: number;
        skillId: number;
    }[] = skills.map((skillId: number) => {return {jobId, skillId}});

    await SkillRepository.insertRequiredSkills(jobsSkillsList);
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