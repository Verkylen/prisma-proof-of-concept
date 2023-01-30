import { postJob, getJobs, patchJob } from "../controllers/job.controller.js";
import { Router } from "express";
var jobRouter = Router();
jobRouter.get('/jobs', getJobs);
jobRouter.post('/job', postJob);
jobRouter.patch('/job', patchJob);
export default jobRouter;
