import { GetStaticPropsContext } from 'next'
import { client } from '../../libs/client'
import type { Blog } from '../../types/blog'
import type { Category } from '../../types/category'
import Title from '../../components/title'
import CategoryCard from '../../components/categoryCard'
import Date from '../../components/date'
import Line from '../../components/line'
import CategoriesList from '../../components/categoriesList'
import Profile from '../../components/profile'

type Props = {
  blog: Blog,
  categories: Array<Category>,
}

export default function BlogId(props: Props) {
  return (
    <div className="flex flex-col md:flex-row gap-10">
      <main className="basis-3/4">
        <article>
          <div className="mb-5">
            <Date date={props.blog.publishedAt} />
          </div>
          <div className="mb-5">
            <Title title={props.blog.title} />
            <Line />
            {props.blog.category == null
              ? <CategoryCard category="カテゴリなし"/>
              : <CategoryCard category={props.blog.category.name}/>}
            
          </div>
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{
              __html: `${props.blog.content}`
            }}
          />
        </article>
      </main>
      <aside className="basis-1/4">
        <CategoriesList categories={props.categories} />
        <Profile />
      </aside>
    </div>
  )
}

export const getStaticPaths = async() => {
  const data = await client.get({ endpoint: 'blogs' })
  const paths = data.contents.map((blog: Blog) => `/blog/${blog.id}`)
  return { paths, fallback: false }
}

export const getStaticProps = async (context: GetStaticPropsContext<{ id: string }>) => {
  const id = context.params?.id
  const blogData = await client.get({ endpoint: 'blogs', contentId: id })
  const categoriesData = await client.get({ endpoint: 'categories' })
  return {
    props: {
      blog: blogData,
      categories: categoriesData.contents,
    }
  }
}
