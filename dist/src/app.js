import express from "express";
import jobRouter from "./routers/job.router.js";
var app = express();
app.use(express.json());
app.use(jobRouter);
var port = 4000;
app.listen(port, function () { return console.log('App is listening on localhost:' + port); });
