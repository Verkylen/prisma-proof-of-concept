import { postJob, getJobs, patchJob } from "../controllers/job.controller.js";
import { Router } from "express";
var jobRouter = Router();
jobRouter.post('/jobs', postJob);
jobRouter.patch('/jobs/:id', patchJob);
jobRouter.get('/jobs', getJobs);
export default jobRouter;
