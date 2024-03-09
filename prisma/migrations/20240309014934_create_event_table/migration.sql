-- CreateTable
CREATE TABLE "Evento" (
    "Id" TEXT NOT NULL,
    "Nome" TEXT NOT NULL,
    "Tipo" TEXT NOT NULL,
    "Data" TIMESTAMP(3),
    "CriadoEm" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "DeletadoEm" TIMESTAMP(3),

    CONSTRAINT "Evento_pkey" PRIMARY KEY ("Id")
);
