"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function Navbar() {
  const pathname = usePathname();
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Check initial theme from localStorage or document element
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const initialTheme = savedTheme || systemTheme;
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const navItems = [
    { path: "/", label: "home" },
    { path: "/bio", label: "about" },
    { path: "/projects", label: "projects" },
  ];

  return (
    <header className="w-full max-w-2xl mx-auto px-6 pt-8 pb-4 flex justify-between items-center bg-transparent">
      <nav className="flex space-x-6">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`text-sm transition-colors duration-150 relative py-1 ${
                isActive
                  ? "text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
              {isActive && (
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-foreground transition-transform duration-200" />
              )}
            </Link>
          );
        })}
      </nav>

      <button
        onClick={toggleTheme}
        className="text-xs font-mono text-muted-foreground hover:text-foreground transition-colors duration-150 py-1 px-2 rounded hover:bg-neutral-200 dark:hover:bg-neutral-800"
        aria-label="Toggle dark mode"
      >
        {theme === "light" ? "dark" : "light"}
      </button>
    </header>
  );
}
