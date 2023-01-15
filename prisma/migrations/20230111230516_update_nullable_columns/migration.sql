-- DropForeignKey
ALTER TABLE `Contacts` DROP FOREIGN KEY `Contacts_clientsId_fkey`;

-- AlterTable
ALTER TABLE `Clients` MODIFY `fotoUrl` VARCHAR(191) NULL,
    MODIFY `address` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Contacts` MODIFY `mainContact` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `clientsId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Contacts` ADD CONSTRAINT `Contacts_clientsId_fkey` FOREIGN KEY (`clientsId`) REFERENCES `Clients`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
