import { useEffect, useState } from 'react'
import { data, useLoaderData } from 'react-router-dom';

function Github() {
    // const [responce, setResponce] = useState({image:''})
    // useEffect(()=>{
    // fetch('https://randomfox.ca/floof/')
    // .then((data)=> data.json())
    // .then(pdata => setResponce(pdata));
    // console.log(responce);
    
    // },[])
    const responce = useLoaderData()
  return (
    <div className='w-screen flex justify-center'>
      <img src= {responce?.image} alt="AAAAAAAAAA"
      className='w-auto h-auto bg-red-500'
      />
    </div>
  )
}

export default Github

export const githubloader:any = async ()=>{
    const res:any = await fetch('https://randomfox.ca/floof/');
    return res.json();
}