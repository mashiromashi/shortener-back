/*
  Warnings:

  - You are about to drop the `links` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "links";

-- CreateTable
CREATE TABLE "link" (
    "id" TEXT NOT NULL,
    "ttl" INTEGER NOT NULL,
    "code" TEXT NOT NULL,
    "encoded" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "link_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "link_code_key" ON "link"("code");
