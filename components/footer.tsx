import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 dark:border-gray-800 mt-20">
      <div className="max-w-2xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between">
          <div className="text-gray-500 dark:text-gray-400 text-sm">Made with ❤️</div>

          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/LeeJ1Hyun"
              className="text-gray-400 dark:text-gray-500 hover:text-[#A6DAF4] dark:hover:text-[#A6DAF4] transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/%EC%A7%80%ED%98%84-%EC%9D%B4-9a124424a/"
              className="text-gray-400 dark:text-gray-500 hover:text-[#7EC699] dark:hover:text-[#7EC699] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:nextlinehappy516@gmail.com"
              className="text-gray-400 dark:text-gray-500 hover:text-[#F4A1A7] dark:hover:text-[#F4A1A7] transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
