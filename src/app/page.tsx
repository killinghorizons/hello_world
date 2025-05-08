import ArticleList from "@/components/ArticleList";
import prisma from "@/lib/prisma";

const Home = async () => {
  const articles = await prisma.article.findMany({
    select: {
      id: true,
      language: true,
      snippet: true,
    },
  });
  return (
    <div className="py-20">
      <div className="mb-20 text-center">
        <h1 className="font-black tracking-tighter text-3xl lg:text-5xl">
          Hello World! Collection
        </h1>
        <h2 className="text-7xl text-light-secondary dark:text-dark-secondary">
          {articles.length}
        </h2>
      </div>
      <ArticleList articles={articles} />
    </div>
  );
};

export default Home;
