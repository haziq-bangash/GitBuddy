import Image from 'next/image'
import { useState, useEffect } from "react";
import { Inter } from 'next/font/google'
import Head from 'next/head'
import { useSelector } from "react-redux";
import { RootState } from '@/store/store'; // import the RootState type from your store file
import { Header, SideProfile, MainProfile } from '../components/index'
import useUser from '@/hooks/useUser'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // state to store user data
  // get and set username state from redux
  const username = useSelector((state: RootState) => state.username.value); // get the username from the Redux store
  const [userData, setUserData] = useState<any>(null); // use `any` type for now since we don't know the shape of the data yet
  const [data, search] = useUser(username)

  // get userdata from github api
  useEffect(() => {
    setUserData(data)
  }, [data]);

  console.log(userData)
  return (
    <main
      className={`md:px-28 px-10 bg-slate-50 ${inter.className}`}
    >
      <Head>
        <title>GitBuddy - GitHub User Finder</title>
        <meta name="title" content="GitBuddy - GitHub User Finder" />
        <meta name="description" content="GitBuddy is a GitHub user finder that allows you to search for GitHub users and view their profile." />
      </Head>
      <Header onFormSubmit={search} />
      { userData && (
        <div className='py-10 grid gap-8 grid-cols-1 md:grid-cols-3 lg:grid-cols-5' >
          <div className="col-span-1">
            <SideProfile userData={userData} />
          </div>
          <div className='col-span-1 md:col-span-2 xl:col-span-4' >
            <MainProfile />
          </div>
        </div>
      )
      }
    </main>
  )
}