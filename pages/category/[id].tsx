import { GetStaticPropsContext } from 'next'
import { client } from '../../libs/client'
import ASide from '../../components/aside'
import BlogCards from '../../components/blogCards'
import type { Category } from '../../types/category'
import type { Blog } from '../../types/blog'

type Props = {
  blogs: Array<Blog>
  categories: Array<Category>
  name: string
}

export default function CategoryId(props: Props) {
  return (
    <div className='flex flex-col md:flex-rowgap-10'>
      <main className='basis-3/4'>
        <p className='mb-4'>選択中のカテゴリー: {props.name}</p>
        {props.blogs.length == 0 ? (
          <p>記事がありません。</p>
        ) : (
          <BlogCards blogs={props.blogs} />
        )}
      </main>
      <ASide categories={props.categories} />
    </div>
  )
}

export const getStaticPaths = async () => {
  const categoriesData = await client.get({
    endpoint: 'categories',
  })
  const paths = categoriesData.contents.map(
    (category: Category) => `/category/${category.id}`
  )
  return { paths, fallback: false }
}

export const getStaticProps = async (
  context: GetStaticPropsContext<{ id: string }>
) => {
  const id = context.params?.id
  const blogsData = await client.get({
    endpoint: 'blogs',
    queries: { filters: `category[equals]${id}` },
  })
  const categoriesData = await client.get({ endpoint: 'categories' })
  var name: string = ''
  categoriesData.contents.forEach((category: Category) => {
    if (category.id == id) {
      name = category.name
    }
  })
  return {
    props: {
      blogs: blogsData.contents,
      categories: categoriesData.contents,
      name: name,
    },
  }
}
