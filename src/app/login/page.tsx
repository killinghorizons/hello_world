"use client";
import { useState } from "react";

const Login = () => {
  const [input, setInput] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInput("");
  };

  return (
    <div className="py-20">
      <form
        onSubmit={handleSubmit}
        action=""
        className="bg-light-background-layer dark:bg-dark-background-layer p-5 border border-light-border dark:border-dark-border overflow-x-auto rounded-md shadow-md"
      >
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="emaile"
            value={input}
            onChange={handleChange}
            className="bg-light-background dark:bg-dark-background w-full py-2 outline-none border border-light-border dark:border-dark-border rounded-md px-1 focus:border-light-foreground dark:focus:border-dark-foreground"
          />
        </div>
        <button
          type="submit"
          className="bg-light-primary dark dark:bg-dark-primary px-3 py-1 rounded-md hover:opacity-95 cursor-pointer"
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Login;
