/*
  Warnings:

  - You are about to drop the `ListaPresentes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ListaPresentes" DROP CONSTRAINT "ListaPresentes_IdEvento_fkey";

-- DropTable
DROP TABLE "ListaPresentes";

-- CreateTable
CREATE TABLE "EventoPresente" (
    "Id" TEXT NOT NULL,
    "Nome" TEXT NOT NULL,
    "IdEvento" TEXT NOT NULL,
    "CriadoEm" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "DeletadoEm" TIMESTAMP(3),

    CONSTRAINT "EventoPresente_pkey" PRIMARY KEY ("Id")
);

-- CreateIndex
CREATE UNIQUE INDEX "EventoPresente_IdEvento_Id_key" ON "EventoPresente"("IdEvento", "Id");

-- AddForeignKey
ALTER TABLE "EventoPresente" ADD CONSTRAINT "EventoPresente_IdEvento_fkey" FOREIGN KEY ("IdEvento") REFERENCES "Evento"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;
