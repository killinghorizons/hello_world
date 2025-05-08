"use client";
import { ChangeEvent, useState } from "react";

const CreateForm = () => {
  const [language, setLanguage] = useState("");
  const [snippet, setSnippet] = useState("");

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
      <h1 className="font-black tracking-tighter text-3xl lg:text-5xl text-center mb-4 text-light-success dark:text-light-success">
        Create
      </h1>
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
          className="bg-light-background dark:bg-dark-background w-full py-2 outline-none border border-light-border dark:border-dark-border rounded-md px-1 focus:border-light-foreground dark:focus:border-dark-foreground min-h-50"
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-light-success dark dark:bg-dark-success px-3 py-1 rounded-md hover:opacity-95"
      >
        Create
      </button>
    </form>
  );
};

export default CreateForm;
