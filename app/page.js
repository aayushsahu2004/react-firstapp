'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
const page = () => {
  const [Images, setImages] = useState([])
  useEffect(() => {
    getImages()
  }, []);
  const getImages = async () => {
    try {
      const res = await axios.get('https://picsum.photos/v2/list')
      const data = res.data
      setImages(data);
    } catch (error) {
      console.error(error.message);
    }
  }
  const [User, setUser] = useState('Aayush')
  return (
    <>
      <div className='w-full h-[90vh] py-4'>
        <button onClick={getImages} className='px-4 py-2 rounded-lg bg-zinc-600 absolute left-1/2 -translate-x-1/2'>Get Images</button>
        <div className='w-full p-10'>
          {Images.map((elem) => {
            return <img
            key={elem.id}
            src={elem.download_url}
            width={300}
            height={300}
            className='mt-6 md:m-10 rounded inline-block'
            />
          })}
        </div>
      </div>
    </>
  )
}
export default page