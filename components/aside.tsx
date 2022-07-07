import Link from 'next/link'
import CategoriesList from './categoriesList'
import Profile from './profile'
import type { Category } from '../types/category'

type Props = {
  categories: Array<Category>
}

export default function ASide(props: Props) {
  return (
    <aside>
      <CategoriesList categories={props.categories} />
      <Profile />
    </aside>
  )
}
