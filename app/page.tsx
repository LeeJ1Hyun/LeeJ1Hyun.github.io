import type { Metadata } from "next";
import Header from "@/components/header";
import BlogPost from "@/components/blog-post";
import Footer from "@/components/footer";
import { getPostList } from "@/lib/markdown";

export const metadata: Metadata = {
  title: "utilityplayer",
  description: "개발 경험과 기술적 인사이트를 기록하는 개발자의 블로그입니다.",
  keywords: ["개발", "프로그래밍", "기술블로그"],
  authors: [{ name: "개발자" }],
  openGraph: {
    title: "utilityplayer",
    description: "개발 경험과 기술적 인사이트를 기록하는 블로그",
    type: "website",
    locale: "ko_KR",
  },
};

export default async function Home() {
  const blogPosts = getPostList();

  return (
    <div className="min-h-screen bg-white dark:bg-[#1e1e23]">
      <Header />

      <main className="max-w-2xl mx-auto px-6 py-16">
        {/* 프로필 섹션 */}
        <div className="mb-16 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-[#A6DAF4] to-[#7EC699] rounded-lg flex items-center justify-center mx-auto mb-6">
            <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-white">
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

          <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4 max-w-md mx-auto text-left">
            <p>안녕하세요, 이지현입니다.</p>
            <p>백엔드 개발자로 일하고 있습니다.</p>
            <p>목표 달성의 기쁨은 한 순간이지만 그 과정은 오래 지속됩니다.</p>
            <p className="!mt-1">
              과정 자체를 즐기며 동료들과 함께 일하는 것을 중요하게 생각합니다.
            </p>
          </div>

          <div className="mt-8">
            <a
              href="/about"
              className="text-[#7EC699] hover:text-[#A6DAF4] dark:text-[#A6DAF4] dark:hover:text-[#7EC699] transition-colors text-sm"
            >
              더보기 →
            </a>
          </div>
        </div>

        {/* 최근 글 섹션 */}
        <section>
          <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-8">
            최근 글
          </h2>
          <div className="space-y-6">
            {blogPosts.map((post) => (
              <BlogPost key={post.id} post={post} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
