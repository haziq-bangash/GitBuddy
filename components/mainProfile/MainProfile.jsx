import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { getUserRepos } from '@/pages/api/github_api'
import { useSelector } from "react-redux";

const MainProfile = () => {
    const username = useSelector((state) => state.username.value);
    const [repos, setRepos] = useState([]);
    const fetchRepos = async () => {
      const repositories = await getUserRepos(username);
      setRepos(repositories);
    };
    useEffect(() => {
      fetchRepos();
    }, [username]);
    // const [repos, setRepos] = useState([])
    // useEffect(() => {
    //   fetchRepos()
    // }, [])
    // const fetchRepos = async () => {
    //     const repositories = await getUserRepos(userData.login)
    //     setRepos(repositories)
    //     // console.log(repos)
    // }
    // console.log(repos)
  return (
    <Wrapper>
        <h1 className='text-2xl font-bolder text-gray-600' >Repositories</h1>
        <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-6'>
          {repos.map((repo, index) => (
            <div key={index} className='bg-blue-100 rounded text-gray-700 flex flex-col justify-between'>
              <div className='p-2' >
                <a href={repo.html_url} target="_blank" ><h1 className='text-lg font-medium'>{repo.name}</h1></a>
                <p className='pt-2' >{ repo.description }</p>
              </div>
              <div className='bg-blue-200 p-2 rounded text-sm flex'>
                { 
                repo.language != null ?  
                <p className='flex px-1' >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-translate" viewBox="0 0 16 16">
                  <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z"/>
                  <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z"/>
                </svg>
                  {repo.language}
                </p> : ''
                }
                <p className='flex px-1' >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                {repo.stargazers_count}
                </p>
                <p className='flex px-1' >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share-fill" viewBox="0 0 16 16">
                  <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"/>
                </svg>
                {repo.forks_count}
                </p>
              </div>
            </div>
          ))}
        </div>
    </Wrapper>
  )
}

export default MainProfile

const Wrapper = styled.div``