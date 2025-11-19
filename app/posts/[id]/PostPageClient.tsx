import Header from "@/components/header";
import Footer from "@/components/footer";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { getPost } from "@/lib/markdown";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

interface PostPageProps {
  params: {
    id: string;
  };
}

export default async function PostPageClient({ params }: PostPageProps) {
  const { id } = await params;
  const post = getPost(id);

  if (!post) {
    return (
      <div className="min-h-screen bg-white dark:bg-[#1e1e23]">
        <Header />
        <main className="max-w-2xl mx-auto px-6 py-16">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            글을 찾을 수 없습니다
          </h1>
          <Link
            href="/"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            ← 홈으로 돌아가기
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#1e1e23]">
      <Header />

      <main className="max-w-2xl mx-auto px-6 py-16">
        <Link
          href="/"
          className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-[#7EC699] dark:hover:text-[#A6DAF4] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          뒤로
        </Link>

        <article>
          <header className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              {post.title}
            </h1>
            <time className="text-gray-500 dark:text-gray-400">
              {new Date(post.date).toLocaleDateString("ko-KR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </header>

          <div className="prose prose-gray dark:prose-invert max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ children }: { children: React.ReactNode }) => (
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6 mt-10 first:mt-0 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                    {children}
                  </h1>
                ),
                h2: ({ children }: { children: React.ReactNode }) => (
                  <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4 mt-8 border-b-2 border-blue-200 dark:border-blue-800 pb-2">
                    {children}
                  </h2>
                ),
                h3: ({ children }: { children: React.ReactNode }) => (
                  <h3 className="text-xl font-medium text-blue-700 dark:text-blue-400 mb-3 mt-6">
                    {children}
                  </h3>
                ),
                p: ({ children }: { children: React.ReactNode }) => (
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-base">
                    {children}
                  </p>
                ),
                code: ({
                  children,
                  className,
                }: {
                  children: React.ReactNode;
                  className?: string;
                }) => {
                  const isBlock = className?.includes("language-");
                  if (isBlock) {
                    const language =
                      className?.replace("language-", "") || "text";
                    return (
                      <div className="mb-6">
                        <div className="bg-gray-800 dark:bg-gray-900 text-gray-200 dark:text-gray-300 px-4 py-2 rounded-t-lg text-sm font-mono border-b border-gray-700 dark:border-gray-600">
                          {language}
                        </div>
                        <SyntaxHighlighter
                          language={language}
                          style={tomorrow}
                          customStyle={{
                            margin: 0,
                            borderRadius: "0 0 8px 8px",
                            fontSize: "14px",
                          }}
                        >
                          {String(children).replace(/\n$/, "")}
                        </SyntaxHighlighter>
                      </div>
                    );
                  }
                  return (
                    <code className="bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-sm font-mono border border-blue-200 dark:border-blue-800">
                      {children}
                    </code>
                  );
                },
                blockquote: ({ children }: { children: React.ReactNode }) => (
                  <blockquote className="border-l-4 border-blue-400 dark:border-blue-600 pl-6 italic text-gray-700 dark:text-gray-300 mb-6 bg-blue-50 dark:bg-blue-950 py-4 rounded-r-lg">
                    <div className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                      💡 참고
                    </div>
                    {children}
                  </blockquote>
                ),
                strong: ({ children }: { children: React.ReactNode }) => (
                  <strong className="font-bold text-gray-900 dark:text-gray-100 bg-yellow-100 dark:bg-yellow-900 px-1 rounded">
                    {children}
                  </strong>
                ),
                ul: ({ children }: { children: React.ReactNode }) => (
                  <ul className="list-disc pl-6 mb-6 space-y-2">{children}</ul>
                ),
                ol: ({ children }: { children: React.ReactNode }) => (
                  <ol className="list-decimal pl-6 mb-6 space-y-2">
                    {children}
                  </ol>
                ),
                li: ({ children }: { children: React.ReactNode }) => (
                  <li className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {children}
                  </li>
                ),
                a: ({
                  children,
                  href,
                }: {
                  children: React.ReactNode;
                  href?: string;
                }) => (
                  <a
                    href={href}
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline decoration-blue-300 dark:decoration-blue-600 hover:decoration-blue-600 dark:hover:decoration-blue-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {children}
                  </a>
                ),
                table: ({ children }: { children: React.ReactNode }) => (
                  <div className="overflow-x-auto mb-6">
                    <table className="min-w-full divide-y divide-gray-300 dark:divide-gray-700 border border-gray-300 dark:border-gray-700">
                      {children}
                    </table>
                  </div>
                ),
                thead: ({ children }: { children: React.ReactNode }) => (
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    {children}
                  </thead>
                ),
                tbody: ({ children }: { children: React.ReactNode }) => (
                  <tbody className="bg-white dark:bg-[#1e1e23] divide-y divide-gray-200 dark:divide-gray-700">
                    {children}
                  </tbody>
                ),
                tr: ({ children }: { children: React.ReactNode }) => (
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                    {children}
                  </tr>
                ),
                th: ({ children }: { children: React.ReactNode }) => (
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider border-r border-gray-300 dark:border-gray-700 last:border-r-0">
                    {children}
                  </th>
                ),
                td: ({ children }: { children: React.ReactNode }) => (
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700 last:border-r-0">
                    {children}
                  </td>
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
