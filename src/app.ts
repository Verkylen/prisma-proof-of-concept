import express from "express";
import jobRouter from "./routers/job.routes.js";
import mySkillRouter from "./routers/myskill.routes.js";
import skillsRouter from "./routers/skill.routes.js";
import { Express } from "express";

const app: Express = express();
app.use(express.json());

app.use(jobRouter);
app.use(mySkillRouter);
app.use(skillsRouter);

const port: number = 4000;
app.listen(port, () => console.log('App is listening on localhost:' + port));