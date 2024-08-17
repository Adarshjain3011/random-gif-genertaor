import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
// import Spinner from './Spinner';
const useGif = (props) => {

  const[spinner,setspinner] = useState(false);
  const[gif,setgif] = useState('');
  let API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

  const[tag,settag] = useState('');
  const tagMemeUrl =`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

  const randomMemeUrl =`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

  async function fetchData(){

    setspinner(true);
   

    const {data} = await axios.request(tag ? tagMemeUrl :randomMemeUrl); // destructuring of data -->
    let image_url =data.data.images.downsized_large.url;

    setgif(image_url);
    setspinner(false);
    console.log(image_url);

  }

  useEffect(()=>{

     fetchData();
     
  },[])


  return {gif,spinner,fetchData,tag,settag};
}

// setspinner,setgif,fetchdata

export default useGif;
