/*
  Warnings:

  - You are about to drop the column `clientsId` on the `Contacts` table. All the data in the column will be lost.
  - You are about to drop the `Clients` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `usersId` to the `Services` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Contacts` DROP FOREIGN KEY `Contacts_clientsId_fkey`;

-- AlterTable
ALTER TABLE `Contacts` DROP COLUMN `clientsId`,
    ADD COLUMN `usersId` INTEGER NULL;

-- AlterTable
ALTER TABLE `Services` ADD COLUMN `usersId` INTEGER NOT NULL,
    MODIFY `state` ENUM('Aberto', 'Designado', 'Concluido', 'Cancelado') NOT NULL DEFAULT 'Aberto';

-- DropTable
DROP TABLE `Clients`;

-- CreateTable
CREATE TABLE `Users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `fotoUrl` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `isClient` BOOLEAN NOT NULL,
    `isMech` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Services` ADD CONSTRAINT `Services_usersId_fkey` FOREIGN KEY (`usersId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Contacts` ADD CONSTRAINT `Contacts_usersId_fkey` FOREIGN KEY (`usersId`) REFERENCES `Users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
