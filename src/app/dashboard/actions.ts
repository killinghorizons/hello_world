"use server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// TODO: success/error on create, edit, delte

export async function createArticle(formData: FormData) {
  const language = formData.get("language") as string;
  const snippet = formData.get("snippet") as string;

  await prisma.article.create({
    data: { language, snippet },
  });
  redirect("/dashboard");
}

export async function editArticle(id: number, formData: FormData) {
  const language = formData.get("language") as string;
  const snippet = formData.get("snippet") as string;

  await prisma.article.update({
    where: { id },
    data: { language, snippet },
  });
  redirect("/dashboard");
}

export async function deleteArticle(id: string) {
  await prisma.article.delete({ where: { id: parseInt(id) } });
  revalidatePath("/dashboard");
}
