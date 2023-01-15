-- CreateTable
CREATE TABLE `Services` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `description` VARCHAR(191) NOT NULL,
    `contactId` INTEGER NOT NULL,
    `state` ENUM('Aberto', 'Designado', 'Concluido', 'Cancelado') NOT NULL,
    `city` INTEGER NOT NULL,
    `vehicleYear` INTEGER NOT NULL,
    `vehicleModel` VARCHAR(191) NOT NULL,
    `vehicleBrand` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Clients` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `fotoUrl` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `isUser` BOOLEAN NOT NULL,
    `isMech` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Contacts` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `address` VARCHAR(191) NOT NULL,
    `mainContact` BOOLEAN NOT NULL,
    `clientsId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Services` ADD CONSTRAINT `Services_contactId_fkey` FOREIGN KEY (`contactId`) REFERENCES `Contacts`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Contacts` ADD CONSTRAINT `Contacts_clientsId_fkey` FOREIGN KEY (`clientsId`) REFERENCES `Clients`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
