import Image from 'next/image'
import React from 'react'
import star from "../../imgs/Cirstar.svg"

const CourceDetails = () => {
  return (
    <div className='bg-[#BDA0E9] py-[15.5px] rounded-[20px]'>
      <div className='ml-[10px] mb-[15.5px] flex items-center gap-[27px]'>
        <Image src={star} width={27} height={27} alt='star'/>
        <p className='text-[16px] text-white font-normal'>Develop effective habits and time management strategies.</p>
      </div>

      <div className='ml-[10px] mb-[15.5px] flex items-center gap-[27px]'>
        <Image src={star} width={27} height={27} alt='star'/>
        <p className='text-[16px] text-white font-normal'>Acquire decision-making frameworks to evaluate career options.</p>
      </div>

      <div className='ml-[10px] mb-[15.5px] flex items-center gap-[27px]'>
        <Image src={star} width={27} height={27} alt='star'/>
        <p className='text-[16px] text-white font-normal'>Gain insights into emerging industries and future job trends.</p>
      </div>

      <div className='ml-[10px] mb-[15.5px] flex items-center gap-[27px]'>
        <Image src={star} width={27} height={27} alt='star'/>
        <p className='text-[16px] text-white font-normal'>Gain insights into emerging industries and future job trends.</p>
      </div>

      <div className='ml-[10px]  flex items-center gap-[27px]'>
        <Image src={star} width={27} height={27} alt='star'/>
        <p className='text-[16px] text-white font-normal'>Gain insights into emerging industries and future job trends.</p>
      </div>

    </div>
  )
}

export default CourceDetails
