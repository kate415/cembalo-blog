import { ReactNode } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import * as gtag from '../libs/gtag'

type Props = {
  children?: ReactNode
}

const Layout = ({ children }: Props) => {
  const router = useRouter()
  const ClickEvent = () => {
    gtag.event({
      action: 'click_event',
      category: '/',
      label: router.pathname,
    })
  }
  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <div className="bg-primary-dark h-2"></div>
        <nav className="flex flex-rows bg-primary px-10 md:px-20 py-10 text-white fond-bold text-2xl">
          <Link href="/">
            <a onClick={ClickEvent}>ちぇんばろぐ</a>
          </Link>
        </nav>
        <div className="bg-primary-dark h-2"></div>
      </header>
      <div className="m-10 md:m-20 grow">
        {children}
      </div>
      <footer className="text-center text-white text-sm">
        <div className="bg-primary-light h-2"></div>
        <div className="bg-primary py-8 flex flex-col gap-4">
          <div className="flex flex-row justify-center gap-4">
            <Link href='/privacy'>
              <a className="hover:underline">プライバシーポリシー</a>
            </Link>
            <Link href='/contacts'>
              <a className="hover:underline">お問い合わせ</a>
            </Link>
          </div>
          <p>&copy;2022 ちぇんばろぐ</p>
        </div>
        <div className="bg-primary-dark h-2"></div>
      </footer>
    </div>
  )
}

export default Layout
