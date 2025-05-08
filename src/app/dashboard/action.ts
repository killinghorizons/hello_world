"use server";
import prisma from "@/lib/prisma";

export async function createArticle(formData: FormData) {
  const language = formData.get("language") as string;
  const snippet = formData.get("snippet") as string;

  if (!language || !language) {
    throw new Error("Language and snippet are required.");
  }

  await prisma.article.create({
    data: { language, snippet },
  });

  return "Article created successfully!";
}
