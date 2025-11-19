import type { Metadata } from "next";
import PostPageClient from "./PostPageClient";
import { getPost } from "@/lib/markdown";

interface PostPageProps {
  params: {
    id: string;
  };
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
