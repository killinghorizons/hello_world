import { IArticle } from "@/types/article";

const Article = ({ language, snippet }: IArticle) => {
  return (
    <article className="bg-light-background-layer dark:bg-dark-background-layer p-5 border border-light-border dark:border-dark-border overflow-x-auto rounded-md shadow-md">
      <div className="flex items-center text-light-primary dark:text-dark-primary mb-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"
          />
        </svg>
        <h2 className="inline-block font-bold text-3xl">-> {language}</h2>
      </div>
      <pre className="font-mono"><code>{snippet}</code></pre>
    </article>
  );
};

export default Article;
