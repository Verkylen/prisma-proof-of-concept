import { postJob, getJobs, patchJob } from "../controllers/job.controller.js";
import { Router } from "express";

const jobRouter: Router = Router();

jobRouter.get('/jobs', getJobs);

jobRouter.post('/jobs', postJob);

jobRouter.patch('/jobs/:id', patchJob);

export default jobRouter;