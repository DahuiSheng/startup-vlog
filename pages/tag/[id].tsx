import Link from "next/link";
import { client } from "../../libs/client";
import { Blog } from "../../types/blog";

type Props = {
    blogs: Array<Blog>;
  };

export default function CategoryId({ blogs }: Props) {
  
  // カテゴリーに紐付いたコンテンツがない場合に表示
  if (blogs.length === 0) {
    return <div>ブログコンテンツがありません</div>;
  }
  return (
    <div>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "tag" });

  const paths = data.contents.map((content: any) => `/tag/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blogs", queries: { filters: `tag[equals]${id}` } });

  return {
    props: {
      blogs: data.contents,
    },
  };
};