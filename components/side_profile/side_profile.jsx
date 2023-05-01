import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

const side_profile = ({ userData }) => {
  // console.log(userData.name)
  return (
    <Wrapper>
        <img src={userData.avatar_url} width={100} height={100} className='w-full rounded-full' alt="profile" />
        <p className='text-lg font-extrabold pt-6 pb-1 text-gray-700'>{userData.name}</p>
        <p className='text-sm text-bold text-blue-600'>@{userData.login}</p>
        <p className='text-sm text-gray-600 py-3'> { userData.bio != null ? userData.bio : 'Web Developer | UI/UX Designer | Technical Writer | Community Builder | Web3 Enthusiast' } </p>
        <a href={userData.html_url} target='_blank'>
          <button className='flex items-center justify-between rounded-lg hover:bg-blue-200 ease-in-out duration-300 bg-blue-100 text-blue-600 px-6 py-3' >
            <span className='pe-2'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
              </svg>
            </span>
            See on GitHub
          </button>
        </a>
        <div id="externalLinks" className='text-gray-700 py-6'>
          <a href={userData.blog != "" ? userData.blog : '#'} target={userData.blog != "" ? `_blank` : ''}>
            <div className="link pb-2 flex items-center hover:text-blue-600 ease-in-out duration-300 cursor-pointer underline-offset-1 hover:underline">
              <svg className='me-2' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z"/>
                <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z"/>
              </svg>
              <span className=''> {userData.blog != "" ? userData.login : 'not set'}</span>
            </div>
          </a>
          <a href={userData.twitter_username != null ? `https://twitter.com/${userData.twitter_username}` : '#'} target={userData.twitter_username != null ? `_blank` : ''}>
            <div className="link pb-2 flex items-center hover:text-blue-600 ease-in-out duration-300 cursor-pointer underline-offset-1 hover:underline">
              <svg className='me-2' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
              </svg>
              <span className=''> {userData.twitter_username != null ? userData.twitter_username : 'not set'}</span>
            </div>
          </a>
          <div className="link pb-2 flex items-center hover:text-blue-600 ease-in-out duration-300 cursor-pointer underline-offset-1 hover:underline">
            <svg className='me-2' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-at-fill" viewBox="0 0 16 16">
              <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z"/>
              <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z"/>
            </svg>
            { userData.email != null ? <a href={`mailto:${userData.email}`}>Send email</a> : <span>not set</span> }
          </div>
        </div>
        <div id="githubInfo" className='text-gray-700 pb-6'>
          <div className="link pb-2 flex items-center hover:text-blue-600 ease-in-out duration-300 cursor-pointer underline-offset-1 hover:underline">
              <span className='text-lg text-bold me-2'>{userData.public_repos}</span>
              <span className=''>Repos</span>
          </div>
          <div className="link pb-2 flex items-center hover:text-blue-600 ease-in-out duration-300 cursor-pointer underline-offset-1 hover:underline">
              <span className='text-lg text-bold me-2'>{userData.followers}</span>
              <span className=''>Followers</span>
          </div>
          <div className="link pb-2 flex items-center hover:text-blue-600 ease-in-out duration-300 cursor-pointer underline-offset-1 hover:underline">
              <span className='text-lg text-bold me-2'>{userData.following}</span>
              <span className=''>Following</span>
          </div>
        </div>
        <hr />
        <footer className='py-3'>
          © {new Date().getFullYear()} <span className='font-medium'>GitBuddy</span>
        </footer>
    </Wrapper>
  )
}

export default side_profile
const Wrapper = styled.div``