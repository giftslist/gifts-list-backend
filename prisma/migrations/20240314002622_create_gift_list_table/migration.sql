-- CreateTable
CREATE TABLE "ListaPresentes" (
    "Id" TEXT NOT NULL,
    "Nome" TEXT NOT NULL,
    "IdEvento" TEXT NOT NULL,
    "CriadoEm" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "DeletadoEm" TIMESTAMP(3),

    CONSTRAINT "ListaPresentes_pkey" PRIMARY KEY ("Id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ListaPresentes_IdEvento_Id_key" ON "ListaPresentes"("IdEvento", "Id");

-- AddForeignKey
ALTER TABLE "ListaPresentes" ADD CONSTRAINT "ListaPresentes_IdEvento_fkey" FOREIGN KEY ("IdEvento") REFERENCES "Evento"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;
