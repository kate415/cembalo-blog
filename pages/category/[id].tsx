import { client } from '../../libs/client'
import BlogCards from '../../components/blogCards'
import CategoriesList from '../../components/categoriesList'
import Profile from '../../components/profile'
import type { Category } from '../../types/category'
import type { Blog } from '../../types/blog'

type Props = {
  blogs: Array<Blog>,
  categories: Array<Category>,
  name: string
}

export default function CategoryId(props: Props) {
  return (
    <div className="flex flex-col md:flex-rowgap-10">
      <main className="basis-3/4">
        <p className="mb-4">選択中のカテゴリー: {props.name}</p>
        {props.blogs.length == 0
          ? <p>記事がありません。</p>
          : <BlogCards blogs={props.blogs} />}
      </main>
      <aside>
        <CategoriesList categories={props.categories} />
        <Profile />
      </aside>
    </div>
  )
}

export const getStaticPaths = async() => {
  const data = await client.get({ 
    endpoint: 'categories',
  })
  const paths = data.contents.map((content) => `/category/${content.id}`)
  return { paths, fallback: false }
}

export const getStaticProps = async (context) => {
  const id: string = context.params.id
  const blogsData = await client.get({ 
    endpoint: 'blogs',
    queries: {filters: `category[equals]${id}`}
  })
  const categoriesData = await client.get({ endpoint: 'categories' })
  var name: string = ''
  categoriesData.contents.forEach(element => {
    if (element.id == id) {
      name = element.name
    }
  })
  return {
    props: {
      blogs: blogsData.contents,
      categories: categoriesData.contents,
      name: name,
    }
  }
}
