"use client";
import { IArticle } from "@/types/article";
import { ChangeEvent, useState } from "react";

const EditForm = ({ article }: { article: IArticle }) => {
  const [language, setLanguage] = useState(article.language);
  const [snippet, setSnippet] = useState(article.snippet);

  const handleLanguage = (e: ChangeEvent<HTMLInputElement>) => {
    setLanguage(e.target.value);
  };

  const handleSnippet = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setSnippet(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      language: language,
      snippet: snippet,
    });
  };

  return (
    <form
      action=""
      onSubmit={handleSubmit}
      className="bg-light-background-layer dark:bg-dark-background-layer p-5 border border-light-border dark:border-dark-border overflow-x-auto rounded-md shadow-md"
    >
      <div className="mb-6">
        <label htmlFor="language" className="block text-sm mb-2">
          Language:
        </label>
        <input
          type="text"
          id="language"
          name="language"
          value={language}
          onChange={handleLanguage}
          className="bg-light-background dark:bg-dark-background w-full py-2 outline-none border border-light-border dark:border-dark-border rounded-md px-1 focus:border-light-foreground dark:focus:border-dark-foreground"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="language" className="block text-sm mb-2">
          Snippet:
        </label>
        <textarea
          name="snippet"
          id="snippet"
          value={snippet}
          onChange={handleSnippet}
          className="bg-light-background dark:bg-dark-background w-full py-2 outline-none border border-light-border dark:border-dark-border rounded-md px-1 focus:border-light-foreground dark:focus:border-dark-foreground"
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-light-warning dark dark:bg-dark-warning px-3 py-1 rounded-md hover:opacity-95"
      >
        Edit
      </button>
    </form>
  );
};

export default EditForm;
