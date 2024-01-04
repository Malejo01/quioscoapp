/*
  Warnings:

  - You are about to drop the column `proceso` on the `orden` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `orden` DROP COLUMN `proceso`,
    ADD COLUMN `estado` DOUBLE NOT NULL DEFAULT 0;
