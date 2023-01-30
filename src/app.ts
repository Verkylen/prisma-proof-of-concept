import express from "express";
import jobRouter from "./routers/job.router.js";

const app = express();
app.use(express.json());

app.use(jobRouter);

const port = 4000;
app.listen(port, () => console.log('App is listening on localhost:' + port));