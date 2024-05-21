import React from 'react'

const Duration = ({text,time}) => {
  return (
    <div className='bg-[#FFBF75] w-full rounded-md shadow-lg p-[20px]'>
      <div className=''>
        <p className='text-[#C10000] text-center text-[18px] font-normal'>{text} <br /> {time}</p>
      </div>
    </div>
  )
}

export default Duration
