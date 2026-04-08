import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-surface-darkBorder">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-1.5 text-sm text-muted">
            <span>&copy; {currentYear} All rights reserved.</span>
            <span className="hidden sm:inline">&middot;</span>
            <span className="hidden sm:flex items-center gap-1">
              Built with <Heart className="w-3.5 h-3.5 text-red-500 fill-current" /> using Next.js & Tailwind CSS
            </span>
          </div>
          <a
            href="https://github.com/rgolab/rgolab.github.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
