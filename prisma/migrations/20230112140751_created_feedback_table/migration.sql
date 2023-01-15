/*
  Warnings:

  - Made the column `authorContactId` on table `Feedbacks` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `Feedbacks` DROP FOREIGN KEY `Feedbacks_authorContactId_fkey`;

-- AlterTable
ALTER TABLE `Feedbacks` MODIFY `authorContactId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Feedbacks` ADD CONSTRAINT `Feedbacks_authorContactId_fkey` FOREIGN KEY (`authorContactId`) REFERENCES `Contacts`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
