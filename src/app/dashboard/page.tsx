import ArticleTable from "@/components/ArticlesTable";
import prisma from "@/lib/prisma";
import Link from "next/link";

const Dashboard = async () => {
  const articles = await prisma.article.findMany({
    select: {
      id: true,
      language: true,
      snippet: true,
    },
  });

  return (
    <div className="py-20">
      <h1 className="font-black tracking-tighter text-3xl lg:text-5xl text-center mb-10">
        Dashboard
      </h1>
      <Link
        href="/dashboard/create"
        className="bg-light-success dark dark:bg-dark-success px-3 py-1 rounded-md hover:opacity-95"
      >
        Add Article
      </Link>
      <ArticleTable articles={articles} />
    </div>
  );
};

export default Dashboard;
