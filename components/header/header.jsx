import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from '@/store/store'; // import the RootState type from your store file
import { changeUsername } from '@/store/store'; // import the action creator

const Header = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch()
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const searchTerm = formData.get('searchUsername');
    dispatch(changeUsername(searchTerm));
    onFormSubmit(searchTerm);
  }

  return (
    <Wrapper>
        <LogoTitle className="text-2xl text-gray-700 font-extrabold" >Git<span className='text-blue-600'>Buddy</span></LogoTitle>
        <FormWrapper>
            <form onSubmit={handleSubmit} className="flex items-center">   
                <label htmlFor="simple-search" className="sr-only">Search</label>
                <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
                    </div>
                    <input type="text" id="searchUsername" name='searchUsername' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search username" value={term} onChange={(event) => setTerm(event.target.value)} required />
                </div>
                <button type="submit" id='usernameBtn' className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    <span className="sr-only">Search username</span>
                </button>
            </form>
        </FormWrapper>
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    height: 60px;
`

const LogoTitle = styled.h1`
`

const FormWrapper = styled.div``