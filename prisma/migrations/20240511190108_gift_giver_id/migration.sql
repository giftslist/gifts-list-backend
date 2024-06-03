/*
  Warnings:

  - You are about to drop the column `Presenteador` on the `EventoPresente` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "EventoPresente" DROP COLUMN "Presenteador",
ADD COLUMN     "IdPresenteador" TEXT;

-- AddForeignKey
ALTER TABLE "EventoPresente" ADD CONSTRAINT "EventoPresente_IdPresenteador_fkey" FOREIGN KEY ("IdPresenteador") REFERENCES "Usuario"("Id") ON DELETE SET NULL ON UPDATE CASCADE;
