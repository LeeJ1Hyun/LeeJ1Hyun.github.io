import type { Metadata } from "next";
import PostPageClient from "./PostPageClient";
import { getPost, getAllPosts } from "@/lib/markdown";

interface PostPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    id: post.id,
  }));
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { id } = await params;
  const post = await getPost(id);

  if (!post) {
    return {
      title: "글을 찾을 수 없습니다",
    };
  }

  return {
    title: `${post.title}`,
    description: post.content.slice(0, 160),
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { id } = await params;
  return <PostPageClient params={{ id }} />;
}
