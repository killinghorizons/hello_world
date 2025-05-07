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
      <h1 className="font-bold text-3xl lg:text-5xl text-center">
        Hello World! Collection
      </h1>
      <ArticleList articles={articles} />
    </div>
  );
};

export default Home;
