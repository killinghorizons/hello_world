"use client";
import { IArticle } from "@/types/article";
import { editArticle } from "@/app/dashboard/actions";
import { useState } from "react";

const EditForm = ({ article }: { article: IArticle }) => {
  return (
    <form
      action={editArticle.bind(null, parseInt(article.id))}
      className="bg-light-background-layer dark:bg-dark-background-layer p-5 border border-light-border dark:border-dark-border overflow-x-auto rounded-md shadow-md"
    >
      <h1 className="font-black tracking-tighter text-3xl lg:text-5xl text-center mb-4 text-light-warning dark:text-light-warning">
        Edit - row {article.id}
      </h1>
      <div className="mb-6">
        <label htmlFor="language" className="block text-sm mb-2">
          Language:
        </label>
        <input
          type="text"
          id="language"
          name="language"
          defaultValue={article.language}
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
          defaultValue={article.snippet}
          className="bg-light-background dark:bg-dark-background w-full py-2 outline-none border border-light-border dark:border-dark-border rounded-md px-1 focus:border-light-foreground dark:focus:border-dark-foreground min-h-50"
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-light-warning dark dark:bg-dark-warning py-2 rounded-md hover:opacity-95 w-full font-bold cursor-pointer"
      >
        Edit
      </button>
    </form>
  );
};

export default EditForm;
