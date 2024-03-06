-- CreateTable
CREATE TABLE "Usuario" (
    "Id" TEXT NOT NULL,
    "Nome" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Senha" TEXT NOT NULL,
    "CriadoEm" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "DeletadoEm" TIMESTAMP(3),

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("Id")
);
