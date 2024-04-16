/*
  Warnings:

  - You are about to drop the column `isAdmin` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Todo` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `username` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Todo" DROP CONSTRAINT "Todo_userId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "isAdmin",
ADD COLUMN     "username" TEXT NOT NULL;

-- DropTable
DROP TABLE "Todo";

-- CreateTable
CREATE TABLE "Quote" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Quote_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Quote" ADD CONSTRAINT "Quote_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
