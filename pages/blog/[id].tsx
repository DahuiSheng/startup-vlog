import { GetServerSideProps } from 'next';
import type { Blog } from '../../types/blog';
import { client } from '../../libs/client';
import { Tag } from '../../types/tag';
import Link from 'next/link';

type Props = {
  blog: Blog;
  tag: Array<Tag>
};

export default function Blog({ blog, tag }: Props) {
  return (
    <>
      <main className='pt-16'>
          {/* グリッドを二つに分ける */}
          <div className='grid grid-cols-4 gap-2 px-2'>

            {/* ブログの一覧を表示する コラムの大きさ：2 */}
            <div className="content bg-white col-span-3">

              <div className="container w-auto justify-between px-4 pt-4 pb-12">
                {/* 記事の表示： */}

                  {/* ブログの中身を表示 */}
                      <div className="max-w-6xl px-3 py-6 mx-auto">
                        {/* ブログのタイトルを表示 */}
                        <div className="sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-blue-900">
                          {blog.title}
                        </div>

                        {/* ブログのタグを表示 */}
                        {blog.tag && (
                          <div className="flex items-center justify-start mt-4 mb-4">
                            <div className="px-2 py-1 font-bold bg-red-400 text-white rounded-lg">
                              #{blog.tag.name}
                            </div>
                          </div>
                        )}

                        {/* ブログの本文を表示 */}
                        <div className='mt-2 mb-8 md:px-6'>
                          <div dangerouslySetInnerHTML={{
                            __html: `${blog.content}`,
                          }}
                          />
                        </div>
                      </div>
                </div>
            </div>
            {/* ナビゲーションを表示する */}
            {/* <div className="Navigation h-5/6 pt-4">
              <div className='text-2xl font-bold pb-3'>
                タグ
              </div>
              <div className='rounded w-64 xl:84 shadow-lg bg-white '>
                <ul>
                  {tag.map((tag) => (
                    <div className="overflow-hidden h-8 mb-1 mx-1 px-1 bg-white" key={tag.id}>
                      <Link href={`/tag/${tag.id}`}>
                        {tag.name}
                      </Link>
                    </div>
                  ))}
                </ul>
              </div>
            </div> */}
          </div>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const id = ctx.params?.id;
  const idExceptArray = id instanceof Array ? id[0] : id;
  const data = await client.get({
    endpoint: 'blogs',
    contentId: idExceptArray,
  });

  return {
    props: {
      blog: data,
    },
  };
};
