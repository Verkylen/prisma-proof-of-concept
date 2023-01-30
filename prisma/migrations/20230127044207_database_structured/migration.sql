-- CreateTable
CREATE TABLE "jobs" (
    "id" SERIAL NOT NULL,
    "position" TEXT NOT NULL,
    "salary" INTEGER NOT NULL,
    "summoned" BOOLEAN NOT NULL DEFAULT false,
    "company" TEXT NOT NULL,

    CONSTRAINT "jobs_pkey" PRIMARY KEY ("id")
);
