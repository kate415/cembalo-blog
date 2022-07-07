import Image from 'next/image'
import Link from 'next/link'
import CategoryCard from './categoryCard'
import Title from './title'
import Date from './date'
import type { Blog } from '../types/blog'

type Props = {
  blogs: Array<Blog>
}

export default function BlogCards(props: Props) {
  return (
    <article>
      {props.blogs.map((blog) => (
        <div
          key={blog.id}
          className='mb-10 border-2 p-8 border-primary-pale shadow-md rounded-sm'
        >
          <Link href={`/blog/${blog.id}`}>
            <div className='cursor-pointer flex flex-col md:flex-row gap-8'>
              <div className='basis-full md:basis-2/5 self-center max-h-48 imageContainer'>
                {blog.eyecatch == null ? (
                  <Image
                    src='https://images.microcms-assets.io/assets/ee370418a49d49398954bf7354023a10/9a346c64d64a459d82451ae1d4310b79/cemicon.jpg'
                    alt='アイキャッチ画像'
                    layout='fill'
                    objectFit='contain'
                  />
                ) : (
                  <Image
                    src={blog.eyecatch.url}
                    alt='アイキャッチ画像'
                    layout='fill'
                    objectFit='contain'
                  />
                )}
              </div>
              <div className='basis-full md:basis-3/5'>
                <div className=''>
                  <Date date={blog.publishedAt} />
                </div>
                <div className='group-hover:text-primary-light'>
                  <Title title={blog.title} />
                </div>
                <div className=''>
                  {blog.category == null ? (
                    <CategoryCard category='カテゴリなし' />
                  ) : (
                    <CategoryCard category={blog.category.name} />
                  )}
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </article>
  )
}
