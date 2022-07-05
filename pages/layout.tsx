import Link from 'next/link'
import { ReactNode } from 'react'

const Layout = ({ children }: Props) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <div className="bg-primary-dark h-2"></div>
        <nav className="flex flex-rows bg-primary px-20 py-10 text-white fond-bold text-2xl">
          <Link href="/">
            <a>ちぇんばろぐ</a>
          </Link>
        </nav>
        <div className="bg-primary-dark h-2"></div>
      </header>
      <div className="mx-20 my-20 grow">
        {children}
      </div>
      <footer className="text-center text-white">
        <div className="bg-primary-light h-2"></div>
        <div className="bg-primary py-10">&copy;2022 ちぇんばろぐ</div>
        <div className="bg-primary-dark h-2"></div>
      </footer>
    </div>
  )
}

type Props = {
  children?: ReactNode
}

export default Layout