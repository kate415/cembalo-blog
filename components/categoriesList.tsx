import Link from 'next/link'
import Line from './line'
import type { Category } from '../types/category'

type Props = {
  categories: Array<Category>
}

export default function CategoriesList(props: Props) {
  return (
    <div className='text-primary-dark border-primary-pale rounded-sm border-2 p-6 h-fit basis-1/4 shadow-md mb-10'>
      <p className='text-xl'>記事カテゴリー</p>
      <Line />
      <ul className='list-disc pl-6 leading-9'>
        {props.categories.map((category) => (
          <li key={category.id}>
            <Link href={`/category/${category.id}`}>
              <a className='hover:text-primary-light'>{category.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
