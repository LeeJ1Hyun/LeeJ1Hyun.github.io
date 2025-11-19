import type { Metadata } from "next";
import Header from "@/components/header";
import BlogPost from "@/components/blog-post";
import Footer from "@/components/footer";
import { getPostList } from "@/lib/markdown";

export const metadata: Metadata = {
  title: "utilityplayer",
  description: "모든 글 목록을 확인하세요.",
};

export default async function PostsPage() {
  const allPosts = getPostList();

  return (
    <div className="min-h-screen bg-white dark:bg-[#1e1e23]">
      <Header />

      <main className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-12">
          모든 글
        </h1>

        <div className="space-y-8">
          {allPosts.map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
