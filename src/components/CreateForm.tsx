"use client";
import { useState } from "react";
import { createArticle } from "@/app/dashboard/action";
import MenuToggle from "@/components/MenuToggle";

const CreateForm = () => {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (formData: FormData) => {
    try {
      const result = await createArticle(formData);
      setSuccess(result); // ✅ Show success message
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="">
      <div className="mb-4">
        <MenuToggle isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      {success && (
        <p className="text-light-success dark:text-dark-success">{success}</p>
      )}
      {error && (
        <p className="text-light-error dark:text-dark-error">{error}</p>
      )}
      {isOpen && (
        <form
          action={handleSubmit}
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
              required
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
              required
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
      )}
    </div>
  );
};

export default CreateForm;
