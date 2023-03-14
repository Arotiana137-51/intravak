import React from 'react'

export default function InsidePostComment({comment, author, time}) {
  return (
    <div className='bg-orange-500 rounded-lg drop-shadow-2xl w-3/5 items-center'>
     {/*  <Image></Image> */}
        <h4 className=' text-sm font-sans ml-2 text-white text-bold'>{author} </h4>
        <p className='text-center text-md text-white font-normal px-0 lg:px-1 mb-8'>
        {comment}
        </p>
        
        {time}
    </div>
  )
}
