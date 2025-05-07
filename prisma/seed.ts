import { PrismaClient, Prisma } from "../src/app/generated/prisma";
import { helloWorlds } from "./helloWorlds";

const prisma = new PrismaClient();

const articleData: Prisma.ArticleCreateInput[] = helloWorlds;

export async function main() {
  for (const u of articleData) {
    await prisma.article.create({ data: u });
  }
}

main();
