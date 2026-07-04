export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full max-w-2xl mx-auto px-6 py-12 border-t border-border mt-16 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-muted-foreground">
      <div className="flex space-x-4">
        <a
          href="https://github.com/MustafaMese"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground transition-colors duration-150"
        >
          github
        </a>
        <a
          href="https://www.linkedin.com/in/mustafamese/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground transition-colors duration-150"
        >
          linkedin
        </a>
        <a
          href="mailto:contact@mustafamese.com"
          className="hover:text-foreground transition-colors duration-150"
        >
          email
        </a>
      </div>
      <div>
        <span>© {currentYear} mustafamese.com</span>
      </div>
    </footer>
  );
}
