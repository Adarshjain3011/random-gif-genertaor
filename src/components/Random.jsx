import React, { useState } from 'react'
// import axios from 'axios';
// import { useEffect } from 'react';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';// this is homemade hook
const Random = () => {


  function changeHandler(event){

      fetchData();

  }

  const {gif,spinner,fetchData} = useGif();

  return (
    <div className='w-1/2  bg-green-500 rounded-lg border-black'>

      <h1 className='text-center font-bold mt-6 text-2xl underline uppercase'>A RANDOM GIF </h1>
      {spinner ? (<Spinner className='mt-4 ml-[50%]'></Spinner>):(<img src={gif} width={450} className='mt-4 mx-auto '></img>)}

      <button onClick={changeHandler} className='w-10/12 bg-yellow-500 text-lg py-2 rounded-lg ml-[4rem] mt-6 mb-4'>Generate</button>
    </div>
  )
}

export default Random