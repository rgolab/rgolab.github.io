import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-surface-dark border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
            <span>© {currentYear} All rights reserved.</span>
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>using Next.js & Tailwind CSS</span>
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            <a
              href="https://github.com/rgolab/rgolab.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
