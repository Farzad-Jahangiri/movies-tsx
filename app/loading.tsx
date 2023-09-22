import React from 'react'
import Image from 'next/image'

const loading = () => {
  return (
    <div className='flex justify-center items-center w-full h-[80%]'>
        <Image src={"/Loading.svg"} width={150} height={150} alt='loading' />
    </div>
  )
}

export default loading