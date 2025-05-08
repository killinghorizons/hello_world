import ArticleTable from "@/components/ArticlesTable";
import prisma from "@/lib/prisma";

const Dashboard = async () => {
  const articles = await prisma.article.findMany({
    select: {
      id: true,
      language: true,
      snippet: true,
    },
  });

  console.log(articles.slice(0, 5));

  return (
    <div className="py-20">
      <h1 className="font-black tracking-tighter text-3xl lg:text-5xl text-center mb-10">
        Dashboard
      </h1>
      <section>
        <ArticleTable articles={articles.slice(0, 100)} />
      </section>
    </div>
  );
};

export default Dashboard;
