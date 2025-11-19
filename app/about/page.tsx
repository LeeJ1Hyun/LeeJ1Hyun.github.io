import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "utilityplayer",
  description: "개발자에 대한 소개와 연락처 정보입니다.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#1e1e23]">
      <Header />

      <main className="max-w-2xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-[#A6DAF4] to-[#7EC699] rounded-lg flex items-center justify-center mx-auto mb-6">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-10 h-10 text-white"
            >
              <path
                d="M2 12C2 12 4 8 8 8C12 8 14 12 18 12C22 12 24 8 24 8"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 16C2 16 4 12 8 12C12 12 14 16 18 16C22 16 24 12 24 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 20C2 20 4 16 8 16C12 16 14 20 18 20C22 20 24 16 24 16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            안녕하세요
          </h1>
        </div>

        <div className="prose prose-gray dark:prose-invert max-w-none">
          <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-6">
            <p>궁금한 점이나 의견이 있으시면 언제든 연락 주세요. 😎</p>

            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">
              경력
            </h2>
            <div className="space-y-3">
              <div className="border-l-4 border-[#7EC699] pl-4 py-1">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-base font-medium text-gray-900 dark:text-gray-100">
                    딜리셔스
                  </h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    2023.06 ~ 현재
                  </span>
                </div>
              </div>
              <div className="border-l-4 border-[#A6DAF4] pl-4 py-1">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-base font-medium text-gray-900 dark:text-gray-100">
                    미스테리코
                  </h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    2023.04 ~ 2023.06
                  </span>
                </div>
              </div>
            </div>

            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-24 mb-4">
              기술 스택
            </h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
              <li>Java, Python</li>
              <li>Spring</li>
              <li>Docker, Kubernetes</li>
              <li>AWS</li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
