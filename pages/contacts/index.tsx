import { client } from '../../libs/client'
import ASide from '../../components/aside'
import Title from '../../components/title'
import Line from '../../components/line'
import type { Blog } from '../../types/blog'
import type { Category } from '../../types/category'

type Props = {
  contacts: Blog
  categories: Array<Category>
}

export default function Privacy(props: Props) {
  return (
    <div className='flex flex-col md:flex-row gap-10'>
      <main className='basis-3/4'>
        <div className='mb-5'>
          <Title title={props.contacts.title} />
          <Line />
        </div>
        <div
          className='prose max-w-none'
          dangerouslySetInnerHTML={{
            __html: `${props.contacts.content}`,
          }}
        />
      </main>
      <ASide categories={props.categories} />
    </div>
  )
}

export const getStaticProps = async () => {
  const contactsData = await client.get({
    endpoint: 'blogs',
    contentId: '5ffve1_x27f8',
  })
  const categoriesData = await client.get({ endpoint: 'categories' })
  return {
    props: {
      contacts: contactsData,
      categories: categoriesData.contents,
    },
  }
}
