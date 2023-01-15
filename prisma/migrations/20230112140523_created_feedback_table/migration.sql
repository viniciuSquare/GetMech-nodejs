-- CreateTable
CREATE TABLE `Feedbacks` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `description` VARCHAR(191) NOT NULL,
    `authorContactId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Feedbacks` ADD CONSTRAINT `Feedbacks_authorContactId_fkey` FOREIGN KEY (`authorContactId`) REFERENCES `Contacts`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
