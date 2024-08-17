import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';
const Tag = () => {

  // const[gif,setgif] = useState('');
  // const[spinner,setspinner] = useState(false);

  // const[tag,settag] = useState('');
  // let API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

  
  // async function fetchData(){

  //   setspinner(true);
  //   const url =`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

  //   const {data} = await axios.request(url); // destructuring of data -->
  //   let image_url =data.data.images.downsized_large.url;

  //   setgif(image_url);
  //   setspinner(false);
  //   console.log(image_url);

  // }

  // useEffect(()=>{

  //    fetchData();
     
  // },[])

  const {gif,spinner,fetchData,tag,settag} = useGif();

  function changeHandler(event){

      fetchData();

  }
  return (
    <div className='w-1/2  bg-green-500 rounded-lg border-black'>

      <h1 className='text-center font-bold mt-6 text-2xl underline uppercase'>RANDOM {tag} GIF </h1>
      {spinner ? (<Spinner className='mt-4 ml-[50%]'></Spinner>):(<img src={gif} width={450} className='mt-4 mx-auto '></img>)}

      <input className='w-10/12 text-lg py-2 rounded-lg ml-[4rem] mt-6 ' onChange={(event)=>settag(event.target.value)} value={tag}></input>
      <button onClick={changeHandler} className='w-10/12 bg-yellow-500 text-lg py-2 rounded-lg ml-[4rem] mt-3 mb-4'>Generate</button>
    </div>
  )
}

export default Tag