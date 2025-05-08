import ArticleTable from "@/components/ArticlesTable";
import CreateForm from "@/components/CreateForm";
import prisma from "@/lib/prisma";

const Dashboard = async () => {
  const articles = await prisma.article.findMany({
    select: {
      id: true,
      language: true,
      snippet: true,
      createdAt: true,
    },
  });

  console.log(
    articles.filter(({ language }) => language.toLowerCase() === "vale")
  );

  return (
    <div className="py-20">
      <h1 className="font-black tracking-tighter text-3xl lg:text-5xl text-center mb-10">
        Dashboard
      </h1>
      <section>
        <CreateForm />
        <ArticleTable articles={articles} />
      </section>
    </div>
  );
};

export default Dashboard;
