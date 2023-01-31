import { Router } from "express";
import { postSkills, postJobSkills, getSkills } from "../controllers/skill.controller.js";

const skillsRouter = Router();

skillsRouter.post('/skills', postSkills);

skillsRouter.post('/jobskills', postJobSkills);

skillsRouter.get('/skills', getSkills);

export default skillsRouter;