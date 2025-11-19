import Link from "next/link";

interface BlogPostProps {
  post: {
    id: string;
    title: string;
    date: string;
    excerpt: string;
  };
}

export default function BlogPost({ post }: BlogPostProps) {
  return (
    <article className="group">
      <Link href={`/posts/${post.id}`} className="block">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-gray-900 dark:text-gray-100 font-medium group-hover:text-[#A6DAF4] transition-colors flex-1 pr-4">
            {post.title}
          </h3>
          <time className="text-gray-500 dark:text-gray-400 text-sm whitespace-nowrap">
            {new Date(post.date).toLocaleDateString("ko-KR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{post.excerpt}</p>
      </Link>
    </article>
  );
}
