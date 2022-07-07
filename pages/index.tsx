import { client } from '../libs/client'
import BlogCards from '../components/blogCards'
import ASide from '../components/aside'
import type { Blog } from '../types/blog'
import type { Category } from '../types/category'

type Props = {
  blogs: Array<Blog>
  categories: Array<Category>
}

export default function Home({ blogs, categories }: Props) {
  return (
    <div className='flex flex-col md:flex-row gap-10'>
      <main className='basis-3/4'>
        <BlogCards blogs={blogs} />
      </main>
      <ASide categories={categories} />
    </div>
  )
}

export const getStaticProps = async () => {
  const blogsData = await client.get({
    endpoint: 'blogs',
    queries: { filters: 'category[exists]' },
  })
  const categoriesData = await client.get({ endpoint: 'categories' })
  return {
    props: {
      blogs: blogsData.contents,
      categories: categoriesData.contents,
    },
  }
}
