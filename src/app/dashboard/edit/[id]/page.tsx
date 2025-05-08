import EditForm from "@/components/EditForm";
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";

async function getArticle(id: number) {
  const article = await prisma.article.findUnique({
    where: { id },
  });

  if (!article) return notFound();

  return article;
}

const Edit = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const article = await getArticle(parseInt(params.id));

  return (
    <div className="py-20">
      <EditForm article={article} />
    </div>
  );
};

export default Edit;
