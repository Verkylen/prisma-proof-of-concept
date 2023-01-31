import express from "express";
import jobRouter from "./routers/job.routes.js";
import mySkillRouter from "./routers/myskill.routes.js";

const app = express();
app.use(express.json());

app.use(jobRouter);
app.use(mySkillRouter);

const port = 4000;
app.listen(port, () => console.log('App is listening on localhost:' + port));