import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { client } from '../libs/client'
import { Blog } from '../types/blog'
import { Tag } from '../types/tag'

const inter = Inter({ subsets: ['latin'] })

type Props = {
  blogs: Array<Blog>;
  tag: Array<Tag>
}

export default function Home( { blogs, tag}: Props ) {
  return (
    <>
      <main className="pt-16">
          {/* グリッドを二つに分ける */}
          <div className='grid grid-cols-3 gap-2 px-2'>

            {/* ブログの一覧を表示する コラムの大きさ：2 */}
            <div className="content bg-white col-span-2">

              <div className="container w-auto justify-between px-4 pt-4 pb-12">
                {/* 記事の表示： */}
                <div className='grid grid-cols1 xl:grid-cols-2'>
                  {/* 記事のマッピング */}
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

            {/* ナビゲーションを表示する */}
            <div className="Navigation h-5/6 pt-4">
              <div className='text-2xl font-bold pb-3'>
                タグ
              </div>
              <ul>
                {tag.map((tag) => (
                  <div className="rounded w-3/5 overflow-hidden h-8 shadow-lg mb-1 mx-1 px-1 bg-white" key={tag.id}>
                    <Link href={`/category/${tag.id}`}>
                      {tag.name}
                    </Link>
                  </div>
                ))}
              </ul>
            </div>
          </div>
      </main>
    </>
  )
}

// 投稿データとタグデータをAPIより取得
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'blogs', });
  const categoryData = await client.get({ endpoint: 'tag' });

  return {
    props: {
      blogs: data.contents,
      tag: categoryData.contents,
    },
  };
};