import { IArticle } from "@/types/article";
// Comp
import Article from "@/components/Article";

const ArticleList = ({ articles }: { articles: IArticle[] }) => {
  return (
    <section className="grid gap-10">
      {articles.map((article) => (
        <Article
          key={article.id}
          language={article.language}
          snippet={article.snippet}
        />
      ))}
    </section>
  );
};

export default ArticleList;
