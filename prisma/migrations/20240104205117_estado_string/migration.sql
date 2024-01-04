/*
  Warnings:

  - You are about to alter the column `estado` on the `orden` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `orden` MODIFY `estado` VARCHAR(191) NOT NULL DEFAULT 'En Proceso';
