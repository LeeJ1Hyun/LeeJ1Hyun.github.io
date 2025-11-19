import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Post {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

const postsDirectory = path.join(process.cwd(), "data/posts");

// 마크다운 파일에서 포스트 데이터를 추출하는 함수
function getPostFromFile(filename: string): Post {
  const fullPath = path.join(postsDirectory, filename);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    id: filename.replace(/\.md$/, ""),
    title: data.title,
    date: data.date,
    excerpt: data.excerpt,
    content: content.trim(),
  };
}

// 모든 포스트 목록을 가져오는 함수
export function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => getPostFromFile(fileName));

  // 날짜순으로 정렬 (최신순)
  return allPostsData.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

// 특정 포스트를 가져오는 함수
export function getPost(id: string): Post | null {
  try {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      id,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      content: content.trim(),
    };
  } catch {
    return null;
  }
}

// 포스트 목록만 가져오는 함수 (상세 내용 제외)
export function getPostList(): Omit<Post, "content">[] {
  const posts = getAllPosts();
  return posts.map(({ content, ...post }) => post);
}
