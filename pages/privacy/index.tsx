import { client } from '../../libs/client'
import ASide from '../../components/aside'
import Title from '../../components/title'
import Line from '../../components/line'
import type { Blog } from '../../types/blog'
import type { Category } from '../../types/category'

type Props = {
  privacy: Blog
  categories: Array<Category>
}

export default function Privacy(props: Props) {
  return (
    <div className='flex flex-col md:flex-row gap-10'>
      <main className='basis-3/4'>
        <div className='mb-5'>
          <Title title={props.privacy.title} />
          <Line />
        </div>
        <div
          className='prose max-w-none'
          dangerouslySetInnerHTML={{
            __html: `${props.privacy.content}`,
          }}
        />
      </main>
      <ASide categories={props.categories} />
    </div>
  )
}

export const getStaticProps = async () => {
  const privacyData = await client.get({
    endpoint: 'blogs',
    contentId: 'skhpi_s4m3',
  })
  const categoriesData = await client.get({ endpoint: 'categories' })
  return {
    props: {
      privacy: privacyData,
      categories: categoriesData.contents,
    },
  }
}
