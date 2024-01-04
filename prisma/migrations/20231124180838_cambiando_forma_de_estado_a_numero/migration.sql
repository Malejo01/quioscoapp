/*
  Warnings:

  - You are about to alter the column `estado` on the `orden` table. The data in that column could be lost. The data in that column will be cast from `TinyInt` to `Double`.

*/
-- AlterTable
ALTER TABLE `orden` MODIFY `estado` DOUBLE NOT NULL DEFAULT 0;
