import Link from "next/link";
// Components
import ThemeToggle from "@/components/ThemeToggle";

const Nav = () => {
  return (
    <header className="fixed top-0 left-0 w-full px-5 z-50 shadow-xl backdrop-blur-xl text-light-foreground bg-light-background dark:text-dark-foreground dark:bg-dark-background">
      <div className="max-w-3xl mx-auto px-5">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-mono text-sm font-bold">
            Hello, World!
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Nav;
