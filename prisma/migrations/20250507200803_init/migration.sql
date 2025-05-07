-- CreateTable
CREATE TABLE "Article" (
    "id" SERIAL NOT NULL,
    "language" VARCHAR(75) NOT NULL,
    "snippet" TEXT NOT NULL,
    "year" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Article_pkey" PRIMARY KEY ("id")
);
