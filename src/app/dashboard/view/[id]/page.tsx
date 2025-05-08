import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import Article from "@/components/Article";

async function getArticle(id: number) {
  const article = await prisma.article.findUnique({
    where: { id },
  });

  if (!article) return notFound();

  return article;
}

const View = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const article = await getArticle(parseInt(params.id));

  return (
    <div className="py-20">
      <Article language={article.language} snippet={article.snippet} />
    </div>
  );
};

export default View;
