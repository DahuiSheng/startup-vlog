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
    <div className="pt-16">
        <div className="grid grid-cols-3 gap-2 px-2">
            <div className="content bg-white col-span-2">
                <div className="container w-auto justify-between px-4 pt-4 pb-12">
                    <div>
                        {blogs.map(blog => (
                            <div className="rounded overflow-hidden shadow-lg mb-3 mx-3 bg-white" key={blog.id}>
                                {/* 画像の表示 */}
                                    <Link href={`/blog/${blog.id}`} passHref>
                                        <img
                                        className=" w-fit"
                                        src={blog.eyecatch.url}
                                        alt="Sunset in the mountains"
                                        />
                                    </Link>

                                    {/* ブログのタイトル */}
                                    <div className="px-6 py-4">
                                        <Link href={`/blog/${blog.id}`} passHref>
                                        <div className='font-bold'>{blog.title}</div>
                                        </Link>
                                    </div>

                                    {/* タグの表示 */}
                                    <div className="px-6 pt-4 pb-2">
                                        {blog.tag && (
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                            #{blog.tag.name}
                                        </span>
                                        )}
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
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