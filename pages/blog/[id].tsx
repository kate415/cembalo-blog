import { client } from '../../libs/client'
import type { Blog } from '../../types/blog'
import type { Categories, Category } from '../../types/category'
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
    <div className="flex flex-col md:flex-rowgap-10">
      <main>
        <article>
          <div className="mb-5">
            <Date date={props.blog.publishedAt} />
          </div>
          <div className="mb-5">
            <Title title={props.blog.title} />
            <Line />
          </div>
          <div
            className="prose"
            dangerouslySetInnerHTML={{
              __html: `${props.blog.content}`
            }}
          />
        </article>
      </main>
      <aside>
        <CategoriesList categories={props.categories} />
        <Profile />
      </aside>
    </div>
  )
}

export const getStaticPaths = async() => {
  const data = await client.get({ endpoint: 'blogs' })
  const paths = data.contents.map((content) => `/blog/${content.id}`)
  return { paths, fallback: false }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const data = await client.get({ endpoint: 'blogs', contentId: id })
  const categoriesData = await client.get({ endpoint: 'categories' })
  return {
    props: {
      blog: data,
      categories: categoriesData.contents,
    }
  }
}
