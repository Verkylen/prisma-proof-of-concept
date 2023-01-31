/*
  Warnings:

  - A unique constraint covering the columns `[skillId]` on the table `myskills` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "myskills_skillId_key" ON "myskills"("skillId");
