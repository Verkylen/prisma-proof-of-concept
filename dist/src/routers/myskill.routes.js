import { Router } from "express";
import { postMySkills, deleteMySkill, patchMySkill, getMySkill } from "../controllers/myskill.controller.js";
var mySkillRouter = Router();
mySkillRouter.post('/myskills', postMySkills);
mySkillRouter["delete"]('/myskills/:id', deleteMySkill);
mySkillRouter.patch('/myskills/:id', patchMySkill);
mySkillRouter.get('/myskills', getMySkill);
export default mySkillRouter;
