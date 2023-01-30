-- CreateTable
CREATE TABLE "skills" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "skills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "jobs_skills" (
    "id" SERIAL NOT NULL,
    "jobId" INTEGER NOT NULL,
    "skillId" INTEGER NOT NULL,

    CONSTRAINT "jobs_skills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "myskills" (
    "id" SERIAL NOT NULL,
    "skillId" INTEGER NOT NULL,
    "level" TEXT NOT NULL,

    CONSTRAINT "myskills_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "jobs_skills" ADD CONSTRAINT "jobs_skills_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "jobs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "jobs_skills" ADD CONSTRAINT "jobs_skills_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "skills"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "myskills" ADD CONSTRAINT "myskills_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "skills"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
