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
        <div key={blog.id} className="mb-10 border-2 p-5  border-primary-pale shadow-md rounded-sm">
          <Link href={`/blog/${blog.id}`}>
            <div className="grid grid-cols-3 gap-4 cursor-pointer">
              {blog.eyecatch == null
                ? <img src="https://images.microcms-assets.io/assets/ee370418a49d49398954bf7354023a10/365fe766367742f2a98c97b7d2a9aecf/cem.jpg" className="col-start-1 row-start-1 row-end-4 h-fit" />
                : <img src={blog.eyecatch.url} className="col-start-1 row-start-1 row-end-4 h-fit" />}
              <div className="col-start-2 col-end-4 row-start-1 self-center">
                <Date date={blog.publishedAt} />
              </div>
              <div className="col-start-2 col-end-4 row-start-2">
                <Title title={blog.title} />
                </div>
              <div className="col-start-2 col-end-4 row-start-3">
                {blog.category == null
                  ? <CategoryCard category="カテゴリなし" />
                  : <CategoryCard category={blog.category.name} />}
              </div>
            </div>
          </Link>
        </div>
      ))}
    </article>
  )
}
