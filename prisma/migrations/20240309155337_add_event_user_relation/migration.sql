/*
  Warnings:

  - A unique constraint covering the columns `[Anfritriao,Id]` on the table `Evento` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `Anfritriao` to the `Evento` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Evento" ADD COLUMN     "Anfritriao" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Evento_Anfritriao_Id_key" ON "Evento"("Anfritriao", "Id");

-- AddForeignKey
ALTER TABLE "Evento" ADD CONSTRAINT "Evento_Anfritriao_fkey" FOREIGN KEY ("Anfritriao") REFERENCES "Usuario"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;
