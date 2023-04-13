/*
  Warnings:

  - You are about to drop the column `end_time` on the `Bloc` table. All the data in the column will be lost.
  - You are about to drop the column `event_id` on the `Bloc` table. All the data in the column will be lost.
  - You are about to drop the column `start_time` on the `Bloc` table. All the data in the column will be lost.
  - You are about to drop the column `end_date` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `start_date` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `bloc_id` on the `Todo` table. All the data in the column will be lost.
  - Added the required column `endAt` to the `Bloc` table without a default value. This is not possible if the table is not empty.
  - Added the required column `eventId` to the `Bloc` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startAt` to the `Bloc` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endAt` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startAt` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `blocId` to the `Todo` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Bloc" DROP CONSTRAINT "Bloc_event_id_fkey";

-- DropForeignKey
ALTER TABLE "Event" DROP CONSTRAINT "Event_userId_fkey";

-- DropForeignKey
ALTER TABLE "Todo" DROP CONSTRAINT "Todo_bloc_id_fkey";

-- AlterTable
ALTER TABLE "Bloc" DROP COLUMN "end_time",
DROP COLUMN "event_id",
DROP COLUMN "start_time",
ADD COLUMN     "endAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "eventId" INTEGER NOT NULL,
ADD COLUMN     "startAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "end_date",
DROP COLUMN "start_date",
ADD COLUMN     "endAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "startAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Todo" DROP COLUMN "bloc_id",
ADD COLUMN     "blocId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bloc" ADD CONSTRAINT "Bloc_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Todo" ADD CONSTRAINT "Todo_blocId_fkey" FOREIGN KEY ("blocId") REFERENCES "Bloc"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
