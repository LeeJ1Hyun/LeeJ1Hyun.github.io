import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export default function Header() {
  return (
    <header className="border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-2xl mx-auto px-6 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 dark:text-gray-300 hover:text-[#7EC699] dark:hover:text-[#A6DAF4] transition-colors font-medium"
            >
              홈
            </Link>
            <Link
              href="/posts"
              className="text-gray-700 dark:text-gray-300 hover:text-[#7EC699] dark:hover:text-[#A6DAF4] transition-colors font-medium"
            >
              글
            </Link>
            <Link
              href="/about"
              className="text-gray-700 dark:text-gray-300 hover:text-[#7EC699] dark:hover:text-[#A6DAF4] transition-colors font-medium"
            >
              소개
            </Link>
          </div>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
