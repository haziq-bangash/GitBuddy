import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'

import { Header, SideProfile } from '../components/index'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`md:px-28 px-10 bg-slate-50 ${inter.className}`}
    >
      <Head>
        <title>GitBuddy - GitHub User Finder</title>
      </Head>
      <Header />
      <div className='py-10 grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-5' >
        <div className="col-span-1">
          <SideProfile />
        </div>
      </div>
    </main>
  )
}